/**
 * Campus Notice & Event Hub
 * Clean X.com Theme - Zero Emojis Policy
 */

export const BRANCHES = [
  {
    id: 'AI&DS',
    label: 'AI & Data Science',
    code: 'AI&DS',
    slug: 's/AI&DS',
    members: '280 members',
    description: 'Artificial Intelligence & Data Science Community',
    avatarBg: 'linear-gradient(135deg, #7856ff, #1d9bf0)'
  },
  {
    id: 'AI-ML',
    label: 'AI & Machine Learning',
    code: 'AI-ML',
    slug: 's/AIML',
    members: '240 members',
    description: 'Machine Learning, Neural Systems & Robotics',
    avatarBg: 'linear-gradient(135deg, #f91880, #ff7a00)'
  },
  {
    id: 'CS',
    label: 'Computer Science',
    code: 'CS',
    slug: 's/CS',
    members: '410 members',
    description: 'Computer Science, Systems & Cloud Architecture',
    avatarBg: 'linear-gradient(135deg, #00ba7c, #1d9bf0)'
  },
  {
    id: 'EC',
    label: 'Electronics & Comm.',
    code: 'EC',
    slug: 's/EC',
    members: '320 members',
    description: 'Electronics, VLSI Design & Embedded Systems',
    avatarBg: 'linear-gradient(135deg, #ffd400, #f91880)'
  },
  {
    id: 'MECH',
    label: 'Mechanical Engg.',
    code: 'MECH',
    slug: 's/MECH',
    members: '190 members',
    description: 'Mechanical Engineering, CAD & Automotive Systems',
    avatarBg: 'linear-gradient(135deg, #ff7a00, #ffd400)'
  }
];

export const CATEGORIES = [
  'All',
  'Academic',
  'Exam',
  'Club',
  'Workshop',
  'Hackathon',
  'Placement'
];

export const USERS = {
  student: {
    id: 'user-student',
    name: 'Nishan D Shetty',
    usn: '4MW24AD023',
    email: 'nishan.24ad023@sode-edu.in',
    role: 'Student',
    roleKey: 'student',
    branch: 'AI&DS',
    department: 'Dept. of AI & Data Science',
    handle: '@nishan_ad',
    avatarChar: 'N',
    avatarBg: 'linear-gradient(135deg, #1d9bf0, #7856ff)',
    verified: true,
    verifiedType: 'blue'
  },
  faculty: {
    id: 'user-faculty',
    name: 'Dr. Raghavendra Bhat',
    usn: 'FAC-AI-012',
    role: 'Faculty',
    roleKey: 'faculty',
    branch: 'AI&DS',
    department: 'Dept. of AI & Data Science',
    handle: '@faculty_aids',
    avatarChar: 'R',
    avatarBg: '#8e24aa',
    verified: true,
    verifiedType: 'gold',
    lecturerId: 'lec-aids-1'
  },
  coordinator: {
    id: 'user-coordinator',
    name: 'Prof. Sudarshan K',
    usn: 'FAC-COORD-02',
    email: 'sudarshan.ds@sode-edu.in',
    role: 'Event Coordinator',
    roleKey: 'coordinator',
    branch: 'AI&DS',
    department: 'Campus Events Office',
    handle: '@events_coord',
    avatarChar: 'S',
    avatarBg: '#00897b',
    verified: true,
    verifiedType: 'blue'
  },
  admin: {
    id: 'user-admin',
    name: 'Campus Admin',
    email: '01pavan06@gmail.com',
    usn: 'ADM-01',
    role: 'Administrator',
    roleKey: 'admin',
    branch: 'ALL',
    department: 'Campus Administration',
    handle: '@campus_admin',
    avatarChar: 'A',
    avatarBg: '#e65100',
    verified: true,
    verifiedType: 'gold',
    canAccessAllDepts: true
  }
};

export const TEACHING_YEAR_OPTIONS = [
  '1st Year',
  '2nd Year',
  '3rd Year',
  '4th Year'
];

