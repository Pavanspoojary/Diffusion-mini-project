/**
 * Campus Notice & Event Hub
 * Clean X.com Theme - Zero Emojis Policy
 */

export const COMMUNITIES = [
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
  },
  {
    id: 'CIVIL',
    label: 'Civil Engineering',
    code: 'CIVIL',
    slug: 's/CIVIL',
    members: '140 members',
    description: 'Structural, Environmental & Infrastructure Engineering',
    avatarBg: 'linear-gradient(135deg, #10b981, #059669)'
  }
];

export const BRANCHES = [
  ...COMMUNITIES,
  {
    id: 'MBA',
    label: 'Management Studies (MBA)',
    code: 'MBA',
    department: 'Dept. of Management Studies (MBA)',
    avatarBg: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
    isCommunity: false
  },
  {
    id: 'MATHS',
    label: 'Mathematics',
    code: 'MATHS',
    department: 'Dept. of Mathematics',
    avatarBg: 'linear-gradient(135deg, #06b6d4, #0284c7)',
    isCommunity: false
  },
  {
    id: 'PHY',
    label: 'Physics',
    code: 'PHY',
    department: 'Dept. of Physics',
    avatarBg: 'linear-gradient(135deg, #ec4899, #f43f5e)',
    isCommunity: false
  },
  {
    id: 'CHEM',
    label: 'Chemistry',
    code: 'CHEM',
    department: 'Dept. of Chemistry',
    avatarBg: 'linear-gradient(135deg, #14b8a6, #0d9488)',
    isCommunity: false
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
    name: 'Dr. Tejaswini H',
    usn: 'FAC-AI-001',
    role: 'Faculty',
    roleKey: 'faculty',
    branch: 'AI&DS',
    department: 'Dept. of AI & Data Science',
    handle: '@tejaswini_aids',
    avatarChar: 'T',
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
    "id": "lec-aids-1",
    "userId": "user-faculty",
    "name": "Dr. Tejaswini H",
    "handle": "@tejaswini_aids",
    "aliases": [
      "HOD AI&DS",
      "Head of Department"
    ],
    "employeeId": "FAC-AI-001",
    "designation": "Assistant Professor & In-charge HOD",
    "headline": "Assistant Professor & In-charge HOD \u00b7 Dept. of AI & Data Science | Deep Learning and Image Processing",
    "branch": "AI&DS",
    "department": "Dept. of AI & Data Science",
    "location": "SMVITM Campus, Bantakal, Udupi",
    "experienceYears": "13+ years",
    "avatarChar": "T",
    "avatarBg": "#8e24aa",
    "photoUrl": "https://smvitm.sode-edu.in/wp-content/uploads/2015/01/Tejaswini-H.jpg",
    "bannerBg": "linear-gradient(135deg, #4f46e5 0%, #7856ff 55%, #1d9bf0 100%)",
    "verified": true,
    "verifiedType": "gold",
    "about": "Dr. Tejaswini H serves as Assistant Professor & In-charge HOD in the Dept. of AI & Data Science at Shri Madhwa Vadiraja Institute of Technology and Management (SMVITM), Bantakal. Dedicated to quality engineering education, active student mentoring, and departmental research initiatives. Core research and academic focus includes Deep Learning and Image Processing.",
    "contact": {
      "email": "ds@sode-edu.in",
      "phone": "+91 9743288112",
      "office": "Dept. of AI & Data Science \u00b7 Academic Block, SMVITM",
      "officeHours": "Mon \u2013 Fri \u00b7 3:00 PM \u2013 4:30 PM",
      "linkedin": "https://www.linkedin.com/in/tejaswinihbhat/",
      "scholar": "https://scholar.google.com",
      "website": "https://smvitm.sode-edu.in/faculties/tejaswini-h/"
    },
    "yearsTaught": [
      "2nd Year",
      "3rd Year",
      "4th Year"
    ],
    "semestersTaught": [
      "3rd Sem",
      "5th Sem",
      "7th Sem"
    ],
    "subjects": [
      {
        "code": "BAD301",
        "name": "Deep Learning and Image Processing",
        "year": "2nd Year",
        "semester": "3rd Sem",
        "type": "Theory + Lab"
      },
      {
        "code": "BAD401",
        "name": "Foundations of Artificial Intelligence",
        "year": "2nd Year",
        "semester": "3rd Sem",
        "type": "Theory"
      },
      {
        "code": "BAD501",
        "name": "Data Science & Statistical Modeling",
        "year": "3rd Year",
        "semester": "5th Sem",
        "type": "Theory + Lab"
      }
    ],
    "education": [
      {
        "degree": "Ph.D.",
        "institution": "VTU / Recognized University",
        "year": "",
        "details": "Academic Qualification"
      },
      {
        "degree": "M.Tech (Computer Science and Engineering)",
        "institution": "VTU / Recognized University",
        "year": "",
        "details": "Academic Qualification"
      },
      {
        "degree": "B.E (Computer Science and Engineering)",
        "institution": "VTU / Recognized University",
        "year": "",
        "details": "Academic Qualification"
      }
    ],
    "experience": [
      {
        "role": "Assistant Professor & In-charge HOD",
        "organization": "SMVITM, Bantakal",
        "duration": "13 Years 4 Months",
        "description": "Serving in the Dept. of AI & Data Science, leading classroom lectures, laboratory coursework, and undergraduate student project guidance."
      }
    ],
    "skills": [
      "AI&DS",
      "Curriculum Delivery",
      "Academic Mentoring",
      "Laboratory Training"
    ]
  },
  {
    "id": "lec-aids-deepika-b",
    "userId": null,
    "name": "Dr. Deepika B.v",
    "handle": "@deepika_aids",
    "aliases": [],
    "employeeId": "FAC-AI-002",
    "designation": "Associate Professor",
    "headline": "Associate Professor \u00b7 Dept. of AI & Data Science | Groundwater Analysis, GIS Mapping, Spatial Distribution of Water Qu...",
    "branch": "AI&DS",
    "department": "Dept. of AI & Data Science",
    "location": "SMVITM Campus, Bantakal, Udupi",
    "experienceYears": "13+ years",
    "avatarChar": "D",
    "avatarBg": "#8e24aa",
    "photoUrl": "https://smvitm.sode-edu.in/wp-content/uploads/2019/11/WhatsApp-Image-2025-09-01-at-09.18.45_8d526051.webp",
    "bannerBg": "linear-gradient(135deg, #4f46e5 0%, #7856ff 55%, #1d9bf0 100%)",
    "verified": true,
    "verifiedType": "gold",
    "about": "Dr. Deepika B.v serves as Associate Professor in the Dept. of AI & Data Science at Shri Madhwa Vadiraja Institute of Technology and Management (SMVITM), Bantakal. Dedicated to quality engineering education, active student mentoring, and departmental research initiatives. Core research and academic focus includes Groundwater Analysis, GIS Mapping, Spatial Distribution of Water Quality Parameters, Vulnerability Studies of Groundwater..",
    "contact": {
      "email": "civil@sode-edu.in",
      "phone": "+91 9481071562",
      "office": "Dept. of AI & Data Science \u00b7 Academic Block, SMVITM",
      "officeHours": "Mon \u2013 Fri \u00b7 3:00 PM \u2013 4:30 PM",
      "linkedin": "https://www.linkedin.com/company/shri-madhwa-vadiraja-institute-of-technology-and-management/",
      "scholar": "https://scholar.google.com",
      "website": "https://smvitm.sode-edu.in/faculties/ms-deepika-b-v/"
    },
    "yearsTaught": [
      "2nd Year",
      "3rd Year",
      "4th Year"
    ],
    "semestersTaught": [
      "3rd Sem",
      "5th Sem",
      "7th Sem"
    ],
    "subjects": [
      {
        "code": "BAD302",
        "name": "Groundwater Analysis",
        "year": "2nd Year",
        "semester": "3rd Sem",
        "type": "Theory + Lab"
      },
      {
        "code": "BAD402",
        "name": "GIS Mapping",
        "year": "3rd Year",
        "semester": "5th Sem",
        "type": "Theory"
      },
      {
        "code": "BAD502",
        "name": "Spatial Distribution of Water Quality Parameters",
        "year": "4th Year",
        "semester": "7th Sem",
        "type": "Theory"
      }
    ],
    "education": [
      {
        "degree": "PhD - (Groundwater, GIS and DRASTIC Model)",
        "institution": "VTU / Recognized University",
        "year": "",
        "details": "Academic Qualification"
      },
      {
        "degree": "M.Tech ( Environmental Engineering)",
        "institution": "VTU / Recognized University",
        "year": "",
        "details": "Academic Qualification"
      },
      {
        "degree": "BE- Bachelor of Engineering (Environmental Engineering)",
        "institution": "VTU / Recognized University",
        "year": "",
        "details": "Academic Qualification"
      }
    ],
    "experience": [
      {
        "role": "Associate Professor",
        "organization": "SMVITM, Bantakal",
        "duration": "13 Years 4 Months",
        "description": "Serving in the Dept. of AI & Data Science, leading classroom lectures, laboratory coursework, and undergraduate student project guidance."
      }
    ],
    "skills": [
      "Groundwater Analysis",
      "GIS Mapping"
    ]
  },
  {
    "id": "lec-aids-shrivathsa-t",
    "userId": null,
    "name": "Dr. Shrivathsa T V",
    "handle": "@shrivathsa_aids",
    "aliases": [],
    "employeeId": "FAC-AI-003",
    "designation": "Assistant Professor (Selection Grade)",
    "headline": "Assistant Professor (Selection Grade) \u00b7 Dept. of AI & Data Science | Deep Networks in Diagnosis and Prognosis ApplicationsApplication of...",
    "branch": "AI&DS",
    "department": "Dept. of AI & Data Science",
    "location": "SMVITM Campus, Bantakal, Udupi",
    "experienceYears": "5+ years",
    "avatarChar": "S",
    "avatarBg": "#8e24aa",
    "photoUrl": "https://smvitm.sode-edu.in/wp-content/uploads/2025/04/IMG_20240306_125252__01-e1743601636857.jpg",
    "bannerBg": "linear-gradient(135deg, #4f46e5 0%, #7856ff 55%, #1d9bf0 100%)",
    "verified": true,
    "verifiedType": "gold",
    "about": "Dr. Shrivathsa T V serves as Assistant Professor (Selection Grade) in the Dept. of AI & Data Science at Shri Madhwa Vadiraja Institute of Technology and Management (SMVITM), Bantakal. Dedicated to quality engineering education, active student mentoring, and departmental research initiatives. Core research and academic focus includes Deep Networks in Diagnosis and Prognosis ApplicationsApplication of Artificial Intelligence in Battery Condition MonitoringImage ProcessingIoT-Based Time Series AnalysisRegression Prediction Models in Mechanical Engineering Applications.",
    "contact": {
      "email": "shrivathsa.ml@sode.edu.in",
      "phone": "+91 9113016736",
      "office": "Dept. of AI & Data Science \u00b7 Academic Block, SMVITM",
      "officeHours": "Mon \u2013 Fri \u00b7 3:00 PM \u2013 4:30 PM",
      "linkedin": "https://www.linkedin.com/company/shri-madhwa-vadiraja-institute-of-technology-and-management/",
      "scholar": "https://scholar.google.com",
      "website": "https://smvitm.sode-edu.in/faculties/dr-shrivathsa-tv/"
    },
    "yearsTaught": [
      "2nd Year",
      "3rd Year",
      "4th Year"
    ],
    "semestersTaught": [
      "3rd Sem",
      "5th Sem",
      "7th Sem"
    ],
    "subjects": [
      {
        "code": "BAD303",
        "name": "Deep Networks in Diagnosis and Prognosis ApplicationsApplication of Artificial Intelligence in Battery Condition MonitoringImage ProcessingIoT-Based Time Series AnalysisRegression Prediction Models in Mechanical Engineering Applications",
        "year": "2nd Year",
        "semester": "3rd Sem",
        "type": "Theory + Lab"
      },
      {
        "code": "BAD403",
        "name": "Foundations of Artificial Intelligence",
        "year": "2nd Year",
        "semester": "3rd Sem",
        "type": "Theory"
      },
      {
        "code": "BAD503",
        "name": "Data Science & Statistical Modeling",
        "year": "3rd Year",
        "semester": "5th Sem",
        "type": "Theory + Lab"
      }
    ],
    "education": [
      {
        "degree": "Ph.D",
        "institution": "VTU / Recognized University",
        "year": "",
        "details": "Academic Qualification"
      }
    ],
    "experience": [
      {
        "role": "Assistant Professor (Selection Grade)",
        "organization": "SMVITM, Bantakal",
        "duration": "5 Years 9 Months",
        "description": "Serving in the Dept. of AI & Data Science, leading classroom lectures, laboratory coursework, and undergraduate student project guidance."
      }
    ],
    "skills": [
      "AI&DS",
      "Curriculum Delivery",
      "Academic Mentoring",
      "Laboratory Training"
    ]
  },
  {
    "id": "lec-aids-balachandra-r",
    "userId": null,
    "name": "Mr. Balachandra R Jogi",
    "handle": "@balachandra_aids",
    "aliases": [],
    "employeeId": "FAC-AI-004",
    "designation": "Assitant Professor",
    "headline": "Assitant Professor \u00b7 Dept. of AI & Data Science | Digital Design and DFT, Microcontrollers ATMEGA 328, Internet of Th...",
    "branch": "AI&DS",
    "department": "Dept. of AI & Data Science",
    "location": "SMVITM Campus, Bantakal, Udupi",
    "experienceYears": "3+ years",
    "avatarChar": "B",
    "avatarBg": "#8e24aa",
    "photoUrl": "https://smvitm.sode-edu.in/wp-content/uploads/2024/01/KMB_7023.jpg",
    "bannerBg": "linear-gradient(135deg, #4f46e5 0%, #7856ff 55%, #1d9bf0 100%)",
    "verified": true,
    "verifiedType": "gold",
    "about": "Mr. Balachandra R Jogi serves as Assitant Professor in the Dept. of AI & Data Science at Shri Madhwa Vadiraja Institute of Technology and Management (SMVITM), Bantakal. Dedicated to quality engineering education, active student mentoring, and departmental research initiatives. Core research and academic focus includes Digital Design and DFT, Microcontrollers ATMEGA 328, Internet of Things, Power Electronics application to drives, Embedded Systems..",
    "contact": {
      "email": "balachandra.cs@sode-edu.in",
      "phone": "+91 8762763369",
      "office": "Dept. of AI & Data Science \u00b7 Academic Block, SMVITM",
      "officeHours": "Mon \u2013 Fri \u00b7 3:00 PM \u2013 4:30 PM",
      "linkedin": "https://www.linkedin.com/in/balachandrarjogi/",
      "scholar": "https://scholar.google.com",
      "website": "https://smvitm.sode-edu.in/faculties/mr-balachandra-jogi/"
    },
    "yearsTaught": [
      "2nd Year",
      "3rd Year",
      "4th Year"
    ],
    "semestersTaught": [
      "3rd Sem",
      "5th Sem",
      "7th Sem"
    ],
    "subjects": [
      {
        "code": "BAD304",
        "name": "Digital Design and DFT",
        "year": "2nd Year",
        "semester": "3rd Sem",
        "type": "Theory + Lab"
      },
      {
        "code": "BAD404",
        "name": "Microcontrollers ATMEGA 328",
        "year": "3rd Year",
        "semester": "5th Sem",
        "type": "Theory"
      },
      {
        "code": "BAD504",
        "name": "Internet of Things",
        "year": "4th Year",
        "semester": "7th Sem",
        "type": "Theory"
      }
    ],
    "education": [
      {
        "degree": "M. Tech in Computer Applications in Industrial Drives",
        "institution": "VTU / Recognized University",
        "year": "",
        "details": "Academic Qualification"
      },
      {
        "degree": "B. E in EEE",
        "institution": "VTU / Recognized University",
        "year": "",
        "details": "Academic Qualification"
      }
    ],
    "experience": [
      {
        "role": "Assitant Professor",
        "organization": "SMVITM, Bantakal",
        "duration": "3 Years 2 Months",
        "description": "Serving in the Dept. of AI & Data Science, leading classroom lectures, laboratory coursework, and undergraduate student project guidance."
      }
    ],
    "skills": [
      "Digital Design and DFT",
      "Microcontrollers ATMEGA 328",
      "Internet of Things",
      "Embedded Systems."
    ]
  },
  {
    "id": "lec-aids-sarvesh-s",
    "userId": null,
    "name": "Mr. Sarvesh S Rao",
    "handle": "@sarvesh_aids",
    "aliases": [],
    "employeeId": "FAC-AI-005",
    "designation": "Assistant Professor",
    "headline": "Assistant Professor \u00b7 Dept. of AI & Data Science | Computer Network",
    "branch": "AI&DS",
    "department": "Dept. of AI & Data Science",
    "location": "SMVITM Campus, Bantakal, Udupi",
    "experienceYears": "3+ years",
    "avatarChar": "S",
    "avatarBg": "#8e24aa",
    "photoUrl": "https://smvitm.sode-edu.in/wp-content/uploads/2024/01/SSR.webp",
    "bannerBg": "linear-gradient(135deg, #4f46e5 0%, #7856ff 55%, #1d9bf0 100%)",
    "verified": true,
    "verifiedType": "gold",
    "about": "Mr. Sarvesh S Rao serves as Assistant Professor in the Dept. of AI & Data Science at Shri Madhwa Vadiraja Institute of Technology and Management (SMVITM), Bantakal. Dedicated to quality engineering education, active student mentoring, and departmental research initiatives. Core research and academic focus includes Computer Network.",
    "contact": {
      "email": "sarvesh.ds@sode-edu.in",
      "phone": "+91 820 2589101",
      "office": "Dept. of AI & Data Science \u00b7 Academic Block, SMVITM",
      "officeHours": "Mon \u2013 Fri \u00b7 3:00 PM \u2013 4:30 PM",
      "linkedin": "https://www.linkedin.com/company/shri-madhwa-vadiraja-institute-of-technology-and-management/",
      "scholar": "https://scholar.google.com",
      "website": "https://smvitm.sode-edu.in/faculties/mr-sarvesh-s-rao/"
    },
    "yearsTaught": [
      "2nd Year",
      "3rd Year",
      "4th Year"
    ],
    "semestersTaught": [
      "3rd Sem",
      "5th Sem",
      "7th Sem"
    ],
    "subjects": [
      {
        "code": "BAD305",
        "name": "Computer Network",
        "year": "2nd Year",
        "semester": "3rd Sem",
        "type": "Theory + Lab"
      },
      {
        "code": "BAD405",
        "name": "Foundations of Artificial Intelligence",
        "year": "2nd Year",
        "semester": "3rd Sem",
        "type": "Theory"
      },
      {
        "code": "BAD505",
        "name": "Data Science & Statistical Modeling",
        "year": "3rd Year",
        "semester": "5th Sem",
        "type": "Theory + Lab"
      }
    ],
    "education": [
      {
        "degree": "B. E.",
        "institution": "VTU / Recognized University",
        "year": "",
        "details": "Academic Qualification"
      },
      {
        "degree": "M. Tech",
        "institution": "VTU / Recognized University",
        "year": "",
        "details": "Academic Qualification"
      }
    ],
    "experience": [
      {
        "role": "Assistant Professor",
        "organization": "SMVITM, Bantakal",
        "duration": "3 Years 1 month",
        "description": "Serving in the Dept. of AI & Data Science, leading classroom lectures, laboratory coursework, and undergraduate student project guidance."
      }
    ],
    "skills": [
      "Computer Network"
    ]
  },
  {
    "id": "lec-aids-sunil-s",
    "userId": null,
    "name": "Mr. Sunil S Haldankar",
    "handle": "@sunil_aids",
    "aliases": [],
    "employeeId": "FAC-AI-006",
    "designation": "Assistant Professor (Senior)",
    "headline": "Assistant Professor (Senior) \u00b7 Dept. of AI & Data Science | \u2022 Geo-Transportation Engineering \u2022 Environmental Geo-Techniques \u2022 D...",
    "branch": "AI&DS",
    "department": "Dept. of AI & Data Science",
    "location": "SMVITM Campus, Bantakal, Udupi",
    "experienceYears": "13+ years",
    "avatarChar": "S",
    "avatarBg": "#8e24aa",
    "photoUrl": "https://smvitm.sode-edu.in/wp-content/uploads/2015/02/SUNIL-CIVIL.jpg",
    "bannerBg": "linear-gradient(135deg, #4f46e5 0%, #7856ff 55%, #1d9bf0 100%)",
    "verified": true,
    "verifiedType": "gold",
    "about": "Mr. Sunil S Haldankar serves as Assistant Professor (Senior) in the Dept. of AI & Data Science at Shri Madhwa Vadiraja Institute of Technology and Management (SMVITM), Bantakal. Dedicated to quality engineering education, active student mentoring, and departmental research initiatives. Core research and academic focus includes \u2022 Geo-Transportation Engineering \u2022 Environmental Geo-Techniques \u2022 Deep Learning \u2022 Artificial Intelligence \u2022 Machine Learning \u2022 Data Science \u2022 Python Programming.",
    "contact": {
      "email": "sunilhaldankar.civil@sode-edu.in",
      "phone": "+91 09740169411",
      "office": "Dept. of AI & Data Science \u00b7 Academic Block, SMVITM",
      "officeHours": "Mon \u2013 Fri \u00b7 3:00 PM \u2013 4:30 PM",
      "linkedin": "https://www.linkedin.com/company/shri-madhwa-vadiraja-institute-of-technology-and-management/",
      "scholar": "https://scholar.google.com",
      "website": "https://smvitm.sode-edu.in/faculties/mr-sunil-s-haldankar/"
    },
    "yearsTaught": [
      "2nd Year",
      "3rd Year",
      "4th Year"
    ],
    "semestersTaught": [
      "3rd Sem",
      "5th Sem",
      "7th Sem"
    ],
    "subjects": [
      {
        "code": "BAD306",
        "name": "\u2022 Geo-Transportation Engineering \u2022 Environmental Geo-Techniques \u2022 Deep Learning \u2022 Artificial Intelligence \u2022 Machine Learning \u2022 Data Science \u2022 Python Programming",
        "year": "2nd Year",
        "semester": "3rd Sem",
        "type": "Theory + Lab"
      },
      {
        "code": "BAD406",
        "name": "Foundations of Artificial Intelligence",
        "year": "2nd Year",
        "semester": "3rd Sem",
        "type": "Theory"
      },
      {
        "code": "BAD506",
        "name": "Data Science & Statistical Modeling",
        "year": "3rd Year",
        "semester": "5th Sem",
        "type": "Theory + Lab"
      }
    ],
    "education": [
      {
        "degree": "B.E(Civil Engineering)",
        "institution": "VTU / Recognized University",
        "year": "",
        "details": "Academic Qualification"
      },
      {
        "degree": "M.Tech(Transportation Engineering)",
        "institution": "VTU / Recognized University",
        "year": "",
        "details": "Academic Qualification"
      },
      {
        "degree": "(Ph.D)",
        "institution": "VTU / Recognized University",
        "year": "",
        "details": "Academic Qualification"
      }
    ],
    "experience": [
      {
        "role": "Assistant Professor (Senior)",
        "organization": "SMVITM, Bantakal",
        "duration": "13 Years 10 Months",
        "description": "Serving in the Dept. of AI & Data Science, leading classroom lectures, laboratory coursework, and undergraduate student project guidance."
      }
    ],
    "skills": [
      "AI&DS",
      "Curriculum Delivery",
      "Academic Mentoring",
      "Laboratory Training"
    ]
  },
  {
    "id": "lec-aids-shalaka",
    "userId": null,
    "name": "Ms. Shalaka",
    "handle": "@shalaka_aids",
    "aliases": [],
    "employeeId": "FAC-AI-007",
    "designation": "Assistant Professor",
    "headline": "Assistant Professor \u00b7 Dept. of AI & Data Science | Computer Network",
    "branch": "AI&DS",
    "department": "Dept. of AI & Data Science",
    "location": "SMVITM Campus, Bantakal, Udupi",
    "experienceYears": "8+ years",
    "avatarChar": "S",
    "avatarBg": "#8e24aa",
    "photoUrl": "https://smvitm.sode-edu.in/wp-content/uploads/2026/02/Ms.Shalaka.webp",
    "bannerBg": "linear-gradient(135deg, #4f46e5 0%, #7856ff 55%, #1d9bf0 100%)",
    "verified": true,
    "verifiedType": "gold",
    "about": "Ms. Shalaka serves as Assistant Professor in the Dept. of AI & Data Science at Shri Madhwa Vadiraja Institute of Technology and Management (SMVITM), Bantakal. Dedicated to quality engineering education, active student mentoring, and departmental research initiatives. Core research and academic focus includes Computer Network.",
    "contact": {
      "email": "shalaka.ds@sode-edu.in",
      "phone": "+91 820 2589101",
      "office": "Dept. of AI & Data Science \u00b7 Academic Block, SMVITM",
      "officeHours": "Mon \u2013 Fri \u00b7 3:00 PM \u2013 4:30 PM",
      "linkedin": "https://www.linkedin.com/company/shri-madhwa-vadiraja-institute-of-technology-and-management/",
      "scholar": "https://scholar.google.com",
      "website": "https://smvitm.sode-edu.in/faculties/ms-shalaka/"
    },
    "yearsTaught": [
      "2nd Year",
      "3rd Year",
      "4th Year"
    ],
    "semestersTaught": [
      "3rd Sem",
      "5th Sem",
      "7th Sem"
    ],
    "subjects": [
      {
        "code": "BAD307",
        "name": "Computer Network",
        "year": "2nd Year",
        "semester": "3rd Sem",
        "type": "Theory + Lab"
      },
      {
        "code": "BAD407",
        "name": "Foundations of Artificial Intelligence",
        "year": "2nd Year",
        "semester": "3rd Sem",
        "type": "Theory"
      },
      {
        "code": "BAD507",
        "name": "Data Science & Statistical Modeling",
        "year": "3rd Year",
        "semester": "5th Sem",
        "type": "Theory + Lab"
      }
    ],
    "education": [
      {
        "degree": "B.E",
        "institution": "VTU / Recognized University",
        "year": "",
        "details": "Academic Qualification"
      },
      {
        "degree": "M.Tech",
        "institution": "VTU / Recognized University",
        "year": "",
        "details": "Academic Qualification"
      }
    ],
    "experience": [
      {
        "role": "Assistant Professor",
        "organization": "SMVITM, Bantakal",
        "duration": "8 Years 4 Months",
        "description": "Serving in the Dept. of AI & Data Science, leading classroom lectures, laboratory coursework, and undergraduate student project guidance."
      }
    ],
    "skills": [
      "Computer Network"
    ]
  },
  {
    "id": "lec-aiml-ganesha-prasad",
    "userId": null,
    "name": "Dr. Ganesha Prasad",
    "handle": "@ganesha_aiml",
    "aliases": [],
    "employeeId": "FAC-AIML-001",
    "designation": "Assistant Professor (Selection Grade)",
    "headline": "Assistant Professor (Selection Grade) \u00b7 Dept. of AI & Machine Learning | Machine learning, Deep learning, Image processing, and Data science",
    "branch": "AI-ML",
    "department": "Dept. of AI & Machine Learning",
    "location": "SMVITM Campus, Bantakal, Udupi",
    "experienceYears": "6.5+ years",
    "avatarChar": "G",
    "avatarBg": "#ff4500",
    "photoUrl": "https://smvitm.sode-edu.in/wp-content/uploads/2024/01/KMB_7363.jpg",
    "bannerBg": "linear-gradient(135deg, #f91880 0%, #ff4500 55%, #ff7a00 100%)",
    "verified": true,
    "verifiedType": "gold",
    "about": "Dr. Ganesha Prasad serves as Assistant Professor (Selection Grade) in the Dept. of AI & Machine Learning at Shri Madhwa Vadiraja Institute of Technology and Management (SMVITM), Bantakal. Dedicated to quality engineering education, active student mentoring, and departmental research initiatives. Core research and academic focus includes Machine learning, Deep learning, Image processing, and Data science.",
    "contact": {
      "email": "sganeshaprasad.ml@sode-edu.in",
      "phone": "+91 820 2589101",
      "office": "Dept. of AI & Machine Learning \u00b7 Academic Block, SMVITM",
      "officeHours": "Mon \u2013 Fri \u00b7 3:00 PM \u2013 4:30 PM",
      "linkedin": "https://www.linkedin.com/company/shri-madhwa-vadiraja-institute-of-technology-and-management/",
      "scholar": "https://scholar.google.com",
      "website": "https://smvitm.sode-edu.in/faculties/mr-ganesh-prasad/"
    },
    "yearsTaught": [
      "2nd Year",
      "3rd Year",
      "4th Year"
    ],
    "semestersTaught": [
      "3rd Sem",
      "5th Sem",
      "7th Sem"
    ],
    "subjects": [
      {
        "code": "BAI301",
        "name": "Machine learning",
        "year": "2nd Year",
        "semester": "3rd Sem",
        "type": "Theory + Lab"
      },
      {
        "code": "BAI401",
        "name": "Deep learning",
        "year": "3rd Year",
        "semester": "5th Sem",
        "type": "Theory"
      },
      {
        "code": "BAI501",
        "name": "Image processing",
        "year": "4th Year",
        "semester": "7th Sem",
        "type": "Theory"
      }
    ],
    "education": [
      {
        "degree": "B. E.",
        "institution": "VTU / Recognized University",
        "year": "",
        "details": "Academic Qualification"
      },
      {
        "degree": "M. Tech",
        "institution": "VTU / Recognized University",
        "year": "",
        "details": "Academic Qualification"
      },
      {
        "degree": "PhD",
        "institution": "VTU / Recognized University",
        "year": "",
        "details": "Academic Qualification"
      }
    ],
    "experience": [
      {
        "role": "Assistant Professor (Selection Grade)",
        "organization": "SMVITM, Bantakal",
        "duration": "6.5 Years 8 Months",
        "description": "Serving in the Dept. of AI & Machine Learning, leading classroom lectures, laboratory coursework, and undergraduate student project guidance."
      }
    ],
    "skills": [
      "Machine learning",
      "Deep learning",
      "Image processing",
      "and Data science"
    ]
  },
  {
    "id": "lec-aiml-mamatha-i",
    "userId": null,
    "name": "Dr. Mamatha I.",
    "handle": "@mamatha_aiml",
    "aliases": [],
    "employeeId": "FAC-AIML-002",
    "designation": "Associate Professor",
    "headline": "Associate Professor \u00b7 Dept. of AI & Machine Learning",
    "branch": "AI-ML",
    "department": "Dept. of AI & Machine Learning",
    "location": "SMVITM Campus, Bantakal, Udupi",
    "experienceYears": "10+ years",
    "avatarChar": "M",
    "avatarBg": "#ff4500",
    "photoUrl": "https://smvitm.sode-edu.in/wp-content/uploads/2022/09/Photo_mamtha.png",
    "bannerBg": "linear-gradient(135deg, #f91880 0%, #ff4500 55%, #ff7a00 100%)",
    "verified": true,
    "verifiedType": "gold",
    "about": "Dr. Mamatha I. serves as Associate Professor in the Dept. of AI & Machine Learning at Shri Madhwa Vadiraja Institute of Technology and Management (SMVITM), Bantakal. Dedicated to quality engineering education, active student mentoring, and departmental research initiatives.",
    "contact": {
      "email": "mamatha.ml@sode-edu.in",
      "phone": "+91 9108289466",
      "office": "Dept. of AI & Machine Learning \u00b7 Academic Block, SMVITM",
      "officeHours": "Mon \u2013 Fri \u00b7 3:00 PM \u2013 4:30 PM",
      "linkedin": "https://www.linkedin.com/company/shri-madhwa-vadiraja-institute-of-technology-and-management/",
      "scholar": "https://scholar.google.com",
      "website": "https://smvitm.sode-edu.in/faculties/dr-mamatha-i/"
    },
    "yearsTaught": [
      "2nd Year",
      "3rd Year",
      "4th Year"
    ],
    "semestersTaught": [
      "3rd Sem",
      "5th Sem",
      "7th Sem"
    ],
    "subjects": [
      {
        "code": "BAI402",
        "name": "Machine Learning Principles",
        "year": "3rd Year",
        "semester": "5th Sem",
        "type": "Theory + Lab"
      },
      {
        "code": "BAI502",
        "name": "Neural Networks & Deep Learning",
        "year": "4th Year",
        "semester": "7th Sem",
        "type": "Theory"
      },
      {
        "code": "BAI602",
        "name": "Natural Language Processing & Speech",
        "year": "4th Year",
        "semester": "8th Sem",
        "type": "Theory + Lab"
      }
    ],
    "education": [
      {
        "degree": "B.E",
        "institution": "VTU / Recognized University",
        "year": "",
        "details": "Academic Qualification"
      },
      {
        "degree": "M.Tech",
        "institution": "VTU / Recognized University",
        "year": "",
        "details": "Academic Qualification"
      },
      {
        "degree": "Ph.D",
        "institution": "VTU / Recognized University",
        "year": "",
        "details": "Academic Qualification"
      }
    ],
    "experience": [
      {
        "role": "Associate Professor",
        "organization": "SMVITM, Bantakal",
        "duration": "Academic Service",
        "description": "Serving in the Dept. of AI & Machine Learning, leading classroom lectures, laboratory coursework, and undergraduate student project guidance."
      }
    ],
    "skills": [
      "AI-ML",
      "Curriculum Delivery",
      "Academic Mentoring",
      "Laboratory Training"
    ]
  },
  {
    "id": "lec-aiml-vighnesh-shenoy",
    "userId": null,
    "name": "Dr. Vighnesh Shenoy",
    "handle": "@vighnesh_aiml",
    "aliases": [],
    "employeeId": "FAC-AIML-003",
    "designation": "Assistant Professor (Selection Grade)",
    "headline": "Assistant Professor (Selection Grade) \u00b7 Dept. of AI & Machine Learning",
    "branch": "AI-ML",
    "department": "Dept. of AI & Machine Learning",
    "location": "SMVITM Campus, Bantakal, Udupi",
    "experienceYears": "5+ years",
    "avatarChar": "V",
    "avatarBg": "#ff4500",
    "photoUrl": "https://smvitm.sode-edu.in/wp-content/uploads/2024/04/Vighnesh-Shenoy_ECE-1.png",
    "bannerBg": "linear-gradient(135deg, #f91880 0%, #ff4500 55%, #ff7a00 100%)",
    "verified": true,
    "verifiedType": "gold",
    "about": "Dr. Vighnesh Shenoy serves as Assistant Professor (Selection Grade) in the Dept. of AI & Machine Learning at Shri Madhwa Vadiraja Institute of Technology and Management (SMVITM), Bantakal. Dedicated to quality engineering education, active student mentoring, and departmental research initiatives.",
    "contact": {
      "email": "vighneshshenoy.ec@sode-edu.in",
      "phone": "+91 9972131077",
      "office": "Dept. of AI & Machine Learning \u00b7 Academic Block, SMVITM",
      "officeHours": "Mon \u2013 Fri \u00b7 3:00 PM \u2013 4:30 PM",
      "linkedin": "https://www.linkedin.com/company/shri-madhwa-vadiraja-institute-of-technology-and-management/",
      "scholar": "https://scholar.google.com",
      "website": "https://smvitm.sode-edu.in/faculties/dr-vighnesh-shenoy/"
    },
    "yearsTaught": [
      "2nd Year",
      "3rd Year",
      "4th Year"
    ],
    "semestersTaught": [
      "3rd Sem",
      "5th Sem",
      "7th Sem"
    ],
    "subjects": [
      {
        "code": "BAI403",
        "name": "Machine Learning Principles",
        "year": "3rd Year",
        "semester": "5th Sem",
        "type": "Theory + Lab"
      },
      {
        "code": "BAI503",
        "name": "Neural Networks & Deep Learning",
        "year": "4th Year",
        "semester": "7th Sem",
        "type": "Theory"
      },
      {
        "code": "BAI603",
        "name": "Natural Language Processing & Speech",
        "year": "4th Year",
        "semester": "8th Sem",
        "type": "Theory + Lab"
      }
    ],
    "education": [
      {
        "degree": "Ph.D",
        "institution": "VTU / Recognized University",
        "year": "",
        "details": "Academic Qualification"
      },
      {
        "degree": "M. Tech",
        "institution": "VTU / Recognized University",
        "year": "",
        "details": "Academic Qualification"
      },
      {
        "degree": "B. E",
        "institution": "VTU / Recognized University",
        "year": "",
        "details": "Academic Qualification"
      }
    ],
    "experience": [
      {
        "role": "Assistant Professor (Selection Grade)",
        "organization": "SMVITM, Bantakal",
        "duration": "5 Years 3 Months",
        "description": "Serving in the Dept. of AI & Machine Learning, leading classroom lectures, laboratory coursework, and undergraduate student project guidance."
      }
    ],
    "skills": [
      "AI-ML",
      "Curriculum Delivery",
      "Academic Mentoring",
      "Laboratory Training"
    ]
  },
  {
    "id": "lec-aiml-madhusoodhana-rao",
    "userId": null,
    "name": "Mr. Madhusoodhana Rao N",
    "handle": "@madhusoodhana_aiml",
    "aliases": [],
    "employeeId": "FAC-AIML-004",
    "designation": "Assistant Professor (Sr.)",
    "headline": "Assistant Professor (Sr.) \u00b7 Dept. of AI & Machine Learning | Structural Engineering",
    "branch": "AI-ML",
    "department": "Dept. of AI & Machine Learning",
    "location": "SMVITM Campus, Bantakal, Udupi",
    "experienceYears": "14+ years",
    "avatarChar": "M",
    "avatarBg": "#ff4500",
    "photoUrl": "https://smvitm.sode-edu.in/wp-content/uploads/2015/02/MADHUSOODHAN-RAO-CIVIL.jpg",
    "bannerBg": "linear-gradient(135deg, #f91880 0%, #ff4500 55%, #ff7a00 100%)",
    "verified": true,
    "verifiedType": "gold",
    "about": "Mr. Madhusoodhana Rao N serves as Assistant Professor (Sr.) in the Dept. of AI & Machine Learning at Shri Madhwa Vadiraja Institute of Technology and Management (SMVITM), Bantakal. Dedicated to quality engineering education, active student mentoring, and departmental research initiatives. Core research and academic focus includes Structural Engineering.",
    "contact": {
      "email": "madhun.civil@sode-edu.in",
      "phone": "+91 9916292856",
      "office": "Dept. of AI & Machine Learning \u00b7 Academic Block, SMVITM",
      "officeHours": "Mon \u2013 Fri \u00b7 3:00 PM \u2013 4:30 PM",
      "linkedin": "https://www.linkedin.com/company/shri-madhwa-vadiraja-institute-of-technology-and-management/",
      "scholar": "https://scholar.google.com",
      "website": "https://smvitm.sode-edu.in/faculties/mr-madhusoodhana-rao-n/"
    },
    "yearsTaught": [
      "2nd Year",
      "3rd Year",
      "4th Year"
    ],
    "semestersTaught": [
      "3rd Sem",
      "5th Sem",
      "7th Sem"
    ],
    "subjects": [
      {
        "code": "BAI304",
        "name": "Structural Engineering",
        "year": "2nd Year",
        "semester": "3rd Sem",
        "type": "Theory + Lab"
      },
      {
        "code": "BAI404",
        "name": "Machine Learning Principles",
        "year": "3rd Year",
        "semester": "5th Sem",
        "type": "Theory + Lab"
      },
      {
        "code": "BAI504",
        "name": "Neural Networks & Deep Learning",
        "year": "4th Year",
        "semester": "7th Sem",
        "type": "Theory"
      }
    ],
    "education": [
      {
        "degree": "B.E. in Civil Engineering",
        "institution": "VTU / Recognized University",
        "year": "",
        "details": "Academic Qualification"
      },
      {
        "degree": "M. Tech in Structural Engineering",
        "institution": "VTU / Recognized University",
        "year": "",
        "details": "Academic Qualification"
      }
    ],
    "experience": [
      {
        "role": "Assistant Professor (Sr.)",
        "organization": "SMVITM, Bantakal",
        "duration": "14 Years 10 Months",
        "description": "Serving in the Dept. of AI & Machine Learning, leading classroom lectures, laboratory coursework, and undergraduate student project guidance."
      }
    ],
    "skills": [
      "Structural Engineering"
    ]
  },
  {
    "id": "lec-aiml-raghavendra-i",
    "userId": null,
    "name": "Mr. Raghavendra I. Hegde",
    "handle": "@raghavendra_aiml",
    "aliases": [],
    "employeeId": "FAC-AIML-005",
    "designation": "Assistant Professor (Senior)",
    "headline": "Assistant Professor (Senior) \u00b7 Dept. of AI & Machine Learning | Computer Science and Engineering",
    "branch": "AI-ML",
    "department": "Dept. of AI & Machine Learning",
    "location": "SMVITM Campus, Bantakal, Udupi",
    "experienceYears": "13+ years",
    "avatarChar": "R",
    "avatarBg": "#ff4500",
    "photoUrl": "https://smvitm.sode-edu.in/wp-content/uploads/2024/01/KMB_7072.jpg",
    "bannerBg": "linear-gradient(135deg, #f91880 0%, #ff4500 55%, #ff7a00 100%)",
    "verified": true,
    "verifiedType": "gold",
    "about": "Mr. Raghavendra I. Hegde serves as Assistant Professor (Senior) in the Dept. of AI & Machine Learning at Shri Madhwa Vadiraja Institute of Technology and Management (SMVITM), Bantakal. Dedicated to quality engineering education, active student mentoring, and departmental research initiatives. Core research and academic focus includes Computer Science and Engineering.",
    "contact": {
      "email": "raghav.cs@sode-edu.in",
      "phone": "+91 820 2589101",
      "office": "Dept. of AI & Machine Learning \u00b7 Academic Block, SMVITM",
      "officeHours": "Mon \u2013 Fri \u00b7 3:00 PM \u2013 4:30 PM",
      "linkedin": "https://www.linkedin.com/company/shri-madhwa-vadiraja-institute-of-technology-and-management/",
      "scholar": "https://scholar.google.com",
      "website": "https://smvitm.sode-edu.in/faculties/mr-raghavendra-i-hegde/"
    },
    "yearsTaught": [
      "2nd Year",
      "3rd Year",
      "4th Year"
    ],
    "semestersTaught": [
      "3rd Sem",
      "5th Sem",
      "7th Sem"
    ],
    "subjects": [
      {
        "code": "BAI305",
        "name": "Computer Science and Engineering",
        "year": "2nd Year",
        "semester": "3rd Sem",
        "type": "Theory + Lab"
      },
      {
        "code": "BAI405",
        "name": "Machine Learning Principles",
        "year": "3rd Year",
        "semester": "5th Sem",
        "type": "Theory + Lab"
      },
      {
        "code": "BAI505",
        "name": "Neural Networks & Deep Learning",
        "year": "4th Year",
        "semester": "7th Sem",
        "type": "Theory"
      }
    ],
    "education": [
      {
        "degree": "B. E.",
        "institution": "VTU / Recognized University",
        "year": "",
        "details": "Academic Qualification"
      },
      {
        "degree": "M. Tech.",
        "institution": "VTU / Recognized University",
        "year": "",
        "details": "Academic Qualification"
      },
      {
        "degree": "UGC-NET",
        "institution": "VTU / Recognized University",
        "year": "",
        "details": "Academic Qualification"
      }
    ],
    "experience": [
      {
        "role": "Assistant Professor (Senior)",
        "organization": "SMVITM, Bantakal",
        "duration": "13 Years 3 Months",
        "description": "Serving in the Dept. of AI & Machine Learning, leading classroom lectures, laboratory coursework, and undergraduate student project guidance."
      }
    ],
    "skills": [
      "AI-ML",
      "Curriculum Delivery",
      "Academic Mentoring",
      "Laboratory Training"
    ]
  },
  {
    "id": "lec-aiml-ashwini-k",
    "userId": null,
    "name": "Ms. Ashwini K",
    "handle": "@ashwini_aiml",
    "aliases": [],
    "employeeId": "FAC-AIML-006",
    "designation": "Assistant Professor",
    "headline": "Assistant Professor \u00b7 Dept. of AI & Machine Learning | Computer Network",
    "branch": "AI-ML",
    "department": "Dept. of AI & Machine Learning",
    "location": "SMVITM Campus, Bantakal, Udupi",
    "experienceYears": "7.5+ years",
    "avatarChar": "A",
    "avatarBg": "#ff4500",
    "photoUrl": "https://smvitm.sode-edu.in/wp-content/uploads/2024/01/KMB_7099.jpg",
    "bannerBg": "linear-gradient(135deg, #f91880 0%, #ff4500 55%, #ff7a00 100%)",
    "verified": true,
    "verifiedType": "gold",
    "about": "Ms. Ashwini K serves as Assistant Professor in the Dept. of AI & Machine Learning at Shri Madhwa Vadiraja Institute of Technology and Management (SMVITM), Bantakal. Dedicated to quality engineering education, active student mentoring, and departmental research initiatives. Core research and academic focus includes Computer Network.",
    "contact": {
      "email": "ashwini.ml@sode-edu.in",
      "phone": "+91 820 2589101",
      "office": "Dept. of AI & Machine Learning \u00b7 Academic Block, SMVITM",
      "officeHours": "Mon \u2013 Fri \u00b7 3:00 PM \u2013 4:30 PM",
      "linkedin": "https://www.linkedin.com/company/shri-madhwa-vadiraja-institute-of-technology-and-management/",
      "scholar": "https://scholar.google.com",
      "website": "https://smvitm.sode-edu.in/faculties/ms-ashwini-k/"
    },
    "yearsTaught": [
      "2nd Year",
      "3rd Year",
      "4th Year"
    ],
    "semestersTaught": [
      "3rd Sem",
      "5th Sem",
      "7th Sem"
    ],
    "subjects": [
      {
        "code": "BAI306",
        "name": "Computer Network",
        "year": "2nd Year",
        "semester": "3rd Sem",
        "type": "Theory + Lab"
      },
      {
        "code": "BAI406",
        "name": "Machine Learning Principles",
        "year": "3rd Year",
        "semester": "5th Sem",
        "type": "Theory + Lab"
      },
      {
        "code": "BAI506",
        "name": "Neural Networks & Deep Learning",
        "year": "4th Year",
        "semester": "7th Sem",
        "type": "Theory"
      }
    ],
    "education": [
      {
        "degree": "B. E.",
        "institution": "VTU / Recognized University",
        "year": "",
        "details": "Academic Qualification"
      },
      {
        "degree": "M. Tech.",
        "institution": "VTU / Recognized University",
        "year": "",
        "details": "Academic Qualification"
      }
    ],
    "experience": [
      {
        "role": "Assistant Professor",
        "organization": "SMVITM, Bantakal",
        "duration": "7.5 Years 1 month",
        "description": "Serving in the Dept. of AI & Machine Learning, leading classroom lectures, laboratory coursework, and undergraduate student project guidance."
      }
    ],
    "skills": [
      "Computer Network"
    ]
  },
  {
    "id": "lec-aiml-mamatha",
    "userId": null,
    "name": "Ms. Mamatha",
    "handle": "@mamatha_aiml2",
    "aliases": [],
    "employeeId": "FAC-AIML-007",
    "designation": "Assistant Professor",
    "headline": "Assistant Professor \u00b7 Dept. of AI & Machine Learning | Cryptography and Steganography",
    "branch": "AI-ML",
    "department": "Dept. of AI & Machine Learning",
    "location": "SMVITM Campus, Bantakal, Udupi",
    "experienceYears": "1+ years",
    "avatarChar": "M",
    "avatarBg": "#ff4500",
    "photoUrl": "https://smvitm.sode-edu.in/wp-content/uploads/2025/04/IMG_20170504_0001-1-e1743601342858.jpg",
    "bannerBg": "linear-gradient(135deg, #f91880 0%, #ff4500 55%, #ff7a00 100%)",
    "verified": true,
    "verifiedType": "gold",
    "about": "Ms. Mamatha serves as Assistant Professor in the Dept. of AI & Machine Learning at Shri Madhwa Vadiraja Institute of Technology and Management (SMVITM), Bantakal. Dedicated to quality engineering education, active student mentoring, and departmental research initiatives. Core research and academic focus includes Cryptography and Steganography.",
    "contact": {
      "email": "mamathas.ml@sode-edu.in",
      "phone": "+91 9742501667",
      "office": "Dept. of AI & Machine Learning \u00b7 Academic Block, SMVITM",
      "officeHours": "Mon \u2013 Fri \u00b7 3:00 PM \u2013 4:30 PM",
      "linkedin": "https://www.linkedin.com/company/shri-madhwa-vadiraja-institute-of-technology-and-management/",
      "scholar": "https://scholar.google.com",
      "website": "https://smvitm.sode-edu.in/faculties/mamatha/"
    },
    "yearsTaught": [
      "2nd Year",
      "3rd Year",
      "4th Year"
    ],
    "semestersTaught": [
      "3rd Sem",
      "5th Sem",
      "7th Sem"
    ],
    "subjects": [
      {
        "code": "BAI307",
        "name": "Cryptography and Steganography",
        "year": "2nd Year",
        "semester": "3rd Sem",
        "type": "Theory + Lab"
      },
      {
        "code": "BAI407",
        "name": "Machine Learning Principles",
        "year": "3rd Year",
        "semester": "5th Sem",
        "type": "Theory + Lab"
      },
      {
        "code": "BAI507",
        "name": "Neural Networks & Deep Learning",
        "year": "4th Year",
        "semester": "7th Sem",
        "type": "Theory"
      }
    ],
    "education": [
      {
        "degree": "M.Tech (CSE)",
        "institution": "VTU / Recognized University",
        "year": "",
        "details": "Academic Qualification"
      },
      {
        "degree": "B.E (CSE)",
        "institution": "VTU / Recognized University",
        "year": "",
        "details": "Academic Qualification"
      }
    ],
    "experience": [
      {
        "role": "Assistant Professor",
        "organization": "SMVITM, Bantakal",
        "duration": "1 year 9 Months",
        "description": "Serving in the Dept. of AI & Machine Learning, leading classroom lectures, laboratory coursework, and undergraduate student project guidance."
      }
    ],
    "skills": [
      "AI-ML",
      "Curriculum Delivery",
      "Academic Mentoring",
      "Laboratory Training"
    ]
  },
  {
    "id": "lec-aiml-megha-rani",
    "userId": null,
    "name": "Ms. Megha Rani",
    "handle": "@megha_aiml",
    "aliases": [],
    "employeeId": "FAC-AIML-008",
    "designation": "Assistant Professor Senior",
    "headline": "Assistant Professor Senior \u00b7 Dept. of AI & Machine Learning | Computer Network Engineering",
    "branch": "AI-ML",
    "department": "Dept. of AI & Machine Learning",
    "location": "SMVITM Campus, Bantakal, Udupi",
    "experienceYears": "7+ years",
    "avatarChar": "M",
    "avatarBg": "#ff4500",
    "photoUrl": "https://smvitm.sode-edu.in/wp-content/uploads/2024/01/KMB_7019.jpg",
    "bannerBg": "linear-gradient(135deg, #f91880 0%, #ff4500 55%, #ff7a00 100%)",
    "verified": true,
    "verifiedType": "gold",
    "about": "Ms. Megha Rani serves as Assistant Professor Senior in the Dept. of AI & Machine Learning at Shri Madhwa Vadiraja Institute of Technology and Management (SMVITM), Bantakal. Dedicated to quality engineering education, active student mentoring, and departmental research initiatives. Core research and academic focus includes Computer Network Engineering.",
    "contact": {
      "email": "megha.cs@sode-edu.in",
      "phone": "+91 820 2589101",
      "office": "Dept. of AI & Machine Learning \u00b7 Academic Block, SMVITM",
      "officeHours": "Mon \u2013 Fri \u00b7 3:00 PM \u2013 4:30 PM",
      "linkedin": "https://www.linkedin.com/company/shri-madhwa-vadiraja-institute-of-technology-and-management/",
      "scholar": "https://scholar.google.com",
      "website": "https://smvitm.sode-edu.in/faculties/ms-megharani/"
    },
    "yearsTaught": [
      "2nd Year",
      "3rd Year",
      "4th Year"
    ],
    "semestersTaught": [
      "3rd Sem",
      "5th Sem",
      "7th Sem"
    ],
    "subjects": [
      {
        "code": "BAI308",
        "name": "Computer Network Engineering",
        "year": "2nd Year",
        "semester": "3rd Sem",
        "type": "Theory + Lab"
      },
      {
        "code": "BAI408",
        "name": "Machine Learning Principles",
        "year": "3rd Year",
        "semester": "5th Sem",
        "type": "Theory + Lab"
      },
      {
        "code": "BAI508",
        "name": "Neural Networks & Deep Learning",
        "year": "4th Year",
        "semester": "7th Sem",
        "type": "Theory"
      }
    ],
    "education": [
      {
        "degree": "B. E",
        "institution": "VTU / Recognized University",
        "year": "",
        "details": "Academic Qualification"
      },
      {
        "degree": "M. Tech",
        "institution": "VTU / Recognized University",
        "year": "",
        "details": "Academic Qualification"
      }
    ],
    "experience": [
      {
        "role": "Assistant Professor Senior",
        "organization": "SMVITM, Bantakal",
        "duration": "7 Years 2 Months",
        "description": "Serving in the Dept. of AI & Machine Learning, leading classroom lectures, laboratory coursework, and undergraduate student project guidance."
      }
    ],
    "skills": [
      "Computer Network Engineering"
    ]
  },
  {
    "id": "lec-cs-nagaraj-bhat",
    "userId": null,
    "name": "Dr. Nagaraj Bhat",
    "handle": "@nagaraj_cs",
    "aliases": [
      "Principal",
      "Head of Institution"
    ],
    "employeeId": "FAC-CS-001",
    "designation": "Professor and Principal",
    "headline": "Professor and Principal \u00b7 Dept. of Computer Science & Engineering | AI Modeling, Data Science, Remote Sensing and GIS",
    "branch": "CS",
    "department": "Dept. of Computer Science & Engineering",
    "location": "SMVITM Campus, Bantakal, Udupi",
    "experienceYears": "12+ years",
    "avatarChar": "N",
    "avatarBg": "#00ba7c",
    "photoUrl": "https://smvitm.sode-edu.in/wp-content/uploads/2015/01/NAGARAJ-BHAT-CS.jpg",
    "bannerBg": "linear-gradient(135deg, #059669 0%, #00ba7c 50%, #1d9bf0 100%)",
    "verified": true,
    "verifiedType": "gold",
    "about": "Dr. Nagaraj Bhat serves as Professor and Principal in the Dept. of Computer Science & Engineering at Shri Madhwa Vadiraja Institute of Technology and Management (SMVITM), Bantakal. Dedicated to quality engineering education, active student mentoring, and departmental research initiatives. Core research and academic focus includes AI Modeling, Data Science, Remote Sensing and GIS.",
    "contact": {
      "email": "nagarajbhat.cs@sode-edu.in",
      "phone": "+91 7676023543, Ext: 258",
      "office": "Dept. of Computer Science & Engineering \u00b7 Academic Block, SMVITM",
      "officeHours": "Mon \u2013 Fri \u00b7 3:00 PM \u2013 4:30 PM",
      "linkedin": "https://www.linkedin.com/company/shri-madhwa-vadiraja-institute-of-technology-and-management/",
      "scholar": "https://scholar.google.com",
      "website": "https://smvitm.sode-edu.in/faculties/nagaraj-bhat/"
    },
    "yearsTaught": [
      "2nd Year",
      "3rd Year",
      "4th Year"
    ],
    "semestersTaught": [
      "3rd Sem",
      "5th Sem",
      "7th Sem"
    ],
    "subjects": [
      {
        "code": "BCS301",
        "name": "AI Modeling",
        "year": "2nd Year",
        "semester": "3rd Sem",
        "type": "Theory + Lab"
      },
      {
        "code": "BCS401",
        "name": "Data Science",
        "year": "3rd Year",
        "semester": "5th Sem",
        "type": "Theory"
      },
      {
        "code": "BCS501",
        "name": "Remote Sensing and GIS",
        "year": "4th Year",
        "semester": "7th Sem",
        "type": "Theory"
      }
    ],
    "education": [
      {
        "degree": "B.E.",
        "institution": "VTU / Recognized University",
        "year": "",
        "details": "Academic Qualification"
      },
      {
        "degree": "M.Tech.",
        "institution": "VTU / Recognized University",
        "year": "",
        "details": "Academic Qualification"
      },
      {
        "degree": "Ph.D.",
        "institution": "VTU / Recognized University",
        "year": "",
        "details": "Academic Qualification"
      }
    ],
    "experience": [
      {
        "role": "Professor and Principal",
        "organization": "SMVITM, Bantakal",
        "duration": "12 Years 4 Months",
        "description": "Serving in the Dept. of Computer Science & Engineering, leading classroom lectures, laboratory coursework, and undergraduate student project guidance."
      }
    ],
    "skills": [
      "AI Modeling",
      "Data Science",
      "Remote Sensing and GIS"
    ]
  },
  {
    "id": "lec-cs-sadananda-l",
    "userId": null,
    "name": "Dr. Sadananda L",
    "handle": "@sadananda_cs",
    "aliases": [
      "HOD CS",
      "Head of Department"
    ],
    "employeeId": "FAC-CS-002",
    "designation": "Associate Professor & Head",
    "headline": "Associate Professor & Head \u00b7 Dept. of Computer Science & Engineering | Network and Internet Engineering",
    "branch": "CS",
    "department": "Dept. of Computer Science & Engineering",
    "location": "SMVITM Campus, Bantakal, Udupi",
    "experienceYears": "13+ years",
    "avatarChar": "S",
    "avatarBg": "#00ba7c",
    "photoUrl": "https://smvitm.sode-edu.in/wp-content/uploads/2024/01/KMB_7074.jpg",
    "bannerBg": "linear-gradient(135deg, #059669 0%, #00ba7c 50%, #1d9bf0 100%)",
    "verified": true,
    "verifiedType": "gold",
    "about": "Dr. Sadananda L serves as Associate Professor & Head in the Dept. of Computer Science & Engineering at Shri Madhwa Vadiraja Institute of Technology and Management (SMVITM), Bantakal. Dedicated to quality engineering education, active student mentoring, and departmental research initiatives. Core research and academic focus includes Network and Internet Engineering.",
    "contact": {
      "email": "sadananda.cs@sode-edu.in",
      "phone": "+91 9591964222",
      "office": "Dept. of Computer Science & Engineering \u00b7 Academic Block, SMVITM",
      "officeHours": "Mon \u2013 Fri \u00b7 3:00 PM \u2013 4:30 PM",
      "linkedin": "https://www.linkedin.com/company/shri-madhwa-vadiraja-institute-of-technology-and-management/",
      "scholar": "https://scholar.google.com",
      "website": "https://smvitm.sode-edu.in/faculties/sadananda-l/"
    },
    "yearsTaught": [
      "2nd Year",
      "3rd Year",
      "4th Year"
    ],
    "semestersTaught": [
      "3rd Sem",
      "5th Sem",
      "7th Sem"
    ],
    "subjects": [
      {
        "code": "BCS302",
        "name": "Network and Internet Engineering",
        "year": "2nd Year",
        "semester": "3rd Sem",
        "type": "Theory + Lab"
      },
      {
        "code": "BCS402",
        "name": "Data Structures & Algorithms",
        "year": "2nd Year",
        "semester": "3rd Sem",
        "type": "Theory + Lab"
      },
      {
        "code": "BCS502",
        "name": "Operating Systems & Systems Programming",
        "year": "3rd Year",
        "semester": "5th Sem",
        "type": "Theory"
      }
    ],
    "education": [
      {
        "degree": "BE in Computer Science and Engineering",
        "institution": "VTU / Recognized University",
        "year": "",
        "details": "Academic Qualification"
      },
      {
        "degree": "M.Tech in Network and Internet Engineering",
        "institution": "VTU / Recognized University",
        "year": "",
        "details": "Academic Qualification"
      },
      {
        "degree": "Ph.D in Computer Science and Engineering",
        "institution": "VTU / Recognized University",
        "year": "",
        "details": "Academic Qualification"
      }
    ],
    "experience": [
      {
        "role": "Associate Professor & Head",
        "organization": "SMVITM, Bantakal",
        "duration": "13 Years 2 Months",
        "description": "Serving in the Dept. of Computer Science & Engineering, leading classroom lectures, laboratory coursework, and undergraduate student project guidance."
      }
    ],
    "skills": [
      "CS",
      "Curriculum Delivery",
      "Academic Mentoring",
      "Laboratory Training"
    ]
  },
  {
    "id": "lec-cs-bharti-panjwani",
    "userId": null,
    "name": "Dr. Bharti Panjwani",
    "handle": "@bharti_cs",
    "aliases": [],
    "employeeId": "FAC-CS-003",
    "designation": "Associate Professor",
    "headline": "Associate Professor \u00b7 Dept. of Computer Science & Engineering | Meta-heuristic and evolutionary algorithms, Artificial Intelligence...",
    "branch": "CS",
    "department": "Dept. of Computer Science & Engineering",
    "location": "SMVITM Campus, Bantakal, Udupi",
    "experienceYears": "5+ years",
    "avatarChar": "B",
    "avatarBg": "#00ba7c",
    "photoUrl": "https://smvitm.sode-edu.in/wp-content/uploads/2024/01/KMB_7113.jpg",
    "bannerBg": "linear-gradient(135deg, #059669 0%, #00ba7c 50%, #1d9bf0 100%)",
    "verified": true,
    "verifiedType": "gold",
    "about": "Dr. Bharti Panjwani serves as Associate Professor in the Dept. of Computer Science & Engineering at Shri Madhwa Vadiraja Institute of Technology and Management (SMVITM), Bantakal. Dedicated to quality engineering education, active student mentoring, and departmental research initiatives. Core research and academic focus includes Meta-heuristic and evolutionary algorithms, Artificial Intelligence, Cancer Informatics, Biomedical systems.",
    "contact": {
      "email": "bharti.cs@sode-edu.in",
      "phone": "+91 820 2589101",
      "office": "Dept. of Computer Science & Engineering \u00b7 Academic Block, SMVITM",
      "officeHours": "Mon \u2013 Fri \u00b7 3:00 PM \u2013 4:30 PM",
      "linkedin": "https://www.linkedin.com/company/shri-madhwa-vadiraja-institute-of-technology-and-management/",
      "scholar": "https://scholar.google.com",
      "website": "https://smvitm.sode-edu.in/faculties/dr-bharti-panjwani/"
    },
    "yearsTaught": [
      "2nd Year",
      "3rd Year",
      "4th Year"
    ],
    "semestersTaught": [
      "3rd Sem",
      "5th Sem",
      "7th Sem"
    ],
    "subjects": [
      {
        "code": "BCS303",
        "name": "Meta-heuristic and evolutionary algorithms",
        "year": "2nd Year",
        "semester": "3rd Sem",
        "type": "Theory + Lab"
      },
      {
        "code": "BCS403",
        "name": "Artificial Intelligence",
        "year": "3rd Year",
        "semester": "5th Sem",
        "type": "Theory"
      },
      {
        "code": "BCS503",
        "name": "Cancer Informatics",
        "year": "4th Year",
        "semester": "7th Sem",
        "type": "Theory"
      }
    ],
    "education": [
      {
        "degree": "PhD",
        "institution": "VTU / Recognized University",
        "year": "",
        "details": "Academic Qualification"
      }
    ],
    "experience": [
      {
        "role": "Associate Professor",
        "organization": "SMVITM, Bantakal",
        "duration": "5 Years 6 Months",
        "description": "Serving in the Dept. of Computer Science & Engineering, leading classroom lectures, laboratory coursework, and undergraduate student project guidance."
      }
    ],
    "skills": [
      "Artificial Intelligence",
      "Cancer Informatics",
      "Biomedical systems"
    ]
  },
  {
    "id": "lec-cs-soumya-j",
    "userId": null,
    "name": "Dr. Soumya J. Bhat",
    "handle": "@soumya_cs",
    "aliases": [],
    "employeeId": "FAC-CS-004",
    "designation": "Associate Professor & Controller of Examinations",
    "headline": "Associate Professor & Controller of Examinations \u00b7 Dept. of Computer Science & Engineering | Wireless Networks",
    "branch": "CS",
    "department": "Dept. of Computer Science & Engineering",
    "location": "SMVITM Campus, Bantakal, Udupi",
    "experienceYears": "6+ years",
    "avatarChar": "S",
    "avatarBg": "#00ba7c",
    "photoUrl": "https://smvitm.sode-edu.in/wp-content/uploads/2024/01/KMB_7367.jpg",
    "bannerBg": "linear-gradient(135deg, #059669 0%, #00ba7c 50%, #1d9bf0 100%)",
    "verified": true,
    "verifiedType": "gold",
    "about": "Dr. Soumya J. Bhat serves as Associate Professor & Controller of Examinations in the Dept. of Computer Science & Engineering at Shri Madhwa Vadiraja Institute of Technology and Management (SMVITM), Bantakal. Dedicated to quality engineering education, active student mentoring, and departmental research initiatives. Core research and academic focus includes Wireless Networks.",
    "contact": {
      "email": "soumyajbhat.cs@sode-edu.in",
      "phone": "+91 9886359431",
      "office": "Dept. of Computer Science & Engineering \u00b7 Academic Block, SMVITM",
      "officeHours": "Mon \u2013 Fri \u00b7 3:00 PM \u2013 4:30 PM",
      "linkedin": "https://www.linkedin.com/company/shri-madhwa-vadiraja-institute-of-technology-and-management/",
      "scholar": "https://scholar.google.com",
      "website": "https://smvitm.sode-edu.in/faculties/soumya-j-bhat/"
    },
    "yearsTaught": [
      "2nd Year",
      "3rd Year",
      "4th Year"
    ],
    "semestersTaught": [
      "3rd Sem",
      "5th Sem",
      "7th Sem"
    ],
    "subjects": [
      {
        "code": "BCS304",
        "name": "Wireless Networks",
        "year": "2nd Year",
        "semester": "3rd Sem",
        "type": "Theory + Lab"
      },
      {
        "code": "BCS404",
        "name": "Data Structures & Algorithms",
        "year": "2nd Year",
        "semester": "3rd Sem",
        "type": "Theory + Lab"
      },
      {
        "code": "BCS504",
        "name": "Operating Systems & Systems Programming",
        "year": "3rd Year",
        "semester": "5th Sem",
        "type": "Theory"
      }
    ],
    "education": [
      {
        "degree": "PhD",
        "institution": "VTU / Recognized University",
        "year": "",
        "details": "Academic Qualification"
      },
      {
        "degree": "M.Tech.",
        "institution": "VTU / Recognized University",
        "year": "",
        "details": "Academic Qualification"
      },
      {
        "degree": "B.E.",
        "institution": "VTU / Recognized University",
        "year": "",
        "details": "Academic Qualification"
      }
    ],
    "experience": [
      {
        "role": "Associate Professor & Controller of Examinations",
        "organization": "SMVITM, Bantakal",
        "duration": "6 Years 7 Months",
        "description": "Serving in the Dept. of Computer Science & Engineering, leading classroom lectures, laboratory coursework, and undergraduate student project guidance."
      }
    ],
    "skills": [
      "Wireless Networks"
    ]
  },
  {
    "id": "lec-cs-surajit-deb",
    "userId": null,
    "name": "Dr. Surajit Deb Barma",
    "handle": "@surajit_cs",
    "aliases": [],
    "employeeId": "FAC-CS-005",
    "designation": "Assistant Professor (Selection Grade)",
    "headline": "Assistant Professor (Selection Grade) \u00b7 Dept. of Computer Science & Engineering | Geoinformatics",
    "branch": "CS",
    "department": "Dept. of Computer Science & Engineering",
    "location": "SMVITM Campus, Bantakal, Udupi",
    "experienceYears": "7+ years",
    "avatarChar": "S",
    "avatarBg": "#00ba7c",
    "photoUrl": "https://smvitm.sode-edu.in/wp-content/uploads/2025/06/Photo_with_ID.webp",
    "bannerBg": "linear-gradient(135deg, #059669 0%, #00ba7c 50%, #1d9bf0 100%)",
    "verified": true,
    "verifiedType": "gold",
    "about": "Dr. Surajit Deb Barma serves as Assistant Professor (Selection Grade) in the Dept. of Computer Science & Engineering at Shri Madhwa Vadiraja Institute of Technology and Management (SMVITM), Bantakal. Dedicated to quality engineering education, active student mentoring, and departmental research initiatives. Core research and academic focus includes Geoinformatics.",
    "contact": {
      "email": "surajit.cs@sode-edu.in",
      "phone": "+91 0820-2589183",
      "office": "Dept. of Computer Science & Engineering \u00b7 Academic Block, SMVITM",
      "officeHours": "Mon \u2013 Fri \u00b7 3:00 PM \u2013 4:30 PM",
      "linkedin": "https://www.linkedin.com/in/surajit-deb-barma-4b1309249/",
      "scholar": "https://scholar.google.com",
      "website": "https://smvitm.sode-edu.in/faculties/dr-surajit-deb-barma/"
    },
    "yearsTaught": [
      "2nd Year",
      "3rd Year",
      "4th Year"
    ],
    "semestersTaught": [
      "3rd Sem",
      "5th Sem",
      "7th Sem"
    ],
    "subjects": [
      {
        "code": "BCS305",
        "name": "Geoinformatics",
        "year": "2nd Year",
        "semester": "3rd Sem",
        "type": "Theory + Lab"
      },
      {
        "code": "BCS405",
        "name": "Data Structures & Algorithms",
        "year": "2nd Year",
        "semester": "3rd Sem",
        "type": "Theory + Lab"
      },
      {
        "code": "BCS505",
        "name": "Operating Systems & Systems Programming",
        "year": "3rd Year",
        "semester": "5th Sem",
        "type": "Theory"
      }
    ],
    "education": [
      {
        "degree": "Ph.D.",
        "institution": "VTU / Recognized University",
        "year": "",
        "details": "Academic Qualification"
      },
      {
        "degree": "M.Tech",
        "institution": "VTU / Recognized University",
        "year": "",
        "details": "Academic Qualification"
      },
      {
        "degree": "B.Tech",
        "institution": "VTU / Recognized University",
        "year": "",
        "details": "Academic Qualification"
      }
    ],
    "experience": [
      {
        "role": "Assistant Professor (Selection Grade)",
        "organization": "SMVITM, Bantakal",
        "duration": "7 Years 11 Months",
        "description": "Serving in the Dept. of Computer Science & Engineering, leading classroom lectures, laboratory coursework, and undergraduate student project guidance."
      }
    ],
    "skills": [
      "Geoinformatics"
    ]
  },
  {
    "id": "lec-cs-deepak-rao",
    "userId": null,
    "name": "Mr. Deepak Rao M",
    "handle": "@deepak_cs",
    "aliases": [],
    "employeeId": "FAC-CS-006",
    "designation": "Assistant Professor (Senior)",
    "headline": "Assistant Professor (Senior) \u00b7 Dept. of Computer Science & Engineering | Embedded Systems, Digital Electronics.",
    "branch": "CS",
    "department": "Dept. of Computer Science & Engineering",
    "location": "SMVITM Campus, Bantakal, Udupi",
    "experienceYears": "13+ years",
    "avatarChar": "D",
    "avatarBg": "#00ba7c",
    "photoUrl": "https://smvitm.sode-edu.in/wp-content/uploads/2021/01/deepak-photo_bg.webp",
    "bannerBg": "linear-gradient(135deg, #059669 0%, #00ba7c 50%, #1d9bf0 100%)",
    "verified": true,
    "verifiedType": "gold",
    "about": "Mr. Deepak Rao M serves as Assistant Professor (Senior) in the Dept. of Computer Science & Engineering at Shri Madhwa Vadiraja Institute of Technology and Management (SMVITM), Bantakal. Dedicated to quality engineering education, active student mentoring, and departmental research initiatives. Core research and academic focus includes Embedded Systems, Digital Electronics..",
    "contact": {
      "email": "deepakraom[dot]cs[at]sode[-]edu[dot]in",
      "phone": "+91 9743083663",
      "office": "Dept. of Computer Science & Engineering \u00b7 Academic Block, SMVITM",
      "officeHours": "Mon \u2013 Fri \u00b7 3:00 PM \u2013 4:30 PM",
      "linkedin": "https://in.linkedin.com/in/deepak-rao-m-461a6173",
      "scholar": "https://scholar.google.com",
      "website": "https://smvitm.sode-edu.in/faculties/deepak-rao-m/"
    },
    "yearsTaught": [
      "2nd Year",
      "3rd Year",
      "4th Year"
    ],
    "semestersTaught": [
      "3rd Sem",
      "5th Sem",
      "7th Sem"
    ],
    "subjects": [
      {
        "code": "BCS306",
        "name": "Embedded Systems",
        "year": "2nd Year",
        "semester": "3rd Sem",
        "type": "Theory + Lab"
      },
      {
        "code": "BCS406",
        "name": "Digital Electronics.",
        "year": "3rd Year",
        "semester": "5th Sem",
        "type": "Theory"
      }
    ],
    "education": [
      {
        "degree": "B. E. (Information Science and Engineering)",
        "institution": "VTU / Recognized University",
        "year": "",
        "details": "Academic Qualification"
      },
      {
        "degree": "M. Tech (Computer Science and Engineering)",
        "institution": "VTU / Recognized University",
        "year": "",
        "details": "Academic Qualification"
      }
    ],
    "experience": [
      {
        "role": "Assistant Professor (Senior)",
        "organization": "SMVITM, Bantakal",
        "duration": "13 Years 10 Months",
        "description": "Serving in the Dept. of Computer Science & Engineering, leading classroom lectures, laboratory coursework, and undergraduate student project guidance."
      }
    ],
    "skills": [
      "Embedded Systems",
      "Digital Electronics."
    ]
  },
  {
    "id": "lec-cs-raghavendra-g",
    "userId": null,
    "name": "Mr. Raghavendra G. S.",
    "handle": "@raghavendra_cs",
    "aliases": [],
    "employeeId": "FAC-CS-007",
    "designation": "Assistant Professor (Senior)",
    "headline": "Assistant Professor (Senior) \u00b7 Dept. of Computer Science & Engineering | Artificial Intelligence, Data Science, Web Development, Operating S...",
    "branch": "CS",
    "department": "Dept. of Computer Science & Engineering",
    "location": "SMVITM Campus, Bantakal, Udupi",
    "experienceYears": "7+ years",
    "avatarChar": "R",
    "avatarBg": "#00ba7c",
    "photoUrl": "https://smvitm.sode-edu.in/wp-content/uploads/2023/09/pp2.png",
    "bannerBg": "linear-gradient(135deg, #059669 0%, #00ba7c 50%, #1d9bf0 100%)",
    "verified": true,
    "verifiedType": "gold",
    "about": "Mr. Raghavendra G. S. serves as Assistant Professor (Senior) in the Dept. of Computer Science & Engineering at Shri Madhwa Vadiraja Institute of Technology and Management (SMVITM), Bantakal. Dedicated to quality engineering education, active student mentoring, and departmental research initiatives. Core research and academic focus includes Artificial Intelligence, Data Science, Web Development, Operating Systems, Virtualization, Database Systems, Digital Arts & Media..",
    "contact": {
      "email": "raghugs.cs@sode-edu.in",
      "phone": "+91 820 2589101",
      "office": "Dept. of Computer Science & Engineering \u00b7 Academic Block, SMVITM",
      "officeHours": "Mon \u2013 Fri \u00b7 3:00 PM \u2013 4:30 PM",
      "linkedin": "https://www.linkedin.com/company/shri-madhwa-vadiraja-institute-of-technology-and-management/",
      "scholar": "https://scholar.google.com",
      "website": "https://smvitm.sode-edu.in/faculties/mr-raghavendra-g-s/"
    },
    "yearsTaught": [
      "2nd Year",
      "3rd Year",
      "4th Year"
    ],
    "semestersTaught": [
      "3rd Sem",
      "5th Sem",
      "7th Sem"
    ],
    "subjects": [
      {
        "code": "BCS307",
        "name": "Artificial Intelligence",
        "year": "2nd Year",
        "semester": "3rd Sem",
        "type": "Theory + Lab"
      },
      {
        "code": "BCS407",
        "name": "Data Science",
        "year": "3rd Year",
        "semester": "5th Sem",
        "type": "Theory"
      },
      {
        "code": "BCS507",
        "name": "Web Development",
        "year": "4th Year",
        "semester": "7th Sem",
        "type": "Theory"
      }
    ],
    "education": [
      {
        "degree": "B. E.",
        "institution": "VTU / Recognized University",
        "year": "",
        "details": "Academic Qualification"
      },
      {
        "degree": "M. E.",
        "institution": "VTU / Recognized University",
        "year": "",
        "details": "Academic Qualification"
      }
    ],
    "experience": [
      {
        "role": "Assistant Professor (Senior)",
        "organization": "SMVITM, Bantakal",
        "duration": "7 Years 4 Months",
        "description": "Serving in the Dept. of Computer Science & Engineering, leading classroom lectures, laboratory coursework, and undergraduate student project guidance."
      }
    ],
    "skills": [
      "Artificial Intelligence",
      "Data Science",
      "Web Development",
      "Operating Systems",
      "Virtualization",
      "Database Systems"
    ]
  },
  {
    "id": "lec-cs-raghavendra-joshi",
    "userId": null,
    "name": "Mr. Raghavendra Joshi",
    "handle": "@raghavendra_cs2",
    "aliases": [],
    "employeeId": "FAC-CS-008",
    "designation": "Assistant Professor",
    "headline": "Assistant Professor \u00b7 Dept. of Computer Science & Engineering",
    "branch": "CS",
    "department": "Dept. of Computer Science & Engineering",
    "location": "SMVITM Campus, Bantakal, Udupi",
    "experienceYears": "12+ years",
    "avatarChar": "R",
    "avatarBg": "#00ba7c",
    "photoUrl": "https://smvitm.sode-edu.in/wp-content/uploads/2025/07/Raghavendra-Joshi.webp",
    "bannerBg": "linear-gradient(135deg, #059669 0%, #00ba7c 50%, #1d9bf0 100%)",
    "verified": true,
    "verifiedType": "gold",
    "about": "Mr. Raghavendra Joshi serves as Assistant Professor in the Dept. of Computer Science & Engineering at Shri Madhwa Vadiraja Institute of Technology and Management (SMVITM), Bantakal. Dedicated to quality engineering education, active student mentoring, and departmental research initiatives.",
    "contact": {
      "email": "raghavendraj.cs@sode-edu.in",
      "phone": "+91 9964072053",
      "office": "Dept. of Computer Science & Engineering \u00b7 Academic Block, SMVITM",
      "officeHours": "Mon \u2013 Fri \u00b7 3:00 PM \u2013 4:30 PM",
      "linkedin": "https://www.linkedin.com/company/shri-madhwa-vadiraja-institute-of-technology-and-management/",
      "scholar": "https://scholar.google.com",
      "website": "https://smvitm.sode-edu.in/faculties/mr-raghavendra-joshi/"
    },
    "yearsTaught": [
      "2nd Year",
      "3rd Year",
      "4th Year"
    ],
    "semestersTaught": [
      "3rd Sem",
      "5th Sem",
      "7th Sem"
    ],
    "subjects": [
      {
        "code": "BCS408",
        "name": "Data Structures & Algorithms",
        "year": "2nd Year",
        "semester": "3rd Sem",
        "type": "Theory + Lab"
      },
      {
        "code": "BCS508",
        "name": "Operating Systems & Systems Programming",
        "year": "3rd Year",
        "semester": "5th Sem",
        "type": "Theory"
      },
      {
        "code": "BCS608",
        "name": "Database Management Systems & SQL",
        "year": "2nd Year",
        "semester": "4th Sem",
        "type": "Theory + Lab"
      }
    ],
    "education": [
      {
        "degree": "M.Tech (CSE)",
        "institution": "VTU / Recognized University",
        "year": "",
        "details": "Academic Qualification"
      },
      {
        "degree": "B.E (CSE)",
        "institution": "VTU / Recognized University",
        "year": "",
        "details": "Academic Qualification"
      }
    ],
    "experience": [
      {
        "role": "Assistant Professor",
        "organization": "SMVITM, Bantakal",
        "duration": "12 Years 4 Months",
        "description": "Serving in the Dept. of Computer Science & Engineering, leading classroom lectures, laboratory coursework, and undergraduate student project guidance."
      }
    ],
    "skills": [
      "CS",
      "Curriculum Delivery",
      "Academic Mentoring",
      "Laboratory Training"
    ]
  },
  {
    "id": "lec-cs-preethi-m",
    "userId": null,
    "name": "Mrs. Preethi M.",
    "handle": "@preethi_cs",
    "aliases": [],
    "employeeId": "FAC-CS-009",
    "designation": "Assistant Professor (Senior)",
    "headline": "Assistant Professor (Senior) \u00b7 Dept. of Computer Science & Engineering | Computer Science and Engineering",
    "branch": "CS",
    "department": "Dept. of Computer Science & Engineering",
    "location": "SMVITM Campus, Bantakal, Udupi",
    "experienceYears": "8+ years",
    "avatarChar": "P",
    "avatarBg": "#00ba7c",
    "photoUrl": "https://smvitm.sode-edu.in/wp-content/uploads/2024/01/KMB_7084.jpg",
    "bannerBg": "linear-gradient(135deg, #059669 0%, #00ba7c 50%, #1d9bf0 100%)",
    "verified": true,
    "verifiedType": "gold",
    "about": "Mrs. Preethi M. serves as Assistant Professor (Senior) in the Dept. of Computer Science & Engineering at Shri Madhwa Vadiraja Institute of Technology and Management (SMVITM), Bantakal. Dedicated to quality engineering education, active student mentoring, and departmental research initiatives. Core research and academic focus includes Computer Science and Engineering.",
    "contact": {
      "email": "preethi.cs@sode-edu.in",
      "phone": "+91 820 2589101",
      "office": "Dept. of Computer Science & Engineering \u00b7 Academic Block, SMVITM",
      "officeHours": "Mon \u2013 Fri \u00b7 3:00 PM \u2013 4:30 PM",
      "linkedin": "https://www.linkedin.com/company/shri-madhwa-vadiraja-institute-of-technology-and-management/",
      "scholar": "https://scholar.google.com",
      "website": "https://smvitm.sode-edu.in/faculties/mr-preethi-m/"
    },
    "yearsTaught": [
      "2nd Year",
      "3rd Year",
      "4th Year"
    ],
    "semestersTaught": [
      "3rd Sem",
      "5th Sem",
      "7th Sem"
    ],
    "subjects": [
      {
        "code": "BCS309",
        "name": "Computer Science and Engineering",
        "year": "2nd Year",
        "semester": "3rd Sem",
        "type": "Theory + Lab"
      },
      {
        "code": "BCS409",
        "name": "Data Structures & Algorithms",
        "year": "2nd Year",
        "semester": "3rd Sem",
        "type": "Theory + Lab"
      },
      {
        "code": "BCS509",
        "name": "Operating Systems & Systems Programming",
        "year": "3rd Year",
        "semester": "5th Sem",
        "type": "Theory"
      }
    ],
    "education": [
      {
        "degree": "B. E.",
        "institution": "VTU / Recognized University",
        "year": "",
        "details": "Academic Qualification"
      },
      {
        "degree": "M. Tech.",
        "institution": "VTU / Recognized University",
        "year": "",
        "details": "Academic Qualification"
      }
    ],
    "experience": [
      {
        "role": "Assistant Professor (Senior)",
        "organization": "SMVITM, Bantakal",
        "duration": "8 Years 3 Months",
        "description": "Serving in the Dept. of Computer Science & Engineering, leading classroom lectures, laboratory coursework, and undergraduate student project guidance."
      }
    ],
    "skills": [
      "CS",
      "Curriculum Delivery",
      "Academic Mentoring",
      "Laboratory Training"
    ]
  },
  {
    "id": "lec-cs-ashritha-k",
    "userId": null,
    "name": "Ms. Ashritha K P",
    "handle": "@ashritha_cs",
    "aliases": [],
    "employeeId": "FAC-CS-010",
    "designation": "Assistant Professor",
    "headline": "Assistant Professor \u00b7 Dept. of Computer Science & Engineering | Data Mining, Data Science, Artificial Intelligence and Machine Lear...",
    "branch": "CS",
    "department": "Dept. of Computer Science & Engineering",
    "location": "SMVITM Campus, Bantakal, Udupi",
    "experienceYears": "3.2+ years",
    "avatarChar": "A",
    "avatarBg": "#00ba7c",
    "photoUrl": "https://smvitm.sode-edu.in/wp-content/uploads/2025/01/IMG_2741-ashritha.jpg",
    "bannerBg": "linear-gradient(135deg, #059669 0%, #00ba7c 50%, #1d9bf0 100%)",
    "verified": true,
    "verifiedType": "gold",
    "about": "Ms. Ashritha K P serves as Assistant Professor in the Dept. of Computer Science & Engineering at Shri Madhwa Vadiraja Institute of Technology and Management (SMVITM), Bantakal. Dedicated to quality engineering education, active student mentoring, and departmental research initiatives. Core research and academic focus includes Data Mining, Data Science, Artificial Intelligence and Machine Learning, Programming in C, C++, Python, Operating Systems..",
    "contact": {
      "email": "ashritha.cs@sode-edu.in",
      "phone": "+91 9964750859",
      "office": "Dept. of Computer Science & Engineering \u00b7 Academic Block, SMVITM",
      "officeHours": "Mon \u2013 Fri \u00b7 3:00 PM \u2013 4:30 PM",
      "linkedin": "https://www.linkedin.com/company/shri-madhwa-vadiraja-institute-of-technology-and-management/",
      "scholar": "https://scholar.google.com",
      "website": "https://smvitm.sode-edu.in/faculties/ms-ashritha-k-p/"
    },
    "yearsTaught": [
      "2nd Year",
      "3rd Year",
      "4th Year"
    ],
    "semestersTaught": [
      "3rd Sem",
      "5th Sem",
      "7th Sem"
    ],
    "subjects": [
      {
        "code": "BCS310",
        "name": "Data Mining",
        "year": "2nd Year",
        "semester": "3rd Sem",
        "type": "Theory + Lab"
      },
      {
        "code": "BCS410",
        "name": "Data Science",
        "year": "3rd Year",
        "semester": "5th Sem",
        "type": "Theory"
      },
      {
        "code": "BCS510",
        "name": "Artificial Intelligence and Machine Learning",
        "year": "4th Year",
        "semester": "7th Sem",
        "type": "Theory"
      }
    ],
    "education": [
      {
        "degree": "M.Tech(Computer Science and Engineering)",
        "institution": "VTU / Recognized University",
        "year": "",
        "details": "Academic Qualification"
      },
      {
        "degree": "B.E(Computer Science and Engineering)",
        "institution": "VTU / Recognized University",
        "year": "",
        "details": "Academic Qualification"
      }
    ],
    "experience": [
      {
        "role": "Assistant Professor",
        "organization": "SMVITM, Bantakal",
        "duration": "3.2 Years 10 Months",
        "description": "Serving in the Dept. of Computer Science & Engineering, leading classroom lectures, laboratory coursework, and undergraduate student project guidance."
      }
    ],
    "skills": [
      "Data Mining",
      "Data Science",
      "Programming in C",
      "Python",
      "Operating Systems."
    ]
  },
  {
    "id": "lec-cs-ashwitha-c",
    "userId": null,
    "name": "Ms. Ashwitha C Thomas",
    "handle": "@ashwitha_cs",
    "aliases": [],
    "employeeId": "FAC-CS-011",
    "designation": "Assistant Professor",
    "headline": "Assistant Professor \u00b7 Dept. of Computer Science & Engineering",
    "branch": "CS",
    "department": "Dept. of Computer Science & Engineering",
    "location": "SMVITM Campus, Bantakal, Udupi",
    "experienceYears": "4.7+ years",
    "avatarChar": "A",
    "avatarBg": "#00ba7c",
    "photoUrl": "https://smvitm.sode-edu.in/wp-content/uploads/2025/07/DSC_0549-.webp",
    "bannerBg": "linear-gradient(135deg, #059669 0%, #00ba7c 50%, #1d9bf0 100%)",
    "verified": true,
    "verifiedType": "gold",
    "about": "Ms. Ashwitha C Thomas serves as Assistant Professor in the Dept. of Computer Science & Engineering at Shri Madhwa Vadiraja Institute of Technology and Management (SMVITM), Bantakal. Dedicated to quality engineering education, active student mentoring, and departmental research initiatives.",
    "contact": {
      "email": "ashwithac.cs@sode-edu.in",
      "phone": "+91 9900656796",
      "office": "Dept. of Computer Science & Engineering \u00b7 Academic Block, SMVITM",
      "officeHours": "Mon \u2013 Fri \u00b7 3:00 PM \u2013 4:30 PM",
      "linkedin": "https://www.linkedin.com/company/shri-madhwa-vadiraja-institute-of-technology-and-management/",
      "scholar": "https://scholar.google.com",
      "website": "https://smvitm.sode-edu.in/faculties/ms-ashwitha-c-thomas/"
    },
    "yearsTaught": [
      "2nd Year",
      "3rd Year",
      "4th Year"
    ],
    "semestersTaught": [
      "3rd Sem",
      "5th Sem",
      "7th Sem"
    ],
    "subjects": [
      {
        "code": "BCS411",
        "name": "Data Structures & Algorithms",
        "year": "2nd Year",
        "semester": "3rd Sem",
        "type": "Theory + Lab"
      },
      {
        "code": "BCS511",
        "name": "Operating Systems & Systems Programming",
        "year": "3rd Year",
        "semester": "5th Sem",
        "type": "Theory"
      },
      {
        "code": "BCS611",
        "name": "Database Management Systems & SQL",
        "year": "2nd Year",
        "semester": "4th Sem",
        "type": "Theory + Lab"
      }
    ],
    "education": [
      {
        "degree": "B.E",
        "institution": "VTU / Recognized University",
        "year": "",
        "details": "Academic Qualification"
      },
      {
        "degree": "M.Tech",
        "institution": "VTU / Recognized University",
        "year": "",
        "details": "Academic Qualification"
      }
    ],
    "experience": [
      {
        "role": "Assistant Professor",
        "organization": "SMVITM, Bantakal",
        "duration": "4.7 Years 4 Months",
        "description": "Serving in the Dept. of Computer Science & Engineering, leading classroom lectures, laboratory coursework, and undergraduate student project guidance."
      }
    ],
    "skills": [
      "CS",
      "Curriculum Delivery",
      "Academic Mentoring",
      "Laboratory Training"
    ]
  },
  {
    "id": "lec-cs-babitha-poojary",
    "userId": null,
    "name": "Ms. Babitha Poojary",
    "handle": "@babitha_cs",
    "aliases": [],
    "employeeId": "FAC-CS-012",
    "designation": "Assistant Professor",
    "headline": "Assistant Professor \u00b7 Dept. of Computer Science & Engineering | Digital communication and Networking",
    "branch": "CS",
    "department": "Dept. of Computer Science & Engineering",
    "location": "SMVITM Campus, Bantakal, Udupi",
    "experienceYears": "5+ years",
    "avatarChar": "B",
    "avatarBg": "#00ba7c",
    "photoUrl": "https://smvitm.sode-edu.in/wp-content/uploads/2024/01/KMB_7135.jpg",
    "bannerBg": "linear-gradient(135deg, #059669 0%, #00ba7c 50%, #1d9bf0 100%)",
    "verified": true,
    "verifiedType": "gold",
    "about": "Ms. Babitha Poojary serves as Assistant Professor in the Dept. of Computer Science & Engineering at Shri Madhwa Vadiraja Institute of Technology and Management (SMVITM), Bantakal. Dedicated to quality engineering education, active student mentoring, and departmental research initiatives. Core research and academic focus includes Digital communication and Networking.",
    "contact": {
      "email": "babitha.cs@sode-edu.in",
      "phone": "+91 9972365616",
      "office": "Dept. of Computer Science & Engineering \u00b7 Academic Block, SMVITM",
      "officeHours": "Mon \u2013 Fri \u00b7 3:00 PM \u2013 4:30 PM",
      "linkedin": "https://www.linkedin.com/company/shri-madhwa-vadiraja-institute-of-technology-and-management/",
      "scholar": "https://scholar.google.com",
      "website": "https://smvitm.sode-edu.in/faculties/ms-babitha-poojary/"
    },
    "yearsTaught": [
      "2nd Year",
      "3rd Year",
      "4th Year"
    ],
    "semestersTaught": [
      "3rd Sem",
      "5th Sem",
      "7th Sem"
    ],
    "subjects": [
      {
        "code": "BCS312",
        "name": "Digital communication and Networking",
        "year": "2nd Year",
        "semester": "3rd Sem",
        "type": "Theory + Lab"
      },
      {
        "code": "BCS412",
        "name": "Data Structures & Algorithms",
        "year": "2nd Year",
        "semester": "3rd Sem",
        "type": "Theory + Lab"
      },
      {
        "code": "BCS512",
        "name": "Operating Systems & Systems Programming",
        "year": "3rd Year",
        "semester": "5th Sem",
        "type": "Theory"
      }
    ],
    "education": [
      {
        "degree": "B. E.",
        "institution": "VTU / Recognized University",
        "year": "",
        "details": "Academic Qualification"
      },
      {
        "degree": "M. Tech",
        "institution": "VTU / Recognized University",
        "year": "",
        "details": "Academic Qualification"
      }
    ],
    "experience": [
      {
        "role": "Assistant Professor",
        "organization": "SMVITM, Bantakal",
        "duration": "5 Years 1 month",
        "description": "Serving in the Dept. of Computer Science & Engineering, leading classroom lectures, laboratory coursework, and undergraduate student project guidance."
      }
    ],
    "skills": [
      "CS",
      "Curriculum Delivery",
      "Academic Mentoring",
      "Laboratory Training"
    ]
  },
  {
    "id": "lec-cs-jovita-relasha",
    "userId": null,
    "name": "Ms. Jovita Relasha Lewis",
    "handle": "@jovita_cs",
    "aliases": [],
    "employeeId": "FAC-CS-013",
    "designation": "Assistant Professor",
    "headline": "Assistant Professor \u00b7 Dept. of Computer Science & Engineering | Medical Image Analysis, Segmentation, Classification, Endoscopic Im...",
    "branch": "CS",
    "department": "Dept. of Computer Science & Engineering",
    "location": "SMVITM Campus, Bantakal, Udupi",
    "experienceYears": "6+ years",
    "avatarChar": "J",
    "avatarBg": "#00ba7c",
    "photoUrl": "https://smvitm.sode-edu.in/wp-content/uploads/2026/08/85187.webp",
    "bannerBg": "linear-gradient(135deg, #059669 0%, #00ba7c 50%, #1d9bf0 100%)",
    "verified": true,
    "verifiedType": "gold",
    "about": "Ms. Jovita Relasha Lewis serves as Assistant Professor in the Dept. of Computer Science & Engineering at Shri Madhwa Vadiraja Institute of Technology and Management (SMVITM), Bantakal. Dedicated to quality engineering education, active student mentoring, and departmental research initiatives. Core research and academic focus includes Medical Image Analysis, Segmentation, Classification, Endoscopic Images, Deep Learning and Computer Vision.",
    "contact": {
      "email": "jovita.cs@sode-edu.in",
      "phone": "+91 8861938070",
      "office": "Dept. of Computer Science & Engineering \u00b7 Academic Block, SMVITM",
      "officeHours": "Mon \u2013 Fri \u00b7 3:00 PM \u2013 4:30 PM",
      "linkedin": "https://www.linkedin.com/company/shri-madhwa-vadiraja-institute-of-technology-and-management/",
      "scholar": "https://scholar.google.com",
      "website": "https://smvitm.sode-edu.in/faculties/ms-jovita-relasha-lewis/"
    },
    "yearsTaught": [
      "2nd Year",
      "3rd Year",
      "4th Year"
    ],
    "semestersTaught": [
      "3rd Sem",
      "5th Sem",
      "7th Sem"
    ],
    "subjects": [
      {
        "code": "BCS313",
        "name": "Medical Image Analysis",
        "year": "2nd Year",
        "semester": "3rd Sem",
        "type": "Theory + Lab"
      },
      {
        "code": "BCS413",
        "name": "Segmentation",
        "year": "3rd Year",
        "semester": "5th Sem",
        "type": "Theory"
      },
      {
        "code": "BCS513",
        "name": "Classification",
        "year": "4th Year",
        "semester": "7th Sem",
        "type": "Theory"
      }
    ],
    "education": [
      {
        "degree": "BE (Computer Science and Engineering)",
        "institution": "VTU / Recognized University",
        "year": "",
        "details": "Academic Qualification"
      },
      {
        "degree": "MSc (Computer Science and Application)",
        "institution": "VTU / Recognized University",
        "year": "",
        "details": "Academic Qualification"
      },
      {
        "degree": "(Ph.D.)",
        "institution": "VTU / Recognized University",
        "year": "",
        "details": "Academic Qualification"
      }
    ],
    "experience": [
      {
        "role": "Assistant Professor",
        "organization": "SMVITM, Bantakal",
        "duration": "6 Years 4 Months",
        "description": "Serving in the Dept. of Computer Science & Engineering, leading classroom lectures, laboratory coursework, and undergraduate student project guidance."
      }
    ],
    "skills": [
      "Medical Image Analysis",
      "Segmentation",
      "Classification",
      "Endoscopic Images"
    ]
  },
  {
    "id": "lec-cs-m-s",
    "userId": null,
    "name": "Ms. M.s. Rajeshwari",
    "handle": "@ms_cs",
    "aliases": [],
    "employeeId": "FAC-CS-014",
    "designation": "Assistant Professor",
    "headline": "Assistant Professor \u00b7 Dept. of Computer Science & Engineering | Computer Science and Engineering",
    "branch": "CS",
    "department": "Dept. of Computer Science & Engineering",
    "location": "SMVITM Campus, Bantakal, Udupi",
    "experienceYears": "1+ years",
    "avatarChar": "M",
    "avatarBg": "#00ba7c",
    "photoUrl": "https://smvitm.sode-edu.in/wp-content/uploads/2025/07/M.S.-Rajeshwari.webp",
    "bannerBg": "linear-gradient(135deg, #059669 0%, #00ba7c 50%, #1d9bf0 100%)",
    "verified": true,
    "verifiedType": "gold",
    "about": "Ms. M.s. Rajeshwari serves as Assistant Professor in the Dept. of Computer Science & Engineering at Shri Madhwa Vadiraja Institute of Technology and Management (SMVITM), Bantakal. Dedicated to quality engineering education, active student mentoring, and departmental research initiatives. Core research and academic focus includes Computer Science and Engineering.",
    "contact": {
      "email": "rajeshwaris.cs@sode-edu.in",
      "phone": "+91 6360980426",
      "office": "Dept. of Computer Science & Engineering \u00b7 Academic Block, SMVITM",
      "officeHours": "Mon \u2013 Fri \u00b7 3:00 PM \u2013 4:30 PM",
      "linkedin": "https://www.linkedin.com/company/shri-madhwa-vadiraja-institute-of-technology-and-management/",
      "scholar": "https://scholar.google.com",
      "website": "https://smvitm.sode-edu.in/faculties/ms-rajeshwari/"
    },
    "yearsTaught": [
      "2nd Year",
      "3rd Year",
      "4th Year"
    ],
    "semestersTaught": [
      "3rd Sem",
      "5th Sem",
      "7th Sem"
    ],
    "subjects": [
      {
        "code": "BCS314",
        "name": "Computer Science and Engineering",
        "year": "2nd Year",
        "semester": "3rd Sem",
        "type": "Theory + Lab"
      },
      {
        "code": "BCS414",
        "name": "Data Structures & Algorithms",
        "year": "2nd Year",
        "semester": "3rd Sem",
        "type": "Theory + Lab"
      },
      {
        "code": "BCS514",
        "name": "Operating Systems & Systems Programming",
        "year": "3rd Year",
        "semester": "5th Sem",
        "type": "Theory"
      }
    ],
    "education": [
      {
        "degree": "M.Tech (CSE)",
        "institution": "VTU / Recognized University",
        "year": "",
        "details": "Academic Qualification"
      },
      {
        "degree": "B.E (CSE)",
        "institution": "VTU / Recognized University",
        "year": "",
        "details": "Academic Qualification"
      }
    ],
    "experience": [
      {
        "role": "Assistant Professor",
        "organization": "SMVITM, Bantakal",
        "duration": "1 year 4 Months",
        "description": "Serving in the Dept. of Computer Science & Engineering, leading classroom lectures, laboratory coursework, and undergraduate student project guidance."
      }
    ],
    "skills": [
      "CS",
      "Curriculum Delivery",
      "Academic Mentoring",
      "Laboratory Training"
    ]
  },
  {
    "id": "lec-cs-mahadevi",
    "userId": null,
    "name": "Ms. Mahadevi",
    "handle": "@mahadevi_cs",
    "aliases": [],
    "employeeId": "FAC-CS-015",
    "designation": "Assistant Professor",
    "headline": "Assistant Professor \u00b7 Dept. of Computer Science & Engineering",
    "branch": "CS",
    "department": "Dept. of Computer Science & Engineering",
    "location": "SMVITM Campus, Bantakal, Udupi",
    "experienceYears": "6.9+ years",
    "avatarChar": "M",
    "avatarBg": "#00ba7c",
    "photoUrl": "https://smvitm.sode-edu.in/wp-content/uploads/2024/01/KMB_7062.jpg",
    "bannerBg": "linear-gradient(135deg, #059669 0%, #00ba7c 50%, #1d9bf0 100%)",
    "verified": true,
    "verifiedType": "gold",
    "about": "Ms. Mahadevi serves as Assistant Professor in the Dept. of Computer Science & Engineering at Shri Madhwa Vadiraja Institute of Technology and Management (SMVITM), Bantakal. Dedicated to quality engineering education, active student mentoring, and departmental research initiatives.",
    "contact": {
      "email": "mahadevi.cs@sode-edu.in",
      "phone": "+91 9008513197",
      "office": "Dept. of Computer Science & Engineering \u00b7 Academic Block, SMVITM",
      "officeHours": "Mon \u2013 Fri \u00b7 3:00 PM \u2013 4:30 PM",
      "linkedin": "https://www.linkedin.com/company/shri-madhwa-vadiraja-institute-of-technology-and-management/",
      "scholar": "https://scholar.google.com",
      "website": "https://smvitm.sode-edu.in/faculties/ms-mahadevi/"
    },
    "yearsTaught": [
      "2nd Year",
      "3rd Year",
      "4th Year"
    ],
    "semestersTaught": [
      "3rd Sem",
      "5th Sem",
      "7th Sem"
    ],
    "subjects": [
      {
        "code": "BCS415",
        "name": "Data Structures & Algorithms",
        "year": "2nd Year",
        "semester": "3rd Sem",
        "type": "Theory + Lab"
      },
      {
        "code": "BCS515",
        "name": "Operating Systems & Systems Programming",
        "year": "3rd Year",
        "semester": "5th Sem",
        "type": "Theory"
      },
      {
        "code": "BCS615",
        "name": "Database Management Systems & SQL",
        "year": "2nd Year",
        "semester": "4th Sem",
        "type": "Theory + Lab"
      }
    ],
    "education": [
      {
        "degree": "B. E",
        "institution": "VTU / Recognized University",
        "year": "",
        "details": "Academic Qualification"
      },
      {
        "degree": "M. Tech",
        "institution": "VTU / Recognized University",
        "year": "",
        "details": "Academic Qualification"
      }
    ],
    "experience": [
      {
        "role": "Assistant Professor",
        "organization": "SMVITM, Bantakal",
        "duration": "6.9 Years 2 Months",
        "description": "Serving in the Dept. of Computer Science & Engineering, leading classroom lectures, laboratory coursework, and undergraduate student project guidance."
      }
    ],
    "skills": [
      "CS",
      "Curriculum Delivery",
      "Academic Mentoring",
      "Laboratory Training"
    ]
  },
  {
    "id": "lec-cs-pallavi-nayak",
    "userId": null,
    "name": "Ms. Pallavi Nayak",
    "handle": "@pallavi_cs",
    "aliases": [],
    "employeeId": "FAC-CS-016",
    "designation": "Assistant Professor",
    "headline": "Assistant Professor \u00b7 Dept. of Computer Science & Engineering | Artificial Intelligence, Machine Learning,",
    "branch": "CS",
    "department": "Dept. of Computer Science & Engineering",
    "location": "SMVITM Campus, Bantakal, Udupi",
    "experienceYears": "4+ years",
    "avatarChar": "P",
    "avatarBg": "#00ba7c",
    "photoUrl": "https://smvitm.sode-edu.in/wp-content/uploads/2026/07/Ms.-Pallavi-Nayak.webp",
    "bannerBg": "linear-gradient(135deg, #059669 0%, #00ba7c 50%, #1d9bf0 100%)",
    "verified": true,
    "verifiedType": "gold",
    "about": "Ms. Pallavi Nayak serves as Assistant Professor in the Dept. of Computer Science & Engineering at Shri Madhwa Vadiraja Institute of Technology and Management (SMVITM), Bantakal. Dedicated to quality engineering education, active student mentoring, and departmental research initiatives. Core research and academic focus includes Artificial Intelligence, Machine Learning,.",
    "contact": {
      "email": "pallavin.cs@sode-edu.in",
      "phone": "+91 9844421859",
      "office": "Dept. of Computer Science & Engineering \u00b7 Academic Block, SMVITM",
      "officeHours": "Mon \u2013 Fri \u00b7 3:00 PM \u2013 4:30 PM",
      "linkedin": "https://www.linkedin.com/company/shri-madhwa-vadiraja-institute-of-technology-and-management/",
      "scholar": "https://scholar.google.com",
      "website": "https://smvitm.sode-edu.in/faculties/ms-pallavi-nayak/"
    },
    "yearsTaught": [
      "2nd Year",
      "3rd Year",
      "4th Year"
    ],
    "semestersTaught": [
      "3rd Sem",
      "5th Sem",
      "7th Sem"
    ],
    "subjects": [
      {
        "code": "BCS316",
        "name": "Artificial Intelligence",
        "year": "2nd Year",
        "semester": "3rd Sem",
        "type": "Theory + Lab"
      },
      {
        "code": "BCS416",
        "name": "Machine Learning",
        "year": "3rd Year",
        "semester": "5th Sem",
        "type": "Theory"
      }
    ],
    "education": [
      {
        "degree": "MS (IT Security)",
        "institution": "VTU / Recognized University",
        "year": "",
        "details": "Academic Qualification"
      }
    ],
    "experience": [
      {
        "role": "Assistant Professor",
        "organization": "SMVITM, Bantakal",
        "duration": "4 Years 4 Months",
        "description": "Serving in the Dept. of Computer Science & Engineering, leading classroom lectures, laboratory coursework, and undergraduate student project guidance."
      }
    ],
    "skills": [
      "Artificial Intelligence",
      "Machine Learning"
    ]
  },
  {
    "id": "lec-cs-r-soundharya",
    "userId": null,
    "name": "Ms. R Soundharya",
    "handle": "@rsoundharya_cs",
    "aliases": [],
    "employeeId": "FAC-CS-017",
    "designation": "Assistant Professor",
    "headline": "Assistant Professor \u00b7 Dept. of Computer Science & Engineering | Computer Science",
    "branch": "CS",
    "department": "Dept. of Computer Science & Engineering",
    "location": "SMVITM Campus, Bantakal, Udupi",
    "experienceYears": "4+ years",
    "avatarChar": "R",
    "avatarBg": "#00ba7c",
    "photoUrl": "https://smvitm.sode-edu.in/wp-content/uploads/2021/01/IMG_20250925_141123-removebg.webp",
    "bannerBg": "linear-gradient(135deg, #059669 0%, #00ba7c 50%, #1d9bf0 100%)",
    "verified": true,
    "verifiedType": "gold",
    "about": "Ms. R Soundharya serves as Assistant Professor in the Dept. of Computer Science & Engineering at Shri Madhwa Vadiraja Institute of Technology and Management (SMVITM), Bantakal. Dedicated to quality engineering education, active student mentoring, and departmental research initiatives. Core research and academic focus includes Computer Science.",
    "contact": {
      "email": "soundharya.cs@sode-edu.in",
      "phone": "+91 820 2589101",
      "office": "Dept. of Computer Science & Engineering \u00b7 Academic Block, SMVITM",
      "officeHours": "Mon \u2013 Fri \u00b7 3:00 PM \u2013 4:30 PM",
      "linkedin": "https://www.linkedin.com/company/shri-madhwa-vadiraja-institute-of-technology-and-management/",
      "scholar": "https://scholar.google.com",
      "website": "https://smvitm.sode-edu.in/faculties/ms-soundharya-r/"
    },
    "yearsTaught": [
      "2nd Year",
      "3rd Year",
      "4th Year"
    ],
    "semestersTaught": [
      "3rd Sem",
      "5th Sem",
      "7th Sem"
    ],
    "subjects": [
      {
        "code": "BCS317",
        "name": "Computer Science",
        "year": "2nd Year",
        "semester": "3rd Sem",
        "type": "Theory + Lab"
      },
      {
        "code": "BCS417",
        "name": "Data Structures & Algorithms",
        "year": "2nd Year",
        "semester": "3rd Sem",
        "type": "Theory + Lab"
      },
      {
        "code": "BCS517",
        "name": "Operating Systems & Systems Programming",
        "year": "3rd Year",
        "semester": "5th Sem",
        "type": "Theory"
      }
    ],
    "education": [
      {
        "degree": "B.E in Computer Science and Engineering",
        "institution": "VTU / Recognized University",
        "year": "",
        "details": "Academic Qualification"
      },
      {
        "degree": "M.Tech in Computer Science and Engineering",
        "institution": "VTU / Recognized University",
        "year": "",
        "details": "Academic Qualification"
      }
    ],
    "experience": [
      {
        "role": "Assistant Professor",
        "organization": "SMVITM, Bantakal",
        "duration": "4 Years 8 Months",
        "description": "Serving in the Dept. of Computer Science & Engineering, leading classroom lectures, laboratory coursework, and undergraduate student project guidance."
      }
    ],
    "skills": [
      "Computer Science"
    ]
  },
  {
    "id": "lec-cs-ranjani",
    "userId": null,
    "name": "Ms. Ranjani",
    "handle": "@ranjani_cs",
    "aliases": [],
    "employeeId": "FAC-CS-018",
    "designation": "Assistant Professor",
    "headline": "Assistant Professor \u00b7 Dept. of Computer Science & Engineering | Computer Science and Engineering",
    "branch": "CS",
    "department": "Dept. of Computer Science & Engineering",
    "location": "SMVITM Campus, Bantakal, Udupi",
    "experienceYears": "1+ years",
    "avatarChar": "R",
    "avatarBg": "#00ba7c",
    "photoUrl": "https://smvitm.sode-edu.in/wp-content/uploads/2025/07/Ranjani.webp",
    "bannerBg": "linear-gradient(135deg, #059669 0%, #00ba7c 50%, #1d9bf0 100%)",
    "verified": true,
    "verifiedType": "gold",
    "about": "Ms. Ranjani serves as Assistant Professor in the Dept. of Computer Science & Engineering at Shri Madhwa Vadiraja Institute of Technology and Management (SMVITM), Bantakal. Dedicated to quality engineering education, active student mentoring, and departmental research initiatives. Core research and academic focus includes Computer Science and Engineering.",
    "contact": {
      "email": "ranjanik.cs@sode-edu.in",
      "phone": "+91 7338603630",
      "office": "Dept. of Computer Science & Engineering \u00b7 Academic Block, SMVITM",
      "officeHours": "Mon \u2013 Fri \u00b7 3:00 PM \u2013 4:30 PM",
      "linkedin": "https://www.linkedin.com/company/shri-madhwa-vadiraja-institute-of-technology-and-management/",
      "scholar": "https://scholar.google.com",
      "website": "https://smvitm.sode-edu.in/faculties/ms-ranjani/"
    },
    "yearsTaught": [
      "2nd Year",
      "3rd Year",
      "4th Year"
    ],
    "semestersTaught": [
      "3rd Sem",
      "5th Sem",
      "7th Sem"
    ],
    "subjects": [
      {
        "code": "BCS318",
        "name": "Computer Science and Engineering",
        "year": "2nd Year",
        "semester": "3rd Sem",
        "type": "Theory + Lab"
      },
      {
        "code": "BCS418",
        "name": "Data Structures & Algorithms",
        "year": "2nd Year",
        "semester": "3rd Sem",
        "type": "Theory + Lab"
      },
      {
        "code": "BCS518",
        "name": "Operating Systems & Systems Programming",
        "year": "3rd Year",
        "semester": "5th Sem",
        "type": "Theory"
      }
    ],
    "education": [
      {
        "degree": "M.Tech (CSE)",
        "institution": "VTU / Recognized University",
        "year": "",
        "details": "Academic Qualification"
      },
      {
        "degree": "B.E (CSE)",
        "institution": "VTU / Recognized University",
        "year": "",
        "details": "Academic Qualification"
      }
    ],
    "experience": [
      {
        "role": "Assistant Professor",
        "organization": "SMVITM, Bantakal",
        "duration": "1 year 4 Months",
        "description": "Serving in the Dept. of Computer Science & Engineering, leading classroom lectures, laboratory coursework, and undergraduate student project guidance."
      }
    ],
    "skills": [
      "CS",
      "Curriculum Delivery",
      "Academic Mentoring",
      "Laboratory Training"
    ]
  },
  {
    "id": "lec-cs-reshma",
    "userId": null,
    "name": "Ms. Reshma",
    "handle": "@reshma_cs",
    "aliases": [],
    "employeeId": "FAC-CS-019",
    "designation": "Assistant Professor",
    "headline": "Assistant Professor \u00b7 Dept. of Computer Science & Engineering | Computer Science and Information Security",
    "branch": "CS",
    "department": "Dept. of Computer Science & Engineering",
    "location": "SMVITM Campus, Bantakal, Udupi",
    "experienceYears": "3+ years",
    "avatarChar": "R",
    "avatarBg": "#00ba7c",
    "photoUrl": "https://smvitm.sode-edu.in/wp-content/uploads/2024/01/KMB_7065.jpg",
    "bannerBg": "linear-gradient(135deg, #059669 0%, #00ba7c 50%, #1d9bf0 100%)",
    "verified": true,
    "verifiedType": "gold",
    "about": "Ms. Reshma serves as Assistant Professor in the Dept. of Computer Science & Engineering at Shri Madhwa Vadiraja Institute of Technology and Management (SMVITM), Bantakal. Dedicated to quality engineering education, active student mentoring, and departmental research initiatives. Core research and academic focus includes Computer Science and Information Security.",
    "contact": {
      "email": "reshma.cs@sode-edu.in",
      "phone": "+91 820 2589101",
      "office": "Dept. of Computer Science & Engineering \u00b7 Academic Block, SMVITM",
      "officeHours": "Mon \u2013 Fri \u00b7 3:00 PM \u2013 4:30 PM",
      "linkedin": "https://www.linkedin.com/company/shri-madhwa-vadiraja-institute-of-technology-and-management/",
      "scholar": "https://scholar.google.com",
      "website": "https://smvitm.sode-edu.in/faculties/ms-reshma/"
    },
    "yearsTaught": [
      "2nd Year",
      "3rd Year",
      "4th Year"
    ],
    "semestersTaught": [
      "3rd Sem",
      "5th Sem",
      "7th Sem"
    ],
    "subjects": [
      {
        "code": "BCS319",
        "name": "Computer Science and Information Security",
        "year": "2nd Year",
        "semester": "3rd Sem",
        "type": "Theory + Lab"
      },
      {
        "code": "BCS419",
        "name": "Data Structures & Algorithms",
        "year": "2nd Year",
        "semester": "3rd Sem",
        "type": "Theory + Lab"
      },
      {
        "code": "BCS519",
        "name": "Operating Systems & Systems Programming",
        "year": "3rd Year",
        "semester": "5th Sem",
        "type": "Theory"
      }
    ],
    "education": [
      {
        "degree": "B. E.",
        "institution": "VTU / Recognized University",
        "year": "",
        "details": "Academic Qualification"
      },
      {
        "degree": "M. Tech.",
        "institution": "VTU / Recognized University",
        "year": "",
        "details": "Academic Qualification"
      }
    ],
    "experience": [
      {
        "role": "Assistant Professor",
        "organization": "SMVITM, Bantakal",
        "duration": "3 Years 8 Months",
        "description": "Serving in the Dept. of Computer Science & Engineering, leading classroom lectures, laboratory coursework, and undergraduate student project guidance."
      }
    ],
    "skills": [
      "CS",
      "Curriculum Delivery",
      "Academic Mentoring",
      "Laboratory Training"
    ]
  },
  {
    "id": "lec-cs-rukmini-bhat",
    "userId": null,
    "name": "Ms. Rukmini Bhat B",
    "handle": "@rukmini_cs",
    "aliases": [],
    "employeeId": "FAC-CS-020",
    "designation": "Assistant Professor (Senior)",
    "headline": "Assistant Professor (Senior) \u00b7 Dept. of Computer Science & Engineering",
    "branch": "CS",
    "department": "Dept. of Computer Science & Engineering",
    "location": "SMVITM Campus, Bantakal, Udupi",
    "experienceYears": "14+ years",
    "avatarChar": "R",
    "avatarBg": "#00ba7c",
    "photoUrl": "https://smvitm.sode-edu.in/wp-content/uploads/2021/01/IMG_20250925_140959-removebg-preview.webp",
    "bannerBg": "linear-gradient(135deg, #059669 0%, #00ba7c 50%, #1d9bf0 100%)",
    "verified": true,
    "verifiedType": "gold",
    "about": "Ms. Rukmini Bhat B serves as Assistant Professor (Senior) in the Dept. of Computer Science & Engineering at Shri Madhwa Vadiraja Institute of Technology and Management (SMVITM), Bantakal. Dedicated to quality engineering education, active student mentoring, and departmental research initiatives.",
    "contact": {
      "email": "rukmini.cs@sode-edu.in",
      "phone": "+91 820 2589183",
      "office": "Dept. of Computer Science & Engineering \u00b7 Academic Block, SMVITM",
      "officeHours": "Mon \u2013 Fri \u00b7 3:00 PM \u2013 4:30 PM",
      "linkedin": "https://www.linkedin.com/company/shri-madhwa-vadiraja-institute-of-technology-and-management/",
      "scholar": "https://scholar.google.com",
      "website": "https://smvitm.sode-edu.in/faculties/rukmini-ballal/"
    },
    "yearsTaught": [
      "2nd Year",
      "3rd Year",
      "4th Year"
    ],
    "semestersTaught": [
      "3rd Sem",
      "5th Sem",
      "7th Sem"
    ],
    "subjects": [
      {
        "code": "BCS420",
        "name": "Data Structures & Algorithms",
        "year": "2nd Year",
        "semester": "3rd Sem",
        "type": "Theory + Lab"
      },
      {
        "code": "BCS520",
        "name": "Operating Systems & Systems Programming",
        "year": "3rd Year",
        "semester": "5th Sem",
        "type": "Theory"
      },
      {
        "code": "BCS620",
        "name": "Database Management Systems & SQL",
        "year": "2nd Year",
        "semester": "4th Sem",
        "type": "Theory + Lab"
      }
    ],
    "education": [
      {
        "degree": "B.E in Computer Science",
        "institution": "VTU / Recognized University",
        "year": "",
        "details": "Academic Qualification"
      },
      {
        "degree": "M.Tech in Computer Science and Engineering",
        "institution": "VTU / Recognized University",
        "year": "",
        "details": "Academic Qualification"
      },
      {
        "degree": "PhD (Pursuing)",
        "institution": "VTU / Recognized University",
        "year": "",
        "details": "Academic Qualification"
      }
    ],
    "experience": [
      {
        "role": "Assistant Professor (Senior)",
        "organization": "SMVITM, Bantakal",
        "duration": "14 Years 4 Months",
        "description": "Serving in the Dept. of Computer Science & Engineering, leading classroom lectures, laboratory coursework, and undergraduate student project guidance."
      }
    ],
    "skills": [
      "CS",
      "Curriculum Delivery",
      "Academic Mentoring",
      "Laboratory Training"
    ]
  },
  {
    "id": "lec-cs-sahana",
    "userId": null,
    "name": "Ms. Sahana",
    "handle": "@sahana_cs",
    "aliases": [],
    "employeeId": "FAC-CS-021",
    "designation": "Assistant Professor (Senior)",
    "headline": "Assistant Professor (Senior) \u00b7 Dept. of Computer Science & Engineering | Computer Science and Engineering",
    "branch": "CS",
    "department": "Dept. of Computer Science & Engineering",
    "location": "SMVITM Campus, Bantakal, Udupi",
    "experienceYears": "17+ years",
    "avatarChar": "S",
    "avatarBg": "#00ba7c",
    "photoUrl": "https://smvitm.sode-edu.in/wp-content/uploads/2024/01/KMB_7037.jpg",
    "bannerBg": "linear-gradient(135deg, #059669 0%, #00ba7c 50%, #1d9bf0 100%)",
    "verified": true,
    "verifiedType": "gold",
    "about": "Ms. Sahana serves as Assistant Professor (Senior) in the Dept. of Computer Science & Engineering at Shri Madhwa Vadiraja Institute of Technology and Management (SMVITM), Bantakal. Dedicated to quality engineering education, active student mentoring, and departmental research initiatives. Core research and academic focus includes Computer Science and Engineering.",
    "contact": {
      "email": "sahanakaranth.cs@sode-edu.in",
      "phone": "+91 820 2589182, +91 820 2589183. Ext:226,+91 9611615001",
      "office": "Dept. of Computer Science & Engineering \u00b7 Academic Block, SMVITM",
      "officeHours": "Mon \u2013 Fri \u00b7 3:00 PM \u2013 4:30 PM",
      "linkedin": "https://www.linkedin.com/company/shri-madhwa-vadiraja-institute-of-technology-and-management/",
      "scholar": "https://scholar.google.com",
      "website": "https://smvitm.sode-edu.in/faculties/sahana/"
    },
    "yearsTaught": [
      "2nd Year",
      "3rd Year",
      "4th Year"
    ],
    "semestersTaught": [
      "3rd Sem",
      "5th Sem",
      "7th Sem"
    ],
    "subjects": [
      {
        "code": "BCS321",
        "name": "Computer Science and Engineering",
        "year": "2nd Year",
        "semester": "3rd Sem",
        "type": "Theory + Lab"
      },
      {
        "code": "BCS421",
        "name": "Data Structures & Algorithms",
        "year": "2nd Year",
        "semester": "3rd Sem",
        "type": "Theory + Lab"
      },
      {
        "code": "BCS521",
        "name": "Operating Systems & Systems Programming",
        "year": "3rd Year",
        "semester": "5th Sem",
        "type": "Theory"
      }
    ],
    "education": [
      {
        "degree": "M. Tech (Computer Science and Engineering)",
        "institution": "VTU / Recognized University",
        "year": "",
        "details": "Academic Qualification"
      },
      {
        "degree": "B.E.(Information Science and Engineering",
        "institution": "VTU / Recognized University",
        "year": "",
        "details": "Academic Qualification"
      }
    ],
    "experience": [
      {
        "role": "Assistant Professor (Senior)",
        "organization": "SMVITM, Bantakal",
        "duration": "17 Years 4 Months",
        "description": "Serving in the Dept. of Computer Science & Engineering, leading classroom lectures, laboratory coursework, and undergraduate student project guidance."
      }
    ],
    "skills": [
      "CS",
      "Curriculum Delivery",
      "Academic Mentoring",
      "Laboratory Training"
    ]
  },
  {
    "id": "lec-cs-savitha-a",
    "userId": null,
    "name": "Ms. Savitha A Shenoy",
    "handle": "@savitha_cs",
    "aliases": [],
    "employeeId": "FAC-CS-022",
    "designation": "Assistant Professor (Senior)",
    "headline": "Assistant Professor (Senior) \u00b7 Dept. of Computer Science & Engineering",
    "branch": "CS",
    "department": "Dept. of Computer Science & Engineering",
    "location": "SMVITM Campus, Bantakal, Udupi",
    "experienceYears": "18+ years",
    "avatarChar": "S",
    "avatarBg": "#00ba7c",
    "photoUrl": "https://smvitm.sode-edu.in/wp-content/uploads/2020/11/savitha-2.jpg",
    "bannerBg": "linear-gradient(135deg, #059669 0%, #00ba7c 50%, #1d9bf0 100%)",
    "verified": true,
    "verifiedType": "gold",
    "about": "Ms. Savitha A Shenoy serves as Assistant Professor (Senior) in the Dept. of Computer Science & Engineering at Shri Madhwa Vadiraja Institute of Technology and Management (SMVITM), Bantakal. Dedicated to quality engineering education, active student mentoring, and departmental research initiatives.",
    "contact": {
      "email": "savitha.cs@sode-edu.in",
      "phone": "+91 9880343498",
      "office": "Dept. of Computer Science & Engineering \u00b7 Academic Block, SMVITM",
      "officeHours": "Mon \u2013 Fri \u00b7 3:00 PM \u2013 4:30 PM",
      "linkedin": "https://www.linkedin.com/company/shri-madhwa-vadiraja-institute-of-technology-and-management/",
      "scholar": "https://scholar.google.com",
      "website": "https://smvitm.sode-edu.in/faculties/savitha-a-shenoy/"
    },
    "yearsTaught": [
      "2nd Year",
      "3rd Year",
      "4th Year"
    ],
    "semestersTaught": [
      "3rd Sem",
      "5th Sem",
      "7th Sem"
    ],
    "subjects": [
      {
        "code": "BCS422",
        "name": "Data Structures & Algorithms",
        "year": "2nd Year",
        "semester": "3rd Sem",
        "type": "Theory + Lab"
      },
      {
        "code": "BCS522",
        "name": "Operating Systems & Systems Programming",
        "year": "3rd Year",
        "semester": "5th Sem",
        "type": "Theory"
      },
      {
        "code": "BCS622",
        "name": "Database Management Systems & SQL",
        "year": "2nd Year",
        "semester": "4th Sem",
        "type": "Theory + Lab"
      }
    ],
    "education": [
      {
        "degree": "B.E (Computer Science)",
        "institution": "VTU / Recognized University",
        "year": "",
        "details": "Academic Qualification"
      },
      {
        "degree": "M.Tech (Computer Science)",
        "institution": "VTU / Recognized University",
        "year": "",
        "details": "Academic Qualification"
      }
    ],
    "experience": [
      {
        "role": "Assistant Professor (Senior)",
        "organization": "SMVITM, Bantakal",
        "duration": "18 Years 1 month",
        "description": "Serving in the Dept. of Computer Science & Engineering, leading classroom lectures, laboratory coursework, and undergraduate student project guidance."
      }
    ],
    "skills": [
      "CS",
      "Curriculum Delivery",
      "Academic Mentoring",
      "Laboratory Training"
    ]
  },
  {
    "id": "lec-cs-sowmya",
    "userId": null,
    "name": "Ms. Sowmya",
    "handle": "@sowmya_cs",
    "aliases": [],
    "employeeId": "FAC-CS-023",
    "designation": "Assistant Professor (Senior)",
    "headline": "Assistant Professor (Senior) \u00b7 Dept. of Computer Science & Engineering | Internet of Things, Image Processing, Machine Learning",
    "branch": "CS",
    "department": "Dept. of Computer Science & Engineering",
    "location": "SMVITM Campus, Bantakal, Udupi",
    "experienceYears": "9+ years",
    "avatarChar": "S",
    "avatarBg": "#00ba7c",
    "photoUrl": "https://smvitm.sode-edu.in/wp-content/uploads/2024/01/KMB_7035.jpg",
    "bannerBg": "linear-gradient(135deg, #059669 0%, #00ba7c 50%, #1d9bf0 100%)",
    "verified": true,
    "verifiedType": "gold",
    "about": "Ms. Sowmya serves as Assistant Professor (Senior) in the Dept. of Computer Science & Engineering at Shri Madhwa Vadiraja Institute of Technology and Management (SMVITM), Bantakal. Dedicated to quality engineering education, active student mentoring, and departmental research initiatives. Core research and academic focus includes Internet of Things, Image Processing, Machine Learning.",
    "contact": {
      "email": "sowmyanh.cs@sode-edu.in",
      "phone": "+91 8105945052",
      "office": "Dept. of Computer Science & Engineering \u00b7 Academic Block, SMVITM",
      "officeHours": "Mon \u2013 Fri \u00b7 3:00 PM \u2013 4:30 PM",
      "linkedin": "https://www.linkedin.com/company/shri-madhwa-vadiraja-institute-of-technology-and-management/",
      "scholar": "https://scholar.google.com",
      "website": "https://smvitm.sode-edu.in/faculties/sowmya-n-h/"
    },
    "yearsTaught": [
      "2nd Year",
      "3rd Year",
      "4th Year"
    ],
    "semestersTaught": [
      "3rd Sem",
      "5th Sem",
      "7th Sem"
    ],
    "subjects": [
      {
        "code": "BCS323",
        "name": "Internet of Things",
        "year": "2nd Year",
        "semester": "3rd Sem",
        "type": "Theory + Lab"
      },
      {
        "code": "BCS423",
        "name": "Image Processing",
        "year": "3rd Year",
        "semester": "5th Sem",
        "type": "Theory"
      },
      {
        "code": "BCS523",
        "name": "Machine Learning",
        "year": "4th Year",
        "semester": "7th Sem",
        "type": "Theory"
      }
    ],
    "education": [
      {
        "degree": "M.Tech (Computer Science and Engineering)",
        "institution": "VTU / Recognized University",
        "year": "",
        "details": "Academic Qualification"
      },
      {
        "degree": "B.E ( Information Science and Engineering)",
        "institution": "VTU / Recognized University",
        "year": "",
        "details": "Academic Qualification"
      }
    ],
    "experience": [
      {
        "role": "Assistant Professor (Senior)",
        "organization": "SMVITM, Bantakal",
        "duration": "9 Years 7 Months",
        "description": "Serving in the Dept. of Computer Science & Engineering, leading classroom lectures, laboratory coursework, and undergraduate student project guidance."
      }
    ],
    "skills": [
      "Internet of Things",
      "Image Processing",
      "Machine Learning"
    ]
  },
  {
    "id": "lec-cs-yashaswini-a",
    "userId": null,
    "name": "Ms. Yashaswini A.s",
    "handle": "@yashaswini_cs",
    "aliases": [],
    "employeeId": "FAC-CS-024",
    "designation": "Assistant Professor (Senior)",
    "headline": "Assistant Professor (Senior) \u00b7 Dept. of Computer Science & Engineering | Augmented Reality, Virtual Reality",
    "branch": "CS",
    "department": "Dept. of Computer Science & Engineering",
    "location": "SMVITM Campus, Bantakal, Udupi",
    "experienceYears": "12+ years",
    "avatarChar": "Y",
    "avatarBg": "#00ba7c",
    "photoUrl": "https://smvitm.sode-edu.in/wp-content/uploads/2024/01/KMB_7087.jpg",
    "bannerBg": "linear-gradient(135deg, #059669 0%, #00ba7c 50%, #1d9bf0 100%)",
    "verified": true,
    "verifiedType": "gold",
    "about": "Ms. Yashaswini A.s serves as Assistant Professor (Senior) in the Dept. of Computer Science & Engineering at Shri Madhwa Vadiraja Institute of Technology and Management (SMVITM), Bantakal. Dedicated to quality engineering education, active student mentoring, and departmental research initiatives. Core research and academic focus includes Augmented Reality, Virtual Reality.",
    "contact": {
      "email": "yashaswinias.cs@sode-edu.in",
      "phone": "+91 8884871885",
      "office": "Dept. of Computer Science & Engineering \u00b7 Academic Block, SMVITM",
      "officeHours": "Mon \u2013 Fri \u00b7 3:00 PM \u2013 4:30 PM",
      "linkedin": "https://www.linkedin.com/company/shri-madhwa-vadiraja-institute-of-technology-and-management/",
      "scholar": "https://scholar.google.com",
      "website": "https://smvitm.sode-edu.in/faculties/yashaswini-a-s/"
    },
    "yearsTaught": [
      "2nd Year",
      "3rd Year",
      "4th Year"
    ],
    "semestersTaught": [
      "3rd Sem",
      "5th Sem",
      "7th Sem"
    ],
    "subjects": [
      {
        "code": "BCS324",
        "name": "Augmented Reality",
        "year": "2nd Year",
        "semester": "3rd Sem",
        "type": "Theory + Lab"
      },
      {
        "code": "BCS424",
        "name": "Virtual Reality",
        "year": "3rd Year",
        "semester": "5th Sem",
        "type": "Theory"
      }
    ],
    "education": [
      {
        "degree": "B.E in Computer Science and Engineering",
        "institution": "VTU / Recognized University",
        "year": "",
        "details": "Academic Qualification"
      },
      {
        "degree": "M.Tech in Computer Science and Engineering",
        "institution": "VTU / Recognized University",
        "year": "",
        "details": "Academic Qualification"
      },
      {
        "degree": "Ph.D (Pursuing)",
        "institution": "VTU / Recognized University",
        "year": "",
        "details": "Academic Qualification"
      }
    ],
    "experience": [
      {
        "role": "Assistant Professor (Senior)",
        "organization": "SMVITM, Bantakal",
        "duration": "12 Years 2 Months",
        "description": "Serving in the Dept. of Computer Science & Engineering, leading classroom lectures, laboratory coursework, and undergraduate student project guidance."
      }
    ],
    "skills": [
      "Augmented Reality",
      "Virtual Reality"
    ]
  },
  {
    "id": "lec-ec-arun-upadhyaya",
    "userId": null,
    "name": "Dr. Arun Upadhyaya",
    "handle": "@arun_ec",
    "aliases": [
      "HOD EC",
      "Head of Department"
    ],
    "employeeId": "FAC-EC-001",
    "designation": "Associate Professor and Head",
    "headline": "Associate Professor and Head \u00b7 Dept. of Electronics & Communication Engineering | Digital Electronics, analog and Digital Communication, Cryptography",
    "branch": "EC",
    "department": "Dept. of Electronics & Communication Engineering",
    "location": "SMVITM Campus, Bantakal, Udupi",
    "experienceYears": "18+ years",
    "avatarChar": "A",
    "avatarBg": "#0284c7",
    "photoUrl": "https://smvitm.sode-edu.in/wp-content/uploads/2015/02/ARUN-UPADHYA-EC.jpg",
    "bannerBg": "linear-gradient(135deg, #0284c7 0%, #38bdf8 55%, #6366f1 100%)",
    "verified": true,
    "verifiedType": "gold",
    "about": "Dr. Arun Upadhyaya serves as Associate Professor and Head in the Dept. of Electronics & Communication Engineering at Shri Madhwa Vadiraja Institute of Technology and Management (SMVITM), Bantakal. Dedicated to quality engineering education, active student mentoring, and departmental research initiatives. Core research and academic focus includes Digital Electronics, analog and Digital Communication, Cryptography.",
    "contact": {
      "email": "arun_upadhyaya.ec@sode-edu.in",
      "phone": "+91 09686323734",
      "office": "Dept. of Electronics & Communication Engineering \u00b7 Academic Block, SMVITM",
      "officeHours": "Mon \u2013 Fri \u00b7 3:00 PM \u2013 4:30 PM",
      "linkedin": "https://www.linkedin.com/in/arun-upadhyaya-556a9043/",
      "scholar": "https://scholar.google.com",
      "website": "https://smvitm.sode-edu.in/faculties/arun-upadhyaya/"
    },
    "yearsTaught": [
      "2nd Year",
      "3rd Year",
      "4th Year"
    ],
    "semestersTaught": [
      "3rd Sem",
      "5th Sem",
      "7th Sem"
    ],
    "subjects": [
      {
        "code": "BEC301",
        "name": "Digital Electronics",
        "year": "2nd Year",
        "semester": "3rd Sem",
        "type": "Theory + Lab"
      },
      {
        "code": "BEC401",
        "name": "analog and Digital Communication",
        "year": "3rd Year",
        "semester": "5th Sem",
        "type": "Theory"
      },
      {
        "code": "BEC501",
        "name": "Cryptography",
        "year": "4th Year",
        "semester": "7th Sem",
        "type": "Theory"
      }
    ],
    "education": [
      {
        "degree": "M.Tech (Digital Electronics and Communication)",
        "institution": "VTU / Recognized University",
        "year": "",
        "details": "Academic Qualification"
      },
      {
        "degree": "AMIE in Electronics and Communication",
        "institution": "VTU / Recognized University",
        "year": "",
        "details": "Academic Qualification"
      },
      {
        "degree": "Ph.D.",
        "institution": "VTU / Recognized University",
        "year": "",
        "details": "Academic Qualification"
      }
    ],
    "experience": [
      {
        "role": "Associate Professor and Head",
        "organization": "SMVITM, Bantakal",
        "duration": "18 Years 2 Months",
        "description": "Serving in the Dept. of Electronics & Communication Engineering, leading classroom lectures, laboratory coursework, and undergraduate student project guidance."
      }
    ],
    "skills": [
      "Digital Electronics",
      "Cryptography"
    ]
  },
  {
    "id": "lec-ec-sachin-s",
    "userId": null,
    "name": "Dr. Sachin S Bhat",
    "handle": "@sachin_ec",
    "aliases": [
      "Professor & Dean (R&C)"
    ],
    "employeeId": "FAC-EC-002",
    "designation": "Professor & Dean (R&C)",
    "headline": "Professor & Dean (R&C) \u00b7 Dept. of Electronics & Communication Engineering | Deep Learning, Digital Image Processing, Large Language Models, Lin...",
    "branch": "EC",
    "department": "Dept. of Electronics & Communication Engineering",
    "location": "SMVITM Campus, Bantakal, Udupi",
    "experienceYears": "6+ years",
    "avatarChar": "S",
    "avatarBg": "#0284c7",
    "photoUrl": "https://smvitm.sode-edu.in/wp-content/uploads/2015/02/SACHIN-BHAT-EC.jpg",
    "bannerBg": "linear-gradient(135deg, #0284c7 0%, #38bdf8 55%, #6366f1 100%)",
    "verified": true,
    "verifiedType": "gold",
    "about": "Dr. Sachin S Bhat serves as Professor & Dean (R&C) in the Dept. of Electronics & Communication Engineering at Shri Madhwa Vadiraja Institute of Technology and Management (SMVITM), Bantakal. Dedicated to quality engineering education, active student mentoring, and departmental research initiatives. Core research and academic focus includes Deep Learning, Digital Image Processing, Large Language Models, Linguistics, Indology.",
    "contact": {
      "email": "sachinsbhat.ec@sode-edu.in",
      "phone": "+91 820 2589101",
      "office": "Dept. of Electronics & Communication Engineering \u00b7 Academic Block, SMVITM",
      "officeHours": "Mon \u2013 Fri \u00b7 3:00 PM \u2013 4:30 PM",
      "linkedin": "https://www.linkedin.com/in/sachinsbhat/",
      "scholar": "https://scholar.google.com",
      "website": "https://smvitm.sode-edu.in/faculties/sachin-bhat/"
    },
    "yearsTaught": [
      "2nd Year",
      "3rd Year",
      "4th Year"
    ],
    "semestersTaught": [
      "3rd Sem",
      "5th Sem",
      "7th Sem"
    ],
    "subjects": [
      {
        "code": "BEC302",
        "name": "Deep Learning",
        "year": "2nd Year",
        "semester": "3rd Sem",
        "type": "Theory + Lab"
      },
      {
        "code": "BEC402",
        "name": "Digital Image Processing",
        "year": "3rd Year",
        "semester": "5th Sem",
        "type": "Theory"
      },
      {
        "code": "BEC502",
        "name": "Large Language Models",
        "year": "4th Year",
        "semester": "7th Sem",
        "type": "Theory"
      }
    ],
    "education": [
      {
        "degree": "B.E(Electronics and Communication Engineering",
        "institution": "VTU / Recognized University",
        "year": "",
        "details": "Academic Qualification"
      },
      {
        "degree": "M.Tech(Digital Electronics and Communication)",
        "institution": "VTU / Recognized University",
        "year": "",
        "details": "Academic Qualification"
      },
      {
        "degree": "Ph.D(Deep Learning)",
        "institution": "VTU / Recognized University",
        "year": "",
        "details": "Academic Qualification"
      }
    ],
    "experience": [
      {
        "role": "Professor & Dean (R&C)",
        "organization": "SMVITM, Bantakal",
        "duration": "6 Years 2 Months",
        "description": "Serving in the Dept. of Electronics & Communication Engineering, leading classroom lectures, laboratory coursework, and undergraduate student project guidance."
      }
    ],
    "skills": [
      "Deep Learning",
      "Digital Image Processing",
      "Large Language Models",
      "Linguistics",
      "Indology"
    ]
  },
  {
    "id": "lec-ec-nagaraja-rao",
    "userId": null,
    "name": "Dr. Nagaraja Rao",
    "handle": "@nagaraja_ec",
    "aliases": [],
    "employeeId": "FAC-EC-003",
    "designation": "Associate Professor",
    "headline": "Associate Professor \u00b7 Dept. of Electronics & Communication Engineering",
    "branch": "EC",
    "department": "Dept. of Electronics & Communication Engineering",
    "location": "SMVITM Campus, Bantakal, Udupi",
    "experienceYears": "21+ years",
    "avatarChar": "N",
    "avatarBg": "#0284c7",
    "photoUrl": "https://smvitm.sode-edu.in/wp-content/uploads/2015/02/NAGARAJ-RAO-EC.jpg",
    "bannerBg": "linear-gradient(135deg, #0284c7 0%, #38bdf8 55%, #6366f1 100%)",
    "verified": true,
    "verifiedType": "gold",
    "about": "Dr. Nagaraja Rao serves as Associate Professor in the Dept. of Electronics & Communication Engineering at Shri Madhwa Vadiraja Institute of Technology and Management (SMVITM), Bantakal. Dedicated to quality engineering education, active student mentoring, and departmental research initiatives.",
    "contact": {
      "email": "bnagarajrao.ec@sode-edu.in",
      "phone": "+91 9945357819",
      "office": "Dept. of Electronics & Communication Engineering \u00b7 Academic Block, SMVITM",
      "officeHours": "Mon \u2013 Fri \u00b7 3:00 PM \u2013 4:30 PM",
      "linkedin": "https://www.linkedin.com/company/shri-madhwa-vadiraja-institute-of-technology-and-management/",
      "scholar": "https://scholar.google.com",
      "website": "https://smvitm.sode-edu.in/faculties/nagaraja-rao/"
    },
    "yearsTaught": [
      "2nd Year",
      "3rd Year",
      "4th Year"
    ],
    "semestersTaught": [
      "3rd Sem",
      "5th Sem",
      "7th Sem"
    ],
    "subjects": [
      {
        "code": "BEC403",
        "name": "Digital Signal Processing & Architectures",
        "year": "3rd Year",
        "semester": "5th Sem",
        "type": "Theory + Lab"
      },
      {
        "code": "BEC503",
        "name": "VLSI Design & Semiconductor Fabrication",
        "year": "3rd Year",
        "semester": "6th Sem",
        "type": "Theory + Lab"
      },
      {
        "code": "BEC603",
        "name": "Microcontrollers & Embedded Systems",
        "year": "2nd Year",
        "semester": "4th Sem",
        "type": "Theory + Lab"
      }
    ],
    "education": [
      {
        "degree": "M.Tech (Microelectronis and Control Systems)",
        "institution": "VTU / Recognized University",
        "year": "",
        "details": "Academic Qualification"
      },
      {
        "degree": "B.E (Electrical & Electronics Engineering)",
        "institution": "VTU / Recognized University",
        "year": "",
        "details": "Academic Qualification"
      },
      {
        "degree": "Ph.D.",
        "institution": "VTU / Recognized University",
        "year": "",
        "details": "Academic Qualification"
      }
    ],
    "experience": [
      {
        "role": "Associate Professor",
        "organization": "SMVITM, Bantakal",
        "duration": "21 Years 9 Months",
        "description": "Serving in the Dept. of Electronics & Communication Engineering, leading classroom lectures, laboratory coursework, and undergraduate student project guidance."
      }
    ],
    "skills": [
      "EC",
      "Curriculum Delivery",
      "Academic Mentoring",
      "Laboratory Training"
    ]
  },
  {
    "id": "lec-ec-rashmi-samanth",
    "userId": null,
    "name": "Dr. Rashmi Samanth",
    "handle": "@rashmi_ec",
    "aliases": [],
    "employeeId": "FAC-EC-004",
    "designation": "Assistant Professor (Selection Grade)",
    "headline": "Assistant Professor (Selection Grade) \u00b7 Dept. of Electronics & Communication Engineering | Low Power VLSI",
    "branch": "EC",
    "department": "Dept. of Electronics & Communication Engineering",
    "location": "SMVITM Campus, Bantakal, Udupi",
    "experienceYears": "4+ years",
    "avatarChar": "R",
    "avatarBg": "#0284c7",
    "photoUrl": "https://smvitm.sode-edu.in/wp-content/uploads/2024/06/Rashmi-Samanth-removebg-preview.jpg",
    "bannerBg": "linear-gradient(135deg, #0284c7 0%, #38bdf8 55%, #6366f1 100%)",
    "verified": true,
    "verifiedType": "gold",
    "about": "Dr. Rashmi Samanth serves as Assistant Professor (Selection Grade) in the Dept. of Electronics & Communication Engineering at Shri Madhwa Vadiraja Institute of Technology and Management (SMVITM), Bantakal. Dedicated to quality engineering education, active student mentoring, and departmental research initiatives. Core research and academic focus includes Low Power VLSI.",
    "contact": {
      "email": "rashmi.ml@sode-edu.in",
      "phone": "+91 820 2589101",
      "office": "Dept. of Electronics & Communication Engineering \u00b7 Academic Block, SMVITM",
      "officeHours": "Mon \u2013 Fri \u00b7 3:00 PM \u2013 4:30 PM",
      "linkedin": "https://www.linkedin.com/company/shri-madhwa-vadiraja-institute-of-technology-and-management/",
      "scholar": "https://scholar.google.com",
      "website": "https://smvitm.sode-edu.in/faculties/dr-rashmi-samanth/"
    },
    "yearsTaught": [
      "2nd Year",
      "3rd Year",
      "4th Year"
    ],
    "semestersTaught": [
      "3rd Sem",
      "5th Sem",
      "7th Sem"
    ],
    "subjects": [
      {
        "code": "BEC304",
        "name": "Low Power VLSI",
        "year": "2nd Year",
        "semester": "3rd Sem",
        "type": "Theory + Lab"
      },
      {
        "code": "BEC404",
        "name": "Digital Signal Processing & Architectures",
        "year": "3rd Year",
        "semester": "5th Sem",
        "type": "Theory + Lab"
      },
      {
        "code": "BEC504",
        "name": "VLSI Design & Semiconductor Fabrication",
        "year": "3rd Year",
        "semester": "6th Sem",
        "type": "Theory + Lab"
      }
    ],
    "education": [
      {
        "degree": "P. hD. (VLSI)",
        "institution": "VTU / Recognized University",
        "year": "",
        "details": "Academic Qualification"
      },
      {
        "degree": "M. Tech. (VLSI Design)",
        "institution": "VTU / Recognized University",
        "year": "",
        "details": "Academic Qualification"
      },
      {
        "degree": "B. E. (Electronics and Communication Engineering)",
        "institution": "VTU / Recognized University",
        "year": "",
        "details": "Academic Qualification"
      }
    ],
    "experience": [
      {
        "role": "Assistant Professor (Selection Grade)",
        "organization": "SMVITM, Bantakal",
        "duration": "4 Years 5 Months",
        "description": "Serving in the Dept. of Electronics & Communication Engineering, leading classroom lectures, laboratory coursework, and undergraduate student project guidance."
      }
    ],
    "skills": [
      "Low Power VLSI"
    ]
  },
  {
    "id": "lec-ec-shilpa-kamath",
    "userId": null,
    "name": "Dr. Shilpa Kamath S.",
    "handle": "@shilpa_ec",
    "aliases": [],
    "employeeId": "FAC-EC-005",
    "designation": "Associate Professor",
    "headline": "Associate Professor \u00b7 Dept. of Electronics & Communication Engineering | Digital Electronics, Signal Compression",
    "branch": "EC",
    "department": "Dept. of Electronics & Communication Engineering",
    "location": "SMVITM Campus, Bantakal, Udupi",
    "experienceYears": "9.5+ years",
    "avatarChar": "S",
    "avatarBg": "#0284c7",
    "photoUrl": "https://smvitm.sode-edu.in/wp-content/uploads/2024/04/SHILPA-ECE.jpg",
    "bannerBg": "linear-gradient(135deg, #0284c7 0%, #38bdf8 55%, #6366f1 100%)",
    "verified": true,
    "verifiedType": "gold",
    "about": "Dr. Shilpa Kamath S. serves as Associate Professor in the Dept. of Electronics & Communication Engineering at Shri Madhwa Vadiraja Institute of Technology and Management (SMVITM), Bantakal. Dedicated to quality engineering education, active student mentoring, and departmental research initiatives. Core research and academic focus includes Digital Electronics, Signal Compression.",
    "contact": {
      "email": "shilpa.ec@sode-edu.in",
      "phone": "+91 820 2589101",
      "office": "Dept. of Electronics & Communication Engineering \u00b7 Academic Block, SMVITM",
      "officeHours": "Mon \u2013 Fri \u00b7 3:00 PM \u2013 4:30 PM",
      "linkedin": "https://www.linkedin.com/company/shri-madhwa-vadiraja-institute-of-technology-and-management/",
      "scholar": "https://scholar.google.com",
      "website": "https://smvitm.sode-edu.in/faculties/dr-shilpa-kamath-s/"
    },
    "yearsTaught": [
      "2nd Year",
      "3rd Year",
      "4th Year"
    ],
    "semestersTaught": [
      "3rd Sem",
      "5th Sem",
      "7th Sem"
    ],
    "subjects": [
      {
        "code": "BEC305",
        "name": "Digital Electronics",
        "year": "2nd Year",
        "semester": "3rd Sem",
        "type": "Theory + Lab"
      },
      {
        "code": "BEC405",
        "name": "Signal Compression",
        "year": "3rd Year",
        "semester": "5th Sem",
        "type": "Theory"
      }
    ],
    "education": [
      {
        "degree": "Ph. D.",
        "institution": "VTU / Recognized University",
        "year": "",
        "details": "Academic Qualification"
      },
      {
        "degree": "M. Tech.",
        "institution": "VTU / Recognized University",
        "year": "",
        "details": "Academic Qualification"
      },
      {
        "degree": "B. E.",
        "institution": "VTU / Recognized University",
        "year": "",
        "details": "Academic Qualification"
      }
    ],
    "experience": [
      {
        "role": "Associate Professor",
        "organization": "SMVITM, Bantakal",
        "duration": "9.5 Years 8 Months",
        "description": "Serving in the Dept. of Electronics & Communication Engineering, leading classroom lectures, laboratory coursework, and undergraduate student project guidance."
      }
    ],
    "skills": [
      "Digital Electronics",
      "Signal Compression"
    ]
  },
  {
    "id": "lec-ec-ajesh",
    "userId": null,
    "name": "Mr. Ajesh",
    "handle": "@ajesh_ec",
    "aliases": [],
    "employeeId": "FAC-EC-006",
    "designation": "Assistant Professor",
    "headline": "Assistant Professor \u00b7 Dept. of Electronics & Communication Engineering | Industrial Automation and Robotics",
    "branch": "EC",
    "department": "Dept. of Electronics & Communication Engineering",
    "location": "SMVITM Campus, Bantakal, Udupi",
    "experienceYears": "8.8+ years",
    "avatarChar": "A",
    "avatarBg": "#0284c7",
    "photoUrl": "https://smvitm.sode-edu.in/wp-content/uploads/2024/03/Ajesh-EC.png",
    "bannerBg": "linear-gradient(135deg, #0284c7 0%, #38bdf8 55%, #6366f1 100%)",
    "verified": true,
    "verifiedType": "gold",
    "about": "Mr. Ajesh serves as Assistant Professor in the Dept. of Electronics & Communication Engineering at Shri Madhwa Vadiraja Institute of Technology and Management (SMVITM), Bantakal. Dedicated to quality engineering education, active student mentoring, and departmental research initiatives. Core research and academic focus includes Industrial Automation and Robotics.",
    "contact": {
      "email": "ajesh.ec@sode-edu.in",
      "phone": "+91 9686618739",
      "office": "Dept. of Electronics & Communication Engineering \u00b7 Academic Block, SMVITM",
      "officeHours": "Mon \u2013 Fri \u00b7 3:00 PM \u2013 4:30 PM",
      "linkedin": "https://www.linkedin.com/in/ajesh-rk-b1428895?trk=contact-info",
      "scholar": "https://scholar.google.com",
      "website": "https://smvitm.sode-edu.in/faculties/mr-ajesh/"
    },
    "yearsTaught": [
      "2nd Year",
      "3rd Year",
      "4th Year"
    ],
    "semestersTaught": [
      "3rd Sem",
      "5th Sem",
      "7th Sem"
    ],
    "subjects": [
      {
        "code": "BEC306",
        "name": "Industrial Automation and Robotics",
        "year": "2nd Year",
        "semester": "3rd Sem",
        "type": "Theory + Lab"
      },
      {
        "code": "BEC406",
        "name": "Digital Signal Processing & Architectures",
        "year": "3rd Year",
        "semester": "5th Sem",
        "type": "Theory + Lab"
      },
      {
        "code": "BEC506",
        "name": "VLSI Design & Semiconductor Fabrication",
        "year": "3rd Year",
        "semester": "6th Sem",
        "type": "Theory + Lab"
      }
    ],
    "education": [
      {
        "degree": "M.Tech. in Industrial Automation and Robotics",
        "institution": "VTU / Recognized University",
        "year": "",
        "details": "Academic Qualification"
      },
      {
        "degree": "B.E. in Electronics and Communication",
        "institution": "VTU / Recognized University",
        "year": "",
        "details": "Academic Qualification"
      }
    ],
    "experience": [
      {
        "role": "Assistant Professor",
        "organization": "SMVITM, Bantakal",
        "duration": "8.8 Years 11 Months",
        "description": "Serving in the Dept. of Electronics & Communication Engineering, leading classroom lectures, laboratory coursework, and undergraduate student project guidance."
      }
    ],
    "skills": [
      "EC",
      "Curriculum Delivery",
      "Academic Mentoring",
      "Laboratory Training"
    ]
  },
  {
    "id": "lec-ec-chetan-r",
    "userId": null,
    "name": "Mr. Chetan R",
    "handle": "@chetan_ec",
    "aliases": [],
    "employeeId": "FAC-EC-007",
    "designation": "Assistant Professor (Selection Grade)",
    "headline": "Assistant Professor (Selection Grade) \u00b7 Dept. of Electronics & Communication Engineering | Microelectronics and Control System",
    "branch": "EC",
    "department": "Dept. of Electronics & Communication Engineering",
    "location": "SMVITM Campus, Bantakal, Udupi",
    "experienceYears": "16+ years",
    "avatarChar": "C",
    "avatarBg": "#0284c7",
    "photoUrl": "https://smvitm.sode-edu.in/wp-content/uploads/2015/02/CHETHAN-KUMAR-EC.jpg",
    "bannerBg": "linear-gradient(135deg, #0284c7 0%, #38bdf8 55%, #6366f1 100%)",
    "verified": true,
    "verifiedType": "gold",
    "about": "Mr. Chetan R serves as Assistant Professor (Selection Grade) in the Dept. of Electronics & Communication Engineering at Shri Madhwa Vadiraja Institute of Technology and Management (SMVITM), Bantakal. Dedicated to quality engineering education, active student mentoring, and departmental research initiatives. Core research and academic focus includes Microelectronics and Control System.",
    "contact": {
      "email": "chetan.ec@sode-edu.in",
      "phone": "+91 9986197796",
      "office": "Dept. of Electronics & Communication Engineering \u00b7 Academic Block, SMVITM",
      "officeHours": "Mon \u2013 Fri \u00b7 3:00 PM \u2013 4:30 PM",
      "linkedin": "https://www.linkedin.com/company/shri-madhwa-vadiraja-institute-of-technology-and-management/",
      "scholar": "https://scholar.google.com",
      "website": "https://smvitm.sode-edu.in/faculties/chetan-r/"
    },
    "yearsTaught": [
      "2nd Year",
      "3rd Year",
      "4th Year"
    ],
    "semestersTaught": [
      "3rd Sem",
      "5th Sem",
      "7th Sem"
    ],
    "subjects": [
      {
        "code": "BEC307",
        "name": "Microelectronics and Control System",
        "year": "2nd Year",
        "semester": "3rd Sem",
        "type": "Theory + Lab"
      },
      {
        "code": "BEC407",
        "name": "Digital Signal Processing & Architectures",
        "year": "3rd Year",
        "semester": "5th Sem",
        "type": "Theory + Lab"
      },
      {
        "code": "BEC507",
        "name": "VLSI Design & Semiconductor Fabrication",
        "year": "3rd Year",
        "semester": "6th Sem",
        "type": "Theory + Lab"
      }
    ],
    "education": [
      {
        "degree": "Diploma (Electronics and Communication)",
        "institution": "VTU / Recognized University",
        "year": "",
        "details": "Academic Qualification"
      },
      {
        "degree": "BE (Electronics and Communication)",
        "institution": "VTU / Recognized University",
        "year": "",
        "details": "Academic Qualification"
      },
      {
        "degree": "M.Tech (Microelectronics and Control System)",
        "institution": "VTU / Recognized University",
        "year": "",
        "details": "Academic Qualification"
      }
    ],
    "experience": [
      {
        "role": "Assistant Professor (Selection Grade)",
        "organization": "SMVITM, Bantakal",
        "duration": "16 Years 4 Months",
        "description": "Serving in the Dept. of Electronics & Communication Engineering, leading classroom lectures, laboratory coursework, and undergraduate student project guidance."
      }
    ],
    "skills": [
      "EC",
      "Curriculum Delivery",
      "Academic Mentoring",
      "Laboratory Training"
    ]
  },
  {
    "id": "lec-ec-david-john",
    "userId": null,
    "name": "Mr. David John Saldanha",
    "handle": "@david_ec",
    "aliases": [],
    "employeeId": "FAC-EC-008",
    "designation": "Assistant Professor (Senior)",
    "headline": "Assistant Professor (Senior) \u00b7 Dept. of Electronics & Communication Engineering | Product Development",
    "branch": "EC",
    "department": "Dept. of Electronics & Communication Engineering",
    "location": "SMVITM Campus, Bantakal, Udupi",
    "experienceYears": "6+ years",
    "avatarChar": "D",
    "avatarBg": "#0284c7",
    "photoUrl": "https://smvitm.sode-edu.in/wp-content/uploads/2026/07/David-John-Saldanha.webp",
    "bannerBg": "linear-gradient(135deg, #0284c7 0%, #38bdf8 55%, #6366f1 100%)",
    "verified": true,
    "verifiedType": "gold",
    "about": "Mr. David John Saldanha serves as Assistant Professor (Senior) in the Dept. of Electronics & Communication Engineering at Shri Madhwa Vadiraja Institute of Technology and Management (SMVITM), Bantakal. Dedicated to quality engineering education, active student mentoring, and departmental research initiatives. Core research and academic focus includes Product Development.",
    "contact": {
      "email": "david.ec@sode-edu.in",
      "phone": "+91 9742442708",
      "office": "Dept. of Electronics & Communication Engineering \u00b7 Academic Block, SMVITM",
      "officeHours": "Mon \u2013 Fri \u00b7 3:00 PM \u2013 4:30 PM",
      "linkedin": "https://www.linkedin.com/company/shri-madhwa-vadiraja-institute-of-technology-and-management/",
      "scholar": "https://scholar.google.com",
      "website": "https://smvitm.sode-edu.in/faculties/mr-david-john-saldanha/"
    },
    "yearsTaught": [
      "2nd Year",
      "3rd Year",
      "4th Year"
    ],
    "semestersTaught": [
      "3rd Sem",
      "5th Sem",
      "7th Sem"
    ],
    "subjects": [
      {
        "code": "BEC308",
        "name": "Product Development",
        "year": "2nd Year",
        "semester": "3rd Sem",
        "type": "Theory + Lab"
      },
      {
        "code": "BEC408",
        "name": "Digital Signal Processing & Architectures",
        "year": "3rd Year",
        "semester": "5th Sem",
        "type": "Theory + Lab"
      },
      {
        "code": "BEC508",
        "name": "VLSI Design & Semiconductor Fabrication",
        "year": "3rd Year",
        "semester": "6th Sem",
        "type": "Theory + Lab"
      }
    ],
    "education": [
      {
        "degree": "B.E",
        "institution": "VTU / Recognized University",
        "year": "",
        "details": "Academic Qualification"
      },
      {
        "degree": "M.Tech",
        "institution": "VTU / Recognized University",
        "year": "",
        "details": "Academic Qualification"
      },
      {
        "degree": "(Ph.D.)",
        "institution": "VTU / Recognized University",
        "year": "",
        "details": "Academic Qualification"
      }
    ],
    "experience": [
      {
        "role": "Assistant Professor (Senior)",
        "organization": "SMVITM, Bantakal",
        "duration": "6 Years 5 Months",
        "description": "Serving in the Dept. of Electronics & Communication Engineering, leading classroom lectures, laboratory coursework, and undergraduate student project guidance."
      }
    ],
    "skills": [
      "Product Development"
    ]
  },
  {
    "id": "lec-ec-ganesh-u",
    "userId": null,
    "name": "Mr. Ganesh U G",
    "handle": "@ganesh_ec",
    "aliases": [],
    "employeeId": "FAC-EC-009",
    "designation": "Assistant Professor",
    "headline": "Assistant Professor \u00b7 Dept. of Electronics & Communication Engineering | VLSI, AI/ML, Digital Electronics, Verilog.",
    "branch": "EC",
    "department": "Dept. of Electronics & Communication Engineering",
    "location": "SMVITM Campus, Bantakal, Udupi",
    "experienceYears": "7+ years",
    "avatarChar": "G",
    "avatarBg": "#0284c7",
    "photoUrl": "https://smvitm.sode-edu.in/wp-content/uploads/2025/06/pp1.webp",
    "bannerBg": "linear-gradient(135deg, #0284c7 0%, #38bdf8 55%, #6366f1 100%)",
    "verified": true,
    "verifiedType": "gold",
    "about": "Mr. Ganesh U G serves as Assistant Professor in the Dept. of Electronics & Communication Engineering at Shri Madhwa Vadiraja Institute of Technology and Management (SMVITM), Bantakal. Dedicated to quality engineering education, active student mentoring, and departmental research initiatives. Core research and academic focus includes VLSI, AI/ML, Digital Electronics, Verilog..",
    "contact": {
      "email": "ganesh.ec@sode-edu.in",
      "phone": "+91 9611002215",
      "office": "Dept. of Electronics & Communication Engineering \u00b7 Academic Block, SMVITM",
      "officeHours": "Mon \u2013 Fri \u00b7 3:00 PM \u2013 4:30 PM",
      "linkedin": "https://www.linkedin.com/company/shri-madhwa-vadiraja-institute-of-technology-and-management/",
      "scholar": "https://scholar.google.com",
      "website": "https://smvitm.sode-edu.in/faculties/ganesh-u-g/"
    },
    "yearsTaught": [
      "2nd Year",
      "3rd Year",
      "4th Year"
    ],
    "semestersTaught": [
      "3rd Sem",
      "5th Sem",
      "7th Sem"
    ],
    "subjects": [
      {
        "code": "BEC309",
        "name": "VLSI",
        "year": "2nd Year",
        "semester": "3rd Sem",
        "type": "Theory + Lab"
      },
      {
        "code": "BEC409",
        "name": "AI/ML",
        "year": "3rd Year",
        "semester": "5th Sem",
        "type": "Theory"
      },
      {
        "code": "BEC509",
        "name": "Digital Electronics",
        "year": "4th Year",
        "semester": "7th Sem",
        "type": "Theory"
      }
    ],
    "education": [
      {
        "degree": "M Tech",
        "institution": "VTU / Recognized University",
        "year": "",
        "details": "Academic Qualification"
      }
    ],
    "experience": [
      {
        "role": "Assistant Professor",
        "organization": "SMVITM, Bantakal",
        "duration": "7 Years 9 Months",
        "description": "Serving in the Dept. of Electronics & Communication Engineering, leading classroom lectures, laboratory coursework, and undergraduate student project guidance."
      }
    ],
    "skills": [
      "VLSI",
      "AI/ML",
      "Digital Electronics",
      "Verilog."
    ]
  },
  {
    "id": "lec-ec-manoj-kumar",
    "userId": null,
    "name": "Mr. Manoj Kumar K",
    "handle": "@manoj_ec",
    "aliases": [],
    "employeeId": "FAC-EC-010",
    "designation": "Assistant Professor (Senior)",
    "headline": "Assistant Professor (Senior) \u00b7 Dept. of Electronics & Communication Engineering",
    "branch": "EC",
    "department": "Dept. of Electronics & Communication Engineering",
    "location": "SMVITM Campus, Bantakal, Udupi",
    "experienceYears": "10+ years",
    "avatarChar": "M",
    "avatarBg": "#0284c7",
    "photoUrl": "https://smvitm.sode-edu.in/wp-content/uploads/2026/09/MANOJ.webp",
    "bannerBg": "linear-gradient(135deg, #0284c7 0%, #38bdf8 55%, #6366f1 100%)",
    "verified": true,
    "verifiedType": "gold",
    "about": "Mr. Manoj Kumar K serves as Assistant Professor (Senior) in the Dept. of Electronics & Communication Engineering at Shri Madhwa Vadiraja Institute of Technology and Management (SMVITM), Bantakal. Dedicated to quality engineering education, active student mentoring, and departmental research initiatives.",
    "contact": {
      "email": "manoj.ec@sode-edu.in",
      "phone": "+91 820 2589101",
      "office": "Dept. of Electronics & Communication Engineering \u00b7 Academic Block, SMVITM",
      "officeHours": "Mon \u2013 Fri \u00b7 3:00 PM \u2013 4:30 PM",
      "linkedin": "https://www.linkedin.com/company/shri-madhwa-vadiraja-institute-of-technology-and-management/",
      "scholar": "https://scholar.google.com",
      "website": "https://smvitm.sode-edu.in/faculties/mr-manoj-kumar-k/"
    },
    "yearsTaught": [
      "2nd Year",
      "3rd Year",
      "4th Year"
    ],
    "semestersTaught": [
      "3rd Sem",
      "5th Sem",
      "7th Sem"
    ],
    "subjects": [
      {
        "code": "BEC410",
        "name": "Digital Signal Processing & Architectures",
        "year": "3rd Year",
        "semester": "5th Sem",
        "type": "Theory + Lab"
      },
      {
        "code": "BEC510",
        "name": "VLSI Design & Semiconductor Fabrication",
        "year": "3rd Year",
        "semester": "6th Sem",
        "type": "Theory + Lab"
      },
      {
        "code": "BEC610",
        "name": "Microcontrollers & Embedded Systems",
        "year": "2nd Year",
        "semester": "4th Sem",
        "type": "Theory + Lab"
      }
    ],
    "education": [
      {
        "degree": "Postgraduate Degree (M.Tech / M.Sc / MBA)",
        "institution": "VTU Belagavi",
        "year": "",
        "details": "Postgraduate Degree"
      }
    ],
    "experience": [
      {
        "role": "Assistant Professor (Senior)",
        "organization": "SMVITM, Bantakal",
        "duration": "Academic Service",
        "description": "Serving in the Dept. of Electronics & Communication Engineering, leading classroom lectures, laboratory coursework, and undergraduate student project guidance."
      }
    ],
    "skills": [
      "EC",
      "Curriculum Delivery",
      "Academic Mentoring",
      "Laboratory Training"
    ]
  },
  {
    "id": "lec-ec-punith-bekal",
    "userId": null,
    "name": "Mr. Punith Bekal",
    "handle": "@punith_ec",
    "aliases": [],
    "employeeId": "FAC-EC-011",
    "designation": "Assistant Professor (Senior)",
    "headline": "Assistant Professor (Senior) \u00b7 Dept. of Electronics & Communication Engineering | Wireless Sensor Networks, IoT, Networking, Wireless Protocols",
    "branch": "EC",
    "department": "Dept. of Electronics & Communication Engineering",
    "location": "SMVITM Campus, Bantakal, Udupi",
    "experienceYears": "10+ years",
    "avatarChar": "P",
    "avatarBg": "#0284c7",
    "photoUrl": "https://smvitm.sode-edu.in/wp-content/uploads/2026/03/Punit-Bekal.webp",
    "bannerBg": "linear-gradient(135deg, #0284c7 0%, #38bdf8 55%, #6366f1 100%)",
    "verified": true,
    "verifiedType": "gold",
    "about": "Mr. Punith Bekal serves as Assistant Professor (Senior) in the Dept. of Electronics & Communication Engineering at Shri Madhwa Vadiraja Institute of Technology and Management (SMVITM), Bantakal. Dedicated to quality engineering education, active student mentoring, and departmental research initiatives. Core research and academic focus includes Wireless Sensor Networks, IoT, Networking, Wireless Protocols.",
    "contact": {
      "email": "punithb.ec@sode-edu.in",
      "phone": "+91 9008646003",
      "office": "Dept. of Electronics & Communication Engineering \u00b7 Academic Block, SMVITM",
      "officeHours": "Mon \u2013 Fri \u00b7 3:00 PM \u2013 4:30 PM",
      "linkedin": "https://www.linkedin.com/company/shri-madhwa-vadiraja-institute-of-technology-and-management/",
      "scholar": "https://scholar.google.com",
      "website": "https://smvitm.sode-edu.in/faculties/mr-punith-bekal/"
    },
    "yearsTaught": [
      "2nd Year",
      "3rd Year",
      "4th Year"
    ],
    "semestersTaught": [
      "3rd Sem",
      "5th Sem",
      "7th Sem"
    ],
    "subjects": [
      {
        "code": "BEC311",
        "name": "Wireless Sensor Networks",
        "year": "2nd Year",
        "semester": "3rd Sem",
        "type": "Theory + Lab"
      },
      {
        "code": "BEC411",
        "name": "Networking",
        "year": "3rd Year",
        "semester": "5th Sem",
        "type": "Theory"
      },
      {
        "code": "BEC511",
        "name": "Wireless Protocols",
        "year": "4th Year",
        "semester": "7th Sem",
        "type": "Theory"
      }
    ],
    "education": [
      {
        "degree": "B.E",
        "institution": "VTU / Recognized University",
        "year": "",
        "details": "Academic Qualification"
      },
      {
        "degree": "M.Tech",
        "institution": "VTU / Recognized University",
        "year": "",
        "details": "Academic Qualification"
      }
    ],
    "experience": [
      {
        "role": "Assistant Professor (Senior)",
        "organization": "SMVITM, Bantakal",
        "duration": "10 Years 3 Months",
        "description": "Serving in the Dept. of Electronics & Communication Engineering, leading classroom lectures, laboratory coursework, and undergraduate student project guidance."
      }
    ],
    "skills": [
      "Wireless Sensor Networks",
      "Networking",
      "Wireless Protocols"
    ]
  },
  {
    "id": "lec-ec-raghunatha",
    "userId": null,
    "name": "Mr. Raghunatha",
    "handle": "@raghunatha_ec",
    "aliases": [],
    "employeeId": "FAC-EC-012",
    "designation": "Assistant Professor (Senior)",
    "headline": "Assistant Professor (Senior) \u00b7 Dept. of Electronics & Communication Engineering | Analog Electronics, Embedded Systems",
    "branch": "EC",
    "department": "Dept. of Electronics & Communication Engineering",
    "location": "SMVITM Campus, Bantakal, Udupi",
    "experienceYears": "17+ years",
    "avatarChar": "R",
    "avatarBg": "#0284c7",
    "photoUrl": "https://smvitm.sode-edu.in/wp-content/uploads/2024/02/Raghunath-ECE-removebg-preview.png",
    "bannerBg": "linear-gradient(135deg, #0284c7 0%, #38bdf8 55%, #6366f1 100%)",
    "verified": true,
    "verifiedType": "gold",
    "about": "Mr. Raghunatha serves as Assistant Professor (Senior) in the Dept. of Electronics & Communication Engineering at Shri Madhwa Vadiraja Institute of Technology and Management (SMVITM), Bantakal. Dedicated to quality engineering education, active student mentoring, and departmental research initiatives. Core research and academic focus includes Analog Electronics, Embedded Systems.",
    "contact": {
      "email": "raghunatha.ec@sode-edu.in",
      "phone": "+91 9980236589",
      "office": "Dept. of Electronics & Communication Engineering \u00b7 Academic Block, SMVITM",
      "officeHours": "Mon \u2013 Fri \u00b7 3:00 PM \u2013 4:30 PM",
      "linkedin": "https://www.linkedin.com/company/shri-madhwa-vadiraja-institute-of-technology-and-management/",
      "scholar": "https://scholar.google.com",
      "website": "https://smvitm.sode-edu.in/faculties/mr-raghunath/"
    },
    "yearsTaught": [
      "2nd Year",
      "3rd Year",
      "4th Year"
    ],
    "semestersTaught": [
      "3rd Sem",
      "5th Sem",
      "7th Sem"
    ],
    "subjects": [
      {
        "code": "BEC312",
        "name": "Analog Electronics",
        "year": "2nd Year",
        "semester": "3rd Sem",
        "type": "Theory + Lab"
      },
      {
        "code": "BEC412",
        "name": "Embedded Systems",
        "year": "3rd Year",
        "semester": "5th Sem",
        "type": "Theory"
      }
    ],
    "education": [
      {
        "degree": "B. E.",
        "institution": "VTU / Recognized University",
        "year": "",
        "details": "Academic Qualification"
      },
      {
        "degree": "M. Tech",
        "institution": "VTU / Recognized University",
        "year": "",
        "details": "Academic Qualification"
      }
    ],
    "experience": [
      {
        "role": "Assistant Professor (Senior)",
        "organization": "SMVITM, Bantakal",
        "duration": "17 Years 3 Months",
        "description": "Serving in the Dept. of Electronics & Communication Engineering, leading classroom lectures, laboratory coursework, and undergraduate student project guidance."
      }
    ],
    "skills": [
      "Analog Electronics",
      "Embedded Systems"
    ]
  },
  {
    "id": "lec-ec-sachin-prabhu",
    "userId": null,
    "name": "Mr. Sachin Prabhu",
    "handle": "@sachin_ec2",
    "aliases": [],
    "employeeId": "FAC-EC-013",
    "designation": "Assistant Professor (Selection Grade)",
    "headline": "Assistant Professor (Selection Grade) \u00b7 Dept. of Electronics & Communication Engineering | Digital Electronics and Communication",
    "branch": "EC",
    "department": "Dept. of Electronics & Communication Engineering",
    "location": "SMVITM Campus, Bantakal, Udupi",
    "experienceYears": "14+ years",
    "avatarChar": "S",
    "avatarBg": "#0284c7",
    "photoUrl": "https://smvitm.sode-edu.in/wp-content/uploads/2015/02/SACHIN-PRABHU-EC.jpg",
    "bannerBg": "linear-gradient(135deg, #0284c7 0%, #38bdf8 55%, #6366f1 100%)",
    "verified": true,
    "verifiedType": "gold",
    "about": "Mr. Sachin Prabhu serves as Assistant Professor (Selection Grade) in the Dept. of Electronics & Communication Engineering at Shri Madhwa Vadiraja Institute of Technology and Management (SMVITM), Bantakal. Dedicated to quality engineering education, active student mentoring, and departmental research initiatives. Core research and academic focus includes Digital Electronics and Communication.",
    "contact": {
      "email": "sachinprabhu.ec@sode-edu.in",
      "phone": "+91 9964027565",
      "office": "Dept. of Electronics & Communication Engineering \u00b7 Academic Block, SMVITM",
      "officeHours": "Mon \u2013 Fri \u00b7 3:00 PM \u2013 4:30 PM",
      "linkedin": "https://www.linkedin.com/company/shri-madhwa-vadiraja-institute-of-technology-and-management/",
      "scholar": "https://scholar.google.com",
      "website": "https://smvitm.sode-edu.in/faculties/sachin-prabhu/"
    },
    "yearsTaught": [
      "2nd Year",
      "3rd Year",
      "4th Year"
    ],
    "semestersTaught": [
      "3rd Sem",
      "5th Sem",
      "7th Sem"
    ],
    "subjects": [
      {
        "code": "BEC313",
        "name": "Digital Electronics and Communication",
        "year": "2nd Year",
        "semester": "3rd Sem",
        "type": "Theory + Lab"
      },
      {
        "code": "BEC413",
        "name": "Digital Signal Processing & Architectures",
        "year": "3rd Year",
        "semester": "5th Sem",
        "type": "Theory + Lab"
      },
      {
        "code": "BEC513",
        "name": "VLSI Design & Semiconductor Fabrication",
        "year": "3rd Year",
        "semester": "6th Sem",
        "type": "Theory + Lab"
      }
    ],
    "education": [
      {
        "degree": "B.E. (Electronics and Communiction)",
        "institution": "VTU / Recognized University",
        "year": "",
        "details": "Academic Qualification"
      },
      {
        "degree": "M.Tech. (Digital Electronics and Communication)",
        "institution": "VTU / Recognized University",
        "year": "",
        "details": "Academic Qualification"
      }
    ],
    "experience": [
      {
        "role": "Assistant Professor (Selection Grade)",
        "organization": "SMVITM, Bantakal",
        "duration": "14 Years 2 Months",
        "description": "Serving in the Dept. of Electronics & Communication Engineering, leading classroom lectures, laboratory coursework, and undergraduate student project guidance."
      }
    ],
    "skills": [
      "EC",
      "Curriculum Delivery",
      "Academic Mentoring",
      "Laboratory Training"
    ]
  },
  {
    "id": "lec-ec-sandeepa-prabhu",
    "userId": null,
    "name": "Mr. Sandeepa Prabhu",
    "handle": "@sandeepa_ec",
    "aliases": [],
    "employeeId": "FAC-EC-014",
    "designation": "Assistant Professor",
    "headline": "Assistant Professor \u00b7 Dept. of Electronics & Communication Engineering | VLSI, Embedded system, IoT, Robotics",
    "branch": "EC",
    "department": "Dept. of Electronics & Communication Engineering",
    "location": "SMVITM Campus, Bantakal, Udupi",
    "experienceYears": "11+ years",
    "avatarChar": "S",
    "avatarBg": "#0284c7",
    "photoUrl": "https://smvitm.sode-edu.in/wp-content/uploads/2025/01/Sandeep-Prabhu.jpg",
    "bannerBg": "linear-gradient(135deg, #0284c7 0%, #38bdf8 55%, #6366f1 100%)",
    "verified": true,
    "verifiedType": "gold",
    "about": "Mr. Sandeepa Prabhu serves as Assistant Professor in the Dept. of Electronics & Communication Engineering at Shri Madhwa Vadiraja Institute of Technology and Management (SMVITM), Bantakal. Dedicated to quality engineering education, active student mentoring, and departmental research initiatives. Core research and academic focus includes VLSI, Embedded system, IoT, Robotics.",
    "contact": {
      "email": "sandeepa.ec@sode-edu.in",
      "phone": "+91 9686789467",
      "office": "Dept. of Electronics & Communication Engineering \u00b7 Academic Block, SMVITM",
      "officeHours": "Mon \u2013 Fri \u00b7 3:00 PM \u2013 4:30 PM",
      "linkedin": "https://www.linkedin.com/company/shri-madhwa-vadiraja-institute-of-technology-and-management/",
      "scholar": "https://scholar.google.com",
      "website": "https://smvitm.sode-edu.in/faculties/sandeepa-prabhu/"
    },
    "yearsTaught": [
      "2nd Year",
      "3rd Year",
      "4th Year"
    ],
    "semestersTaught": [
      "3rd Sem",
      "5th Sem",
      "7th Sem"
    ],
    "subjects": [
      {
        "code": "BEC314",
        "name": "VLSI",
        "year": "2nd Year",
        "semester": "3rd Sem",
        "type": "Theory + Lab"
      },
      {
        "code": "BEC414",
        "name": "Embedded system",
        "year": "3rd Year",
        "semester": "5th Sem",
        "type": "Theory"
      },
      {
        "code": "BEC514",
        "name": "Robotics",
        "year": "4th Year",
        "semester": "7th Sem",
        "type": "Theory"
      }
    ],
    "education": [
      {
        "degree": "M.Tech",
        "institution": "VTU / Recognized University",
        "year": "",
        "details": "Academic Qualification"
      },
      {
        "degree": "B.E",
        "institution": "VTU / Recognized University",
        "year": "",
        "details": "Academic Qualification"
      }
    ],
    "experience": [
      {
        "role": "Assistant Professor",
        "organization": "SMVITM, Bantakal",
        "duration": "11 Years 2 Months",
        "description": "Serving in the Dept. of Electronics & Communication Engineering, leading classroom lectures, laboratory coursework, and undergraduate student project guidance."
      }
    ],
    "skills": [
      "VLSI",
      "Embedded system",
      "Robotics"
    ]
  },
  {
    "id": "lec-ec-akshatha-rao",
    "userId": null,
    "name": "Ms. Akshatha Rao L",
    "handle": "@akshatha_ec",
    "aliases": [],
    "employeeId": "FAC-EC-015",
    "designation": "Assistant Professor (Senior)",
    "headline": "Assistant Professor (Senior) \u00b7 Dept. of Electronics & Communication Engineering | Digital communication and networking, C language",
    "branch": "EC",
    "department": "Dept. of Electronics & Communication Engineering",
    "location": "SMVITM Campus, Bantakal, Udupi",
    "experienceYears": "8+ years",
    "avatarChar": "A",
    "avatarBg": "#0284c7",
    "photoUrl": "https://smvitm.sode-edu.in/wp-content/uploads/2021/09/Akshatah-ECE-1.jpg",
    "bannerBg": "linear-gradient(135deg, #0284c7 0%, #38bdf8 55%, #6366f1 100%)",
    "verified": true,
    "verifiedType": "gold",
    "about": "Ms. Akshatha Rao L serves as Assistant Professor (Senior) in the Dept. of Electronics & Communication Engineering at Shri Madhwa Vadiraja Institute of Technology and Management (SMVITM), Bantakal. Dedicated to quality engineering education, active student mentoring, and departmental research initiatives. Core research and academic focus includes Digital communication and networking, C language.",
    "contact": {
      "email": "akshatha.ec@sode-edu.in",
      "phone": "+91 91-9902630801",
      "office": "Dept. of Electronics & Communication Engineering \u00b7 Academic Block, SMVITM",
      "officeHours": "Mon \u2013 Fri \u00b7 3:00 PM \u2013 4:30 PM",
      "linkedin": "https://www.linkedin.com/company/shri-madhwa-vadiraja-institute-of-technology-and-management/",
      "scholar": "https://scholar.google.com",
      "website": "https://smvitm.sode-edu.in/faculties/akshatha-rao-l/"
    },
    "yearsTaught": [
      "2nd Year",
      "3rd Year",
      "4th Year"
    ],
    "semestersTaught": [
      "3rd Sem",
      "5th Sem",
      "7th Sem"
    ],
    "subjects": [
      {
        "code": "BEC315",
        "name": "Digital communication and networking",
        "year": "2nd Year",
        "semester": "3rd Sem",
        "type": "Theory + Lab"
      },
      {
        "code": "BEC415",
        "name": "C language",
        "year": "3rd Year",
        "semester": "5th Sem",
        "type": "Theory"
      }
    ],
    "education": [
      {
        "degree": "B.E (Electronics and Communication)",
        "institution": "VTU / Recognized University",
        "year": "",
        "details": "Academic Qualification"
      },
      {
        "degree": "M.Tech (Digital Communication and Networking)",
        "institution": "VTU / Recognized University",
        "year": "",
        "details": "Academic Qualification"
      }
    ],
    "experience": [
      {
        "role": "Assistant Professor (Senior)",
        "organization": "SMVITM, Bantakal",
        "duration": "8 Years 2 Months",
        "description": "Serving in the Dept. of Electronics & Communication Engineering, leading classroom lectures, laboratory coursework, and undergraduate student project guidance."
      }
    ],
    "skills": [
      "C language"
    ]
  },
  {
    "id": "lec-ec-chandana",
    "userId": null,
    "name": "Ms. Chandana",
    "handle": "@chandana_ec",
    "aliases": [],
    "employeeId": "FAC-EC-016",
    "designation": "Assistant Professor",
    "headline": "Assistant Professor \u00b7 Dept. of Electronics & Communication Engineering | VLSI Design and Embedded Systems",
    "branch": "EC",
    "department": "Dept. of Electronics & Communication Engineering",
    "location": "SMVITM Campus, Bantakal, Udupi",
    "experienceYears": "4+ years",
    "avatarChar": "C",
    "avatarBg": "#0284c7",
    "photoUrl": "https://smvitm.sode-edu.in/wp-content/uploads/2024/01/KMB_7111.jpg",
    "bannerBg": "linear-gradient(135deg, #0284c7 0%, #38bdf8 55%, #6366f1 100%)",
    "verified": true,
    "verifiedType": "gold",
    "about": "Ms. Chandana serves as Assistant Professor in the Dept. of Electronics & Communication Engineering at Shri Madhwa Vadiraja Institute of Technology and Management (SMVITM), Bantakal. Dedicated to quality engineering education, active student mentoring, and departmental research initiatives. Core research and academic focus includes VLSI Design and Embedded Systems.",
    "contact": {
      "email": "chandana.ec@sode-edu.in",
      "phone": "+91 820 2589101",
      "office": "Dept. of Electronics & Communication Engineering \u00b7 Academic Block, SMVITM",
      "officeHours": "Mon \u2013 Fri \u00b7 3:00 PM \u2013 4:30 PM",
      "linkedin": "https://www.linkedin.com/company/shri-madhwa-vadiraja-institute-of-technology-and-management/",
      "scholar": "https://scholar.google.com",
      "website": "https://smvitm.sode-edu.in/faculties/ms-chandana/"
    },
    "yearsTaught": [
      "2nd Year",
      "3rd Year",
      "4th Year"
    ],
    "semestersTaught": [
      "3rd Sem",
      "5th Sem",
      "7th Sem"
    ],
    "subjects": [
      {
        "code": "BEC316",
        "name": "VLSI Design and Embedded Systems",
        "year": "2nd Year",
        "semester": "3rd Sem",
        "type": "Theory + Lab"
      },
      {
        "code": "BEC416",
        "name": "Digital Signal Processing & Architectures",
        "year": "3rd Year",
        "semester": "5th Sem",
        "type": "Theory + Lab"
      },
      {
        "code": "BEC516",
        "name": "VLSI Design & Semiconductor Fabrication",
        "year": "3rd Year",
        "semester": "6th Sem",
        "type": "Theory + Lab"
      }
    ],
    "education": [
      {
        "degree": "B. E. in Electronics and Communication Engineering",
        "institution": "VTU / Recognized University",
        "year": "",
        "details": "Academic Qualification"
      },
      {
        "degree": "M. Tech. in VLSI Design and Embedded Systems",
        "institution": "VTU / Recognized University",
        "year": "",
        "details": "Academic Qualification"
      }
    ],
    "experience": [
      {
        "role": "Assistant Professor",
        "organization": "SMVITM, Bantakal",
        "duration": "4 Years 6 Months",
        "description": "Serving in the Dept. of Electronics & Communication Engineering, leading classroom lectures, laboratory coursework, and undergraduate student project guidance."
      }
    ],
    "skills": [
      "EC",
      "Curriculum Delivery",
      "Academic Mentoring",
      "Laboratory Training"
    ]
  },
  {
    "id": "lec-ec-lahari-vaidya",
    "userId": null,
    "name": "Ms. Lahari Vaidya",
    "handle": "@lahari_ec",
    "aliases": [],
    "employeeId": "FAC-EC-017",
    "designation": "Assistant Professor",
    "headline": "Assistant Professor \u00b7 Dept. of Electronics & Communication Engineering",
    "branch": "EC",
    "department": "Dept. of Electronics & Communication Engineering",
    "location": "SMVITM Campus, Bantakal, Udupi",
    "experienceYears": "6+ years",
    "avatarChar": "L",
    "avatarBg": "#0284c7",
    "photoUrl": "https://smvitm.sode-edu.in/wp-content/uploads/2024/01/KMB_7126.jpg",
    "bannerBg": "linear-gradient(135deg, #0284c7 0%, #38bdf8 55%, #6366f1 100%)",
    "verified": true,
    "verifiedType": "gold",
    "about": "Ms. Lahari Vaidya serves as Assistant Professor in the Dept. of Electronics & Communication Engineering at Shri Madhwa Vadiraja Institute of Technology and Management (SMVITM), Bantakal. Dedicated to quality engineering education, active student mentoring, and departmental research initiatives.",
    "contact": {
      "email": "lahari.ec@sode-edu.in",
      "phone": "+91 820 2589101",
      "office": "Dept. of Electronics & Communication Engineering \u00b7 Academic Block, SMVITM",
      "officeHours": "Mon \u2013 Fri \u00b7 3:00 PM \u2013 4:30 PM",
      "linkedin": "https://www.linkedin.com/in/lahari-vaidya-884678253/",
      "scholar": "https://scholar.google.com",
      "website": "https://smvitm.sode-edu.in/faculties/ms-lahari-vaidya/"
    },
    "yearsTaught": [
      "2nd Year",
      "3rd Year",
      "4th Year"
    ],
    "semestersTaught": [
      "3rd Sem",
      "5th Sem",
      "7th Sem"
    ],
    "subjects": [
      {
        "code": "BEC417",
        "name": "Digital Signal Processing & Architectures",
        "year": "3rd Year",
        "semester": "5th Sem",
        "type": "Theory + Lab"
      },
      {
        "code": "BEC517",
        "name": "VLSI Design & Semiconductor Fabrication",
        "year": "3rd Year",
        "semester": "6th Sem",
        "type": "Theory + Lab"
      },
      {
        "code": "BEC617",
        "name": "Microcontrollers & Embedded Systems",
        "year": "2nd Year",
        "semester": "4th Sem",
        "type": "Theory + Lab"
      }
    ],
    "education": [
      {
        "degree": "B. E.",
        "institution": "VTU / Recognized University",
        "year": "",
        "details": "Academic Qualification"
      },
      {
        "degree": "M. Tech.",
        "institution": "VTU / Recognized University",
        "year": "",
        "details": "Academic Qualification"
      },
      {
        "degree": "(M.A Psychology)",
        "institution": "VTU / Recognized University",
        "year": "",
        "details": "Academic Qualification"
      }
    ],
    "experience": [
      {
        "role": "Assistant Professor",
        "organization": "SMVITM, Bantakal",
        "duration": "6 Years 2 Months",
        "description": "Serving in the Dept. of Electronics & Communication Engineering, leading classroom lectures, laboratory coursework, and undergraduate student project guidance."
      }
    ],
    "skills": [
      "EC",
      "Curriculum Delivery",
      "Academic Mentoring",
      "Laboratory Training"
    ]
  },
  {
    "id": "lec-ec-pavithra-poornima",
    "userId": null,
    "name": "Ms. Pavithra Poornima S",
    "handle": "@pavithra_ec",
    "aliases": [],
    "employeeId": "FAC-EC-018",
    "designation": "Assistant Professor(Senior)",
    "headline": "Assistant Professor(Senior) \u00b7 Dept. of Electronics & Communication Engineering",
    "branch": "EC",
    "department": "Dept. of Electronics & Communication Engineering",
    "location": "SMVITM Campus, Bantakal, Udupi",
    "experienceYears": "13+ years",
    "avatarChar": "P",
    "avatarBg": "#0284c7",
    "photoUrl": "https://smvitm.sode-edu.in/wp-content/uploads/2022/09/Pavitra-ECE.jpg",
    "bannerBg": "linear-gradient(135deg, #0284c7 0%, #38bdf8 55%, #6366f1 100%)",
    "verified": true,
    "verifiedType": "gold",
    "about": "Ms. Pavithra Poornima S serves as Assistant Professor(Senior) in the Dept. of Electronics & Communication Engineering at Shri Madhwa Vadiraja Institute of Technology and Management (SMVITM), Bantakal. Dedicated to quality engineering education, active student mentoring, and departmental research initiatives.",
    "contact": {
      "email": "pavithra.ec@sode-edu.in",
      "phone": "+91 820 2589101",
      "office": "Dept. of Electronics & Communication Engineering \u00b7 Academic Block, SMVITM",
      "officeHours": "Mon \u2013 Fri \u00b7 3:00 PM \u2013 4:30 PM",
      "linkedin": "https://www.linkedin.com/company/shri-madhwa-vadiraja-institute-of-technology-and-management/",
      "scholar": "https://scholar.google.com",
      "website": "https://smvitm.sode-edu.in/faculties/ms-pavitra-poornima/"
    },
    "yearsTaught": [
      "2nd Year",
      "3rd Year",
      "4th Year"
    ],
    "semestersTaught": [
      "3rd Sem",
      "5th Sem",
      "7th Sem"
    ],
    "subjects": [
      {
        "code": "BEC418",
        "name": "Digital Signal Processing & Architectures",
        "year": "3rd Year",
        "semester": "5th Sem",
        "type": "Theory + Lab"
      },
      {
        "code": "BEC518",
        "name": "VLSI Design & Semiconductor Fabrication",
        "year": "3rd Year",
        "semester": "6th Sem",
        "type": "Theory + Lab"
      },
      {
        "code": "BEC618",
        "name": "Microcontrollers & Embedded Systems",
        "year": "2nd Year",
        "semester": "4th Sem",
        "type": "Theory + Lab"
      }
    ],
    "education": [
      {
        "degree": "M.Tech (DEC)",
        "institution": "VTU / Recognized University",
        "year": "",
        "details": "Academic Qualification"
      },
      {
        "degree": "B.E (ECE)",
        "institution": "VTU / Recognized University",
        "year": "",
        "details": "Academic Qualification"
      }
    ],
    "experience": [
      {
        "role": "Assistant Professor(Senior)",
        "organization": "SMVITM, Bantakal",
        "duration": "13 Years 2 Months",
        "description": "Serving in the Dept. of Electronics & Communication Engineering, leading classroom lectures, laboratory coursework, and undergraduate student project guidance."
      }
    ],
    "skills": [
      "EC",
      "Curriculum Delivery",
      "Academic Mentoring",
      "Laboratory Training"
    ]
  },
  {
    "id": "lec-ec-shashikala-r",
    "userId": null,
    "name": "Ms. Shashikala R",
    "handle": "@shashikala_ec",
    "aliases": [],
    "employeeId": "FAC-EC-019",
    "designation": "Assistant Professor (Selection Grade)",
    "headline": "Assistant Professor (Selection Grade) \u00b7 Dept. of Electronics & Communication Engineering | Digital Electronics and Advanced Communication",
    "branch": "EC",
    "department": "Dept. of Electronics & Communication Engineering",
    "location": "SMVITM Campus, Bantakal, Udupi",
    "experienceYears": "15+ years",
    "avatarChar": "S",
    "avatarBg": "#0284c7",
    "photoUrl": "https://smvitm.sode-edu.in/wp-content/uploads/2015/02/SHASHIKALA-R.jpg",
    "bannerBg": "linear-gradient(135deg, #0284c7 0%, #38bdf8 55%, #6366f1 100%)",
    "verified": true,
    "verifiedType": "gold",
    "about": "Ms. Shashikala R serves as Assistant Professor (Selection Grade) in the Dept. of Electronics & Communication Engineering at Shri Madhwa Vadiraja Institute of Technology and Management (SMVITM), Bantakal. Dedicated to quality engineering education, active student mentoring, and departmental research initiatives. Core research and academic focus includes Digital Electronics and Advanced Communication.",
    "contact": {
      "email": "shashikala.ec@sode-edu.in",
      "phone": "+91 9742352982",
      "office": "Dept. of Electronics & Communication Engineering \u00b7 Academic Block, SMVITM",
      "officeHours": "Mon \u2013 Fri \u00b7 3:00 PM \u2013 4:30 PM",
      "linkedin": "https://www.linkedin.com/company/shri-madhwa-vadiraja-institute-of-technology-and-management/",
      "scholar": "https://scholar.google.com",
      "website": "https://smvitm.sode-edu.in/faculties/shashikala-r/"
    },
    "yearsTaught": [
      "2nd Year",
      "3rd Year",
      "4th Year"
    ],
    "semestersTaught": [
      "3rd Sem",
      "5th Sem",
      "7th Sem"
    ],
    "subjects": [
      {
        "code": "BEC319",
        "name": "Digital Electronics and Advanced Communication",
        "year": "2nd Year",
        "semester": "3rd Sem",
        "type": "Theory + Lab"
      },
      {
        "code": "BEC419",
        "name": "Digital Signal Processing & Architectures",
        "year": "3rd Year",
        "semester": "5th Sem",
        "type": "Theory + Lab"
      },
      {
        "code": "BEC519",
        "name": "VLSI Design & Semiconductor Fabrication",
        "year": "3rd Year",
        "semester": "6th Sem",
        "type": "Theory + Lab"
      }
    ],
    "education": [
      {
        "degree": "B.E",
        "institution": "VTU / Recognized University",
        "year": "",
        "details": "Academic Qualification"
      },
      {
        "degree": "M-Tech",
        "institution": "VTU / Recognized University",
        "year": "",
        "details": "Academic Qualification"
      }
    ],
    "experience": [
      {
        "role": "Assistant Professor (Selection Grade)",
        "organization": "SMVITM, Bantakal",
        "duration": "15 Years 4 Months",
        "description": "Serving in the Dept. of Electronics & Communication Engineering, leading classroom lectures, laboratory coursework, and undergraduate student project guidance."
      }
    ],
    "skills": [
      "EC",
      "Curriculum Delivery",
      "Academic Mentoring",
      "Laboratory Training"
    ]
  },
  {
    "id": "lec-ec-sowmya-bhat",
    "userId": null,
    "name": "Ms. Sowmya Bhat",
    "handle": "@sowmya_ec",
    "aliases": [],
    "employeeId": "FAC-EC-020",
    "designation": "Assistant Professor (Selection Grade)",
    "headline": "Assistant Professor (Selection Grade) \u00b7 Dept. of Electronics & Communication Engineering | VLSI Design and Embedded Systems",
    "branch": "EC",
    "department": "Dept. of Electronics & Communication Engineering",
    "location": "SMVITM Campus, Bantakal, Udupi",
    "experienceYears": "13+ years",
    "avatarChar": "S",
    "avatarBg": "#0284c7",
    "photoUrl": "https://smvitm.sode-edu.in/wp-content/uploads/2015/02/SOWMYA-BHAT-EC.jpg",
    "bannerBg": "linear-gradient(135deg, #0284c7 0%, #38bdf8 55%, #6366f1 100%)",
    "verified": true,
    "verifiedType": "gold",
    "about": "Ms. Sowmya Bhat serves as Assistant Professor (Selection Grade) in the Dept. of Electronics & Communication Engineering at Shri Madhwa Vadiraja Institute of Technology and Management (SMVITM), Bantakal. Dedicated to quality engineering education, active student mentoring, and departmental research initiatives. Core research and academic focus includes VLSI Design and Embedded Systems.",
    "contact": {
      "email": "sowmyabhat.ec@sode-edu.in",
      "phone": "+91 9480147407",
      "office": "Dept. of Electronics & Communication Engineering \u00b7 Academic Block, SMVITM",
      "officeHours": "Mon \u2013 Fri \u00b7 3:00 PM \u2013 4:30 PM",
      "linkedin": "https://www.linkedin.com/company/shri-madhwa-vadiraja-institute-of-technology-and-management/",
      "scholar": "https://scholar.google.com",
      "website": "https://smvitm.sode-edu.in/faculties/sowmya-bhat/"
    },
    "yearsTaught": [
      "2nd Year",
      "3rd Year",
      "4th Year"
    ],
    "semestersTaught": [
      "3rd Sem",
      "5th Sem",
      "7th Sem"
    ],
    "subjects": [
      {
        "code": "BEC320",
        "name": "VLSI Design and Embedded Systems",
        "year": "2nd Year",
        "semester": "3rd Sem",
        "type": "Theory + Lab"
      },
      {
        "code": "BEC420",
        "name": "Digital Signal Processing & Architectures",
        "year": "3rd Year",
        "semester": "5th Sem",
        "type": "Theory + Lab"
      },
      {
        "code": "BEC520",
        "name": "VLSI Design & Semiconductor Fabrication",
        "year": "3rd Year",
        "semester": "6th Sem",
        "type": "Theory + Lab"
      }
    ],
    "education": [
      {
        "degree": "BE (Electrical and Electronics Engineering)",
        "institution": "VTU / Recognized University",
        "year": "",
        "details": "Academic Qualification"
      },
      {
        "degree": "M.Tech (VLSI Design and Embedded Systems)",
        "institution": "VTU / Recognized University",
        "year": "",
        "details": "Academic Qualification"
      }
    ],
    "experience": [
      {
        "role": "Assistant Professor (Selection Grade)",
        "organization": "SMVITM, Bantakal",
        "duration": "13 Years 4 Months",
        "description": "Serving in the Dept. of Electronics & Communication Engineering, leading classroom lectures, laboratory coursework, and undergraduate student project guidance."
      }
    ],
    "skills": [
      "EC",
      "Curriculum Delivery",
      "Academic Mentoring",
      "Laboratory Training"
    ]
  },
  {
    "id": "lec-ec-yogeshwary-b",
    "userId": null,
    "name": "Ms. Yogeshwary B H",
    "handle": "@yogeshwary_ec",
    "aliases": [],
    "employeeId": "FAC-EC-021",
    "designation": "Assistant Professor (Senior)",
    "headline": "Assistant Professor (Senior) \u00b7 Dept. of Electronics & Communication Engineering | Wireless Communications, Computer Networks, Digital Electronics",
    "branch": "EC",
    "department": "Dept. of Electronics & Communication Engineering",
    "location": "SMVITM Campus, Bantakal, Udupi",
    "experienceYears": "14.5+ years",
    "avatarChar": "Y",
    "avatarBg": "#0284c7",
    "photoUrl": "https://smvitm.sode-edu.in/wp-content/uploads/2022/04/Yogeshwary-1.jpg",
    "bannerBg": "linear-gradient(135deg, #0284c7 0%, #38bdf8 55%, #6366f1 100%)",
    "verified": true,
    "verifiedType": "gold",
    "about": "Ms. Yogeshwary B H serves as Assistant Professor (Senior) in the Dept. of Electronics & Communication Engineering at Shri Madhwa Vadiraja Institute of Technology and Management (SMVITM), Bantakal. Dedicated to quality engineering education, active student mentoring, and departmental research initiatives. Core research and academic focus includes Wireless Communications, Computer Networks, Digital Electronics.",
    "contact": {
      "email": "yogeshwary.ec@sode-edu.in",
      "phone": "+91 9741709922",
      "office": "Dept. of Electronics & Communication Engineering \u00b7 Academic Block, SMVITM",
      "officeHours": "Mon \u2013 Fri \u00b7 3:00 PM \u2013 4:30 PM",
      "linkedin": "https://www.linkedin.com/in/yogeshwarybh/",
      "scholar": "https://scholar.google.com",
      "website": "https://smvitm.sode-edu.in/faculties/yogeshwary-b-h/"
    },
    "yearsTaught": [
      "2nd Year",
      "3rd Year",
      "4th Year"
    ],
    "semestersTaught": [
      "3rd Sem",
      "5th Sem",
      "7th Sem"
    ],
    "subjects": [
      {
        "code": "BEC321",
        "name": "Wireless Communications",
        "year": "2nd Year",
        "semester": "3rd Sem",
        "type": "Theory + Lab"
      },
      {
        "code": "BEC421",
        "name": "Computer Networks",
        "year": "3rd Year",
        "semester": "5th Sem",
        "type": "Theory"
      },
      {
        "code": "BEC521",
        "name": "Digital Electronics",
        "year": "4th Year",
        "semester": "7th Sem",
        "type": "Theory"
      }
    ],
    "education": [
      {
        "degree": "B.E (Electronics and Communication Engineering)",
        "institution": "VTU / Recognized University",
        "year": "",
        "details": "Academic Qualification"
      },
      {
        "degree": "M.Tech (Digital Electronics)",
        "institution": "VTU / Recognized University",
        "year": "",
        "details": "Academic Qualification"
      }
    ],
    "experience": [
      {
        "role": "Assistant Professor (Senior)",
        "organization": "SMVITM, Bantakal",
        "duration": "14.5 Years 8 Months",
        "description": "Serving in the Dept. of Electronics & Communication Engineering, leading classroom lectures, laboratory coursework, and undergraduate student project guidance."
      }
    ],
    "skills": [
      "Wireless Communications",
      "Computer Networks",
      "Digital Electronics"
    ]
  },
  {
    "id": "lec-mech-sudarshan-rao",
    "userId": null,
    "name": "Dr. Sudarshan Rao K",
    "handle": "@sudarshan_mech",
    "aliases": [
      "Professor & Dean (Academics)"
    ],
    "employeeId": "FAC-ME-001",
    "designation": "Professor & Dean (Academics)",
    "headline": "Professor & Dean (Academics) \u00b7 Dept. of Mechanical Engineering | Composite Materials Tribology Taguchi Analysis Educational Research",
    "branch": "MECH",
    "department": "Dept. of Mechanical Engineering",
    "location": "SMVITM Campus, Bantakal, Udupi",
    "experienceYears": "30+ years",
    "avatarChar": "S",
    "avatarBg": "#d97706",
    "photoUrl": "https://smvitm.sode-edu.in/wp-content/uploads/2021/07/SUDARSHAN-RAO-MECH.jpg",
    "bannerBg": "linear-gradient(135deg, #d97706 0%, #f59e0b 55%, #fbbf24 100%)",
    "verified": true,
    "verifiedType": "gold",
    "about": "Dr. Sudarshan Rao K serves as Professor & Dean (Academics) in the Dept. of Mechanical Engineering at Shri Madhwa Vadiraja Institute of Technology and Management (SMVITM), Bantakal. Dedicated to quality engineering education, active student mentoring, and departmental research initiatives. Core research and academic focus includes Composite Materials Tribology Taguchi Analysis Educational Research.",
    "contact": {
      "email": "sudarshan.mech@sode-edu.in",
      "phone": "+91 9448252890",
      "office": "Dept. of Mechanical Engineering \u00b7 Academic Block, SMVITM",
      "officeHours": "Mon \u2013 Fri \u00b7 3:00 PM \u2013 4:30 PM",
      "linkedin": "https://www.linkedin.com/in/dr-sudarshan-rao-k-00229966/",
      "scholar": "https://scholar.google.com",
      "website": "https://smvitm.sode-edu.in/faculties/dr-sudarshan-rao-k/"
    },
    "yearsTaught": [
      "2nd Year",
      "3rd Year",
      "4th Year"
    ],
    "semestersTaught": [
      "3rd Sem",
      "5th Sem",
      "7th Sem"
    ],
    "subjects": [
      {
        "code": "BME301",
        "name": "Composite Materials Tribology Taguchi Analysis Educational Research",
        "year": "2nd Year",
        "semester": "3rd Sem",
        "type": "Theory + Lab"
      },
      {
        "code": "BME401",
        "name": "Applied Thermodynamics & Heat Transfer",
        "year": "2nd Year",
        "semester": "4th Sem",
        "type": "Theory + Lab"
      },
      {
        "code": "BME501",
        "name": "Finite Element Analysis & Computer Aided Design",
        "year": "3rd Year",
        "semester": "5th Sem",
        "type": "Theory + Lab"
      }
    ],
    "education": [
      {
        "degree": "BE",
        "institution": "VTU / Recognized University",
        "year": "",
        "details": "Academic Qualification"
      },
      {
        "degree": "M Tech",
        "institution": "VTU / Recognized University",
        "year": "",
        "details": "Academic Qualification"
      },
      {
        "degree": "Ph D",
        "institution": "VTU / Recognized University",
        "year": "",
        "details": "Academic Qualification"
      }
    ],
    "experience": [
      {
        "role": "Professor & Dean (Academics)",
        "organization": "SMVITM, Bantakal",
        "duration": "30 Years 2 Months",
        "description": "Serving in the Dept. of Mechanical Engineering, leading classroom lectures, laboratory coursework, and undergraduate student project guidance."
      }
    ],
    "skills": [
      "MECH",
      "Curriculum Delivery",
      "Academic Mentoring",
      "Laboratory Training"
    ]
  },
  {
    "id": "lec-mech-aditya-kudva",
    "userId": null,
    "name": "Mr. Aditya Kudva S",
    "handle": "@aditya_mech",
    "aliases": [
      "HOD MECH",
      "Head of Department"
    ],
    "employeeId": "FAC-ME-002",
    "designation": "Assistant Professor (Selection Grade) & In-charge HOD",
    "headline": "Assistant Professor (Selection Grade) & In-charge HOD \u00b7 Dept. of Mechanical Engineering | Manufacturing Engineering",
    "branch": "MECH",
    "department": "Dept. of Mechanical Engineering",
    "location": "SMVITM Campus, Bantakal, Udupi",
    "experienceYears": "13+ years",
    "avatarChar": "A",
    "avatarBg": "#d97706",
    "photoUrl": "https://smvitm.sode-edu.in/wp-content/uploads/2025/01/ADITYA-KUDVA-MECH.jpg",
    "bannerBg": "linear-gradient(135deg, #d97706 0%, #f59e0b 55%, #fbbf24 100%)",
    "verified": true,
    "verifiedType": "gold",
    "about": "Mr. Aditya Kudva S serves as Assistant Professor (Selection Grade) & In-charge HOD in the Dept. of Mechanical Engineering at Shri Madhwa Vadiraja Institute of Technology and Management (SMVITM), Bantakal. Dedicated to quality engineering education, active student mentoring, and departmental research initiatives. Core research and academic focus includes Manufacturing Engineering.",
    "contact": {
      "email": "mech@sode-edu.in",
      "phone": "+91 Phone \u2013 7829868237(M)",
      "office": "Dept. of Mechanical Engineering \u00b7 Academic Block, SMVITM",
      "officeHours": "Mon \u2013 Fri \u00b7 3:00 PM \u2013 4:30 PM",
      "linkedin": "https://www.linkedin.com/in/aditya-kudva-53b23541/",
      "scholar": "https://scholar.google.com",
      "website": "https://smvitm.sode-edu.in/faculties/mr-aditya-kudva-s/"
    },
    "yearsTaught": [
      "2nd Year",
      "3rd Year",
      "4th Year"
    ],
    "semestersTaught": [
      "3rd Sem",
      "5th Sem",
      "7th Sem"
    ],
    "subjects": [
      {
        "code": "BME302",
        "name": "Manufacturing Engineering",
        "year": "2nd Year",
        "semester": "3rd Sem",
        "type": "Theory + Lab"
      },
      {
        "code": "BME402",
        "name": "Applied Thermodynamics & Heat Transfer",
        "year": "2nd Year",
        "semester": "4th Sem",
        "type": "Theory + Lab"
      },
      {
        "code": "BME502",
        "name": "Finite Element Analysis & Computer Aided Design",
        "year": "3rd Year",
        "semester": "5th Sem",
        "type": "Theory + Lab"
      }
    ],
    "education": [
      {
        "degree": "PhD (pursuing- biodegradable implant materials)",
        "institution": "VTU / Recognized University",
        "year": "",
        "details": "Academic Qualification"
      },
      {
        "degree": "M.Tech (Manufacturing Engineering & Technology)",
        "institution": "VTU / Recognized University",
        "year": "",
        "details": "Academic Qualification"
      },
      {
        "degree": "B.E (Automobile Engineering)",
        "institution": "VTU / Recognized University",
        "year": "",
        "details": "Academic Qualification"
      }
    ],
    "experience": [
      {
        "role": "Assistant Professor (Selection Grade) & In-charge HOD",
        "organization": "SMVITM, Bantakal",
        "duration": "13 Years 10 Months",
        "description": "Serving in the Dept. of Mechanical Engineering, leading classroom lectures, laboratory coursework, and undergraduate student project guidance."
      }
    ],
    "skills": [
      "Manufacturing Engineering"
    ]
  },
  {
    "id": "lec-mech-bharath-k",
    "userId": null,
    "name": "Dr. Bharath K. Bhat",
    "handle": "@bharath_mech",
    "aliases": [],
    "employeeId": "FAC-ME-003",
    "designation": "Assistant Professor (Selection Grade)",
    "headline": "Assistant Professor (Selection Grade) \u00b7 Dept. of Mechanical Engineering | Design Engineering, Finite Element Method, Biomechanics",
    "branch": "MECH",
    "department": "Dept. of Mechanical Engineering",
    "location": "SMVITM Campus, Bantakal, Udupi",
    "experienceYears": "4+ years",
    "avatarChar": "B",
    "avatarBg": "#d97706",
    "photoUrl": "https://smvitm.sode-edu.in/wp-content/uploads/2021/01/Dr.-Bharath-Bhat.webp",
    "bannerBg": "linear-gradient(135deg, #d97706 0%, #f59e0b 55%, #fbbf24 100%)",
    "verified": true,
    "verifiedType": "gold",
    "about": "Dr. Bharath K. Bhat serves as Assistant Professor (Selection Grade) in the Dept. of Mechanical Engineering at Shri Madhwa Vadiraja Institute of Technology and Management (SMVITM), Bantakal. Dedicated to quality engineering education, active student mentoring, and departmental research initiatives. Core research and academic focus includes Design Engineering, Finite Element Method, Biomechanics.",
    "contact": {
      "email": "bharath.mech@sode-edu.in",
      "phone": "+91 91 9141051362",
      "office": "Dept. of Mechanical Engineering \u00b7 Academic Block, SMVITM",
      "officeHours": "Mon \u2013 Fri \u00b7 3:00 PM \u2013 4:30 PM",
      "linkedin": "https://www.linkedin.com/in/dr-er-bharath-k-bhat-b3659022b/",
      "scholar": "https://scholar.google.com",
      "website": "https://smvitm.sode-edu.in/faculties/dr-bharath-k-bhat/"
    },
    "yearsTaught": [
      "2nd Year",
      "3rd Year",
      "4th Year"
    ],
    "semestersTaught": [
      "3rd Sem",
      "5th Sem",
      "7th Sem"
    ],
    "subjects": [
      {
        "code": "BME303",
        "name": "Design Engineering",
        "year": "2nd Year",
        "semester": "3rd Sem",
        "type": "Theory + Lab"
      },
      {
        "code": "BME403",
        "name": "Finite Element Method",
        "year": "3rd Year",
        "semester": "5th Sem",
        "type": "Theory"
      },
      {
        "code": "BME503",
        "name": "Biomechanics",
        "year": "4th Year",
        "semester": "7th Sem",
        "type": "Theory"
      }
    ],
    "education": [
      {
        "degree": "B. E. (Mechanical Engineering)",
        "institution": "VTU / Recognized University",
        "year": "",
        "details": "Academic Qualification"
      },
      {
        "degree": "M.E (Design Engineering)",
        "institution": "VTU / Recognized University",
        "year": "",
        "details": "Academic Qualification"
      },
      {
        "degree": "Ph. D (Biomechanics)",
        "institution": "VTU / Recognized University",
        "year": "",
        "details": "Academic Qualification"
      }
    ],
    "experience": [
      {
        "role": "Assistant Professor (Selection Grade)",
        "organization": "SMVITM, Bantakal",
        "duration": "4 Years 6 Months",
        "description": "Serving in the Dept. of Mechanical Engineering, leading classroom lectures, laboratory coursework, and undergraduate student project guidance."
      }
    ],
    "skills": [
      "Design Engineering",
      "Finite Element Method",
      "Biomechanics"
    ]
  },
  {
    "id": "lec-mech-h-udaya",
    "userId": null,
    "name": "Dr. H. Udaya Prasanna",
    "handle": "@hudaya_mech",
    "aliases": [],
    "employeeId": "FAC-ME-004",
    "designation": "Professor on Contract",
    "headline": "Professor on Contract \u00b7 Dept. of Mechanical Engineering | Material Science, Metallurgical and Mechanical engineering ; Creep ...",
    "branch": "MECH",
    "department": "Dept. of Mechanical Engineering",
    "location": "SMVITM Campus, Bantakal, Udupi",
    "experienceYears": "36+ years",
    "avatarChar": "H",
    "avatarBg": "#d97706",
    "photoUrl": "https://smvitm.sode-edu.in/wp-content/uploads/2018/10/Udaya-Prasanna.jpg",
    "bannerBg": "linear-gradient(135deg, #d97706 0%, #f59e0b 55%, #fbbf24 100%)",
    "verified": true,
    "verifiedType": "gold",
    "about": "Dr. H. Udaya Prasanna serves as Professor on Contract in the Dept. of Mechanical Engineering at Shri Madhwa Vadiraja Institute of Technology and Management (SMVITM), Bantakal. Dedicated to quality engineering education, active student mentoring, and departmental research initiatives. Core research and academic focus includes Material Science, Metallurgical and Mechanical engineering ; Creep and wear of metals- in particular - of steels and steel welds.",
    "contact": {
      "email": "udaya.mech@sode-edu.in",
      "phone": "+91 9480789148",
      "office": "Dept. of Mechanical Engineering \u00b7 Academic Block, SMVITM",
      "officeHours": "Mon \u2013 Fri \u00b7 3:00 PM \u2013 4:30 PM",
      "linkedin": "https://www.linkedin.com/company/shri-madhwa-vadiraja-institute-of-technology-and-management/",
      "scholar": "https://scholar.google.com",
      "website": "https://smvitm.sode-edu.in/faculties/dr-h-udaya-prasanna/"
    },
    "yearsTaught": [
      "2nd Year",
      "3rd Year",
      "4th Year"
    ],
    "semestersTaught": [
      "3rd Sem",
      "5th Sem",
      "7th Sem"
    ],
    "subjects": [
      {
        "code": "BME304",
        "name": "Material Science",
        "year": "2nd Year",
        "semester": "3rd Sem",
        "type": "Theory + Lab"
      },
      {
        "code": "BME404",
        "name": "Metallurgical and Mechanical engineering",
        "year": "3rd Year",
        "semester": "5th Sem",
        "type": "Theory"
      },
      {
        "code": "BME504",
        "name": "Creep and wear of metals- in particular - of steels and steel welds",
        "year": "4th Year",
        "semester": "7th Sem",
        "type": "Theory"
      }
    ],
    "education": [
      {
        "degree": "Bachelor of Technology- Metallurgical Engineering- Mysore University",
        "institution": "VTU / Recognized University",
        "year": "",
        "details": "Academic Qualification"
      },
      {
        "degree": "Master of Engineering-Mechanical Engineering- Indian Institute of Science, Bangalore",
        "institution": "VTU / Recognized University",
        "year": "",
        "details": "Academic Qualification"
      },
      {
        "degree": "Doctor of Philosophy- Materials and Metallurgical Engineering- NITK-Suratkal-Mangalore",
        "institution": "VTU / Recognized University",
        "year": "",
        "details": "Academic Qualification"
      }
    ],
    "experience": [
      {
        "role": "Professor on Contract",
        "organization": "SMVITM, Bantakal",
        "duration": "36 Years 2 Months",
        "description": "Serving in the Dept. of Mechanical Engineering, leading classroom lectures, laboratory coursework, and undergraduate student project guidance."
      }
    ],
    "skills": [
      "Material Science"
    ]
  },
  {
    "id": "lec-mech-madhukara-nayak",
    "userId": null,
    "name": "Dr. Madhukara Nayak",
    "handle": "@madhukara_mech",
    "aliases": [],
    "employeeId": "FAC-ME-005",
    "designation": "Associate Professor",
    "headline": "Associate Professor \u00b7 Dept. of Mechanical Engineering | Management Women entrepreneurship Entrepreneurship Operation Resear...",
    "branch": "MECH",
    "department": "Dept. of Mechanical Engineering",
    "location": "SMVITM Campus, Bantakal, Udupi",
    "experienceYears": "15+ years",
    "avatarChar": "M",
    "avatarBg": "#d97706",
    "photoUrl": "https://smvitm.sode-edu.in/wp-content/uploads/2024/08/4334.jpg",
    "bannerBg": "linear-gradient(135deg, #d97706 0%, #f59e0b 55%, #fbbf24 100%)",
    "verified": true,
    "verifiedType": "gold",
    "about": "Dr. Madhukara Nayak serves as Associate Professor in the Dept. of Mechanical Engineering at Shri Madhwa Vadiraja Institute of Technology and Management (SMVITM), Bantakal. Dedicated to quality engineering education, active student mentoring, and departmental research initiatives. Core research and academic focus includes Management Women entrepreneurship Entrepreneurship Operation Research Manufacturing Engineering Advanced Machining Techniques Human Resource Development. Knowledge Management Financial Management Energy Engineering Engineering Graphics.",
    "contact": {
      "email": "madhukara.mech@sode-edu.in",
      "phone": "+91 9535626843",
      "office": "Dept. of Mechanical Engineering \u00b7 Academic Block, SMVITM",
      "officeHours": "Mon \u2013 Fri \u00b7 3:00 PM \u2013 4:30 PM",
      "linkedin": "https://www.linkedin.com/company/shri-madhwa-vadiraja-institute-of-technology-and-management/",
      "scholar": "https://scholar.google.com",
      "website": "https://smvitm.sode-edu.in/faculties/mr-madhukar-nayak/"
    },
    "yearsTaught": [
      "2nd Year",
      "3rd Year",
      "4th Year"
    ],
    "semestersTaught": [
      "3rd Sem",
      "5th Sem",
      "7th Sem"
    ],
    "subjects": [
      {
        "code": "BME305",
        "name": "Management Women entrepreneurship Entrepreneurship Operation Research Manufacturing Engineering Advanced Machining Techniques Human Resource Development. Knowledge Management Financial Management Energy Engineering Engineering Graphics",
        "year": "2nd Year",
        "semester": "3rd Sem",
        "type": "Theory + Lab"
      },
      {
        "code": "BME405",
        "name": "Applied Thermodynamics & Heat Transfer",
        "year": "2nd Year",
        "semester": "4th Sem",
        "type": "Theory + Lab"
      },
      {
        "code": "BME505",
        "name": "Finite Element Analysis & Computer Aided Design",
        "year": "3rd Year",
        "semester": "5th Sem",
        "type": "Theory + Lab"
      }
    ],
    "education": [
      {
        "degree": "B.E. in Industrial Production",
        "institution": "VTU / Recognized University",
        "year": "",
        "details": "Academic Qualification"
      },
      {
        "degree": "M.Tech. in Engineering Management",
        "institution": "VTU / Recognized University",
        "year": "",
        "details": "Academic Qualification"
      },
      {
        "degree": "PhD in Mechanical Engineering Science",
        "institution": "VTU / Recognized University",
        "year": "",
        "details": "Academic Qualification"
      },
      {
        "degree": "MBA in HR",
        "institution": "VTU / Recognized University",
        "year": "",
        "details": "Academic Qualification"
      }
    ],
    "experience": [
      {
        "role": "Associate Professor",
        "organization": "SMVITM, Bantakal",
        "duration": "15 Years 4 Months",
        "description": "Serving in the Dept. of Mechanical Engineering, leading classroom lectures, laboratory coursework, and undergraduate student project guidance."
      }
    ],
    "skills": [
      "MECH",
      "Curriculum Delivery",
      "Academic Mentoring",
      "Laboratory Training"
    ]
  },
  {
    "id": "lec-mech-manjunatha-s",
    "userId": null,
    "name": "Dr. Manjunatha S",
    "handle": "@manjunatha_mech",
    "aliases": [],
    "employeeId": "FAC-ME-006",
    "designation": "Assistant Professor (Selection Grade)",
    "headline": "Assistant Professor (Selection Grade) \u00b7 Dept. of Mechanical Engineering | IC Engines",
    "branch": "MECH",
    "department": "Dept. of Mechanical Engineering",
    "location": "SMVITM Campus, Bantakal, Udupi",
    "experienceYears": "14+ years",
    "avatarChar": "M",
    "avatarBg": "#d97706",
    "photoUrl": "https://smvitm.sode-edu.in/wp-content/uploads/2024/01/KMB_7055.jpg",
    "bannerBg": "linear-gradient(135deg, #d97706 0%, #f59e0b 55%, #fbbf24 100%)",
    "verified": true,
    "verifiedType": "gold",
    "about": "Dr. Manjunatha S serves as Assistant Professor (Selection Grade) in the Dept. of Mechanical Engineering at Shri Madhwa Vadiraja Institute of Technology and Management (SMVITM), Bantakal. Dedicated to quality engineering education, active student mentoring, and departmental research initiatives. Core research and academic focus includes IC Engines.",
    "contact": {
      "email": "manjunath.mech@sode-edu.in",
      "phone": "+91 7411346375",
      "office": "Dept. of Mechanical Engineering \u00b7 Academic Block, SMVITM",
      "officeHours": "Mon \u2013 Fri \u00b7 3:00 PM \u2013 4:30 PM",
      "linkedin": "https://www.linkedin.com/in/manjunatha-s-608b351b0/",
      "scholar": "https://scholar.google.com",
      "website": "https://smvitm.sode-edu.in/faculties/manjunath-s/"
    },
    "yearsTaught": [
      "2nd Year",
      "3rd Year",
      "4th Year"
    ],
    "semestersTaught": [
      "3rd Sem",
      "5th Sem",
      "7th Sem"
    ],
    "subjects": [
      {
        "code": "BME306",
        "name": "IC Engines",
        "year": "2nd Year",
        "semester": "3rd Sem",
        "type": "Theory + Lab"
      },
      {
        "code": "BME406",
        "name": "Applied Thermodynamics & Heat Transfer",
        "year": "2nd Year",
        "semester": "4th Sem",
        "type": "Theory + Lab"
      },
      {
        "code": "BME506",
        "name": "Finite Element Analysis & Computer Aided Design",
        "year": "3rd Year",
        "semester": "5th Sem",
        "type": "Theory + Lab"
      }
    ],
    "education": [
      {
        "degree": "B.E, M.Tech, Ph.D",
        "institution": "VTU / Recognized University",
        "year": "",
        "details": "Academic Qualification"
      }
    ],
    "experience": [
      {
        "role": "Assistant Professor (Selection Grade)",
        "organization": "SMVITM, Bantakal",
        "duration": "14 Years 6 Months",
        "description": "Serving in the Dept. of Mechanical Engineering, leading classroom lectures, laboratory coursework, and undergraduate student project guidance."
      }
    ],
    "skills": [
      "IC Engines"
    ]
  },
  {
    "id": "lec-mech-raja-yateesh",
    "userId": null,
    "name": "Dr. Raja Yateesh Yadav",
    "handle": "@raja_mech",
    "aliases": [],
    "employeeId": "FAC-ME-007",
    "designation": "Associate Professor",
    "headline": "Associate Professor \u00b7 Dept. of Mechanical Engineering | Thermal Engineering",
    "branch": "MECH",
    "department": "Dept. of Mechanical Engineering",
    "location": "SMVITM Campus, Bantakal, Udupi",
    "experienceYears": "16+ years",
    "avatarChar": "R",
    "avatarBg": "#d97706",
    "photoUrl": "https://smvitm.sode-edu.in/wp-content/uploads/2023/04/Raja_yatheesh_yadav1.jpg",
    "bannerBg": "linear-gradient(135deg, #d97706 0%, #f59e0b 55%, #fbbf24 100%)",
    "verified": true,
    "verifiedType": "gold",
    "about": "Dr. Raja Yateesh Yadav serves as Associate Professor in the Dept. of Mechanical Engineering at Shri Madhwa Vadiraja Institute of Technology and Management (SMVITM), Bantakal. Dedicated to quality engineering education, active student mentoring, and departmental research initiatives. Core research and academic focus includes Thermal Engineering.",
    "contact": {
      "email": "yateesh.mech@sode-edu.in",
      "phone": "+91 9964281896",
      "office": "Dept. of Mechanical Engineering \u00b7 Academic Block, SMVITM",
      "officeHours": "Mon \u2013 Fri \u00b7 3:00 PM \u2013 4:30 PM",
      "linkedin": "https://www.linkedin.com/in/dr-raja-yateesh-yadav-48852047/?originalSubdomain=in",
      "scholar": "https://scholar.google.com",
      "website": "https://smvitm.sode-edu.in/faculties/dr-raja-yateesh-yadav/"
    },
    "yearsTaught": [
      "2nd Year",
      "3rd Year",
      "4th Year"
    ],
    "semestersTaught": [
      "3rd Sem",
      "5th Sem",
      "7th Sem"
    ],
    "subjects": [
      {
        "code": "BME307",
        "name": "Thermal Engineering",
        "year": "2nd Year",
        "semester": "3rd Sem",
        "type": "Theory + Lab"
      },
      {
        "code": "BME407",
        "name": "Applied Thermodynamics & Heat Transfer",
        "year": "2nd Year",
        "semester": "4th Sem",
        "type": "Theory + Lab"
      },
      {
        "code": "BME507",
        "name": "Finite Element Analysis & Computer Aided Design",
        "year": "3rd Year",
        "semester": "5th Sem",
        "type": "Theory + Lab"
      }
    ],
    "education": [
      {
        "degree": "B.E (Mechanical Engineering)",
        "institution": "VTU / Recognized University",
        "year": "",
        "details": "Academic Qualification"
      },
      {
        "degree": "M.Tech (Thermal Engineering Systems Technology)",
        "institution": "VTU / Recognized University",
        "year": "",
        "details": "Academic Qualification"
      },
      {
        "degree": "Ph.D (Mechanical Engineering Sciences)",
        "institution": "VTU / Recognized University",
        "year": "",
        "details": "Academic Qualification"
      }
    ],
    "experience": [
      {
        "role": "Associate Professor",
        "organization": "SMVITM, Bantakal",
        "duration": "16 Years 4 Months",
        "description": "Serving in the Dept. of Mechanical Engineering, leading classroom lectures, laboratory coursework, and undergraduate student project guidance."
      }
    ],
    "skills": [
      "Thermal Engineering"
    ]
  },
  {
    "id": "lec-mech-lt-karthik",
    "userId": null,
    "name": "Lt. Karthik V",
    "handle": "@ltkarthik_mech",
    "aliases": [],
    "employeeId": "FAC-ME-008",
    "designation": "Assistant Professor (Sr.)",
    "headline": "Assistant Professor (Sr.) \u00b7 Dept. of Mechanical Engineering | Computer Integrated Manufacturing, Manufacturing Technologies, Engi...",
    "branch": "MECH",
    "department": "Dept. of Mechanical Engineering",
    "location": "SMVITM Campus, Bantakal, Udupi",
    "experienceYears": "11+ years",
    "avatarChar": "L",
    "avatarBg": "#d97706",
    "photoUrl": "https://smvitm.sode-edu.in/wp-content/uploads/2023/07/Karthik-Mech-1-e1690266651386.jpg",
    "bannerBg": "linear-gradient(135deg, #d97706 0%, #f59e0b 55%, #fbbf24 100%)",
    "verified": true,
    "verifiedType": "gold",
    "about": "Lt. Karthik V serves as Assistant Professor (Sr.) in the Dept. of Mechanical Engineering at Shri Madhwa Vadiraja Institute of Technology and Management (SMVITM), Bantakal. Dedicated to quality engineering education, active student mentoring, and departmental research initiatives. Core research and academic focus includes Computer Integrated Manufacturing, Manufacturing Technologies, Engineering Mechanics, Mechatronics.",
    "contact": {
      "email": "karthik.mech@sode-edu.in",
      "phone": "+91 8970941008",
      "office": "Dept. of Mechanical Engineering \u00b7 Academic Block, SMVITM",
      "officeHours": "Mon \u2013 Fri \u00b7 3:00 PM \u2013 4:30 PM",
      "linkedin": "https://www.linkedin.com/in/karthik-v-7462a64b/",
      "scholar": "https://scholar.google.com",
      "website": "https://smvitm.sode-edu.in/faculties/mr-karthik-v/"
    },
    "yearsTaught": [
      "2nd Year",
      "3rd Year",
      "4th Year"
    ],
    "semestersTaught": [
      "3rd Sem",
      "5th Sem",
      "7th Sem"
    ],
    "subjects": [
      {
        "code": "BME308",
        "name": "Computer Integrated Manufacturing",
        "year": "2nd Year",
        "semester": "3rd Sem",
        "type": "Theory + Lab"
      },
      {
        "code": "BME408",
        "name": "Manufacturing Technologies",
        "year": "3rd Year",
        "semester": "5th Sem",
        "type": "Theory"
      },
      {
        "code": "BME508",
        "name": "Engineering Mechanics",
        "year": "4th Year",
        "semester": "7th Sem",
        "type": "Theory"
      }
    ],
    "education": [
      {
        "degree": "Master of Technology",
        "institution": "VTU / Recognized University",
        "year": "",
        "details": "Academic Qualification"
      },
      {
        "degree": "Bachelor of Engineering",
        "institution": "VTU / Recognized University",
        "year": "",
        "details": "Academic Qualification"
      },
      {
        "degree": "(PhD) - Pursuing at NITK Surathkal",
        "institution": "VTU / Recognized University",
        "year": "",
        "details": "Academic Qualification"
      }
    ],
    "experience": [
      {
        "role": "Assistant Professor (Sr.)",
        "organization": "SMVITM, Bantakal",
        "duration": "11 Years 4 Months",
        "description": "Serving in the Dept. of Mechanical Engineering, leading classroom lectures, laboratory coursework, and undergraduate student project guidance."
      }
    ],
    "skills": [
      "Manufacturing Technologies",
      "Engineering Mechanics",
      "Mechatronics"
    ]
  },
  {
    "id": "lec-mech-hithesh-mendon",
    "userId": null,
    "name": "Mr. Hithesh Mendon",
    "handle": "@hithesh_mech",
    "aliases": [],
    "employeeId": "FAC-ME-009",
    "designation": "Assistant Professor",
    "headline": "Assistant Professor \u00b7 Dept. of Mechanical Engineering | Automation & Robotics",
    "branch": "MECH",
    "department": "Dept. of Mechanical Engineering",
    "location": "SMVITM Campus, Bantakal, Udupi",
    "experienceYears": "3+ years",
    "avatarChar": "H",
    "avatarBg": "#d97706",
    "photoUrl": "https://smvitm.sode-edu.in/wp-content/uploads/2024/01/KMB_7056.jpg",
    "bannerBg": "linear-gradient(135deg, #d97706 0%, #f59e0b 55%, #fbbf24 100%)",
    "verified": true,
    "verifiedType": "gold",
    "about": "Mr. Hithesh Mendon serves as Assistant Professor in the Dept. of Mechanical Engineering at Shri Madhwa Vadiraja Institute of Technology and Management (SMVITM), Bantakal. Dedicated to quality engineering education, active student mentoring, and departmental research initiatives. Core research and academic focus includes Automation & Robotics.",
    "contact": {
      "email": "hithesh.mech@sode-edu.in",
      "phone": "+91 6360291639",
      "office": "Dept. of Mechanical Engineering \u00b7 Academic Block, SMVITM",
      "officeHours": "Mon \u2013 Fri \u00b7 3:00 PM \u2013 4:30 PM",
      "linkedin": "https://www.linkedin.com/company/shri-madhwa-vadiraja-institute-of-technology-and-management/",
      "scholar": "https://scholar.google.com",
      "website": "https://smvitm.sode-edu.in/faculties/mr-hithesh-mendon/"
    },
    "yearsTaught": [
      "2nd Year",
      "3rd Year",
      "4th Year"
    ],
    "semestersTaught": [
      "3rd Sem",
      "5th Sem",
      "7th Sem"
    ],
    "subjects": [
      {
        "code": "BME309",
        "name": "Automation & Robotics",
        "year": "2nd Year",
        "semester": "3rd Sem",
        "type": "Theory + Lab"
      },
      {
        "code": "BME409",
        "name": "Applied Thermodynamics & Heat Transfer",
        "year": "2nd Year",
        "semester": "4th Sem",
        "type": "Theory + Lab"
      },
      {
        "code": "BME509",
        "name": "Finite Element Analysis & Computer Aided Design",
        "year": "3rd Year",
        "semester": "5th Sem",
        "type": "Theory + Lab"
      }
    ],
    "education": [
      {
        "degree": "B.E (Mechanical Engineering)",
        "institution": "VTU / Recognized University",
        "year": "",
        "details": "Academic Qualification"
      },
      {
        "degree": "M.Tech (Industrial Automation & Robotics)",
        "institution": "VTU / Recognized University",
        "year": "",
        "details": "Academic Qualification"
      }
    ],
    "experience": [
      {
        "role": "Assistant Professor",
        "organization": "SMVITM, Bantakal",
        "duration": "3 Years 2 Months",
        "description": "Serving in the Dept. of Mechanical Engineering, leading classroom lectures, laboratory coursework, and undergraduate student project guidance."
      }
    ],
    "skills": [
      "Automation",
      "Robotics"
    ]
  },
  {
    "id": "lec-mech-mallya-ananth",
    "userId": null,
    "name": "Mr. Mallya Ananth Mohan",
    "handle": "@mallya_mech",
    "aliases": [],
    "employeeId": "FAC-ME-010",
    "designation": "Assistant Professor (Selection Grade)",
    "headline": "Assistant Professor (Selection Grade) \u00b7 Dept. of Mechanical Engineering",
    "branch": "MECH",
    "department": "Dept. of Mechanical Engineering",
    "location": "SMVITM Campus, Bantakal, Udupi",
    "experienceYears": "15+ years",
    "avatarChar": "M",
    "avatarBg": "#d97706",
    "photoUrl": "https://smvitm.sode-edu.in/wp-content/uploads/2024/01/KMB_7130.jpg",
    "bannerBg": "linear-gradient(135deg, #d97706 0%, #f59e0b 55%, #fbbf24 100%)",
    "verified": true,
    "verifiedType": "gold",
    "about": "Mr. Mallya Ananth Mohan serves as Assistant Professor (Selection Grade) in the Dept. of Mechanical Engineering at Shri Madhwa Vadiraja Institute of Technology and Management (SMVITM), Bantakal. Dedicated to quality engineering education, active student mentoring, and departmental research initiatives.",
    "contact": {
      "email": "ammallya.mech@sode-edu.in",
      "phone": "+91 0820 2589183",
      "office": "Dept. of Mechanical Engineering \u00b7 Academic Block, SMVITM",
      "officeHours": "Mon \u2013 Fri \u00b7 3:00 PM \u2013 4:30 PM",
      "linkedin": "https://www.linkedin.com/in/ananth-mallya-94b02148/",
      "scholar": "https://scholar.google.com",
      "website": "https://smvitm.sode-edu.in/faculties/mr-mallya-ananth-mohan/"
    },
    "yearsTaught": [
      "2nd Year",
      "3rd Year",
      "4th Year"
    ],
    "semestersTaught": [
      "3rd Sem",
      "5th Sem",
      "7th Sem"
    ],
    "subjects": [
      {
        "code": "BME410",
        "name": "Applied Thermodynamics & Heat Transfer",
        "year": "2nd Year",
        "semester": "4th Sem",
        "type": "Theory + Lab"
      },
      {
        "code": "BME510",
        "name": "Finite Element Analysis & Computer Aided Design",
        "year": "3rd Year",
        "semester": "5th Sem",
        "type": "Theory + Lab"
      },
      {
        "code": "BME610",
        "name": "Kinematics & Dynamics of Machines",
        "year": "2nd Year",
        "semester": "3rd Sem",
        "type": "Theory"
      }
    ],
    "education": [
      {
        "degree": "BE, Mechanical Engineering",
        "institution": "VTU / Recognized University",
        "year": "",
        "details": "Academic Qualification"
      },
      {
        "degree": "MTech, Environmental Engineering",
        "institution": "VTU / Recognized University",
        "year": "",
        "details": "Academic Qualification"
      },
      {
        "degree": "Pursuing PhD in the area of sustainable composites",
        "institution": "VTU / Recognized University",
        "year": "",
        "details": "Academic Qualification"
      }
    ],
    "experience": [
      {
        "role": "Assistant Professor (Selection Grade)",
        "organization": "SMVITM, Bantakal",
        "duration": "15 Years 4 Months",
        "description": "Serving in the Dept. of Mechanical Engineering, leading classroom lectures, laboratory coursework, and undergraduate student project guidance."
      }
    ],
    "skills": [
      "MECH",
      "Curriculum Delivery",
      "Academic Mentoring",
      "Laboratory Training"
    ]
  },
  {
    "id": "lec-mech-sudhir",
    "userId": null,
    "name": "Mr. Sudhir",
    "handle": "@sudhir_mech",
    "aliases": [],
    "employeeId": "FAC-ME-011",
    "designation": "Assistant Professor (Selection Grade)",
    "headline": "Assistant Professor (Selection Grade) \u00b7 Dept. of Mechanical Engineering | Manufacturing, Severe Plastic Deformation, Statistical Methods, Sup...",
    "branch": "MECH",
    "department": "Dept. of Mechanical Engineering",
    "location": "SMVITM Campus, Bantakal, Udupi",
    "experienceYears": "14+ years",
    "avatarChar": "S",
    "avatarBg": "#d97706",
    "photoUrl": "https://smvitm.sode-edu.in/wp-content/uploads/2025/03/WhatsApp-Image-2024-05-15-at-11.09.16-AM.jpeg",
    "bannerBg": "linear-gradient(135deg, #d97706 0%, #f59e0b 55%, #fbbf24 100%)",
    "verified": true,
    "verifiedType": "gold",
    "about": "Mr. Sudhir serves as Assistant Professor (Selection Grade) in the Dept. of Mechanical Engineering at Shri Madhwa Vadiraja Institute of Technology and Management (SMVITM), Bantakal. Dedicated to quality engineering education, active student mentoring, and departmental research initiatives. Core research and academic focus includes Manufacturing, Severe Plastic Deformation, Statistical Methods, Supply Chain Management.",
    "contact": {
      "email": "sudhir.mech@sode-edu.in",
      "phone": "+91 0820-2589182",
      "office": "Dept. of Mechanical Engineering \u00b7 Academic Block, SMVITM",
      "officeHours": "Mon \u2013 Fri \u00b7 3:00 PM \u2013 4:30 PM",
      "linkedin": "https://www.linkedin.com/in/sudhir-bhat-04b8a546/",
      "scholar": "https://scholar.google.com",
      "website": "https://smvitm.sode-edu.in/faculties/sudhir/"
    },
    "yearsTaught": [
      "2nd Year",
      "3rd Year",
      "4th Year"
    ],
    "semestersTaught": [
      "3rd Sem",
      "5th Sem",
      "7th Sem"
    ],
    "subjects": [
      {
        "code": "BME311",
        "name": "Manufacturing",
        "year": "2nd Year",
        "semester": "3rd Sem",
        "type": "Theory + Lab"
      },
      {
        "code": "BME411",
        "name": "Severe Plastic Deformation",
        "year": "3rd Year",
        "semester": "5th Sem",
        "type": "Theory"
      },
      {
        "code": "BME511",
        "name": "Statistical Methods",
        "year": "4th Year",
        "semester": "7th Sem",
        "type": "Theory"
      }
    ],
    "education": [
      {
        "degree": "PhD (Pursuing)",
        "institution": "VTU / Recognized University",
        "year": "",
        "details": "Academic Qualification"
      },
      {
        "degree": "M.Tech in Manufacturing Engineering Technology",
        "institution": "VTU / Recognized University",
        "year": "",
        "details": "Academic Qualification"
      },
      {
        "degree": "B.E. in Mechanical Engineering",
        "institution": "VTU / Recognized University",
        "year": "",
        "details": "Academic Qualification"
      }
    ],
    "experience": [
      {
        "role": "Assistant Professor (Selection Grade)",
        "organization": "SMVITM, Bantakal",
        "duration": "14 Years 4 Months",
        "description": "Serving in the Dept. of Mechanical Engineering, leading classroom lectures, laboratory coursework, and undergraduate student project guidance."
      }
    ],
    "skills": [
      "Manufacturing",
      "Severe Plastic Deformation",
      "Statistical Methods",
      "Supply Chain Management"
    ]
  },
  {
    "id": "lec-civil-roshan-s",
    "userId": null,
    "name": "Mr. Roshan S Kotian",
    "handle": "@roshan_civil",
    "aliases": [],
    "employeeId": "FAC-CV-001",
    "designation": "Assistant Professor Senior",
    "headline": "Assistant Professor Senior \u00b7 Dept. of Civil Engineering | Construction Technology, Stabilised blocks, Building plan and detai...",
    "branch": "CIVIL",
    "department": "Dept. of Civil Engineering",
    "location": "SMVITM Campus, Bantakal, Udupi",
    "experienceYears": "9+ years",
    "avatarChar": "R",
    "avatarBg": "#059669",
    "photoUrl": "https://smvitm.sode-edu.in/wp-content/uploads/2024/01/KMB_7119.jpg",
    "bannerBg": "linear-gradient(135deg, #059669 0%, #10b981 55%, #34d399 100%)",
    "verified": true,
    "verifiedType": "gold",
    "about": "Mr. Roshan S Kotian serves as Assistant Professor Senior in the Dept. of Civil Engineering at Shri Madhwa Vadiraja Institute of Technology and Management (SMVITM), Bantakal. Dedicated to quality engineering education, active student mentoring, and departmental research initiatives. Core research and academic focus includes Construction Technology, Stabilised blocks, Building plan and detailing.",
    "contact": {
      "email": "rskotian.civil@sode-edu.in",
      "phone": "+91 9742406206",
      "office": "Dept. of Civil Engineering \u00b7 Academic Block, SMVITM",
      "officeHours": "Mon \u2013 Fri \u00b7 3:00 PM \u2013 4:30 PM",
      "linkedin": "https://www.linkedin.com/in/roshan-s-kotian-6403b7a8/",
      "scholar": "https://scholar.google.com",
      "website": "https://smvitm.sode-edu.in/faculties/mr-roshan-s-kotian/"
    },
    "yearsTaught": [
      "2nd Year",
      "3rd Year",
      "4th Year"
    ],
    "semestersTaught": [
      "3rd Sem",
      "5th Sem",
      "7th Sem"
    ],
    "subjects": [
      {
        "code": "BCV301",
        "name": "Construction Technology",
        "year": "2nd Year",
        "semester": "3rd Sem",
        "type": "Theory + Lab"
      },
      {
        "code": "BCV401",
        "name": "Stabilised blocks",
        "year": "3rd Year",
        "semester": "5th Sem",
        "type": "Theory"
      },
      {
        "code": "BCV501",
        "name": "Building plan and detailing",
        "year": "4th Year",
        "semester": "7th Sem",
        "type": "Theory"
      }
    ],
    "education": [
      {
        "degree": "B.E Civil Engineering",
        "institution": "VTU / Recognized University",
        "year": "",
        "details": "Academic Qualification"
      },
      {
        "degree": "M.Tech ( Construction Technology and Management)",
        "institution": "VTU / Recognized University",
        "year": "",
        "details": "Academic Qualification"
      }
    ],
    "experience": [
      {
        "role": "Assistant Professor Senior",
        "organization": "SMVITM, Bantakal",
        "duration": "9 Years 4 Months",
        "description": "Serving in the Dept. of Civil Engineering, leading classroom lectures, laboratory coursework, and undergraduate student project guidance."
      }
    ],
    "skills": [
      "Construction Technology",
      "Stabilised blocks",
      "Building plan and detailing"
    ]
  },
  {
    "id": "lec-civil-aishwarya-laxmi",
    "userId": null,
    "name": "Ms. Aishwarya Laxmi",
    "handle": "@aishwarya_civil",
    "aliases": [],
    "employeeId": "FAC-CV-002",
    "designation": "Visiting Faculty",
    "headline": "Visiting Faculty \u00b7 Dept. of Civil Engineering",
    "branch": "CIVIL",
    "department": "Dept. of Civil Engineering",
    "location": "SMVITM Campus, Bantakal, Udupi",
    "experienceYears": "5+ years",
    "avatarChar": "A",
    "avatarBg": "#059669",
    "photoUrl": "https://smvitm.sode-edu.in/wp-content/uploads/2024/01/KMB_7369.jpg",
    "bannerBg": "linear-gradient(135deg, #059669 0%, #10b981 55%, #34d399 100%)",
    "verified": true,
    "verifiedType": "blue",
    "about": "Ms. Aishwarya Laxmi serves as Visiting Faculty in the Dept. of Civil Engineering at Shri Madhwa Vadiraja Institute of Technology and Management (SMVITM), Bantakal. Dedicated to quality engineering education, active student mentoring, and departmental research initiatives.",
    "contact": {
      "email": "aishwarya.civil@sode-edu.in",
      "phone": "+91 820 2589101",
      "office": "Dept. of Civil Engineering \u00b7 Academic Block, SMVITM",
      "officeHours": "Mon \u2013 Fri \u00b7 3:00 PM \u2013 4:30 PM",
      "linkedin": "https://www.linkedin.com/company/shri-madhwa-vadiraja-institute-of-technology-and-management/",
      "scholar": "https://scholar.google.com",
      "website": "https://smvitm.sode-edu.in/faculties/ms-aishwarya-laxmi/"
    },
    "yearsTaught": [
      "2nd Year",
      "3rd Year",
      "4th Year"
    ],
    "semestersTaught": [
      "3rd Sem",
      "5th Sem",
      "7th Sem"
    ],
    "subjects": [
      {
        "code": "BCV402",
        "name": "Design of Reinforced Concrete Structures",
        "year": "3rd Year",
        "semester": "5th Sem",
        "type": "Theory + Lab"
      },
      {
        "code": "BCV502",
        "name": "Environmental Engineering & Water Resources",
        "year": "3rd Year",
        "semester": "6th Sem",
        "type": "Theory"
      },
      {
        "code": "BCV602",
        "name": "Geotechnical & Foundation Engineering",
        "year": "2nd Year",
        "semester": "4th Sem",
        "type": "Theory + Lab"
      }
    ],
    "education": [
      {
        "degree": "B. E.",
        "institution": "VTU / Recognized University",
        "year": "",
        "details": "Academic Qualification"
      },
      {
        "degree": "M. Tech",
        "institution": "VTU / Recognized University",
        "year": "",
        "details": "Academic Qualification"
      }
    ],
    "experience": [
      {
        "role": "Visiting Faculty",
        "organization": "SMVITM, Bantakal",
        "duration": "Academic Service",
        "description": "Serving in the Dept. of Civil Engineering, leading classroom lectures, laboratory coursework, and undergraduate student project guidance."
      }
    ],
    "skills": [
      "CIVIL",
      "Curriculum Delivery",
      "Academic Mentoring",
      "Laboratory Training"
    ]
  },
  {
    "id": "lec-mba-mahesh-vanjeri",
    "userId": null,
    "name": "Dr. Mahesh Vanjeri",
    "handle": "@mahesh_mba",
    "aliases": [
      "HOD MBA",
      "Head of Department"
    ],
    "employeeId": "FAC-MBA-001",
    "designation": "Professor & Head",
    "headline": "Professor & Head \u00b7 Dept. of Management Studies (MBA) | Marketing",
    "branch": "MBA",
    "department": "Dept. of Management Studies (MBA)",
    "location": "SMVITM Campus, Bantakal, Udupi",
    "experienceYears": "25+ years",
    "avatarChar": "M",
    "avatarBg": "#6366f1",
    "photoUrl": "https://smvitm.sode-edu.in/wp-content/uploads/2023/12/Dr.-Mahesh-Photo.webp",
    "bannerBg": "linear-gradient(135deg, #4f46e5 0%, #6366f1 55%, #8b5cf6 100%)",
    "verified": true,
    "verifiedType": "gold",
    "about": "Dr. Mahesh Vanjeri serves as Professor & Head in the Dept. of Management Studies (MBA) at Shri Madhwa Vadiraja Institute of Technology and Management (SMVITM), Bantakal. Dedicated to quality engineering education, active student mentoring, and departmental research initiatives. Core research and academic focus includes Marketing.",
    "contact": {
      "email": "maheshv.mba@sode-edu.in",
      "phone": "+91 9916924252",
      "office": "Dept. of Management Studies (MBA) \u00b7 Academic Block, SMVITM",
      "officeHours": "Mon \u2013 Fri \u00b7 3:00 PM \u2013 4:30 PM",
      "linkedin": "https://www.linkedin.com/company/shri-madhwa-vadiraja-institute-of-technology-and-management/",
      "scholar": "https://scholar.google.com",
      "website": "https://smvitm.sode-edu.in/faculties/dr-mahesh-vanjeri/"
    },
    "yearsTaught": [
      "1st Year",
      "2nd Year"
    ],
    "semestersTaught": [
      "1st Sem",
      "2nd Sem",
      "3rd Sem",
      "4th Sem"
    ],
    "subjects": [
      {
        "code": "MBA301",
        "name": "Marketing",
        "year": "1st Year",
        "semester": "1st Sem",
        "type": "Theory + Lab"
      },
      {
        "code": "MBA401",
        "name": "Strategic Management & Corporate Policy",
        "year": "2nd Year",
        "semester": "3rd Sem",
        "type": "Theory"
      },
      {
        "code": "MBA501",
        "name": "Financial Management & Investment Analysis",
        "year": "1st Year",
        "semester": "2nd Sem",
        "type": "Theory"
      }
    ],
    "education": [
      {
        "degree": "BCom",
        "institution": "VTU / Recognized University",
        "year": "",
        "details": "Academic Qualification"
      },
      {
        "degree": "MBA",
        "institution": "VTU / Recognized University",
        "year": "",
        "details": "Academic Qualification"
      },
      {
        "degree": "PhD",
        "institution": "VTU / Recognized University",
        "year": "",
        "details": "Academic Qualification"
      }
    ],
    "experience": [
      {
        "role": "Professor & Head",
        "organization": "SMVITM, Bantakal",
        "duration": "25 Years 7 Months",
        "description": "Serving in the Dept. of Management Studies (MBA), leading classroom lectures, laboratory coursework, and undergraduate student project guidance."
      }
    ],
    "skills": [
      "Marketing"
    ]
  },
  {
    "id": "lec-mba-neha-lakhotia",
    "userId": null,
    "name": "Dr. Neha Lakhotia",
    "handle": "@neha_mba",
    "aliases": [],
    "employeeId": "FAC-MBA-002",
    "designation": "Assistant Professor (Selection Grade)",
    "headline": "Assistant Professor (Selection Grade) \u00b7 Dept. of Management Studies (MBA) | Marketing and Communication.",
    "branch": "MBA",
    "department": "Dept. of Management Studies (MBA)",
    "location": "SMVITM Campus, Bantakal, Udupi",
    "experienceYears": "11.4+ years",
    "avatarChar": "N",
    "avatarBg": "#6366f1",
    "photoUrl": "https://smvitm.sode-edu.in/wp-content/uploads/2026/06/Dr.-Neha-Lakhotia.webp",
    "bannerBg": "linear-gradient(135deg, #4f46e5 0%, #6366f1 55%, #8b5cf6 100%)",
    "verified": true,
    "verifiedType": "gold",
    "about": "Dr. Neha Lakhotia serves as Assistant Professor (Selection Grade) in the Dept. of Management Studies (MBA) at Shri Madhwa Vadiraja Institute of Technology and Management (SMVITM), Bantakal. Dedicated to quality engineering education, active student mentoring, and departmental research initiatives. Core research and academic focus includes Marketing and Communication..",
    "contact": {
      "email": "nehal.mba@sode-edu.in",
      "phone": "+91 8989405798",
      "office": "Dept. of Management Studies (MBA) \u00b7 Academic Block, SMVITM",
      "officeHours": "Mon \u2013 Fri \u00b7 3:00 PM \u2013 4:30 PM",
      "linkedin": "https://www.linkedin.com/company/shri-madhwa-vadiraja-institute-of-technology-and-management/",
      "scholar": "https://scholar.google.com",
      "website": "https://smvitm.sode-edu.in/faculties/dr-neha-lakhotia/"
    },
    "yearsTaught": [
      "1st Year",
      "2nd Year"
    ],
    "semestersTaught": [
      "1st Sem",
      "2nd Sem",
      "3rd Sem",
      "4th Sem"
    ],
    "subjects": [
      {
        "code": "MBA302",
        "name": "Marketing and Communication.",
        "year": "1st Year",
        "semester": "1st Sem",
        "type": "Theory + Lab"
      },
      {
        "code": "MBA402",
        "name": "Strategic Management & Corporate Policy",
        "year": "2nd Year",
        "semester": "3rd Sem",
        "type": "Theory"
      },
      {
        "code": "MBA502",
        "name": "Financial Management & Investment Analysis",
        "year": "1st Year",
        "semester": "2nd Sem",
        "type": "Theory"
      }
    ],
    "education": [
      {
        "degree": "Ph.D.",
        "institution": "VTU / Recognized University",
        "year": "",
        "details": "Academic Qualification"
      },
      {
        "degree": "MBA",
        "institution": "VTU / Recognized University",
        "year": "",
        "details": "Academic Qualification"
      },
      {
        "degree": "UGC-NET",
        "institution": "VTU / Recognized University",
        "year": "",
        "details": "Academic Qualification"
      }
    ],
    "experience": [
      {
        "role": "Assistant Professor (Selection Grade)",
        "organization": "SMVITM, Bantakal",
        "duration": "11.4 Years 6 Months",
        "description": "Serving in the Dept. of Management Studies (MBA), leading classroom lectures, laboratory coursework, and undergraduate student project guidance."
      }
    ],
    "skills": [
      "Marketing and Communication."
    ]
  },
  {
    "id": "lec-mba-harish-belman",
    "userId": null,
    "name": "Mr. Harish Belman",
    "handle": "@harish_mba",
    "aliases": [],
    "employeeId": "FAC-MBA-003",
    "designation": "Visiting Faculty",
    "headline": "Visiting Faculty \u00b7 Dept. of Management Studies (MBA)",
    "branch": "MBA",
    "department": "Dept. of Management Studies (MBA)",
    "location": "SMVITM Campus, Bantakal, Udupi",
    "experienceYears": "5+ years",
    "avatarChar": "H",
    "avatarBg": "#6366f1",
    "photoUrl": "https://smvitm.sode-edu.in/wp-content/uploads/2023/12/Harish-Belman.jpg",
    "bannerBg": "linear-gradient(135deg, #4f46e5 0%, #6366f1 55%, #8b5cf6 100%)",
    "verified": true,
    "verifiedType": "blue",
    "about": "Mr. Harish Belman serves as Visiting Faculty in the Dept. of Management Studies (MBA) at Shri Madhwa Vadiraja Institute of Technology and Management (SMVITM), Bantakal. Dedicated to quality engineering education, active student mentoring, and departmental research initiatives.",
    "contact": {
      "email": "harish.mba@sode-edu.in",
      "phone": "+91 820 2589101",
      "office": "Dept. of Management Studies (MBA) \u00b7 Academic Block, SMVITM",
      "officeHours": "Mon \u2013 Fri \u00b7 3:00 PM \u2013 4:30 PM",
      "linkedin": "https://www.linkedin.com/company/shri-madhwa-vadiraja-institute-of-technology-and-management/",
      "scholar": "https://scholar.google.com",
      "website": "https://smvitm.sode-edu.in/faculties/mr-harish-belman/"
    },
    "yearsTaught": [
      "1st Year",
      "2nd Year"
    ],
    "semestersTaught": [
      "1st Sem",
      "2nd Sem",
      "3rd Sem",
      "4th Sem"
    ],
    "subjects": [
      {
        "code": "MBA403",
        "name": "Strategic Management & Corporate Policy",
        "year": "2nd Year",
        "semester": "3rd Sem",
        "type": "Theory"
      },
      {
        "code": "MBA503",
        "name": "Financial Management & Investment Analysis",
        "year": "1st Year",
        "semester": "2nd Sem",
        "type": "Theory"
      },
      {
        "code": "MBA603",
        "name": "Marketing Strategy & Digital Consumer Behavior",
        "year": "1st Year",
        "semester": "1st Sem",
        "type": "Theory"
      }
    ],
    "education": [
      {
        "degree": "B. E",
        "institution": "VTU / Recognized University",
        "year": "",
        "details": "Academic Qualification"
      },
      {
        "degree": "M. Tech",
        "institution": "VTU / Recognized University",
        "year": "",
        "details": "Academic Qualification"
      }
    ],
    "experience": [
      {
        "role": "Visiting Faculty",
        "organization": "SMVITM, Bantakal",
        "duration": "Academic Service",
        "description": "Serving in the Dept. of Management Studies (MBA), leading classroom lectures, laboratory coursework, and undergraduate student project guidance."
      }
    ],
    "skills": [
      "MBA",
      "Curriculum Delivery",
      "Academic Mentoring",
      "Laboratory Training"
    ]
  },
  {
    "id": "lec-mba-jagdish-acharya",
    "userId": null,
    "name": "Mr. Jagdish Acharya",
    "handle": "@jagdish_mba",
    "aliases": [],
    "employeeId": "FAC-MBA-004",
    "designation": "Visiting Faculty",
    "headline": "Visiting Faculty \u00b7 Dept. of Management Studies (MBA)",
    "branch": "MBA",
    "department": "Dept. of Management Studies (MBA)",
    "location": "SMVITM Campus, Bantakal, Udupi",
    "experienceYears": "5+ years",
    "avatarChar": "J",
    "avatarBg": "#6366f1",
    "photoUrl": "https://smvitm.sode-edu.in/wp-content/uploads/2023/12/Jagdish-Acharya-e1709712861196.jpg",
    "bannerBg": "linear-gradient(135deg, #4f46e5 0%, #6366f1 55%, #8b5cf6 100%)",
    "verified": true,
    "verifiedType": "blue",
    "about": "Mr. Jagdish Acharya serves as Visiting Faculty in the Dept. of Management Studies (MBA) at Shri Madhwa Vadiraja Institute of Technology and Management (SMVITM), Bantakal. Dedicated to quality engineering education, active student mentoring, and departmental research initiatives.",
    "contact": {
      "email": "jagdish.mba@sode-edu.in",
      "phone": "+91 820 2589101",
      "office": "Dept. of Management Studies (MBA) \u00b7 Academic Block, SMVITM",
      "officeHours": "Mon \u2013 Fri \u00b7 3:00 PM \u2013 4:30 PM",
      "linkedin": "https://www.linkedin.com/in/jagdish-acharya-26621a134/",
      "scholar": "https://scholar.google.com",
      "website": "https://smvitm.sode-edu.in/faculties/mr-jagdish-acharya/"
    },
    "yearsTaught": [
      "1st Year",
      "2nd Year"
    ],
    "semestersTaught": [
      "1st Sem",
      "2nd Sem",
      "3rd Sem",
      "4th Sem"
    ],
    "subjects": [
      {
        "code": "MBA404",
        "name": "Strategic Management & Corporate Policy",
        "year": "2nd Year",
        "semester": "3rd Sem",
        "type": "Theory"
      },
      {
        "code": "MBA504",
        "name": "Financial Management & Investment Analysis",
        "year": "1st Year",
        "semester": "2nd Sem",
        "type": "Theory"
      },
      {
        "code": "MBA604",
        "name": "Marketing Strategy & Digital Consumer Behavior",
        "year": "1st Year",
        "semester": "1st Sem",
        "type": "Theory"
      }
    ],
    "education": [
      {
        "degree": "P.G.D.M, Business Administration and Management, IIM Calcutta",
        "institution": "VTU / Recognized University",
        "year": "",
        "details": "Academic Qualification"
      }
    ],
    "experience": [
      {
        "role": "Visiting Faculty",
        "organization": "SMVITM, Bantakal",
        "duration": "Academic Service",
        "description": "Serving in the Dept. of Management Studies (MBA), leading classroom lectures, laboratory coursework, and undergraduate student project guidance."
      }
    ],
    "skills": [
      "MBA",
      "Curriculum Delivery",
      "Academic Mentoring",
      "Laboratory Training"
    ]
  },
  {
    "id": "lec-mba-steevan-robert",
    "userId": null,
    "name": "Mr. Steevan Robert Tellis",
    "handle": "@steevan_mba",
    "aliases": [],
    "employeeId": "FAC-MBA-005",
    "designation": "Assistant Professor (Senior)",
    "headline": "Assistant Professor (Senior) \u00b7 Dept. of Management Studies (MBA)",
    "branch": "MBA",
    "department": "Dept. of Management Studies (MBA)",
    "location": "SMVITM Campus, Bantakal, Udupi",
    "experienceYears": "10+ years",
    "avatarChar": "S",
    "avatarBg": "#6366f1",
    "photoUrl": "https://smvitm.sode-edu.in/wp-content/uploads/2024/09/Steevan.jpeg",
    "bannerBg": "linear-gradient(135deg, #4f46e5 0%, #6366f1 55%, #8b5cf6 100%)",
    "verified": true,
    "verifiedType": "gold",
    "about": "Mr. Steevan Robert Tellis serves as Assistant Professor (Senior) in the Dept. of Management Studies (MBA) at Shri Madhwa Vadiraja Institute of Technology and Management (SMVITM), Bantakal. Dedicated to quality engineering education, active student mentoring, and departmental research initiatives.",
    "contact": {
      "email": "steevan.mba@sode-edu.in",
      "phone": "+91 9900411805",
      "office": "Dept. of Management Studies (MBA) \u00b7 Academic Block, SMVITM",
      "officeHours": "Mon \u2013 Fri \u00b7 3:00 PM \u2013 4:30 PM",
      "linkedin": "https://www.linkedin.com/company/shri-madhwa-vadiraja-institute-of-technology-and-management/",
      "scholar": "https://scholar.google.com",
      "website": "https://smvitm.sode-edu.in/faculties/mr-steevan-robert-tellis/"
    },
    "yearsTaught": [
      "1st Year",
      "2nd Year"
    ],
    "semestersTaught": [
      "1st Sem",
      "2nd Sem",
      "3rd Sem",
      "4th Sem"
    ],
    "subjects": [
      {
        "code": "MBA405",
        "name": "Strategic Management & Corporate Policy",
        "year": "2nd Year",
        "semester": "3rd Sem",
        "type": "Theory"
      },
      {
        "code": "MBA505",
        "name": "Financial Management & Investment Analysis",
        "year": "1st Year",
        "semester": "2nd Sem",
        "type": "Theory"
      },
      {
        "code": "MBA605",
        "name": "Marketing Strategy & Digital Consumer Behavior",
        "year": "1st Year",
        "semester": "1st Sem",
        "type": "Theory"
      }
    ],
    "education": [
      {
        "degree": "MBA (Finance)",
        "institution": "VTU / Recognized University",
        "year": "",
        "details": "Academic Qualification"
      },
      {
        "degree": "UGC NET (Management)",
        "institution": "VTU / Recognized University",
        "year": "",
        "details": "Academic Qualification"
      },
      {
        "degree": "Pursuing PhD in finance area from Visvesvaraya Technological University, Belgaum",
        "institution": "VTU / Recognized University",
        "year": "",
        "details": "Academic Qualification"
      }
    ],
    "experience": [
      {
        "role": "Assistant Professor (Senior)",
        "organization": "SMVITM, Bantakal",
        "duration": "Academic Service",
        "description": "Serving in the Dept. of Management Studies (MBA), leading classroom lectures, laboratory coursework, and undergraduate student project guidance."
      }
    ],
    "skills": [
      "MBA",
      "Curriculum Delivery",
      "Academic Mentoring",
      "Laboratory Training"
    ]
  },
  {
    "id": "lec-mba-varun-krishna",
    "userId": null,
    "name": "Mr. Varun Krishna",
    "handle": "@varun_mba",
    "aliases": [],
    "employeeId": "FAC-MBA-006",
    "designation": "Assistant Professor (Senior)",
    "headline": "Assistant Professor (Senior) \u00b7 Dept. of Management Studies (MBA) | Statistics and Finance",
    "branch": "MBA",
    "department": "Dept. of Management Studies (MBA)",
    "location": "SMVITM Campus, Bantakal, Udupi",
    "experienceYears": "8+ years",
    "avatarChar": "V",
    "avatarBg": "#6366f1",
    "photoUrl": "https://smvitm.sode-edu.in/wp-content/uploads/2024/06/Varun-K.jpg",
    "bannerBg": "linear-gradient(135deg, #4f46e5 0%, #6366f1 55%, #8b5cf6 100%)",
    "verified": true,
    "verifiedType": "gold",
    "about": "Mr. Varun Krishna serves as Assistant Professor (Senior) in the Dept. of Management Studies (MBA) at Shri Madhwa Vadiraja Institute of Technology and Management (SMVITM), Bantakal. Dedicated to quality engineering education, active student mentoring, and departmental research initiatives. Core research and academic focus includes Statistics and Finance.",
    "contact": {
      "email": "varun.mba@sode-edu.in",
      "phone": "+91 9900977963",
      "office": "Dept. of Management Studies (MBA) \u00b7 Academic Block, SMVITM",
      "officeHours": "Mon \u2013 Fri \u00b7 3:00 PM \u2013 4:30 PM",
      "linkedin": "https://www.linkedin.com/company/shri-madhwa-vadiraja-institute-of-technology-and-management/",
      "scholar": "https://scholar.google.com",
      "website": "https://smvitm.sode-edu.in/faculties/mr-varun-k/"
    },
    "yearsTaught": [
      "1st Year",
      "2nd Year"
    ],
    "semestersTaught": [
      "1st Sem",
      "2nd Sem",
      "3rd Sem",
      "4th Sem"
    ],
    "subjects": [
      {
        "code": "MBA306",
        "name": "Statistics and Finance",
        "year": "1st Year",
        "semester": "1st Sem",
        "type": "Theory + Lab"
      },
      {
        "code": "MBA406",
        "name": "Strategic Management & Corporate Policy",
        "year": "2nd Year",
        "semester": "3rd Sem",
        "type": "Theory"
      },
      {
        "code": "MBA506",
        "name": "Financial Management & Investment Analysis",
        "year": "1st Year",
        "semester": "2nd Sem",
        "type": "Theory"
      }
    ],
    "education": [
      {
        "degree": "PhD (Pursuing) \u2013 Financial Inclusion",
        "institution": "VTU / Recognized University",
        "year": "",
        "details": "Academic Qualification"
      },
      {
        "degree": "MBA \u2013 Finance \u2013 Visvesvaraya Technological University",
        "institution": "VTU / Recognized University",
        "year": "",
        "details": "Academic Qualification"
      },
      {
        "degree": "B Com \u2013 Business Taxation \u2013 Mangalore University",
        "institution": "VTU / Recognized University",
        "year": "",
        "details": "Academic Qualification"
      }
    ],
    "experience": [
      {
        "role": "Assistant Professor (Senior)",
        "organization": "SMVITM, Bantakal",
        "duration": "8 Years 5 Months",
        "description": "Serving in the Dept. of Management Studies (MBA), leading classroom lectures, laboratory coursework, and undergraduate student project guidance."
      }
    ],
    "skills": [
      "Statistics and Finance"
    ]
  },
  {
    "id": "lec-mba-vinod-dixit",
    "userId": null,
    "name": "Mr. Vinod Dixit",
    "handle": "@vinod_mba",
    "aliases": [],
    "employeeId": "FAC-MBA-007",
    "designation": "Visiting Faculty",
    "headline": "Visiting Faculty \u00b7 Dept. of Management Studies (MBA) | Accounting for Managers",
    "branch": "MBA",
    "department": "Dept. of Management Studies (MBA)",
    "location": "SMVITM Campus, Bantakal, Udupi",
    "experienceYears": "5+ years",
    "avatarChar": "V",
    "avatarBg": "#6366f1",
    "photoUrl": "https://smvitm.sode-edu.in/wp-content/uploads/2024/09/WhatsApp-Image-2024-09-24-at-10.43.51.jpeg",
    "bannerBg": "linear-gradient(135deg, #4f46e5 0%, #6366f1 55%, #8b5cf6 100%)",
    "verified": true,
    "verifiedType": "blue",
    "about": "Mr. Vinod Dixit serves as Visiting Faculty in the Dept. of Management Studies (MBA) at Shri Madhwa Vadiraja Institute of Technology and Management (SMVITM), Bantakal. Dedicated to quality engineering education, active student mentoring, and departmental research initiatives. Core research and academic focus includes Accounting for Managers.",
    "contact": {
      "email": "vinod.mba@sode-edu.in",
      "phone": "+91 9844444684",
      "office": "Dept. of Management Studies (MBA) \u00b7 Academic Block, SMVITM",
      "officeHours": "Mon \u2013 Fri \u00b7 3:00 PM \u2013 4:30 PM",
      "linkedin": "https://www.linkedin.com/company/shri-madhwa-vadiraja-institute-of-technology-and-management/",
      "scholar": "https://scholar.google.com",
      "website": "https://smvitm.sode-edu.in/faculties/mr-vinod-dixit/"
    },
    "yearsTaught": [
      "1st Year",
      "2nd Year"
    ],
    "semestersTaught": [
      "1st Sem",
      "2nd Sem",
      "3rd Sem",
      "4th Sem"
    ],
    "subjects": [
      {
        "code": "MBA307",
        "name": "Accounting for Managers",
        "year": "1st Year",
        "semester": "1st Sem",
        "type": "Theory + Lab"
      },
      {
        "code": "MBA407",
        "name": "Strategic Management & Corporate Policy",
        "year": "2nd Year",
        "semester": "3rd Sem",
        "type": "Theory"
      },
      {
        "code": "MBA507",
        "name": "Financial Management & Investment Analysis",
        "year": "1st Year",
        "semester": "2nd Sem",
        "type": "Theory"
      }
    ],
    "education": [
      {
        "degree": "MBA in Finance, Visveswaraiah Technological University (VTU)",
        "institution": "VTU / Recognized University",
        "year": "",
        "details": "Academic Qualification"
      },
      {
        "degree": "B.B.M., Mangalore University",
        "institution": "VTU / Recognized University",
        "year": "",
        "details": "Academic Qualification"
      }
    ],
    "experience": [
      {
        "role": "Visiting Faculty",
        "organization": "SMVITM, Bantakal",
        "duration": "Academic Service",
        "description": "Serving in the Dept. of Management Studies (MBA), leading classroom lectures, laboratory coursework, and undergraduate student project guidance."
      }
    ],
    "skills": [
      "Accounting for Managers"
    ]
  },
  {
    "id": "lec-mba-aurin-madtha",
    "userId": null,
    "name": "Ms. Aurin Madtha",
    "handle": "@aurin_mba",
    "aliases": [],
    "employeeId": "FAC-MBA-008",
    "designation": "Assistant Professor",
    "headline": "Assistant Professor \u00b7 Dept. of Management Studies (MBA) | Organizational Behavior Personal Development Sustainable HRM",
    "branch": "MBA",
    "department": "Dept. of Management Studies (MBA)",
    "location": "SMVITM Campus, Bantakal, Udupi",
    "experienceYears": "9+ years",
    "avatarChar": "A",
    "avatarBg": "#6366f1",
    "photoUrl": "https://smvitm.sode-edu.in/wp-content/uploads/2025/01/Aurin.png",
    "bannerBg": "linear-gradient(135deg, #4f46e5 0%, #6366f1 55%, #8b5cf6 100%)",
    "verified": true,
    "verifiedType": "gold",
    "about": "Ms. Aurin Madtha serves as Assistant Professor in the Dept. of Management Studies (MBA) at Shri Madhwa Vadiraja Institute of Technology and Management (SMVITM), Bantakal. Dedicated to quality engineering education, active student mentoring, and departmental research initiatives. Core research and academic focus includes Organizational Behavior Personal Development Sustainable HRM.",
    "contact": {
      "email": "aurin.mba@sode-edu.in",
      "phone": "+91 8884185475",
      "office": "Dept. of Management Studies (MBA) \u00b7 Academic Block, SMVITM",
      "officeHours": "Mon \u2013 Fri \u00b7 3:00 PM \u2013 4:30 PM",
      "linkedin": "https://www.linkedin.com/company/shri-madhwa-vadiraja-institute-of-technology-and-management/",
      "scholar": "https://scholar.google.com",
      "website": "https://smvitm.sode-edu.in/faculties/ms-aurin-madtha/"
    },
    "yearsTaught": [
      "1st Year",
      "2nd Year"
    ],
    "semestersTaught": [
      "1st Sem",
      "2nd Sem",
      "3rd Sem",
      "4th Sem"
    ],
    "subjects": [
      {
        "code": "MBA308",
        "name": "Organizational Behavior Personal Development Sustainable HRM",
        "year": "1st Year",
        "semester": "1st Sem",
        "type": "Theory + Lab"
      },
      {
        "code": "MBA408",
        "name": "Strategic Management & Corporate Policy",
        "year": "2nd Year",
        "semester": "3rd Sem",
        "type": "Theory"
      },
      {
        "code": "MBA508",
        "name": "Financial Management & Investment Analysis",
        "year": "1st Year",
        "semester": "2nd Sem",
        "type": "Theory"
      }
    ],
    "education": [
      {
        "degree": "Ph.D (Pursuing)",
        "institution": "VTU / Recognized University",
        "year": "",
        "details": "Academic Qualification"
      },
      {
        "degree": "MBA (Human Resource Management)",
        "institution": "VTU / Recognized University",
        "year": "",
        "details": "Academic Qualification"
      },
      {
        "degree": "UGC - NET in Management",
        "institution": "VTU / Recognized University",
        "year": "",
        "details": "Academic Qualification"
      }
    ],
    "experience": [
      {
        "role": "Assistant Professor",
        "organization": "SMVITM, Bantakal",
        "duration": "9 Years 11 Months",
        "description": "Serving in the Dept. of Management Studies (MBA), leading classroom lectures, laboratory coursework, and undergraduate student project guidance."
      }
    ],
    "skills": [
      "MBA",
      "Curriculum Delivery",
      "Academic Mentoring",
      "Laboratory Training"
    ]
  },
  {
    "id": "lec-mba-dhanya-k",
    "userId": null,
    "name": "Ms. Dhanya K",
    "handle": "@dhanya_mba",
    "aliases": [],
    "employeeId": "FAC-MBA-009",
    "designation": "Assistant Professor",
    "headline": "Assistant Professor \u00b7 Dept. of Management Studies (MBA) | Finance",
    "branch": "MBA",
    "department": "Dept. of Management Studies (MBA)",
    "location": "SMVITM Campus, Bantakal, Udupi",
    "experienceYears": "11+ years",
    "avatarChar": "D",
    "avatarBg": "#6366f1",
    "photoUrl": "https://smvitm.sode-edu.in/wp-content/uploads/2026/04/dhanya-.webp",
    "bannerBg": "linear-gradient(135deg, #4f46e5 0%, #6366f1 55%, #8b5cf6 100%)",
    "verified": true,
    "verifiedType": "gold",
    "about": "Ms. Dhanya K serves as Assistant Professor in the Dept. of Management Studies (MBA) at Shri Madhwa Vadiraja Institute of Technology and Management (SMVITM), Bantakal. Dedicated to quality engineering education, active student mentoring, and departmental research initiatives. Core research and academic focus includes Finance.",
    "contact": {
      "email": "dhanyak.mba@sode-edu.in",
      "phone": "+91 9497843418",
      "office": "Dept. of Management Studies (MBA) \u00b7 Academic Block, SMVITM",
      "officeHours": "Mon \u2013 Fri \u00b7 3:00 PM \u2013 4:30 PM",
      "linkedin": "https://www.linkedin.com/company/shri-madhwa-vadiraja-institute-of-technology-and-management/",
      "scholar": "https://scholar.google.com",
      "website": "https://smvitm.sode-edu.in/faculties/ms-dhanya-k/"
    },
    "yearsTaught": [
      "1st Year",
      "2nd Year"
    ],
    "semestersTaught": [
      "1st Sem",
      "2nd Sem",
      "3rd Sem",
      "4th Sem"
    ],
    "subjects": [
      {
        "code": "MBA309",
        "name": "Finance",
        "year": "1st Year",
        "semester": "1st Sem",
        "type": "Theory + Lab"
      },
      {
        "code": "MBA409",
        "name": "Strategic Management & Corporate Policy",
        "year": "2nd Year",
        "semester": "3rd Sem",
        "type": "Theory"
      },
      {
        "code": "MBA509",
        "name": "Financial Management & Investment Analysis",
        "year": "1st Year",
        "semester": "2nd Sem",
        "type": "Theory"
      }
    ],
    "education": [
      {
        "degree": "BBM (Finance and HR)",
        "institution": "VTU / Recognized University",
        "year": "",
        "details": "Academic Qualification"
      },
      {
        "degree": "PGDCA",
        "institution": "VTU / Recognized University",
        "year": "",
        "details": "Academic Qualification"
      },
      {
        "degree": "MBA (Finance)",
        "institution": "VTU / Recognized University",
        "year": "",
        "details": "Academic Qualification"
      },
      {
        "degree": "MCOM (Finance and Marketing)",
        "institution": "VTU / Recognized University",
        "year": "",
        "details": "Academic Qualification"
      },
      {
        "degree": "Ph.D. (Pursuing)",
        "institution": "VTU / Recognized University",
        "year": "",
        "details": "Academic Qualification"
      }
    ],
    "experience": [
      {
        "role": "Assistant Professor",
        "organization": "SMVITM, Bantakal",
        "duration": "11 Years 7 Months",
        "description": "Serving in the Dept. of Management Studies (MBA), leading classroom lectures, laboratory coursework, and undergraduate student project guidance."
      }
    ],
    "skills": [
      "Finance"
    ]
  },
  {
    "id": "lec-maths-lolita-priya",
    "userId": null,
    "name": "Dr. Lolita Priya Castelino",
    "handle": "@lolita_maths",
    "aliases": [
      "HOD MATHS",
      "Head of Department"
    ],
    "employeeId": "FAC-MAT-001",
    "designation": "Professor & Head",
    "headline": "Professor & Head \u00b7 Dept. of Mathematics | Graph Theory",
    "branch": "MATHS",
    "department": "Dept. of Mathematics",
    "location": "SMVITM Campus, Bantakal, Udupi",
    "experienceYears": "21+ years",
    "avatarChar": "L",
    "avatarBg": "#0891b2",
    "photoUrl": "https://smvitm.sode-edu.in/wp-content/uploads/2015/02/LOLITA-MATHS.jpg",
    "bannerBg": "linear-gradient(135deg, #0891b2 0%, #06b6d4 55%, #38bdf8 100%)",
    "verified": true,
    "verifiedType": "gold",
    "about": "Dr. Lolita Priya Castelino serves as Professor & Head in the Dept. of Mathematics at Shri Madhwa Vadiraja Institute of Technology and Management (SMVITM), Bantakal. Dedicated to quality engineering education, active student mentoring, and departmental research initiatives. Core research and academic focus includes Graph Theory.",
    "contact": {
      "email": "priya.maths@sode-edu.in",
      "phone": "+91 820 2589182, +91 820 2589183, Extn: 217",
      "office": "Dept. of Mathematics \u00b7 Academic Block, SMVITM",
      "officeHours": "Mon \u2013 Fri \u00b7 3:00 PM \u2013 4:30 PM",
      "linkedin": "https://www.linkedin.com/company/shri-madhwa-vadiraja-institute-of-technology-and-management/",
      "scholar": "https://scholar.google.com",
      "website": "https://smvitm.sode-edu.in/faculties/lolita-priya-castelino/"
    },
    "yearsTaught": [
      "1st Year",
      "2nd Year"
    ],
    "semestersTaught": [
      "1st Sem",
      "2nd Sem"
    ],
    "subjects": [
      {
        "code": "BMAT301",
        "name": "Graph Theory",
        "year": "1st Year",
        "semester": "1st Sem",
        "type": "Theory + Lab"
      },
      {
        "code": "BMAT401",
        "name": "Calculus & Differential Equations",
        "year": "1st Year",
        "semester": "1st Sem",
        "type": "Theory"
      },
      {
        "code": "BMAT501",
        "name": "Linear Algebra & Transform Calculus",
        "year": "1st Year",
        "semester": "2nd Sem",
        "type": "Theory"
      }
    ],
    "education": [
      {
        "degree": "M.Sc. (Mathematics)",
        "institution": "VTU / Recognized University",
        "year": "",
        "details": "Academic Qualification"
      },
      {
        "degree": "M.Phil. (Mathematics)",
        "institution": "VTU / Recognized University",
        "year": "",
        "details": "Academic Qualification"
      },
      {
        "degree": "Ph. D. (Mathematics )",
        "institution": "VTU / Recognized University",
        "year": "",
        "details": "Academic Qualification"
      }
    ],
    "experience": [
      {
        "role": "Professor & Head",
        "organization": "SMVITM, Bantakal",
        "duration": "21 Years 5 Months",
        "description": "Serving in the Dept. of Mathematics, leading classroom lectures, laboratory coursework, and undergraduate student project guidance."
      }
    ],
    "skills": [
      "Graph Theory"
    ]
  },
  {
    "id": "lec-maths-renita-sharon",
    "userId": null,
    "name": "Dr. Renita Sharon Monis",
    "handle": "@renita_maths",
    "aliases": [],
    "employeeId": "FAC-MAT-002",
    "designation": "Assistant Professor (SG)",
    "headline": "Assistant Professor (SG) \u00b7 Dept. of Mathematics | Aerodynamics",
    "branch": "MATHS",
    "department": "Dept. of Mathematics",
    "location": "SMVITM Campus, Bantakal, Udupi",
    "experienceYears": "22+ years",
    "avatarChar": "R",
    "avatarBg": "#0891b2",
    "photoUrl": "https://smvitm.sode-edu.in/wp-content/uploads/2024/01/KMB_7047.jpg",
    "bannerBg": "linear-gradient(135deg, #0891b2 0%, #06b6d4 55%, #38bdf8 100%)",
    "verified": true,
    "verifiedType": "gold",
    "about": "Dr. Renita Sharon Monis serves as Assistant Professor (SG) in the Dept. of Mathematics at Shri Madhwa Vadiraja Institute of Technology and Management (SMVITM), Bantakal. Dedicated to quality engineering education, active student mentoring, and departmental research initiatives. Core research and academic focus includes Aerodynamics.",
    "contact": {
      "email": "renita.maths@sode-edu.in",
      "phone": "+91 9900581417",
      "office": "Dept. of Mathematics \u00b7 Academic Block, SMVITM",
      "officeHours": "Mon \u2013 Fri \u00b7 3:00 PM \u2013 4:30 PM",
      "linkedin": "https://www.linkedin.com/company/shri-madhwa-vadiraja-institute-of-technology-and-management/",
      "scholar": "https://scholar.google.com",
      "website": "https://smvitm.sode-edu.in/faculties/renita-sharon-monis/"
    },
    "yearsTaught": [
      "1st Year",
      "2nd Year"
    ],
    "semestersTaught": [
      "1st Sem",
      "2nd Sem"
    ],
    "subjects": [
      {
        "code": "BMAT302",
        "name": "Aerodynamics",
        "year": "1st Year",
        "semester": "1st Sem",
        "type": "Theory + Lab"
      },
      {
        "code": "BMAT402",
        "name": "Calculus & Differential Equations",
        "year": "1st Year",
        "semester": "1st Sem",
        "type": "Theory"
      },
      {
        "code": "BMAT502",
        "name": "Linear Algebra & Transform Calculus",
        "year": "1st Year",
        "semester": "2nd Sem",
        "type": "Theory"
      }
    ],
    "education": [
      {
        "degree": "B.Sc. (Physics,Chemistry,Mathematics)",
        "institution": "VTU / Recognized University",
        "year": "",
        "details": "Academic Qualification"
      },
      {
        "degree": "M.Sc. (Mathematics)",
        "institution": "VTU / Recognized University",
        "year": "",
        "details": "Academic Qualification"
      },
      {
        "degree": "M.A.(Hindi)",
        "institution": "VTU / Recognized University",
        "year": "",
        "details": "Academic Qualification"
      },
      {
        "degree": "PhD",
        "institution": "VTU / Recognized University",
        "year": "",
        "details": "Academic Qualification"
      }
    ],
    "experience": [
      {
        "role": "Assistant Professor (SG)",
        "organization": "SMVITM, Bantakal",
        "duration": "22 Years 6 Months",
        "description": "Serving in the Dept. of Mathematics, leading classroom lectures, laboratory coursework, and undergraduate student project guidance."
      }
    ],
    "skills": [
      "Aerodynamics"
    ]
  },
  {
    "id": "lec-maths-sharan-hegde",
    "userId": null,
    "name": "Mr. Sharan Hegde",
    "handle": "@sharan_maths",
    "aliases": [],
    "employeeId": "FAC-MAT-003",
    "designation": "Assistant Professor",
    "headline": "Assistant Professor \u00b7 Dept. of Mathematics | Graph Theory",
    "branch": "MATHS",
    "department": "Dept. of Mathematics",
    "location": "SMVITM Campus, Bantakal, Udupi",
    "experienceYears": "10+ years",
    "avatarChar": "S",
    "avatarBg": "#0891b2",
    "photoUrl": "https://smvitm.sode-edu.in/wp-content/uploads/2025/08/sharan-photo.webp",
    "bannerBg": "linear-gradient(135deg, #0891b2 0%, #06b6d4 55%, #38bdf8 100%)",
    "verified": true,
    "verifiedType": "gold",
    "about": "Mr. Sharan Hegde serves as Assistant Professor in the Dept. of Mathematics at Shri Madhwa Vadiraja Institute of Technology and Management (SMVITM), Bantakal. Dedicated to quality engineering education, active student mentoring, and departmental research initiatives. Core research and academic focus includes Graph Theory.",
    "contact": {
      "email": "sharanh.maths@sode-edu.in",
      "phone": "+91 9686403603",
      "office": "Dept. of Mathematics \u00b7 Academic Block, SMVITM",
      "officeHours": "Mon \u2013 Fri \u00b7 3:00 PM \u2013 4:30 PM",
      "linkedin": "https://www.linkedin.com/company/shri-madhwa-vadiraja-institute-of-technology-and-management/",
      "scholar": "https://scholar.google.com",
      "website": "https://smvitm.sode-edu.in/faculties/mr-sharan-hegde/"
    },
    "yearsTaught": [
      "1st Year",
      "2nd Year"
    ],
    "semestersTaught": [
      "1st Sem",
      "2nd Sem"
    ],
    "subjects": [
      {
        "code": "BMAT303",
        "name": "Graph Theory",
        "year": "1st Year",
        "semester": "1st Sem",
        "type": "Theory + Lab"
      },
      {
        "code": "BMAT403",
        "name": "Calculus & Differential Equations",
        "year": "1st Year",
        "semester": "1st Sem",
        "type": "Theory"
      },
      {
        "code": "BMAT503",
        "name": "Linear Algebra & Transform Calculus",
        "year": "1st Year",
        "semester": "2nd Sem",
        "type": "Theory"
      }
    ],
    "education": [
      {
        "degree": "M.Sc",
        "institution": "VTU / Recognized University",
        "year": "",
        "details": "Academic Qualification"
      },
      {
        "degree": "B.Sc",
        "institution": "VTU / Recognized University",
        "year": "",
        "details": "Academic Qualification"
      }
    ],
    "experience": [
      {
        "role": "Assistant Professor",
        "organization": "SMVITM, Bantakal",
        "duration": "10 Years 3 Months",
        "description": "Serving in the Dept. of Mathematics, leading classroom lectures, laboratory coursework, and undergraduate student project guidance."
      }
    ],
    "skills": [
      "Graph Theory"
    ]
  },
  {
    "id": "lec-maths-bhagyalaxmi-navada",
    "userId": null,
    "name": "Ms. Bhagyalaxmi Navada",
    "handle": "@bhagyalaxmi_maths",
    "aliases": [],
    "employeeId": "FAC-MAT-004",
    "designation": "Assistant Professor (Senior)",
    "headline": "Assistant Professor (Senior) \u00b7 Dept. of Mathematics | Mathematics",
    "branch": "MATHS",
    "department": "Dept. of Mathematics",
    "location": "SMVITM Campus, Bantakal, Udupi",
    "experienceYears": "21.5+ years",
    "avatarChar": "B",
    "avatarBg": "#0891b2",
    "photoUrl": "https://smvitm.sode-edu.in/wp-content/uploads/2021/02/BHAGYALAKSHMI-NAVADA-MATHS.jpg",
    "bannerBg": "linear-gradient(135deg, #0891b2 0%, #06b6d4 55%, #38bdf8 100%)",
    "verified": true,
    "verifiedType": "gold",
    "about": "Ms. Bhagyalaxmi Navada serves as Assistant Professor (Senior) in the Dept. of Mathematics at Shri Madhwa Vadiraja Institute of Technology and Management (SMVITM), Bantakal. Dedicated to quality engineering education, active student mentoring, and departmental research initiatives. Core research and academic focus includes Mathematics.",
    "contact": {
      "email": "bhagya.maths@sode-edu.in",
      "phone": "+91 820 2589182, +91 820 2589183.",
      "office": "Dept. of Mathematics \u00b7 Academic Block, SMVITM",
      "officeHours": "Mon \u2013 Fri \u00b7 3:00 PM \u2013 4:30 PM",
      "linkedin": "https://www.linkedin.com/company/shri-madhwa-vadiraja-institute-of-technology-and-management/",
      "scholar": "https://scholar.google.com",
      "website": "https://smvitm.sode-edu.in/faculties/bhagyalaxmi-navada/"
    },
    "yearsTaught": [
      "1st Year",
      "2nd Year"
    ],
    "semestersTaught": [
      "1st Sem",
      "2nd Sem"
    ],
    "subjects": [
      {
        "code": "BMAT304",
        "name": "Mathematics",
        "year": "1st Year",
        "semester": "1st Sem",
        "type": "Theory + Lab"
      },
      {
        "code": "BMAT404",
        "name": "Calculus & Differential Equations",
        "year": "1st Year",
        "semester": "1st Sem",
        "type": "Theory"
      },
      {
        "code": "BMAT504",
        "name": "Linear Algebra & Transform Calculus",
        "year": "1st Year",
        "semester": "2nd Sem",
        "type": "Theory"
      }
    ],
    "education": [
      {
        "degree": "M.Sc",
        "institution": "VTU / Recognized University",
        "year": "",
        "details": "Academic Qualification"
      },
      {
        "degree": "B.Sc",
        "institution": "VTU / Recognized University",
        "year": "",
        "details": "Academic Qualification"
      }
    ],
    "experience": [
      {
        "role": "Assistant Professor (Senior)",
        "organization": "SMVITM, Bantakal",
        "duration": "21.5 Years 4 Months",
        "description": "Serving in the Dept. of Mathematics, leading classroom lectures, laboratory coursework, and undergraduate student project guidance."
      }
    ],
    "skills": [
      "Mathematics"
    ]
  },
  {
    "id": "lec-maths-kavyalaxmi-upadhyaya",
    "userId": null,
    "name": "Ms. Kavyalaxmi Upadhyaya",
    "handle": "@kavyalaxmi_maths",
    "aliases": [],
    "employeeId": "FAC-MAT-005",
    "designation": "Assistant Professor (Senior)",
    "headline": "Assistant Professor (Senior) \u00b7 Dept. of Mathematics | Graph Theory",
    "branch": "MATHS",
    "department": "Dept. of Mathematics",
    "location": "SMVITM Campus, Bantakal, Udupi",
    "experienceYears": "12+ years",
    "avatarChar": "K",
    "avatarBg": "#0891b2",
    "photoUrl": "https://smvitm.sode-edu.in/wp-content/uploads/2024/01/KMB_7051.jpg",
    "bannerBg": "linear-gradient(135deg, #0891b2 0%, #06b6d4 55%, #38bdf8 100%)",
    "verified": true,
    "verifiedType": "gold",
    "about": "Ms. Kavyalaxmi Upadhyaya serves as Assistant Professor (Senior) in the Dept. of Mathematics at Shri Madhwa Vadiraja Institute of Technology and Management (SMVITM), Bantakal. Dedicated to quality engineering education, active student mentoring, and departmental research initiatives. Core research and academic focus includes Graph Theory.",
    "contact": {
      "email": "kavya.maths@sode-edu.in",
      "phone": "+91 9449406121",
      "office": "Dept. of Mathematics \u00b7 Academic Block, SMVITM",
      "officeHours": "Mon \u2013 Fri \u00b7 3:00 PM \u2013 4:30 PM",
      "linkedin": "https://www.linkedin.com/company/shri-madhwa-vadiraja-institute-of-technology-and-management/",
      "scholar": "https://scholar.google.com",
      "website": "https://smvitm.sode-edu.in/faculties/ms-kavyalaxmi-upadhyaya/"
    },
    "yearsTaught": [
      "1st Year",
      "2nd Year"
    ],
    "semestersTaught": [
      "1st Sem",
      "2nd Sem"
    ],
    "subjects": [
      {
        "code": "BMAT305",
        "name": "Graph Theory",
        "year": "1st Year",
        "semester": "1st Sem",
        "type": "Theory + Lab"
      },
      {
        "code": "BMAT405",
        "name": "Calculus & Differential Equations",
        "year": "1st Year",
        "semester": "1st Sem",
        "type": "Theory"
      },
      {
        "code": "BMAT505",
        "name": "Linear Algebra & Transform Calculus",
        "year": "1st Year",
        "semester": "2nd Sem",
        "type": "Theory"
      }
    ],
    "education": [
      {
        "degree": "B. Sc.",
        "institution": "VTU / Recognized University",
        "year": "",
        "details": "Academic Qualification"
      },
      {
        "degree": "M. Sc",
        "institution": "VTU / Recognized University",
        "year": "",
        "details": "Academic Qualification"
      }
    ],
    "experience": [
      {
        "role": "Assistant Professor (Senior)",
        "organization": "SMVITM, Bantakal",
        "duration": "12 Years 3 Months",
        "description": "Serving in the Dept. of Mathematics, leading classroom lectures, laboratory coursework, and undergraduate student project guidance."
      }
    ],
    "skills": [
      "Graph Theory"
    ]
  },
  {
    "id": "lec-maths-reshma-bharath",
    "userId": null,
    "name": "Ms. Reshma Bharath Nayak",
    "handle": "@reshma_maths",
    "aliases": [],
    "employeeId": "FAC-MAT-006",
    "designation": "Assistant Professor",
    "headline": "Assistant Professor \u00b7 Dept. of Mathematics",
    "branch": "MATHS",
    "department": "Dept. of Mathematics",
    "location": "SMVITM Campus, Bantakal, Udupi",
    "experienceYears": "14+ years",
    "avatarChar": "R",
    "avatarBg": "#0891b2",
    "photoUrl": "https://smvitm.sode-edu.in/wp-content/uploads/2024/03/Reshma-Nayak-Maths.jpg",
    "bannerBg": "linear-gradient(135deg, #0891b2 0%, #06b6d4 55%, #38bdf8 100%)",
    "verified": true,
    "verifiedType": "gold",
    "about": "Ms. Reshma Bharath Nayak serves as Assistant Professor in the Dept. of Mathematics at Shri Madhwa Vadiraja Institute of Technology and Management (SMVITM), Bantakal. Dedicated to quality engineering education, active student mentoring, and departmental research initiatives.",
    "contact": {
      "email": "reshma.maths@sode-edu.in",
      "phone": "+91 9945683675",
      "office": "Dept. of Mathematics \u00b7 Academic Block, SMVITM",
      "officeHours": "Mon \u2013 Fri \u00b7 3:00 PM \u2013 4:30 PM",
      "linkedin": "https://www.linkedin.com/company/shri-madhwa-vadiraja-institute-of-technology-and-management/",
      "scholar": "https://scholar.google.com",
      "website": "https://smvitm.sode-edu.in/faculties/ms-reshma-bharath-nayak/"
    },
    "yearsTaught": [
      "1st Year",
      "2nd Year"
    ],
    "semestersTaught": [
      "1st Sem",
      "2nd Sem"
    ],
    "subjects": [
      {
        "code": "BMAT406",
        "name": "Calculus & Differential Equations",
        "year": "1st Year",
        "semester": "1st Sem",
        "type": "Theory"
      },
      {
        "code": "BMAT506",
        "name": "Linear Algebra & Transform Calculus",
        "year": "1st Year",
        "semester": "2nd Sem",
        "type": "Theory"
      },
      {
        "code": "BMAT606",
        "name": "Discrete Mathematical Structures & Graph Theory",
        "year": "2nd Year",
        "semester": "3rd Sem",
        "type": "Theory"
      }
    ],
    "education": [
      {
        "degree": "M. Sc. (Applied Mathematics)",
        "institution": "VTU / Recognized University",
        "year": "",
        "details": "Academic Qualification"
      },
      {
        "degree": "B. Ed",
        "institution": "VTU / Recognized University",
        "year": "",
        "details": "Academic Qualification"
      },
      {
        "degree": "B. Sc (MPCs)",
        "institution": "VTU / Recognized University",
        "year": "",
        "details": "Academic Qualification"
      }
    ],
    "experience": [
      {
        "role": "Assistant Professor",
        "organization": "SMVITM, Bantakal",
        "duration": "14 Years 8 Months",
        "description": "Serving in the Dept. of Mathematics, leading classroom lectures, laboratory coursework, and undergraduate student project guidance."
      }
    ],
    "skills": [
      "MATHS",
      "Curriculum Delivery",
      "Academic Mentoring",
      "Laboratory Training"
    ]
  },
  {
    "id": "lec-phy-ravindra-h",
    "userId": null,
    "name": "Dr. Ravindra H. J.",
    "handle": "@ravindra_phy",
    "aliases": [
      "HOD PHY",
      "Head of Department"
    ],
    "employeeId": "FAC-PHY-001",
    "designation": "Professor & Head",
    "headline": "Professor & Head \u00b7 Dept. of Physics | Crystal Growth and Nonlinear optics, Radiation physics",
    "branch": "PHY",
    "department": "Dept. of Physics",
    "location": "SMVITM Campus, Bantakal, Udupi",
    "experienceYears": "21+ years",
    "avatarChar": "R",
    "avatarBg": "#db2777",
    "photoUrl": "https://smvitm.sode-edu.in/wp-content/uploads/2015/02/RAVINDRA-H-J-PHY.jpg",
    "bannerBg": "linear-gradient(135deg, #db2777 0%, #ec4899 55%, #f472b6 100%)",
    "verified": true,
    "verifiedType": "gold",
    "about": "Dr. Ravindra H. J. serves as Professor & Head in the Dept. of Physics at Shri Madhwa Vadiraja Institute of Technology and Management (SMVITM), Bantakal. Dedicated to quality engineering education, active student mentoring, and departmental research initiatives. Core research and academic focus includes Crystal Growth and Nonlinear optics, Radiation physics.",
    "contact": {
      "email": "ravi.physics@sode-edu.in",
      "phone": "+91 0820 2589183",
      "office": "Dept. of Physics \u00b7 Academic Block, SMVITM",
      "officeHours": "Mon \u2013 Fri \u00b7 3:00 PM \u2013 4:30 PM",
      "linkedin": "https://www.linkedin.com/company/shri-madhwa-vadiraja-institute-of-technology-and-management/",
      "scholar": "https://scholar.google.com",
      "website": "https://smvitm.sode-edu.in/faculties/ravindra-h-j/"
    },
    "yearsTaught": [
      "1st Year",
      "2nd Year"
    ],
    "semestersTaught": [
      "1st Sem",
      "2nd Sem"
    ],
    "subjects": [
      {
        "code": "BPHY301",
        "name": "Crystal Growth and Nonlinear optics",
        "year": "1st Year",
        "semester": "1st Sem",
        "type": "Theory + Lab"
      },
      {
        "code": "BPHY401",
        "name": "Radiation physics",
        "year": "2nd Year",
        "semester": "2nd Sem",
        "type": "Theory"
      }
    ],
    "education": [
      {
        "degree": "M.Sc, Ph.D",
        "institution": "VTU / Recognized University",
        "year": "",
        "details": "Academic Qualification"
      }
    ],
    "experience": [
      {
        "role": "Professor & Head",
        "organization": "SMVITM, Bantakal",
        "duration": "21 Years 6 Months",
        "description": "Serving in the Dept. of Physics, leading classroom lectures, laboratory coursework, and undergraduate student project guidance."
      }
    ],
    "skills": [
      "Radiation physics"
    ]
  },
  {
    "id": "lec-phy-sahana-s",
    "userId": null,
    "name": "Ms. Sahana S R",
    "handle": "@sahana_phy",
    "aliases": [],
    "employeeId": "FAC-PHY-002",
    "designation": "Assistant Professor",
    "headline": "Assistant Professor \u00b7 Dept. of Physics | Solid State Physics, Nano Science.",
    "branch": "PHY",
    "department": "Dept. of Physics",
    "location": "SMVITM Campus, Bantakal, Udupi",
    "experienceYears": "8+ years",
    "avatarChar": "S",
    "avatarBg": "#db2777",
    "photoUrl": "https://smvitm.sode-edu.in/wp-content/uploads/2025/07/Sahana_Physics.webp",
    "bannerBg": "linear-gradient(135deg, #db2777 0%, #ec4899 55%, #f472b6 100%)",
    "verified": true,
    "verifiedType": "gold",
    "about": "Ms. Sahana S R serves as Assistant Professor in the Dept. of Physics at Shri Madhwa Vadiraja Institute of Technology and Management (SMVITM), Bantakal. Dedicated to quality engineering education, active student mentoring, and departmental research initiatives. Core research and academic focus includes Solid State Physics, Nano Science..",
    "contact": {
      "email": "sahanas.physics@sode-edu.in",
      "phone": "+91 9448478245",
      "office": "Dept. of Physics \u00b7 Academic Block, SMVITM",
      "officeHours": "Mon \u2013 Fri \u00b7 3:00 PM \u2013 4:30 PM",
      "linkedin": "https://www.linkedin.com/company/shri-madhwa-vadiraja-institute-of-technology-and-management/",
      "scholar": "https://scholar.google.com",
      "website": "https://smvitm.sode-edu.in/faculties/ms-sahana-s-r/"
    },
    "yearsTaught": [
      "1st Year",
      "2nd Year"
    ],
    "semestersTaught": [
      "1st Sem",
      "2nd Sem"
    ],
    "subjects": [
      {
        "code": "BPHY302",
        "name": "Solid State Physics",
        "year": "1st Year",
        "semester": "1st Sem",
        "type": "Theory + Lab"
      },
      {
        "code": "BPHY402",
        "name": "Nano Science.",
        "year": "2nd Year",
        "semester": "2nd Sem",
        "type": "Theory"
      }
    ],
    "education": [
      {
        "degree": "M.Sc. in Physics",
        "institution": "VTU / Recognized University",
        "year": "",
        "details": "Academic Qualification"
      }
    ],
    "experience": [
      {
        "role": "Assistant Professor",
        "organization": "SMVITM, Bantakal",
        "duration": "8 Years 4 Months",
        "description": "Serving in the Dept. of Physics, leading classroom lectures, laboratory coursework, and undergraduate student project guidance."
      }
    ],
    "skills": [
      "Solid State Physics",
      "Nano Science."
    ]
  },
  {
    "id": "lec-phy-sandhya",
    "userId": null,
    "name": "Ms. Sandhya",
    "handle": "@sandhya_phy",
    "aliases": [],
    "employeeId": "FAC-PHY-003",
    "designation": "Assistant Professor (Senior)",
    "headline": "Assistant Professor (Senior) \u00b7 Dept. of Physics | Codensed Matter Physics",
    "branch": "PHY",
    "department": "Dept. of Physics",
    "location": "SMVITM Campus, Bantakal, Udupi",
    "experienceYears": "21+ years",
    "avatarChar": "S",
    "avatarBg": "#db2777",
    "photoUrl": "https://smvitm.sode-edu.in/wp-content/uploads/2015/02/SANDYA-PHY.jpg",
    "bannerBg": "linear-gradient(135deg, #db2777 0%, #ec4899 55%, #f472b6 100%)",
    "verified": true,
    "verifiedType": "gold",
    "about": "Ms. Sandhya serves as Assistant Professor (Senior) in the Dept. of Physics at Shri Madhwa Vadiraja Institute of Technology and Management (SMVITM), Bantakal. Dedicated to quality engineering education, active student mentoring, and departmental research initiatives. Core research and academic focus includes Codensed Matter Physics.",
    "contact": {
      "email": "sandhya.physics@sode-edu.in",
      "phone": "+91 9449464631",
      "office": "Dept. of Physics \u00b7 Academic Block, SMVITM",
      "officeHours": "Mon \u2013 Fri \u00b7 3:00 PM \u2013 4:30 PM",
      "linkedin": "https://www.linkedin.com/company/shri-madhwa-vadiraja-institute-of-technology-and-management/",
      "scholar": "https://scholar.google.com",
      "website": "https://smvitm.sode-edu.in/faculties/sandhya/"
    },
    "yearsTaught": [
      "1st Year",
      "2nd Year"
    ],
    "semestersTaught": [
      "1st Sem",
      "2nd Sem"
    ],
    "subjects": [
      {
        "code": "BPHY303",
        "name": "Codensed Matter Physics",
        "year": "1st Year",
        "semester": "1st Sem",
        "type": "Theory + Lab"
      },
      {
        "code": "BPHY403",
        "name": "Applied Engineering Physics",
        "year": "1st Year",
        "semester": "1st Sem",
        "type": "Theory + Lab"
      },
      {
        "code": "BPHY503",
        "name": "Semiconductor Physics & Modern Optics",
        "year": "1st Year",
        "semester": "2nd Sem",
        "type": "Theory"
      }
    ],
    "education": [
      {
        "degree": "M.Sc (Physics)",
        "institution": "VTU / Recognized University",
        "year": "",
        "details": "Academic Qualification"
      }
    ],
    "experience": [
      {
        "role": "Assistant Professor (Senior)",
        "organization": "SMVITM, Bantakal",
        "duration": "21 Years 9 Months",
        "description": "Serving in the Dept. of Physics, leading classroom lectures, laboratory coursework, and undergraduate student project guidance."
      }
    ],
    "skills": [
      "Codensed Matter Physics"
    ]
  },
  {
    "id": "lec-chem-subbulakshmi-n",
    "userId": null,
    "name": "Dr. Subbulakshmi N Karanth",
    "handle": "@subbulakshmi_chem",
    "aliases": [
      "HOD CHEM",
      "Head of Department"
    ],
    "employeeId": "FAC-CHE-001",
    "designation": "Associate Professor & Head",
    "headline": "Associate Professor & Head \u00b7 Dept. of Chemistry | Synthetic Chemistry, Physical Chemistry",
    "branch": "CHEM",
    "department": "Dept. of Chemistry",
    "location": "SMVITM Campus, Bantakal, Udupi",
    "experienceYears": "23+ years",
    "avatarChar": "S",
    "avatarBg": "#0d9488",
    "photoUrl": "https://smvitm.sode-edu.in/wp-content/uploads/2015/02/SUBBALAKSHMI-CHEM.jpg",
    "bannerBg": "linear-gradient(135deg, #0d9488 0%, #14b8a6 55%, #2dd4bf 100%)",
    "verified": true,
    "verifiedType": "gold",
    "about": "Dr. Subbulakshmi N Karanth serves as Associate Professor & Head in the Dept. of Chemistry at Shri Madhwa Vadiraja Institute of Technology and Management (SMVITM), Bantakal. Dedicated to quality engineering education, active student mentoring, and departmental research initiatives. Core research and academic focus includes Synthetic Chemistry, Physical Chemistry.",
    "contact": {
      "email": "snkaranth.chemistry@sode-edu.in",
      "phone": "+91 820 2589101",
      "office": "Dept. of Chemistry \u00b7 Academic Block, SMVITM",
      "officeHours": "Mon \u2013 Fri \u00b7 3:00 PM \u2013 4:30 PM",
      "linkedin": "https://www.linkedin.com/in/dr-subbulakshmi-n-karanth-18279337/",
      "scholar": "https://scholar.google.com",
      "website": "https://smvitm.sode-edu.in/faculties/subbulakshmi-n-karanth/"
    },
    "yearsTaught": [
      "1st Year",
      "2nd Year"
    ],
    "semestersTaught": [
      "1st Sem",
      "2nd Sem"
    ],
    "subjects": [
      {
        "code": "BCHE301",
        "name": "Synthetic Chemistry",
        "year": "1st Year",
        "semester": "1st Sem",
        "type": "Theory + Lab"
      },
      {
        "code": "BCHE401",
        "name": "Physical Chemistry",
        "year": "2nd Year",
        "semester": "2nd Sem",
        "type": "Theory"
      }
    ],
    "education": [
      {
        "degree": "PhD (Chemistry)",
        "institution": "VTU / Recognized University",
        "year": "",
        "details": "Academic Qualification"
      },
      {
        "degree": "M. Sc ( Chemistry)",
        "institution": "VTU / Recognized University",
        "year": "",
        "details": "Academic Qualification"
      },
      {
        "degree": "MBA ( HR)",
        "institution": "VTU / Recognized University",
        "year": "",
        "details": "Academic Qualification"
      },
      {
        "degree": "B. Sc (Mathemetics, Physics, chemistry)",
        "institution": "VTU / Recognized University",
        "year": "",
        "details": "Academic Qualification"
      }
    ],
    "experience": [
      {
        "role": "Associate Professor & Head",
        "organization": "SMVITM, Bantakal",
        "duration": "23 Years 7 Months",
        "description": "Serving in the Dept. of Chemistry, leading classroom lectures, laboratory coursework, and undergraduate student project guidance."
      }
    ],
    "skills": [
      "Synthetic Chemistry",
      "Physical Chemistry"
    ]
  },
  {
    "id": "lec-chem-swathi",
    "userId": null,
    "name": "Ms. Swathi",
    "handle": "@swathi_chem",
    "aliases": [],
    "employeeId": "FAC-CHE-002",
    "designation": "Assistant Professor",
    "headline": "Assistant Professor \u00b7 Dept. of Chemistry | Chemistry, Biotechnology, Biochemistry",
    "branch": "CHEM",
    "department": "Dept. of Chemistry",
    "location": "SMVITM Campus, Bantakal, Udupi",
    "experienceYears": "2+ years",
    "avatarChar": "S",
    "avatarBg": "#0d9488",
    "photoUrl": "https://smvitm.sode-edu.in/wp-content/uploads/2024/04/Swathi-Chemistry.png",
    "bannerBg": "linear-gradient(135deg, #0d9488 0%, #14b8a6 55%, #2dd4bf 100%)",
    "verified": true,
    "verifiedType": "gold",
    "about": "Ms. Swathi serves as Assistant Professor in the Dept. of Chemistry at Shri Madhwa Vadiraja Institute of Technology and Management (SMVITM), Bantakal. Dedicated to quality engineering education, active student mentoring, and departmental research initiatives. Core research and academic focus includes Chemistry, Biotechnology, Biochemistry.",
    "contact": {
      "email": "swathi.chemistry@sode-edu.in",
      "phone": "+91 820 2589101",
      "office": "Dept. of Chemistry \u00b7 Academic Block, SMVITM",
      "officeHours": "Mon \u2013 Fri \u00b7 3:00 PM \u2013 4:30 PM",
      "linkedin": "https://www.linkedin.com/company/shri-madhwa-vadiraja-institute-of-technology-and-management/",
      "scholar": "https://scholar.google.com",
      "website": "https://smvitm.sode-edu.in/faculties/ms-swathi/"
    },
    "yearsTaught": [
      "1st Year",
      "2nd Year"
    ],
    "semestersTaught": [
      "1st Sem",
      "2nd Sem"
    ],
    "subjects": [
      {
        "code": "BCHE302",
        "name": "Chemistry",
        "year": "1st Year",
        "semester": "1st Sem",
        "type": "Theory + Lab"
      },
      {
        "code": "BCHE402",
        "name": "Biotechnology",
        "year": "2nd Year",
        "semester": "2nd Sem",
        "type": "Theory"
      },
      {
        "code": "BCHE502",
        "name": "Biochemistry",
        "year": "2nd Year",
        "semester": "2nd Sem",
        "type": "Theory"
      }
    ],
    "education": [
      {
        "degree": "B. Sc.",
        "institution": "VTU / Recognized University",
        "year": "",
        "details": "Academic Qualification"
      },
      {
        "degree": "M. Sc. (chemistry)",
        "institution": "VTU / Recognized University",
        "year": "",
        "details": "Academic Qualification"
      },
      {
        "degree": "B.Ed",
        "institution": "VTU / Recognized University",
        "year": "",
        "details": "Academic Qualification"
      }
    ],
    "experience": [
      {
        "role": "Assistant Professor",
        "organization": "SMVITM, Bantakal",
        "duration": "2 Years 8 Months",
        "description": "Serving in the Dept. of Chemistry, leading classroom lectures, laboratory coursework, and undergraduate student project guidance."
      }
    ],
    "skills": [
      "Chemistry",
      "Biotechnology",
      "Biochemistry"
    ]
  },
  {
    "id": "lec-chem-thanushree",
    "userId": null,
    "name": "Ms. Thanushree",
    "handle": "@thanushree_chem",
    "aliases": [],
    "employeeId": "FAC-CHE-003",
    "designation": "Assistant Professor",
    "headline": "Assistant Professor \u00b7 Dept. of Chemistry",
    "branch": "CHEM",
    "department": "Dept. of Chemistry",
    "location": "SMVITM Campus, Bantakal, Udupi",
    "experienceYears": "5+ years",
    "avatarChar": "T",
    "avatarBg": "#0d9488",
    "photoUrl": "https://smvitm.sode-edu.in/wp-content/uploads/2026/08/Thanushree.webp",
    "bannerBg": "linear-gradient(135deg, #0d9488 0%, #14b8a6 55%, #2dd4bf 100%)",
    "verified": true,
    "verifiedType": "gold",
    "about": "Ms. Thanushree serves as Assistant Professor in the Dept. of Chemistry at Shri Madhwa Vadiraja Institute of Technology and Management (SMVITM), Bantakal. Dedicated to quality engineering education, active student mentoring, and departmental research initiatives.",
    "contact": {
      "email": "thanushree.bs@sode-edu.in",
      "phone": "+91 9972819366",
      "office": "Dept. of Chemistry \u00b7 Academic Block, SMVITM",
      "officeHours": "Mon \u2013 Fri \u00b7 3:00 PM \u2013 4:30 PM",
      "linkedin": "https://www.linkedin.com/company/shri-madhwa-vadiraja-institute-of-technology-and-management/",
      "scholar": "https://scholar.google.com",
      "website": "https://smvitm.sode-edu.in/faculties/ms-thanushree/"
    },
    "yearsTaught": [
      "1st Year",
      "2nd Year"
    ],
    "semestersTaught": [
      "1st Sem",
      "2nd Sem"
    ],
    "subjects": [
      {
        "code": "BCHE403",
        "name": "Engineering Chemistry & Material Science",
        "year": "1st Year",
        "semester": "1st Sem",
        "type": "Theory + Lab"
      },
      {
        "code": "BCHE503",
        "name": "Corrosion Science & Electrochemical Energy",
        "year": "1st Year",
        "semester": "2nd Sem",
        "type": "Theory"
      },
      {
        "code": "BCHE603",
        "name": "Polymer Chemistry & Advanced Nanomaterials",
        "year": "2nd Year",
        "semester": "3rd Sem",
        "type": "Theory"
      }
    ],
    "education": [
      {
        "degree": "B.Sc",
        "institution": "VTU / Recognized University",
        "year": "",
        "details": "Academic Qualification"
      },
      {
        "degree": "M.Sc (Chemistry)",
        "institution": "VTU / Recognized University",
        "year": "",
        "details": "Academic Qualification"
      },
      {
        "degree": "B.Ed",
        "institution": "VTU / Recognized University",
        "year": "",
        "details": "Academic Qualification"
      }
    ],
    "experience": [
      {
        "role": "Assistant Professor",
        "organization": "SMVITM, Bantakal",
        "duration": "5 Years 3 Months",
        "description": "Serving in the Dept. of Chemistry, leading classroom lectures, laboratory coursework, and undergraduate student project guidance."
      }
    ],
    "skills": [
      "CHEM",
      "Curriculum Delivery",
      "Academic Mentoring",
      "Laboratory Training"
    ]
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
    linkUrl: 'https://www.instagram.com/reel/De9IDZuyW5v/',
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
    url: 'https://www.instagram.com/smvitm.sode/',
    badge: 'Official Instagram',
    iconType: 'instagram',
    logo: '/portals/instagram.svg'
  },
  {
    id: 'web-15',
    name: 'UTKARSH SMVITM',
    category: 'Social Media',
    description: 'Official Instagram page of Utkarsh — the cultural, literary, and student talent club of SMVITM.',
    url: 'https://www.instagram.com/utkarsh.smvitm/',
    badge: 'Cultural Club',
    iconType: 'instagram',
    logo: '/portals/instagram.svg'
  },
  {
    id: 'web-16',
    name: 'SPL SMVITM (Premier League)',
    category: 'Social Media',
    description: 'Official Instagram account for SMVITM Premier League — cricket tournament fixtures, player auctions, and live match scores.',
    url: 'https://www.instagram.com/spl.smvitm/',
    badge: 'Sports League',
    iconType: 'instagram',
    logo: '/portals/instagram.svg'
  },
  {
    id: 'web-17',
    name: 'AIKYA SMVITM',
    category: 'Social Media',
    description: 'Official Instagram page of Aikya SMVITM — youth forum for community service, cultural unity, and social awareness.',
    url: 'https://www.instagram.com/aikya.smvitm/',
    badge: 'Youth Forum',
    iconType: 'instagram',
    logo: '/portals/instagram.svg'
  },
  {
    id: 'web-18',
    name: 'CODE TROOPERS',
    category: 'Social Media',
    description: 'Student coding community and developer club of Computer Science & Engineering department at SMVITM.',
    url: 'https://www.instagram.com/code.troopers/',
    badge: 'Tech Community',
    iconType: 'instagram',
    logo: '/portals/instagram.svg'
  },
  {
    id: 'web-19',
    name: 'MBA SMVITM',
    category: 'Social Media',
    description: 'Official Instagram page for Department of Management Studies (MBA) at SMVITM Bantakal.',
    url: 'https://www.instagram.com/mba.smvitm/',
    badge: 'MBA Dept',
    iconType: 'instagram',
    logo: '/portals/instagram.svg'
  },
  {
    id: 'web-20',
    name: 'VARNOTHSAVA 2026',
    category: 'Social Media',
    description: 'Official Instagram handle for Varnothsava 2026 — the annual national-level intercollegiate techno-cultural fest of SMVITM.',
    url: 'https://www.instagram.com/varnothsava.2026/',
    badge: 'Cultural Fest',
    iconType: 'instagram',
    logo: '/portals/instagram.svg'
  },
  {
    id: 'web-21',
    name: 'NIRAMAYA SMVITM',
    category: 'Social Media',
    description: 'Official Instagram account of Niramaya — student health, wellness, hygiene awareness, and blood donation wing of SMVITM.',
    url: 'https://www.instagram.com/niramayabantakal/',
    badge: 'Health & Wellness',
    iconType: 'instagram',
    logo: '/portals/instagram.svg'
  },
  {
    id: 'web-22',
    name: 'TECHNOCRATORS ECE',
    category: 'Social Media',
    description: 'Official Instagram page of Technocrators, the Electronics & Communication Engineering student association of SMVITM.',
    url: 'https://www.instagram.com/technocrators_ece/',
    badge: 'ECE Association',
    iconType: 'instagram',
    logo: '/portals/instagram.svg'
  },
  {
    id: 'web-23',
    name: 'THE LEGITTS 2026',
    category: 'Social Media',
    description: 'Official Instagram account for The Legitts (Batch of 2026) student community, celebrations, and campus memories.',
    url: 'https://www.instagram.com/the_legittts_2026/',
    badge: 'Student Community',
    iconType: 'instagram',
    logo: '/portals/instagram.svg'
  },
  {
    id: 'web-24',
    name: 'MOTOMANIA 2K26',
    category: 'Social Media',
    description: 'Official Instagram page of Motomania — the automotive and mechanical engineering enthusiast club of SMVITM.',
    url: 'https://www.instagram.com/motomania_2k26/',
    badge: 'Auto & Mech Club',
    iconType: 'instagram',
    logo: '/portals/instagram.svg'
  },
  {
    id: 'web-25',
    name: 'IGNITE AI&DS',
    category: 'Social Media',
    description: 'Official Instagram page of Ignite — Department of Artificial Intelligence & Data Science student association at SMVITM.',
    url: 'https://www.instagram.com/ignite.ai_ds/',
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
