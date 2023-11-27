// jobs
//
// j01 - job_engineering_manager                  [s01, s02, s03]
// j02 - job_senior_software_engineer             [s04, s05, s06]
// j03 - job_fullstack_developer                  [s07, s02]
// j04 - job_senior_software_engineer_integration [s05, s08]
// j05 - job_senior_software_engineer             [s04, s08]
// j06 - job_frontend_developer                   [s01]
// j07 - job_senior_engineering_manager           [s01, s07]
// j08 - job_senior_software_engineer             [s07, s02, s17]
// j09 - job_software_developer                   [s04, s08]
// j10 - job_devops_engineer                      [s09, s10, s03]
// j11 - job_senior_python_developer              [s08, s10]
// j12 - job_senior_software_engineer             [s02, s11]
// j13 - job_senior_software_developer            [s05, s03, s11]
// j14 - job_senior_api_engineer                  [s03, s05]
// j15 - job_developer_advocate                   [s12]
// j16 - job_senior_laravel_developer             [s13, s14, s17, s16]
// j17 - job_solidity_engineer                    [s15]
// j18 - job_backend_engineer                     [s13, s01]
// j19 - job_developer_relations                  [s15, s12]
// j20 - job_senior_software_engineer             [s13, s04]
// j21 - job_senior_fullstack_engineer            [s13, s14, s16]
// j22 - job_senior_fullstack_developer           [s02, s03]
// j23 - job_backend_engineer                     [s03, s05, s12, s10]
// j24 - job_senior_software_engineer             [s08, s07, s02]
// j25 - job_software_engineer                    [s08, s07, s02, s14]
// j26 - job_senior_frontend_engineer             [s02, s07, s17]
// j27 - job_senior_nodejs_developer              [s03, s01, s12]
// j28 - job_senior_frontend_developer            [s06, s02]
// j29 - job_fullstack_developer                  [s01, s04, s02, s03]
// j30 - job_senior_frontend_engineer             [s01, s02]
// j31 - job_principal_software_architect         [s04, s09]
// j32 - job_senior_frontend_developer            [s06, s11, s02]

// skills
//
// s01 - skill_javascript                         [j01, j06, j07, j18, j27, j29, j30]
// s02 - skill_react                              [j01, j03, j08, j12, j22, j24, j25, j26, j28, j29, j30, j32]
// s03 - skill_nodejs                             [j01, j10, j13, j14, j22, j23, j27, j29]
// s04 - skill_fullstack                          [j02, j05, j09, j20, j29, j31]
// s05 - skill_backend                            [j02, j04, j13, j14, j23]
// s06 - skill_frontend                           [j02, j28, j32]
// s07 - skill_ruby                               [j03, j07, j08, j24, j25, j26]
// s08 - skill_python                             [j04, j05, j09, j11, j24, j25]
// s09 - skill_linux                              [j10, j31]
// s10 - skill_docker                             [j10, j11, j23]
// s11 - skill_typescript                         [j12, j13, j32]
// s12 - skill_databases                          [j15, j19, j23, j27]
// s13 - skill_php                                [j16, j18, j20, j21]
// s14 - skill_mysql                              [j16, j21, j25]
// s15 - skill_blockchain                         [j17, j19]
// s16 - skill_laravel                            [j16, j21]
// s17 - skill_sass                               [j08, j16, j26]