export const INITIAL_LECTURERS = [
  {
    id: 'lec-aids-1',
    userId: 'user-faculty',
    name: 'Dr. Raghavendra Bhat',
    handle: '@faculty_aids',
    aliases: ['Faculty Coordinator'],
    employeeId: 'FAC-AI-012',
    designation: 'Associate Professor & Faculty Coordinator',
    headline: 'Associate Professor & Faculty Coordinator · Dept. of AI & Data Science | Deep Learning & Edge Vision',
    branch: 'AI&DS',
    department: 'Dept. of AI & Data Science',
    location: 'SMVITM Campus, Bantakal, Udupi',
    experienceYears: '11+ years',
    avatarChar: 'R',
    avatarBg: '#8e24aa',
    photoUrl: null,
    bannerBg: 'linear-gradient(135deg, #4f46e5 0%, #7856ff 55%, #1d9bf0 100%)',
    verified: true,
    verifiedType: 'gold',
    about: 'Educator and AI researcher focused on bridging foundational machine learning theory with real-world engineering deployment. Mentors final-year B.E. capstone teams and coordinates departmental technical workshops and industry-academia collaborations.',
    contact: {
      email: 'raghavendra.bhat@smvitm.ac.in',
      phone: '+91 98450 11201',
      office: 'Academic Block B · Room 304',
      officeHours: 'Mon – Fri · 3:00 PM – 4:30 PM',
      linkedin: 'https://linkedin.com/in/raghavendra-bhat-smvitm',
      scholar: 'https://scholar.google.com',
      website: 'https://smvitm.ac.in'
    },
    yearsTaught: ['2nd Year', '3rd Year', '4th Year'],
    semestersTaught: ['3rd Sem', '5th Sem', '7th Sem'],
    subjects: [
      { code: 'BAD502', name: 'Machine Learning & Pattern Recognition', year: '3rd Year', semester: '5th Sem', type: 'Theory + Lab' },
      { code: 'BAD701', name: 'Deep Learning & Generative AI', year: '4th Year', semester: '7th Sem', type: 'Theory' },
      { code: 'BAD304', name: 'Data Structures & Algorithms', year: '2nd Year', semester: '3rd Sem', type: 'Theory + Lab' }
    ],
    education: [
      {
        degree: 'Ph.D. in Artificial Intelligence & Computer Vision',
        institution: 'National Institute of Technology Karnataka (NITK), Surathkal',
        year: '2017 – 2021',
        details: 'Thesis: Lightweight Deep Neural Architectures for Edge Vision Systems'
      },
      {
        degree: 'M.Tech in Computer Science & Engineering',
        institution: 'Visvesvaraya Technological University (VTU), Belagavi',
        year: '2013 – 2015',
        details: 'First Class with Distinction'
      },
      {
        degree: 'B.E. in Information Science & Engineering',
        institution: 'SMVITM, Bantakal (VTU)',
        year: '2009 – 2013',
        details: 'First Class with Distinction'
      }
    ],
    experience: [
      {
        role: 'Associate Professor & Faculty Coordinator',
        organization: 'SMVITM, Bantakal',
        duration: '2021 – Present',
        description: 'Leading undergraduate AI & Data Science courses, final-year project reviews, and AI research lab mentoring.'
      },
      {
        role: 'Assistant Professor',
        organization: 'SMVITM, Bantakal',
        duration: '2015 – 2021',
        description: 'Taught core computer science and analytics subjects and supervised 20+ funded student projects.'
      }
    ],
    skills: ['Machine Learning', 'Deep Learning', 'Computer Vision', 'PyTorch', 'Data Structures', 'Research Mentoring']
  },
  {
    id: 'lec-aids-2',
    userId: 'user-lec-aids-2',
    name: 'Prof. Ananya Shetty',
    handle: '@ananya_aids',
    aliases: [],
    employeeId: 'FAC-AI-019',
    designation: 'Assistant Professor (Sr. Scale)',
    headline: 'Assistant Professor · Dept. of AI & Data Science | Big Data Analytics, DBMS & Cloud Data Pipelines',
    branch: 'AI&DS',
    department: 'Dept. of AI & Data Science',
    location: 'SMVITM Campus, Bantakal, Udupi',
    experienceYears: '8 years',
    avatarChar: 'A',
    avatarBg: '#1d9bf0',
    photoUrl: null,
    bannerBg: 'linear-gradient(135deg, #1d9bf0 0%, #0ea5e9 50%, #6366f1 100%)',
    verified: true,
    verifiedType: 'blue',
    about: 'Passionate about scalable data systems, SQL optimization, and statistical modeling. Guides 1st and 2nd year students in building strong programming and database foundations, and leads the department Data Science Study Circle.',
    contact: {
      email: 'ananya.shetty@smvitm.ac.in',
      phone: '+91 98452 22310',
      office: 'Academic Block B · Room 308',
      officeHours: 'Tue – Thu · 2:30 PM – 4:15 PM',
      linkedin: 'https://linkedin.com/in/ananya-shetty-aids',
      scholar: 'https://scholar.google.com',
      website: ''
    },
    yearsTaught: ['1st Year', '2nd Year', '3rd Year'],
    semestersTaught: ['2nd Sem', '4th Sem', '6th Sem'],
    subjects: [
      { code: 'BAD403', name: 'Database Management Systems', year: '2nd Year', semester: '4th Sem', type: 'Theory + Lab' },
      { code: 'BAD601', name: 'Big Data Analytics & Spark', year: '3rd Year', semester: '6th Sem', type: 'Theory + Lab' },
      { code: 'BPOPS203', name: 'Principles of Programming using C', year: '1st Year', semester: '2nd Sem', type: 'Theory + Lab' }
    ],
    education: [
      {
        degree: 'M.Tech in Data Science & Engineering',
        institution: 'Manipal Institute of Technology (MIT), Manipal',
        year: '2016 – 2018',
        details: 'Specialization in Distributed Data Warehousing'
      },
      {
        degree: 'B.E. in Computer Science & Engineering',
        institution: 'NMAM Institute of Technology, Nitte',
        year: '2012 – 2016',
        details: 'First Class with Distinction'
      }
    ],
    experience: [
      {
        role: 'Assistant Professor (Sr. Scale)',
        organization: 'SMVITM, Bantakal',
        duration: '2018 – Present',
        description: 'Delivering undergraduate courses in DBMS, Python for Data Science, and Big Data frameworks.'
      }
    ],
    skills: ['DBMS & SQL', 'Big Data Analytics', 'Apache Spark', 'Python', 'Data Visualization', 'Statistics']
  },
  {
    id: 'lec-aiml-1',
    userId: 'user-lec-aiml-1',
    name: 'Dr. Suma Kamath',
    handle: '@aiml_research',
    aliases: ['AI Research Lab'],
    employeeId: 'FAC-ML-004',
    designation: 'Professor & Research Lead',
    headline: 'Professor & AI Research Lab Lead · Dept. of AI & Machine Learning | Diffusion Models, NLP & RLHF',
    branch: 'AI-ML',
    department: 'Dept. of AI & Machine Learning',
    location: 'Turing Lab, SMVITM Bantakal',
    experienceYears: '14 years',
    avatarChar: 'S',
    avatarBg: '#f91880',
    photoUrl: null,
    bannerBg: 'linear-gradient(135deg, #f91880 0%, #ff7a00 100%)',
    verified: true,
    verifiedType: 'gold',
    about: 'Heads the Turing AI Research Circle at SMVITM. Actively publishes in IEEE and Springer venues on generative models, natural language understanding, and reinforcement learning. Welcomes motivated students for research paper reading groups and funded projects.',
    contact: {
      email: 'suma.kamath@smvitm.ac.in',
      phone: '+91 98451 33409',
      office: 'Turing Research Block · Room 202',
      officeHours: 'Mon, Wed, Thu · 3:30 PM – 5:00 PM',
      linkedin: 'https://linkedin.com/in/suma-kamath-aiml',
      scholar: 'https://scholar.google.com',
      website: 'https://smvitm.ac.in'
    },
    yearsTaught: ['3rd Year', '4th Year'],
    semestersTaught: ['5th Sem', '6th Sem', '7th Sem', '8th Sem'],
    subjects: [
      { code: 'BAI501', name: 'Artificial Intelligence & Expert Systems', year: '3rd Year', semester: '5th Sem', type: 'Theory' },
      { code: 'BAI602', name: 'Natural Language Processing & LLMs', year: '3rd Year', semester: '6th Sem', type: 'Theory + Lab' },
      { code: 'BAI702', name: 'Reinforcement Learning & Generative Models', year: '4th Year', semester: '7th Sem', type: 'Theory' }
    ],
    education: [
      {
        degree: 'Ph.D. in Machine Learning & Natural Language Processing',
        institution: 'Indian Institute of Science (IISc) / VTU Research Centre',
        year: '2013 – 2017',
        details: 'Research on Multilingual Neural Sequence Models'
      },
      {
        degree: 'M.Tech in Artificial Intelligence',
        institution: 'University of Hyderabad',
        year: '2009 – 2011',
        details: 'University Topper'
      },
      {
        degree: 'B.E. in Computer Science & Engineering',
        institution: 'SJCE, Mysuru',
        year: '2005 – 2009',
        details: 'First Class with Distinction'
      }
    ],
    experience: [
      {
        role: 'Professor & Research Lead',
        organization: 'SMVITM, Bantakal',
        duration: '2019 – Present',
        description: 'Directing the Turing AI Research Circle and teaching senior-year AI&ML specializations.'
      },
      {
        role: 'Associate Professor',
        organization: 'SMVITM, Bantakal',
        duration: '2012 – 2019',
        description: 'Established the Pattern Recognition Lab and guided 30+ peer-reviewed student publications.'
      }
    ],
    skills: ['Generative AI', 'Diffusion Models', 'NLP', 'Reinforcement Learning', 'TensorFlow', 'Academic Publishing']
  },
  {
    id: 'lec-aiml-2',
    userId: 'user-lec-aiml-2',
    name: 'Prof. Karthik Hegde',
    handle: '@karthik_aiml',
    aliases: [],
    employeeId: 'FAC-ML-014',
    designation: 'Assistant Professor',
    headline: 'Assistant Professor · Dept. of AI & Machine Learning | Robotics, Python & Linear Algebra for AI',
    branch: 'AI-ML',
    department: 'Dept. of AI & Machine Learning',
    location: 'SMVITM Campus, Bantakal, Udupi',
    experienceYears: '6 years',
    avatarChar: 'K',
    avatarBg: '#ff7a00',
    photoUrl: null,
    bannerBg: 'linear-gradient(135deg, #ff4500 0%, #f91880 100%)',
    verified: true,
    verifiedType: 'blue',
    about: 'Focuses on mathematical foundations for machine learning, autonomous robotics simulation, and hands-on Python engineering for 1st and 2nd year students.',
    contact: {
      email: 'karthik.hegde@smvitm.ac.in',
      phone: '+91 97410 44120',
      office: 'Academic Block B · Room 215',
      officeHours: 'Mon – Fri · 1:30 PM – 3:00 PM',
      linkedin: 'https://linkedin.com/in/karthik-hegde-robotics',
      scholar: '',
      website: ''
    },
    yearsTaught: ['1st Year', '2nd Year'],
    semestersTaught: ['1st Sem', '3rd Sem', '4th Sem'],
    subjects: [
      { code: 'BAI301', name: 'Mathematics for Machine Learning', year: '2nd Year', semester: '3rd Sem', type: 'Theory' },
      { code: 'BAI402', name: 'Python Programming & Autonomous Robotics', year: '2nd Year', semester: '4th Sem', type: 'Theory + Lab' },
      { code: 'BPLCK105', name: 'Introduction to Python Programming', year: '1st Year', semester: '1st Sem', type: 'Theory + Lab' }
    ],
    education: [
      {
        degree: 'M.Tech in Robotics & Artificial Intelligence',
        institution: 'PES University, Bengaluru',
        year: '2018 – 2020',
        details: 'ROS2 & Autonomous Path Planning'
      },
      {
        degree: 'B.E. in Electronics & Communication Engineering',
        institution: 'SMVITM, Bantakal',
        year: '2014 – 2018',
        details: 'First Class with Distinction'
      }
    ],
    experience: [
      {
        role: 'Assistant Professor',
        organization: 'SMVITM, Bantakal',
        duration: '2020 – Present',
        description: 'Teaches foundational AI mathematics, Python, and coordinates robotics hackathon teams.'
      }
    ],
    skills: ['Python', 'ROS2', 'Linear Algebra', 'Probability & Statistics', 'OpenCV', 'Robotics']
  },
  {
    id: 'lec-cs-1',
    userId: 'user-lec-cs-1',
    name: 'Dr. Vivek Acharya',
    handle: '@cse_dept',
    aliases: ['CSE Department HOD'],
    employeeId: 'FAC-CS-001',
    designation: 'Professor & Head of Department (HOD)',
    headline: 'Professor & HOD · Dept. of Computer Science & Engg. | Cloud Native Systems, Kubernetes & Distributed OS',
    branch: 'CS',
    department: 'Dept. of Computer Science & Engg.',
    location: 'Main Academic Block · CS Wing, SMVITM',
    experienceYears: '17 years',
    avatarChar: 'V',
    avatarBg: '#00ba7c',
    photoUrl: null,
    bannerBg: 'linear-gradient(135deg, #00ba7c 0%, #0ea5e9 100%)',
    verified: true,
    verifiedType: 'gold',
    about: 'Head of Computer Science & Engineering at SMVITM with 17+ years of teaching, academic leadership, and distributed systems research. Committed to preparing students for cloud-native software engineering and open-source excellence.',
    contact: {
      email: 'hod.cse@smvitm.ac.in',
      phone: '+91 98455 77880',
      office: 'Main Block · CS HOD Cabin (Room 101)',
      officeHours: 'Mon – Fri · 11:30 AM – 1:00 PM',
      linkedin: 'https://linkedin.com/in/dr-vivek-acharya-cse',
      scholar: 'https://scholar.google.com',
      website: 'https://smvitm.ac.in/cse'
    },
    yearsTaught: ['3rd Year', '4th Year'],
    semestersTaught: ['5th Sem', '6th Sem', '7th Sem'],
    subjects: [
      { code: 'BCS503', name: 'Operating Systems & Kernel Architecture', year: '3rd Year', semester: '5th Sem', type: 'Theory + Lab' },
      { code: 'BCS601', name: 'Cloud Computing & Kubernetes', year: '3rd Year', semester: '6th Sem', type: 'Theory + Lab' },
      { code: 'BCS701', name: 'Distributed Systems & Microservices', year: '4th Year', semester: '7th Sem', type: 'Theory' }
    ],
    education: [
      {
        degree: 'Ph.D. in Distributed Systems & Cloud Security',
        institution: 'Visvesvaraya Technological University (VTU), Belagavi',
        year: '2012 – 2016',
        details: 'Fault-Tolerant Scheduling in Multi-Tenant Cloud Clusters'
      },
      {
        degree: 'M.Tech in Computer Network Engineering',
        institution: 'RV College of Engineering, Bengaluru',
        year: '2007 – 2009',
        details: 'First Class with Distinction'
      },
      {
        degree: 'B.E. in Computer Science & Engineering',
        institution: 'MIT, Manipal',
        year: '2003 – 2007',
        details: 'First Class'
      }
    ],
    experience: [
      {
        role: 'Professor & Head of Department',
        organization: 'SMVITM, Bantakal',
        duration: '2020 – Present',
        description: 'Oversees curriculum delivery, accreditation (NBA/NAAC), placement readiness, and industry MoUs for CSE.'
      },
      {
        role: 'Associate Professor',
        organization: 'SMVITM, Bantakal',
        duration: '2013 – 2020',
        description: 'Taught Operating Systems, Computer Networks, and Cloud Architecture.'
      }
    ],
    skills: ['Cloud Native', 'Kubernetes', 'Docker', 'Operating Systems', 'Distributed Computing', 'System Design']
  },
  {
    id: 'lec-cs-2',
    userId: 'user-lec-cs-2',
    name: 'Prof. Priya Nayak',
    handle: '@priya_cse',
    aliases: [],
    employeeId: 'FAC-CS-018',
    designation: 'Assistant Professor',
    headline: 'Assistant Professor · Dept. of Computer Science & Engg. | Full-Stack Web Systems, Algorithms & Software Engg.',
    branch: 'CS',
    department: 'Dept. of Computer Science & Engg.',
    location: 'Main Academic Block · CS Wing, SMVITM',
    experienceYears: '7 years',
    avatarChar: 'P',
    avatarBg: '#0284c7',
    photoUrl: null,
    bannerBg: 'linear-gradient(135deg, #0284c7 0%, #00ba7c 100%)',
    verified: true,
    verifiedType: 'blue',
    about: 'Specializes in algorithms, web engineering, and software testing. Mentors student developer clubs, competitive programming squads, and full-stack mini-project cohorts.',
    contact: {
      email: 'priya.nayak@smvitm.ac.in',
      phone: '+91 99001 55213',
      office: 'Main Block · Room 114',
      officeHours: 'Mon, Tue, Fri · 2:30 PM – 4:00 PM',
      linkedin: 'https://linkedin.com/in/priya-nayak-cse',
      scholar: '',
      website: ''
    },
    yearsTaught: ['1st Year', '2nd Year', '3rd Year'],
    semestersTaught: ['2nd Sem', '3rd Sem', '4th Sem', '5th Sem'],
    subjects: [
      { code: 'BCS401', name: 'Analysis & Design of Algorithms', year: '2nd Year', semester: '4th Sem', type: 'Theory + Lab' },
      { code: 'BCS502', name: 'Full-Stack Web Engineering', year: '3rd Year', semester: '5th Sem', type: 'Theory + Lab' },
      { code: 'BCS302', name: 'Object Oriented Programming with Java', year: '2nd Year', semester: '3rd Sem', type: 'Theory + Lab' }
    ],
    education: [
      {
        degree: 'M.Tech in Software Engineering',
        institution: 'MS Ramaiah Institute of Technology, Bengaluru',
        year: '2017 – 2019',
        details: 'First Class with Distinction'
      },
      {
        degree: 'B.E. in Computer Science & Engineering',
        institution: 'Canara Engineering College, Mangaluru',
        year: '2013 – 2017',
        details: 'First Class with Distinction'
      }
    ],
    experience: [
      {
        role: 'Assistant Professor',
        organization: 'SMVITM, Bantakal',
        duration: '2019 – Present',
        description: 'Teaches Algorithms, Java, and Web Engineering; faculty advisor for Web & Coding Club.'
      }
    ],
    skills: ['Algorithms', 'Java', 'React & Node.js', 'Software Engineering', 'TypeScript', 'Competitive Coding']
  },
  {
    id: 'lec-ec-1',
    userId: 'user-lec-ec-1',
    name: 'Dr. Rajesh Prabhu',
    handle: '@rajesh_ece',
    aliases: ['Robotics & IoT Club'],
    employeeId: 'FAC-EC-003',
    designation: 'Professor & Lab Director',
    headline: 'Professor · Dept. of Electronics & Comm. | VLSI Design, ARM Cortex Embedded Systems & IoT',
    branch: 'EC',
    department: 'Dept. of Electronics & Comm.',
    location: 'EC Block · IoT Lab 3, SMVITM Bantakal',
    experienceYears: '15 years',
    avatarChar: 'R',
    avatarBg: '#2e7d32',
    photoUrl: null,
    bannerBg: 'linear-gradient(135deg, #0284c7 0%, #2e7d32 100%)',
    verified: true,
    verifiedType: 'gold',
    about: 'Leads the Embedded Systems & VLSI Research Lab at SMVITM and serves as Faculty Advisor to the Robotics & IoT Club. Focuses on low-power ASIC design, FPGA prototyping, and edge IoT sensor networks.',
    contact: {
      email: 'rajesh.prabhu@smvitm.ac.in',
      phone: '+91 98453 66702',
      office: 'EC Block · Room 201',
      officeHours: 'Tue – Fri · 3:00 PM – 4:30 PM',
      linkedin: 'https://linkedin.com/in/rajesh-prabhu-vlsi',
      scholar: 'https://scholar.google.com',
      website: 'https://smvitm.ac.in/ece'
    },
    yearsTaught: ['2nd Year', '3rd Year', '4th Year'],
    semestersTaught: ['4th Sem', '5th Sem', '7th Sem'],
    subjects: [
      { code: 'BEC402', name: 'Microcontrollers & ARM Embedded Systems', year: '2nd Year', semester: '4th Sem', type: 'Theory + Lab' },
      { code: 'BEC501', name: 'Digital VLSI Design & Verilog', year: '3rd Year', semester: '5th Sem', type: 'Theory + Lab' },
      { code: 'BEC703', name: 'Industrial IoT & Edge Hardware', year: '4th Year', semester: '7th Sem', type: 'Theory' }
    ],
    education: [
      {
        degree: 'Ph.D. in VLSI & Embedded Systems',
        institution: 'NITK Surathkal',
        year: '2013 – 2018',
        details: 'Low-Power CMOS Architecture for Biomedical Wearables'
      },
      {
        degree: 'M.Tech in Microelectronics & VLSI',
        institution: 'Manipal Institute of Technology, Manipal',
        year: '2009 – 2011',
        details: 'First Class with Distinction'
      },
      {
        degree: 'B.E. in Electronics & Communication',
        institution: 'SDM College of Engineering, Dharwad',
        year: '2005 – 2009',
        details: 'First Class with Distinction'
      }
    ],
    experience: [
      {
        role: 'Professor & Embedded Lab Director',
        organization: 'SMVITM, Bantakal',
        duration: '2018 – Present',
        description: 'Heads IoT Lab 3 and teaches core VLSI & Microcontroller courses.'
      }
    ],
    skills: ['VLSI Design', 'ARM Cortex', 'Verilog / SystemVerilog', 'Embedded C', 'FPGA', 'IoT Systems']
  },
  {
    id: 'lec-ec-2',
    userId: 'user-lec-ec-2',
    name: 'Dr. Meera Shenoy',
    handle: '@meera_ece',
    aliases: [],
    employeeId: 'FAC-EC-011',
    designation: 'Associate Professor',
    headline: 'Associate Professor · Dept. of Electronics & Comm. | Signal Processing, 5G Wireless & Antenna Design',
    branch: 'EC',
    department: 'Dept. of Electronics & Comm.',
    location: 'EC Block · Room 210, SMVITM Bantakal',
    experienceYears: '10 years',
    avatarChar: 'M',
    avatarBg: '#7856ff',
    photoUrl: null,
    bannerBg: 'linear-gradient(135deg, #7856ff 0%, #0284c7 100%)',
    verified: true,
    verifiedType: 'blue',
    about: 'Specializes in digital signal processing, wireless communications, and RF engineering. Guides first-year basic electronics and third-year communication labs.',
    contact: {
      email: 'meera.shenoy@smvitm.ac.in',
      phone: '+91 98441 90876',
      office: 'EC Block · Room 210',
      officeHours: 'Mon, Wed, Fri · 2:00 PM – 3:45 PM',
      linkedin: 'https://linkedin.com/in/meera-shenoy-ece',
      scholar: 'https://scholar.google.com',
      website: ''
    },
    yearsTaught: ['1st Year', '3rd Year'],
    semestersTaught: ['1st Sem', '2nd Sem', '5th Sem', '6th Sem'],
    subjects: [
      { code: 'BESCK104', name: 'Introduction to Electronics & Communication', year: '1st Year', semester: '1st Sem', type: 'Theory' },
      { code: 'BEC502', name: 'Digital Signal Processing', year: '3rd Year', semester: '5th Sem', type: 'Theory + Lab' },
      { code: 'BEC601', name: 'Wireless & 5G Communication Systems', year: '3rd Year', semester: '6th Sem', type: 'Theory' }
    ],
    education: [
      {
        degree: 'Ph.D. in Wireless Communications & Signal Processing',
        institution: 'VTU Belagavi',
        year: '2016 – 2020',
        details: 'Massive MIMO Beamforming Algorithms'
      },
      {
        degree: 'M.Tech in Digital Electronics & Communication',
        institution: 'NMAMIT, Nitte',
        year: '2012 – 2014',
        details: 'First Class with Distinction'
      }
    ],
    experience: [
      {
        role: 'Associate Professor',
        organization: 'SMVITM, Bantakal',
        duration: '2015 – Present',
        description: 'Teaches DSP, Communication Systems, and mentors IEEE student paper teams.'
      }
    ],
    skills: ['Digital Signal Processing', 'MATLAB', '5G Wireless', 'RF Engineering', 'Communication Theory']
  },
  {
    id: 'lec-mech-1',
    userId: 'user-lec-mech-1',
    name: 'Prof. Arjun Pai',
    handle: '@mech_cad',
    aliases: ['Mech Design Center'],
    employeeId: 'FAC-ME-006',
    designation: 'Associate Professor & CAD Center Lead',
    headline: 'Associate Professor & CAD Center Lead · Dept. of Mechanical Engg. | SolidWorks, FEA & Automotive Design',
    branch: 'MECH',
    department: 'Dept. of Mechanical Engineering',
    location: 'Mechanical Block · CAD Center, SMVITM',
    experienceYears: '12 years',
    avatarChar: 'A',
    avatarBg: '#ff7a00',
    photoUrl: null,
    bannerBg: 'linear-gradient(135deg, #d97706 0%, #ff7a00 50%, #ffd400 100%)',
    verified: true,
    verifiedType: 'blue',
    about: 'Leads the SMVITM CAD/CAM & Finite Element Analysis Certification Center. Mentors SAE BAJA and Go-Kart student fabrication teams and teaches core mechanical design.',
    contact: {
      email: 'arjun.pai@smvitm.ac.in',
      phone: '+91 98456 12098',
      office: 'Mechanical Block · CAD Center',
      officeHours: 'Mon – Fri · 3:00 PM – 4:30 PM',
      linkedin: 'https://linkedin.com/in/arjun-pai-mech',
      scholar: 'https://scholar.google.com',
      website: 'https://smvitm.ac.in/mech'
    },
    yearsTaught: ['2nd Year', '3rd Year', '4th Year'],
    semestersTaught: ['3rd Sem', '5th Sem', '7th Sem'],
    subjects: [
      { code: 'BME302', name: 'Computer Aided Machine Drawing (CAD)', year: '2nd Year', semester: '3rd Sem', type: 'Theory + Lab' },
      { code: 'BME501', name: 'Design of Machine Elements', year: '3rd Year', semester: '5th Sem', type: 'Theory' },
      { code: 'BME701', name: 'Finite Element Analysis (FEA) & ANSYS', year: '4th Year', semester: '7th Sem', type: 'Theory + Lab' }
    ],
    education: [
      {
        degree: 'M.Tech in Machine Design',
        institution: 'BMS College of Engineering, Bengaluru',
        year: '2012 – 2014',
        details: 'Structural Crashworthiness & Composite Materials'
      },
      {
        degree: 'B.E. in Mechanical Engineering',
        institution: 'NIE, Mysuru',
        year: '2008 – 2012',
        details: 'First Class with Distinction'
      }
    ],
    experience: [
      {
        role: 'Associate Professor & CAD Center Lead',
        organization: 'SMVITM, Bantakal',
        duration: '2014 – Present',
        description: 'Conducts SolidWorks & ANSYS certifications and teaches Machine Design & FEA.'
      }
    ],
    skills: ['SolidWorks', 'ANSYS FEA', 'CAD/CAM', 'Machine Design', 'Automotive Chassis', 'Additive Manufacturing']
  },
  {
    id: 'lec-mech-2',
    userId: 'user-lec-mech-2',
    name: 'Dr. Deepika Kulkarni',
    handle: '@deepika_mech',
    aliases: [],
    employeeId: 'FAC-ME-015',
    designation: 'Assistant Professor',
    headline: 'Assistant Professor · Dept. of Mechanical Engg. | Thermodynamics, Fluid Mechanics & Green Energy',
    branch: 'MECH',
    department: 'Dept. of Mechanical Engineering',
    location: 'Mechanical Block · Room 108, SMVITM',
    experienceYears: '9 years',
    avatarChar: 'D',
    avatarBg: '#d97706',
    photoUrl: null,
    bannerBg: 'linear-gradient(135deg, #b45309 0%, #f59e0b 100%)',
    verified: true,
    verifiedType: 'blue',
    about: 'Researcher in thermal engineering, CFD simulations, and sustainable solar-thermal energy systems. Teaches first-year engineering mechanics and thermal sciences.',
    contact: {
      email: 'deepika.kulkarni@smvitm.ac.in',
      phone: '+91 98804 77123',
      office: 'Mechanical Block · Room 108',
      officeHours: 'Tue, Thu, Fri · 2:30 PM – 4:00 PM',
      linkedin: 'https://linkedin.com/in/deepika-kulkarni-thermal',
      scholar: 'https://scholar.google.com',
      website: ''
    },
    yearsTaught: ['1st Year', '2nd Year', '3rd Year'],
    semestersTaught: ['1st Sem', '4th Sem', '6th Sem'],
    subjects: [
      { code: 'BESCK104D', name: 'Elements of Mechanical Engineering', year: '1st Year', semester: '1st Sem', type: 'Theory' },
      { code: 'BME401', name: 'Applied Thermodynamics', year: '2nd Year', semester: '4th Sem', type: 'Theory + Lab' },
      { code: 'BME602', name: 'Computational Fluid Dynamics (CFD)', year: '3rd Year', semester: '6th Sem', type: 'Theory + Lab' }
    ],
    education: [
      {
        degree: 'Ph.D. in Thermal & Fluid Engineering',
        institution: 'NITK Surathkal',
        year: '2017 – 2022',
        details: 'Heat Transfer Enhancement in Solar Collectors'
      },
      {
        degree: 'M.Tech in Thermal Power Engineering',
        institution: 'PDA College of Engineering, Kalaburagi',
        year: '2013 – 2015',
        details: 'First Class with Distinction'
      }
    ],
    experience: [
      {
        role: 'Assistant Professor',
        organization: 'SMVITM, Bantakal',
        duration: '2015 – Present',
        description: 'Teaches Thermodynamics, Fluid Mechanics, and guides renewable energy capstone projects.'
      }
    ],
    skills: ['Thermodynamics', 'CFD', 'Heat Transfer', 'Renewable Energy', 'Fluid Mechanics', 'Engineering Mechanics']
  }
];

