import { BRANCHES } from '../data/initialData';

/**
 * Maps department codes/aliases in @sode-edu.in emails to app BRANCHES ids.
 * Supports student 2-letter codes (ad, ai, cs, ec, me) and faculty branch suffixes (ds, aids, aiml, mech, etc.).
 */
export const DEPT_CODE_MAP = {
  ad: 'AI&DS',
  ds: 'AI&DS',
  aids: 'AI&DS',
  ai: 'AI-ML',
  aiml: 'AI-ML',
  ml: 'AI-ML',
  cs: 'CS',
  cse: 'CS',
  ec: 'EC',
  ece: 'EC',
  me: 'MECH',
  mech: 'MECH',
  cv: 'CIVIL',
  civil: 'CIVIL',
  mba: 'MBA',
  maths: 'MATHS',
  math: 'MATHS',
  phy: 'PHY',
  physics: 'PHY',
  chem: 'CHEM',
  chemistry: 'CHEM'
};

/**
 * Admin emails with full access to all departments and all admin/faculty features.
 */
export const ADMIN_EMAILS = new Set([
  'prathik.24ad030@sode-edu.in',
  '01pavan06@gmail.com'
]);

const FACULTY_SUFFIXES = [
  'aids', 'aiml', 'mech', 'cse', 'ece', 'civil', 'maths', 'physics', 'chemistry', 'mba',
  'ds', 'ad', 'ai', 'ml', 'cs', 'ec', 'me', 'cv', 'math', 'phy', 'chem'
];

/**
 * Parses a college email address, determines role (admin / student / faculty),
 * extracts the department code and USN (for students), and checks access.
 *
 * - Admin: 01pavan06@gmail.com, prathik.24ad030@sode-edu.in (full access to all departments & features)
 * - Student: <name>.<year><dept><roll>@sode-edu.in (contains numbers, e.g. nishan.24ad023@sode-edu.in)
 * - Faculty: <name><branch>@sode-edu.in or <name>.<branch>@sode-edu.in (no numbers, e.g. ramesh.ds@sode-edu.in or rameshds@sode-edu.in)
 */
export function parseCollegeEmail(rawEmail) {
  const email = (rawEmail || '').trim().toLowerCase();
  if (!email) {
    return {
      email: '',
      isCollegeEmail: false,
      isAllowed: false,
      roleKey: 'student',
      role: 'Student',
      canAccessAllDepts: false,
      deptCode: null,
      branchId: null,
      branch: null,
      usn: null,
      reason: 'No email address found on this account.'
    };
  }

  const isAdmin = ADMIN_EMAILS.has(email);
  if (isAdmin) {
    let adminUsn = 'ADMIN';
    const localPart = email.split('@')[0] || '';
    const studentMatch = localPart.match(/(?:^|\.)?(\d{2})([a-z]{2})(\d+)$/i);
    if (studentMatch) {
      adminUsn = `${studentMatch[1]}${studentMatch[2].toUpperCase()}${studentMatch[3]}`;
    }
    return {
      email,
      isCollegeEmail: true,
      isAllowed: true,
      roleKey: 'admin',
      role: 'Administrator',
      canAccessAllDepts: true,
      deptCode: 'admin',
      branchId: 'ALL',
      branch: { id: 'ALL', name: 'All Departments', description: 'Institutional Administration', slug: 'all' },
      usn: adminUsn,
      reason: null
    };
  }

  const isCollegeEmail = email.endsWith('@sode-edu.in');
  const localPart = email.split('@')[0] || '';

  if (!isCollegeEmail) {
    return {
      email,
      isCollegeEmail: false,
      isAllowed: false,
      roleKey: 'student',
      role: 'Student',
      canAccessAllDepts: false,
      deptCode: null,
      branchId: null,
      branch: null,
      usn: null,
      reason: 'Only @sode-edu.in college email addresses are permitted.'
    };
  }

  const hasDigits = /\d/.test(localPart);
  let deptCode = null;
  let usn = null;
  let roleKey = 'student';
  let role = 'Student';

  if (hasDigits) {
    // Student format: xx.24ad030 or xx24ad030 (contains USN numbers)
    const studentMatch = localPart.match(/(?:^|\.)?(\d{2})([a-z]{2})(\d+)$/i);
    if (studentMatch) {
      deptCode = studentMatch[2].toLowerCase();
      usn = `${studentMatch[1]}${studentMatch[2].toUpperCase()}${studentMatch[3]}`;
    }
    roleKey = isAdmin ? 'admin' : 'student';
    role = isAdmin ? 'Administrator' : 'Student';
  } else {
    // Faculty format: xx.ds / xxds (name and branch only, no numbers)
    const dotMatch = localPart.match(/\.([a-z]+)$/i);
    if (dotMatch && DEPT_CODE_MAP[dotMatch[1].toLowerCase()]) {
      deptCode = dotMatch[1].toLowerCase();
    } else {
      const matchedSuffix = FACULTY_SUFFIXES.find((s) => localPart.endsWith(s) && localPart.length > s.length);
      if (matchedSuffix) {
        deptCode = matchedSuffix;
      }
    }
    roleKey = isAdmin ? 'admin' : 'faculty';
    role = isAdmin ? 'Administrator' : 'Faculty';
  }

  const branchId = deptCode ? DEPT_CODE_MAP[deptCode] || null : null;
  const branch = branchId ? BRANCHES.find((b) => b.id === branchId) || null : null;
  const canAccessAllDepts = isAdmin;

  if (!branchId || !branch) {
    return {
      email,
      isCollegeEmail: true,
      isAllowed: false,
      roleKey,
      role,
      canAccessAllDepts: false,
      deptCode,
      branchId: null,
      branch: null,
      usn,
      reason: 'Could not recognize a valid department code (ad/ds, ai, cs, ec, me) from your email.'
    };
  }

  return {
    email,
    isCollegeEmail: true,
    isAllowed: true,
    roleKey,
    role,
    canAccessAllDepts,
    deptCode,
    branchId,
    branch,
    usn,
    reason: null
  };
}

/**
 * Returns true if the user is allowed to view the given branch community page.
 */
export function canAccessCommunity(user, targetBranchId) {
  if (!targetBranchId || targetBranchId === 'ALL') return true;
  if (!user) return false;
  if (user.roleKey === 'admin' || user.canAccessAllDepts) return true;
  return user.branch === targetBranchId;
}