export const relationships = {
    jobs: [
      {
        id: 'j01',
        type: 'job',
        attributes: { title: 'Engineering Manager' },
        relationships: {
          skills: [{ id: 's01' }, { id: 's02' }, { id: 's03' }],
        },
      },
      {
        id: 'j02',
        type: 'job',
        attributes: { title: 'Senior Software Engineer' },
        relationships: {
          skills: [{ id: 's04' }, { id: 's05' }, { id: 's06' }],
        },
      },
      {
        id: 'j03',
        type: 'job',
        attributes: { title: 'Fullstack Developer' },
        relationships: {
          skills: [{ id: 's02' }, { id: 's07' }],
        },
      },
      {
        id: 'j04',
        type: 'job',
        attributes: { title: 'Senior Software Engineering - Integration' },
        relationships: {
          skills: [{ id: 's05' }, { id: 's08' }],
        },
      },
      {
        id: 'j05',
        type: 'job',
        attributes: { title: 'Senior Software Engineer' },
        relationships: {
          skills: [{ id: 's04' }, { id: 's08' }],
        },
      },
      {
        id: 'j06',
        type: 'job',
        attributes: { title: 'Frontend Developer' },
        relationships: {
          skills: [{ id: 's01' }],
        },
      },
      {
        id: 'j07',
        type: 'job',
        attributes: { title: 'Senior Engineering Manager' },
        relationships: {
          skills: [{ id: 's01' }, { id: 's07' }],
        },
      },
      {
        id: 'j08',
        type: 'job',
        attributes: { title: 'Senior Software Engineer' },
        relationships: {
          skills: [{ id: 's02' }, { id: 's07' }, { id: 's17' }],
        },
      },
      {
        id: 'j09',
        type: 'job',
        attributes: { title: 'Software Developer' },
        relationships: {
          skills: [{ id: 's04' }, { id: 's08' }],
        },
      },
      {
        id: 'j10',
        type: 'job',
        attributes: { title: 'DevOps' },
        relationships: {
          skills: [{ id: 's03' }, { id: 's09' }, { id: 's10' }],
        },
      },
      {
        id: 'j11',
        type: 'job',
        attributes: { title: 'Senior Python Developer' },
        relationships: {
          skills: [{ id: 's08' }, { id: 's10' }],
        },
      },
      {
        id: 'j12',
        type: 'job',
        attributes: { title: 'Senior Software Engineer' },
        relationships: {
          skills: [{ id: 's02' }, { id: 's11' }],
        },
      },
      {
        id: 'j13',
        type: 'job',
        attributes: { title: 'Senior Software Developer' },
        relationships: {
          skills: [{ id: 's03' }, { id: 's05' }, { id: 's11' }],
        },
      },
      {
        id: 'j14',
        type: 'job',
        attributes: { title: 'Senior API Engineer' },
        relationships: {
          skills: [{ id: 's03' }, { id: 's05' }],
        },
      },
      {
        id: 'j15',
        type: 'job',
        attributes: { title: 'Developer Advocate' },
        relationships: {
          skills: [{ id: 's12' }],
        },
      },
      {
        id: 'j16',
        type: 'job',
        attributes: { title: 'Senior Laravel Developer' },
        relationships: {
          skills: [{ id: 's13' }, { id: 's14' }, { id: 's16' }, { id: 's17' }],
        },
      },
      {
        id: 'j17',
        type: 'job',
        attributes: { title: 'Solidity Engineer' },
        relationships: {
          skills: [{ id: 's15' }],
        },
      },
      {
        id: 'j18',
        type: 'job',
        attributes: { title: 'Backend Engineer' },
        relationships: {
          skills: [{ id: 's01' }, { id: 's13' }],
        },
      },
      {
        id: 'j19',
        type: 'job',
        attributes: { title: 'Developer Relations' },
        relationships: {
          skills: [{ id: 's12' }, { id: 's15' }],
        },
      },
      {
        id: 'j20',
        type: 'job',
        attributes: { title: 'Senior Software Engineer' },
        relationships: {
          skills: [{ id: 's04' }, { id: 's13' }],
        },
      },
      {
        id: 'j21',
        type: 'job',
        attributes: { title: 'Senior Fullstack Engineer' },
        relationships: {
          skills: [{ id: 's13' }, { id: 's14' }, { id: 's16' }],
        },
      },
      {
        id: 'j22',
        type: 'job',
        attributes: { title: 'Senior Fullstack Developer' },
        relationships: {
          skills: [{ id: 's02' }, { id: 's03' }],
        },
      },
      {
        id: 'j23',
        type: 'job',
        attributes: { title: 'Backend Engineer' },
        relationships: {
          skills: [{ id: 's03' }, { id: 's05' }, { id: 's10' }, { id: 's12' }],
        },
      },
      {
        id: 'j24',
        type: 'job',
        attributes: { title: 'Senior Software Engineer' },
        relationships: {
          skills: [{ id: 's02' }, { id: 's07' }, { id: 's08' }],
        },
      },
      {
        id: 'j25',
        type: 'job',
        attributes: { title: 'Software Engineer' },
        relationships: {
          skills: [{ id: 's02' }, { id: 's07' }, { id: 's08' }, { id: 's14' }],
        },
      },
      {
        id: 'j26',
        type: 'job',
        attributes: { title: 'Senior Frontend Engineer' },
        relationships: {
          skills: [{ id: 's02' }, { id: 's07' }, { id: 's17' }],
        },
      },
      {
        id: 'j27',
        type: 'job',
        attributes: { title: 'Senior Node.js Developer' },
        relationships: {
          skills: [{ id: 's01' }, { id: 's03' }, { id: 's12' }],
        },
      },
      {
        id: 'j28',
        type: 'job',
        attributes: { title: 'Senior Frontend Developer' },
        relationships: {
          skills: [{ id: 's02' }, { id: 's06' }],
        },
      },
      {
        id: 'j29',
        type: 'job',
        attributes: { title: 'Fullstack Developer' },
        relationships: {
          skills: [{ id: 's01' }, { id: 's02' }, { id: 's03' }, { id: 's04' }],
        },
      },
      {
        id: 'j30',
        type: 'job',
        attributes: { title: 'Senior Frontend Engineer' },
        relationships: {
          skills: [{ id: 's01' }, { id: 's02' }],
        },
      },
      {
        id: 'j31',
        type: 'job',
        attributes: { title: 'Principal Software Architect' },
        relationships: {
          skills: [{ id: 's04' }, { id: 's09' }],
        },
      },
      {
        id: 'j32',
        type: 'job',
        attributes: { title: 'Senior Frontend Developer' },
        relationships: {
          skills: [{ id: 's02' }, { id: 's06' }, { id: 's11' }],
        },
      },
    ],
    skills: [
      {
        id: 's01',
        type: 'skill',
        attributes: {
          name: 'JavaScript',
          type: 'Knowledge',
          importance: '3.7',
          level: '2.3',
        },
        relationships: {
          jobs: [
            { id: 'j01' },
            { id: 'j06' },
            { id: 'j07' },
            { id: 'j18' },
            { id: 'j27' },
            { id: 'j29' },
            { id: 'j30' },
          ],
          skills: [
            { id: 's02' },
            { id: 's03' },
            { id: 's04' },
            { id: 's05' },
            { id: 's06' },
            { id: 's11' },
          ],
        },
      },
      {
        id: 's02',
        type: 'skill',
        attributes: {
          name: 'React',
          type: 'Knowledge',
          importance: '3.7',
          level: '2.3',
        },
        relationships: {
          jobs: [
            { id: 'j01' },
            { id: 'j03' },
            { id: 'j08' },
            { id: 'j12' },
            { id: 'j22' },
            { id: 'j24' },
            { id: 'j25' },
            { id: 'j26' },
            { id: 'j28' },
            { id: 'j29' },
            { id: 'j30' },
            { id: 'j32' },
          ],
          skills: [{ id: 's01' }, { id: 's04' }, { id: 's06' }],
        },
      },
      {
        id: 's03',
        type: 'skill',
        attributes: {
          name: 'Node.js',
          type: 'Knowledge',
          importance: '3.7',
          level: '2.3',
        },
        relationships: {
          jobs: [
            { id: 'j01' },
            { id: 'j10' },
            { id: 'j13' },
            { id: 'j14' },
            { id: 'j22' },
            { id: 'j23' },
            { id: 'j27' },
            { id: 'j29' },
          ],
          skills: [{ id: 's04' }, { id: 's05' }],
        },
      },
      {
        id: 's04',
        type: 'skill',
        attributes: {
          name: 'Fullstack',
          type: 'Knowledge',
          importance: '3.7',
          level: '2.3',
        },
        relationships: {
          jobs: [
            { id: 'j02' },
            { id: 'j05' },
            { id: 'j09' },
            { id: 'j20' },
            { id: 'j29' },
            { id: 'j31' },
          ],
          skills: [
            { id: 's01' },
            { id: 's02' },
            { id: 's03' },
            { id: 's05' },
            { id: 's06' },
          ],
        },
      },
      {
        id: 's05',
        type: 'skill',
        attributes: {
          name: 'Backend',
          type: 'Knowledge',
          importance: '3.7',
          level: '2.3',
        },
        relationships: {
          jobs: [
            { id: 'j02' },
            { id: 'j04' },
            { id: 'j13' },
            { id: 'j14' },
            { id: 'j23' },
          ],
          skills: [
            { id: 's03' },
            { id: 's07' },
            { id: 's08' },
            { id: 's09' },
            { id: 's10' },
            { id: 's12' },
            { id: 's13' },
            { id: 's14' },
            { id: 's16' },
          ],
        },
      },
      {
        id: 's06',
        type: 'skill',
        attributes: {
          name: 'Frontend',
          type: 'Knowledge',
          importance: '3.7',
          level: '2.3',
        },
        relationships: {
          jobs: [{ id: 'j02' }, { id: 'j28' }, { id: 'j32' }],
          skills: [
            { id: 's01' },
            { id: 's02' },
            { id: 's04' },
            { id: 's11' },
            { id: 's17' },
          ],
        },
      },
      {
        id: 's07',
        type: 'skill',
        attributes: {
          name: 'Ruby on Rails',
          type: 'Knowledge',
          importance: '3.7',
          level: '2.3',
        },
        relationships: {
          jobs: [
            { id: 'j03' },
            { id: 'j07' },
            { id: 'j08' },
            { id: 'j24' },
            { id: 'j25' },
            { id: 'j26' },
          ],
          skills: [{ id: 's04' }, { id: 's05' }, { id: 's12' }, { id: 's14' }],
        },
      },
      {
        id: 's08',
        type: 'skill',
        attributes: {
          name: 'Python',
          type: 'Knowledge',
          importance: '3.7',
          level: '2.3',
        },
        relationships: {
          jobs: [
            { id: 'j04' },
            { id: 'j05' },
            { id: 'j09' },
            { id: 'j11' },
            { id: 'j24' },
            { id: 'j25' },
          ],
          skills: [{ id: 's04' }, { id: 's05' }, { id: 's12' }, { id: 's14' }],
        },
      },
      {
        id: 's09',
        type: 'skill',
        attributes: {
          name: 'Linux',
          type: 'Knowledge',
          importance: '3.7',
          level: '2.3',
        },
        relationships: {
          jobs: [{ id: 'j10' }, { id: 'j31' }],
          skills: [{ id: 's04' }, { id: 's05' }, { id: 's10' }, { id: 's12' }],
        },
      },
      {
        id: 's10',
        type: 'skill',
        attributes: {
          name: 'Docker',
          type: 'Knowledge',
          importance: '3.7',
          level: '2.3',
        },
        relationships: {
          jobs: [{ id: 'j10' }, { id: 'j11' }, { id: 'j23' }],
          skills: [{ id: 's04' }, { id: 's05' }, { id: 's09' }, { id: 's12' }],
        },
      },
      {
        id: 's11',
        type: 'skill',
        attributes: {
          name: 'TypeScript',
          type: 'Knowledge',
          importance: '3.7',
          level: '2.3',
        },
        relationships: {
          jobs: [{ id: 'j12' }, { id: 'j13' }, { id: 'j32' }],
          skills: [
            { id: 's01' },
            { id: 's02' },
            { id: 's03' },
            { id: 's04' },
            { id: 's05' },
            { id: 's06' },
          ],
        },
      },
      {
        id: 's12',
        type: 'skill',
        attributes: {
          name: 'Databases',
          type: 'Knowledge',
          importance: '3.7',
          level: '2.3',
        },
        relationships: {
          jobs: [{ id: 'j15' }, { id: 'j19' }, { id: 'j23' }, { id: 'j27' }],
          skills: [{ id: 's04' }, { id: 's05' }, { id: 's10' }, { id: 's14' }],
        },
      },
      {
        id: 's13',
        type: 'skill',
        attributes: {
          name: 'PHP',
          type: 'Knowledge',
          importance: '3.7',
          level: '2.3',
        },
        relationships: {
          jobs: [{ id: 'j16' }, { id: 'j18' }, { id: 'j20' }, { id: 'j21' }],
          skills: [{ id: 's04' }, { id: 's05' }, { id: 's14' }, { id: 's16' }],
        },
      },
      {
        id: 's14',
        type: 'skill',
        attributes: {
          name: 'MySQL',
          type: 'Knowledge',
          importance: '3.7',
          level: '2.3',
        },
        relationships: {
          jobs: [{ id: 'j16' }, { id: 'j21' }, { id: 'j25' }],
          skills: [{ id: 's04' }, { id: 's05' }, { id: 's10' }, { id: 's12' }],
        },
      },
      {
        id: 's15',
        type: 'skill',
        attributes: {
          name: 'Blockchain',
          type: 'Knowledge',
          importance: '3.7',
          level: '2.3',
        },
        relationships: {
          jobs: [{ id: 'j17' }, { id: 'j19' }],
          skills: [{ id: 's04' }, { id: 's05' }, { id: 's06' }],
        },
      },
      {
        id: 's16',
        type: 'skill',
        attributes: {
          name: 'Laravel',
          type: 'Knowledge',
          importance: '3.7',
          level: '2.3',
        },
        relationships: {
          jobs: [{ id: 'j16' }, { id: 'j21' }],
          skills: [{ id: 's04' }, { id: 's05' }, { id: 's13' }],
        },
      },
      {
        id: 's17',
        type: 'skill',
        attributes: {
          name: 'Sass',
          type: 'Knowledge',
          importance: '3.7',
          level: '2.3',
        },
        relationships: {
          jobs: [{ id: 'j08' }, { id: 'j16' }, { id: 'j26' }],
          skills: [{ id: 's04' }, { id: 's06' }],
        },
      },
    ],
  };
  