export const INITIAL_ANNOUNCEMENTS = [
  {
    id: 'post-algorhythm-2026',
    author: 'Campus Events Office',
    authorRole: 'Event Coordinator',
    handle: '@campus_events',
    department: 'Student Welfare & Cultural Affairs',
    verified: true,
    verifiedType: 'blue',
    avatarChar: 'E',
    avatarBg: '#00897b',
    branch: 'ALL',
    category: 'Club',
    isImportant: true,
    time: 'Just now',
    timestamp: Date.now(),
    articleTitle: 'Introducing ALGO RHYTHM 2K26: A Day of Talent, Rhythm and Celebration',
    text: 'The vibe. The energy. The rhythm. Introducing ALGO RHYTHM 2K26 — where creativity meets culture and memories turn iconic. Join us on November 7, 2026, from 10:00 AM to 4:30 PM at the Open Air Auditorium. Scan to register and get ready for music, dance, and campus celebration.',
    media: '/events/algo-rhythm-2026.jpg',
    mediaKind: 'image',
    linkUrl: 'https://www.instagram.com/reel/De9IDZuyW5v/?rpxt=MWw4amx3ZnN6dWVxag==',
    linkLabel: 'Watch Fest Teaser on Instagram',
    replies: 0,
    reposts: 12,
    likes: 48,
    views: '1.1K',
    isLiked: false,
    isBookmarked: false
  },
  {
    id: 'post-1',
    author: 'Faculty Coordinator',
    authorRole: 'Faculty',
    handle: '@faculty_aids',
    department: 'Dept. of AI & Data Science',
    verified: true,
    verifiedType: 'gold',
    avatarChar: 'F',
    avatarBg: '#8e24aa',
    branch: 'AI&DS',
    category: 'Academic',
    isImportant: true,
    time: '2h',
    timestamp: Date.now() - 7200000,
    text: 'Final Year Project Phase-1 Synopsis Submission & Review Schedule: All 7th & 5th semester AI&DS student batches must upload their project proposals along with literature review matrices before Monday 5:00 PM.',
    linkUrl: 'https://vtu.ac.in',
    replies: 14,
    reposts: 28,
    likes: 86,
    views: '1.2K',
    isLiked: false,
    isBookmarked: true
  },
  {
    id: 'post-2',
    author: 'Campus Events Office',
    authorRole: 'Event Coordinator',
    handle: '@campus_events',
    department: 'Dept. of AI & Data Science',
    verified: true,
    verifiedType: 'blue',
    avatarChar: 'E',
    avatarBg: '#00897b',
    branch: 'AI&DS',
    category: 'Hackathon',
    time: '4h',
    timestamp: Date.now() - 14400000,
    text: 'DevHacks 2026: 24-Hour AI & Edge Intelligence Hackathon. Cash prize pool worth INR 50,000 with industry internship opportunities. Internal event with digital QR attendance tracking at entry and exit.',
    media: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1200&q=80',
    replies: 32,
    reposts: 74,
    likes: 210,
    views: '3.4K',
    isLiked: true,
    isBookmarked: false
  },
  {
    id: 'post-3',
    author: 'Campus Admin',
    authorRole: 'Administrator',
    handle: '@campus_admin',
    department: 'Campus Administration',
    verified: true,
    verifiedType: 'gold',
    avatarChar: 'A',
    avatarBg: '#e65100',
    branch: 'ALL',
    category: 'Exam',
    time: '8h',
    timestamp: Date.now() - 28800000,
    text: 'Semester End Theory Examination Timetable announced for B.E. 3rd, 5th, and 7th semesters. Check the Examination section on the college ERP for lab examination batch allocations and hall ticket issuance requirements.',
    media: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=1200&q=80',
    replies: 9,
    reposts: 112,
    likes: 178,
    views: '4.8K',
    isLiked: false,
    isBookmarked: false
  },
  {
    id: 'post-4',
    author: 'Training & Placement Cell',
    authorRole: 'Placement Coordinator',
    handle: '@placement_cell',
    department: 'T&P Department',
    verified: true,
    verifiedType: 'gold',
    avatarChar: 'P',
    avatarBg: '#1565c0',
    branch: 'ALL',
    category: 'Placement',
    time: '1d',
    timestamp: Date.now() - 86400000,
    text: 'Campus Placement Drive: Bosch & Infosys on-campus pool drives for 2026 graduating batches (AI&DS, CS, and EC). Eligible students must update their verified resume profiles and ensure minimum 7.0 CGPA criteria by Wednesday.',
    media: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80',
    replies: 19,
    reposts: 63,
    likes: 195,
    views: '2.9K',
    isLiked: false,
    isBookmarked: false
  },
  {
    id: 'post-5',
    author: 'Robotics & IoT Club',
    authorRole: 'Club Coordinator',
    handle: '@robotics_club',
    department: 'Dept. of Electronics & Comm.',
    verified: true,
    verifiedType: 'blue',
    avatarChar: 'R',
    avatarBg: '#2e7d32',
    branch: 'EC',
    category: 'Workshop',
    time: '1d',
    timestamp: Date.now() - 95000000,
    text: 'Hands-on Bootcamp on Embedded Robotics and ARM Cortex Microcontrollers this Saturday in IoT Lab 3. Hardware component kits and development boards will be provided to all registered student teams.',
    replies: 6,
    reposts: 18,
    likes: 72,
    views: '1.1K',
    isLiked: false,
    isBookmarked: false
  },
  {
    id: 'post-6',
    author: 'CSE Department HOD',
    authorRole: 'Faculty',
    handle: '@cse_dept',
    department: 'Dept. of Computer Science & Engg.',
    verified: true,
    verifiedType: 'gold',
    avatarChar: 'C',
    avatarBg: '#00ba7c',
    branch: 'CS',
    category: 'Workshop',
    time: '1d',
    timestamp: Date.now() - 105000000,
    text: 's/CS Deep Dive: Cloud Native Infrastructure & Kubernetes Architecture workshop with industry architects this Friday. All 5th and 7th semester students are requested to complete Docker pre-requisites.',
    replies: 11,
    reposts: 34,
    likes: 142,
    views: '2.1K',
    isLiked: false,
    isBookmarked: false
  },
  {
    id: 'post-7',
    author: 'AI Research Lab',
    authorRole: 'Faculty',
    handle: '@aiml_research',
    department: 'Dept. of AI & Machine Learning',
    verified: true,
    verifiedType: 'blue',
    avatarChar: 'M',
    avatarBg: '#f91880',
    branch: 'AI-ML',
    category: 'Club',
    time: '2d',
    timestamp: Date.now() - 172800000,
    text: 's/AIML Research Circle: Weekly paper reading group on Diffusion Models and Reinforcement Learning from Human Feedback (RLHF). Meets every Thursday at 4:30 PM in Turing Lab.',
    replies: 8,
    reposts: 26,
    likes: 98,
    views: '1.8K',
    isLiked: false,
    isBookmarked: true
  },
  {
    id: 'post-8',
    author: 'Mech Design Center',
    authorRole: 'Faculty',
    handle: '@mech_cad',
    department: 'Dept. of Mechanical Engineering',
    verified: true,
    verifiedType: 'blue',
    avatarChar: 'M',
    avatarBg: '#ff7a00',
    branch: 'MECH',
    category: 'Academic',
    time: '3d',
    timestamp: Date.now() - 259200000,
    text: 's/MECH Certification: Industrial SolidWorks 3D Modeling and FEA Stress Analysis certification batches starting next week. Registration open at the Department CAD Center.',
    replies: 4,
    reposts: 15,
    likes: 64,
    views: '950',
    isLiked: false,
    isBookmarked: false
  }
];

