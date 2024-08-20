export const name = 'Alla'
export const surname = 'Prishchepa'
export const title = 'Frontend Developer'

export const location = 'Tbilisi, Georgia (GMT +4)'
export const email = 'tyurina.alla@gmail.com'
export const linkedin = 'https://www.linkedin.com/in/alla-prishchepa/'
export const github = 'https://github.com/allaprischepa'

export const skills = [
  {name: 'React.js', faIcon: 'react'},
  {name: 'Next.js', iconifyIcon: 'teenyicons:nextjs-solid'},
  {name: 'TypeScript', iconifyIcon: 'teenyicons:typescript-solid'},
  {name: 'JavaScript', faIcon: 'js'},
  {name: 'Jest', iconifyIcon: 'simple-icons:jest'},
  {name: 'Vitest', iconifyIcon: 'simple-icons:vitest'},
  {name: 'Redux', iconifyIcon: 'simple-icons:redux'},
  {name: 'GraphQL', iconifyIcon: 'teenyicons:graphql-outline'},
  {name: 'Vue.js', faIcon: 'vuejs'},
  {name: 'SASS', faIcon: 'sass'},
  {name: 'CSS', faIcon: 'css3-alt'},
  {name: 'HTML', faIcon: 'html5'},
  {name: 'PHP', faIcon: 'php'},
]

export const languages = [
  { name: 'English', level: 'Intermediate' },
  { name: 'Russian', level: 'Native' }
]

export const about = `I am a Web Developer with 5+ years of experience, passionate about Frontend and web interfaces.
I am a team player and good at communicating with clients.
My previous employers and clients valued my ability to deliver work on time according to high-quality standards.
My current tech stack is React, TypeScript, JavaScript, Redux, and SASS.`

export const experience = [
  {
    title: 'Back-end Developer',
    company: 'DrupalJedi',
    startDate: new Date(2013, 10),
    endDate: new Date(2018, 10),
    stack: ['Drupal 6 - 8', 'PHP', 'MySQL', 'Apache Solr', 'LDAP'],
    duties: [
      'Worked in international teams',
      'Participated in high-load projects',
      'Developed Intranet portals with complicated permissions schemes',
      'Integrated LDAP authentication in Drupal',
      'Integrated Auto-renewable subscriptions (In-App Purchases) in Drupal',
      'Configured Apache Solr Search in Drupal',
      'Conducted Drupal upgrades for large projects',
      'Reviewed specifications',
      'Estimated project features',
      'Contributed to modules on drupal.org',
      'Participated in Drupal conferences'
    ]
  },
  {
    title: 'Back-end Developer',
    company: 'Large Software Development Company (NDA)',
    startDate: new Date(2020, 7),
    endDate: new Date(2021, 6),
    stack: [
      'Drupal 8 - 9',
      'PHP',
      'MySQL',
      'Apache Solr',
      'Marketo',
      'Google Maps API',
      'SASS',
      'JavaScript'
    ],
    duties: [
      'Worked in international teams',
      'Participated in high-load projects',
      "Improved Google Map widget according to the client's needs",
      'Configured Apache Solr Search in Drupal',
      "Integrated Marketo, created the module for the client's custom settings",
      "Investigated and fixed bugs in content import from the client's CDN servers",
      'Reviewed specifications',
      'Estimated project features',
      'Contributed to modules on drupal.org'
    ]
  },
  {
    title: 'Full-stack Developer',
    company: 'Freelance',
    startDate: new Date(2018, 11),
    endDate: 'currently',
    stack: ['WordPress', 'PHP', 'CSS', 'JavaScript', 'Docker'],
    duties: [
      'Developed sites from scratch',
      'Implemented custom themes',
      "Implemented custom modules for the client's needs",
      'Integrated Google Analytics',
      'Integrated Yandex Metrica',
      'Integrated WooCommerce for products list',
      'Set up SEO',
      'Set up hosting'
    ]
  }
]

export const education = {
  university: [
    {
      name: 'Siberian State University of Telecommunications and Information Science',
      degree: `Engineer's degree`,
      field: 'Computer Software and Media Applications',
      startDate: new Date(2008, 8),
      endDate: new Date(2013, 5),
    }
  ],
  certifications: [
    {
      courseName: 'JavaScript / Front-end 2023Q1',
      schoolName: 'The Rolling Scopes School',
      score: '18 / 531',
      link: 'https://app.rs.school/certificate/x9msgvu2',
      date: new Date(2023, 8)
    },
    {
      courseName: 'React 2023 Q4',
      schoolName: 'The Rolling Scopes School',
      score: '13 / 1077',
      link: 'https://app.rs.school/certificate/97p2cdw6',
      date: new Date(2024, 0)
    }
  ]
}