export const INTERNAL_GOOGLE_FORM_URL =
  'https://docs.google.com/forms/d/e/1FAIpQLSfPzeFRunxDAwmcZNHQDBOziyT3qCQ327DA-4tWFjiGFsvDsg/viewform?usp=publish-editor';

export const INITIAL_EVENTS = [
  {
    id: 'evt-algorhythm-2026',
    type: 'internal',
    title: 'Algo-Rhythm 2026: Annual Cultural & Talent Fest',
    organizer: 'Student Welfare & Cultural Committee, SMVITM',
    date: 'Nov 07, 2026',
    time: '10:00 AM - 04:30 PM',
    venue: 'College Open Air Auditorium',
    poster: '/events/algo-rhythm-2026.jpg',
    deadline: 'Nov 06, 2026 05:00 PM',
    description: 'The vibe. The energy. The rhythm. Introducing ALGO RHYTHM 2K26 — where creativity meets culture and memories turn iconic. A day of talent, rhythm, and celebration at the Open Air Auditorium.',
    maxCapacity: 800,
    registeredCount: 142,
    isRegistered: false,
    qrPayload: 'EVENT_ALGORHYTHM_2026',
    link: INTERNAL_GOOGLE_FORM_URL,
    attendance: [
      { usn: '4MW24AD023', name: 'Nishan D Shetty', checkIn: '09:45 AM', checkOut: 'In Progress', status: 'Checked In' },
      { usn: '4MW24AD030', name: 'Prathik Devadiga', checkIn: '09:50 AM', checkOut: 'In Progress', status: 'Checked In' },
      { usn: '4MW23AI012', name: 'Pavan S Poojary', checkIn: '10:02 AM', checkOut: 'In Progress', status: 'Checked In' },
      { usn: '4MW23CS045', name: 'Ananya Hegde', checkIn: '10:15 AM', checkOut: 'In Progress', status: 'Checked In' }
    ]
  },
  {
    id: 'evt-cisc-2026',
    type: 'internal',
    title: 'CISC 2026: Student Symposium Poster Presentation',
    organizer: 'Shri Madhwa Vadiraja Institute of Technology & Management (SMVITM), Bantakal',
    date: 'Dec 19, 2026',
    time: '09:30 AM - 04:30 PM',
    venue: 'SMVITM Campus, Bantakal (Hybrid Mode)',
    poster: '/events/cisc-2026-poster.jpg',
    deadline: 'Dec 04, 2026',
    description: '2nd International Conference on Computational Intelligence & Smart Communication. The Student Symposium Poster Presentation provides a platform for UG & PG students from all disciplines to showcase research, innovative ideas, and prototypes in AI, Data Analytics, Computer Vision, Cybersecurity, IoT, and Next-Gen Communication. Registration fee: ₹500 per team.',
    maxCapacity: 150,
    registeredCount: 38,
    isRegistered: false,
    qrPayload: 'EVENT_CISC_POSTER_2026',
    link: INTERNAL_GOOGLE_FORM_URL,
    attendance: [
      { usn: '4MW24AD023', name: 'Nishan D Shetty', checkIn: '09:20 AM', checkOut: 'In Progress', status: 'Checked In' },
      { usn: '4MW24AD030', name: 'Prathik Devadiga', checkIn: '09:25 AM', checkOut: 'In Progress', status: 'Checked In' }
    ]
  },
  {
    id: 'evt-cmr-hackfest-2027',
    type: 'internal',
    title: 'CMR Hackfest 4.0: 36-Hour National Level Hackathon',
    organizer: 'IDEA LAB-CMRCET & Centre for Engineering Education Research (CEER)',
    date: 'Jan 08 - 09, 2027',
    time: '36 Hours Non-Stop (Starts 09:00 AM)',
    venue: 'CMRCET Campus, Medchal Road, Hyderabad',
    poster: '/events/cmr-hackfest-2027.jpg',
    deadline: 'Nov 25, 2026',
    description: '36-Hour National Level Hackathon ("It\'s not a bug, It\'s a future"). Industry problem statements across Generative AI, Healthtech, Clean Energy, Robotics & Drones, Smart Education, and IoT. Cash prize pool upto ₹2,22,000 (Winner: ₹1,00,000). Team size: 3-6 students. Registration fee: Rs. 575 per student (includes food & accommodation).',
    maxCapacity: 200,
    registeredCount: 94,
    isRegistered: false,
    qrPayload: 'EVENT_CMR_HACKFEST_2027',
    link: INTERNAL_GOOGLE_FORM_URL,
    attendance: [
      { usn: '4MW24AD023', name: 'Nishan D Shetty', checkIn: '09:10 AM', checkOut: 'In Progress', status: 'Checked In' }
    ]
  },
  {
    id: 'evt-ideatex-2027',
    type: 'external',
    title: 'IdeateX 2026-27: National Innovation & Grand Challenge Hackathon',
    organizer: 'Kishkinda University & BITM (Ballari)',
    date: 'Feb 27, 2027',
    time: 'Hybrid Mode (Online + Offline)',
    venue: 'Kishkinda University Campus, Ballari',
    poster: '/events/ideatex-2027-poster.jpg',
    deadline: 'Dec 01, 2026 (Extended)',
    link: 'https://www.ideatex.in',
    description: 'National Innovation & Grand Challenge Competition across Six Frontiers: MedTech, Industry Problems, AgriTech, Smart Spaces, GreenTech, and EdTech. Take real-world problems from idea to working prototype with industry mentorship. Total prize pool ₹10 Lakh. Team size: 4-5 students. Registration fee: ₹1,000 per team. Official website: www.ideatex.in',
    isRegistered: false
  }
];

export const PORTAL_LOGOS = {
  'web-1': '/portals/printin.svg',
  'web-2': '/portals/edmin.png',
  'web-3': '/portals/vtu.png',
  'web-4': '/portals/library.png',
  'web-5': '/portals/asv.svg',
  'web-6': '/portals/menntr.ico',
  'web-7': '/portals/smvitm.png',
  'web-8': '/portals/aasare.ico',
  'web-9': '/portals/election.ico',
  'web-10': '/portals/varnothsava.ico',
  'web-11': '/portals/vichaara.ico',
  'web-12': '/portals/techfest.png',
  'web-13': '/portals/projecthub.svg',
  'web-14': '/portals/instagram.svg',
  'web-15': '/portals/instagram.svg',
  'web-16': '/portals/instagram.svg',
  'web-17': '/portals/instagram.svg',
  'web-18': '/portals/instagram.svg',
  'web-19': '/portals/instagram.svg',
  'web-20': '/portals/instagram.svg',
  'web-21': '/portals/instagram.svg',
  'web-22': '/portals/instagram.svg',
  'web-23': '/portals/instagram.svg',
  'web-24': '/portals/instagram.svg',
  'web-25': '/portals/instagram.svg'
};

export const INITIAL_WEBSITES = [
  {
    id: 'web-1',
    name: 'PRINTIN PORTAL',
    category: 'Student Utilities',
    description: 'Upload documents from phone or laptop directly to the college reprography centre. Check daily free page quota and queue status.',
    url: 'https://printin.buildwithtba.in/',
    badge: 'Campus Service',
    iconType: 'printer',
    logo: '/portals/printin.svg'
  },
  {
    id: 'web-2',
    name: 'SMVITM EDMIN PORTAL',
    category: 'Academic',
    description: 'Subject-wise attendance tracking, continuous internal evaluation (CIE) scores, and updated class timetables.',
    url: 'https://smvitm.edmin.co/#/login',
    badge: 'Academic ERP',
    iconType: 'database',
    logo: '/portals/edmin.png'
  },
  {
    id: 'web-3',
    name: 'VTU Exam Results & University Circulars',
    category: 'University',
    description: 'Official Visvesvaraya Technological University circulars, academic calendar, syllabus schemes, and semester grade cards.',
    url: 'https://vtu.ac.in',
    badge: 'University Portal',
    iconType: 'external',
    logo: '/portals/vtu.png'
  },
  {
    id: 'web-4',
    name: 'Digital Central Library (DELNET & IEEE)',
    category: 'Academic',
    description: 'Access 10,000+ technical journals, e-books, previous VTU examination question papers, and reserve library titles.',
    url: 'https://smvitm.ac.in/library',
    badge: 'Library Portal',
    iconType: 'book',
    logo: '/portals/library.png'
  },
  {
    id: 'web-5',
    name: 'ASV PORTAL',
    category: 'Volunteering',
    description: 'Student volunteering hours logging, blood donation camp registrations, environmental drives, and certificate downloads.',
    url: 'https://asv.sode-edu.in/login',
    badge: 'Volunteering',
    iconType: 'users',
    logo: '/portals/asv.svg'
  },
  {
    id: 'web-6',
    name: 'Menntr Portal',
    category: 'Career',
    description: 'Campus hiring drives, placement test preparation material, mock interviews, and technical internship announcements.',
    url: 'https://menntr.in/',
    badge: 'Career & Placement',
    iconType: 'briefcase',
    logo: '/portals/menntr.ico'
  },
  {
    id: 'web-7',
    name: 'SMVITM Grievance Portal',
    category: 'Student Utilities',
    description: 'Official SMVITM grievance redressal mechanism for students and staff to submit complaints, inquiries, or feedback securely.',
    url: 'https://sode-edu.in/smvitm/grievance/grievance_form/',
    badge: 'Grievance Portal',
    iconType: 'shield',
    logo: '/portals/smvitm.png'
  },
  {
    id: 'web-8',
    name: 'AASARE PORTAL',
    category: 'Student Utilities',
    description: 'Student counseling, mental health guidance, and institutional support services.',
    url: 'https://aasare.sode-edu.in/',
    badge: 'Student Support',
    iconType: 'shield',
    logo: '/portals/aasare.ico'
  },
  {
    id: 'web-9',
    name: 'STUDENT COUNCIL ELECTION PORTAL',
    category: 'Campus Life',
    description: 'Official SMVITM student council digital election and voting authentication portal.',
    url: 'https://smvitm-election.vercel.app/auth/signin',
    badge: 'Elections',
    iconType: 'users',
    logo: '/portals/election.ico'
  },
  {
    id: 'web-10',
    name: 'VARNOTHSAV PORTAL',
    category: 'Campus Life',
    description: 'National-level annual intercollegiate cultural and talent fest of SMVITM.',
    url: 'https://varnothsava.sode-edu.in/',
    badge: 'Cultural Fest',
    iconType: 'external',
    logo: '/portals/varnothsava.ico'
  },
  {
    id: 'web-11',
    name: 'VICHAARA PORTAL',
    category: 'Academic',
    description: 'Research publications, student forum for intellectual discussions, and academic exchange.',
    url: 'https://vichaara.vercel.app/',
    badge: 'Academic Forum',
    iconType: 'book',
    logo: '/portals/vichaara.ico'
  },
  {
    id: 'web-12',
    name: 'TECHFEST 2026 PORTAL',
    category: 'Events',
    description: 'Annual college technical festival website for hackathons, technical paper presentations, and competitions.',
    url: 'https://techfest-26.vercel.app/',
    badge: 'Tech Fest',
    iconType: 'external',
    logo: '/portals/techfest.png'
  },
  {
    id: 'web-13',
    name: 'PROJECT HUB PORTAL',
    category: 'Academic',
    description: 'Collaborative student project workspace for code repositories, submission tracking, and project reviews.',
    url: 'https://wrokspace.vercel.app/',
    badge: 'Project Workspace',
    iconType: 'database',
    logo: '/portals/projecthub.svg'
  },
  {
    id: 'web-14',
    name: 'SMVITM Official Instagram',
    category: 'Social Media',
    description: 'Official Instagram handle of Shri Madhwa Vadiraja Institute of Technology & Management (SMVITM), Bantakal. Campus updates, announcements, and events.',
    url: 'https://www.instagram.com/smvitm.sode?lqvp=cjh3dm13dzlzdnJs',
    badge: 'Official Instagram',
    iconType: 'instagram',
    logo: '/portals/instagram.svg'
  },
  {
    id: 'web-15',
    name: 'UTKARSH SMVITM',
    category: 'Social Media',
    description: 'Official Instagram page of Utkarsh — the cultural, literary, and student talent club of SMVITM.',
    url: 'https://www.instagram.com/utkarsh.smvitm?knvt=MXA3bmQzNjVrMDE2bA==',
    badge: 'Cultural Club',
    iconType: 'instagram',
    logo: '/portals/instagram.svg'
  },
  {
    id: 'web-16',
    name: 'SPL SMVITM (Premier League)',
    category: 'Social Media',
    description: 'Official Instagram account for SMVITM Premier League — cricket tournament fixtures, player auctions, and live match scores.',
    url: 'https://www.instagram.com/spl.smvitm?dmpr=MTR4M3Z5OTd1N2c0dg==',
    badge: 'Sports League',
    iconType: 'instagram',
    logo: '/portals/instagram.svg'
  },
  {
    id: 'web-17',
    name: 'AIKYA SMVITM',
    category: 'Social Media',
    description: 'Official Instagram page of Aikya SMVITM — youth forum for community service, cultural unity, and social awareness.',
    url: 'https://www.instagram.com/aikya.smvitm?lqvp=MXRqZmFnbjZxOWQ0MQ==',
    badge: 'Youth Forum',
    iconType: 'instagram',
    logo: '/portals/instagram.svg'
  },
  {
    id: 'web-18',
    name: 'CODE TROOPERS',
    category: 'Social Media',
    description: 'Student coding community and developer club of Computer Science & Engineering department at SMVITM.',
    url: 'https://www.instagram.com/code.troopers?evlk=MTg1bGkwOWM3Ymo2aw==',
    badge: 'Tech Community',
    iconType: 'instagram',
    logo: '/portals/instagram.svg'
  },
  {
    id: 'web-19',
    name: 'MBA SMVITM',
    category: 'Social Media',
    description: 'Official Instagram page for Department of Management Studies (MBA) at SMVITM Bantakal.',
    url: 'https://www.instagram.com/mba.smvitm?cnvx=bWppcGt4bGlpdGJk',
    badge: 'MBA Dept',
    iconType: 'instagram',
    logo: '/portals/instagram.svg'
  },
  {
    id: 'web-20',
    name: 'VARNOTHSAVA 2026',
    category: 'Social Media',
    description: 'Official Instagram handle for Varnothsava 2026 — the annual national-level intercollegiate techno-cultural fest of SMVITM.',
    url: 'https://www.instagram.com/varnothsava.2026?knvt=MWxobDdpOGVvZWtxdA==',
    badge: 'Cultural Fest',
    iconType: 'instagram',
    logo: '/portals/instagram.svg'
  },
  {
    id: 'web-21',
    name: 'NIRAMAYA SMVITM',
    category: 'Social Media',
    description: 'Official Instagram account of Niramaya — student health, wellness, hygiene awareness, and blood donation wing of SMVITM.',
    url: 'https://www.instagram.com/niramayabantakal?jplx=MXFyM2YzcDNtenR0dw==',
    badge: 'Health & Wellness',
    iconType: 'instagram',
    logo: '/portals/instagram.svg'
  },
  {
    id: 'web-22',
    name: 'TECHNOCRATORS ECE',
    category: 'Social Media',
    description: 'Official Instagram page of Technocrators, the Electronics & Communication Engineering student association of SMVITM.',
    url: 'https://www.instagram.com/technocrators_ece?fqnt=a2xjMXViamVyYXFn',
    badge: 'ECE Association',
    iconType: 'instagram',
    logo: '/portals/instagram.svg'
  },
  {
    id: 'web-23',
    name: 'THE LEGITTS 2026',
    category: 'Social Media',
    description: 'Official Instagram account for The Legitts (Batch of 2026) student community, celebrations, and campus memories.',
    url: 'https://www.instagram.com/the_legittts_2026?lqvp=MXE5NGI0c2g2aTR0aA==',
    badge: 'Student Community',
    iconType: 'instagram',
    logo: '/portals/instagram.svg'
  },
  {
    id: 'web-24',
    name: 'MOTOMANIA 2K26',
    category: 'Social Media',
    description: 'Official Instagram page of Motomania — the automotive and mechanical engineering enthusiast club of SMVITM.',
    url: 'https://www.instagram.com/motomania_2k26?fqnt=MTA4Znl1djdnZGlwOQ==',
    badge: 'Auto & Mech Club',
    iconType: 'instagram',
    logo: '/portals/instagram.svg'
  },
  {
    id: 'web-25',
    name: 'IGNITE AI&DS',
    category: 'Social Media',
    description: 'Official Instagram page of Ignite — Department of Artificial Intelligence & Data Science student association at SMVITM.',
    url: 'https://www.instagram.com/ignite.ai_ds?lqvp=Nzdud3l5Z2w0MTJ3',
    badge: 'AI&DS Forum',
    iconType: 'instagram',
    logo: '/portals/instagram.svg'
  }
];

export const INITIAL_NOTIFICATIONS = [
  {
    id: 'notif-1',
    type: 'notice',
    title: 'New Notice for AI&DS',
    body: 'Faculty Coordinator posted: Final Year Project Phase-1 Synopsis Submission Schedule.',
    time: '2h ago',
    unread: true
  },
  {
    id: 'notif-2',
    type: 'event',
    title: 'Event Registration Reminder',
    body: 'DevHacks 2026 registration deadline is approaching on Oct 26, 2026.',
    time: '4h ago',
    unread: true
  },
  {
    id: 'notif-3',
    type: 'attendance',
    title: 'Attendance Recorded',
    body: 'QR Check-In confirmed for Student (USN202601) at DevHacks 2026 entry.',
    time: '1d ago',
    unread: false
  }
];
