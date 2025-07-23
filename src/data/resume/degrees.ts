export interface Degree {
  school: string;
  degree: string;
  supervisor: string;
  supervisorlink: string;
  link: string;
  year: string;
}

const degrees: Degree[] = [
  {
    school: 'University of British Columbia (UBC)',
    degree: 'P.hD. Mechanical Engineering',
    supervisor: 'Ryozo Nagamune',
    supervisorlink: 'https://mech.ubc.ca/ryozo-nagamune/',
    link: 'https://www.ubc.ca/',
    year: '2026 - Ongoing',
  },
  {
    school: 'Delft University of Technology (TU Delft)',
    degree: 'M.Sc. Systems and Control',
    supervisor: 'Jan-Willem van Wingerden',
    supervisorlink: 'https://www.janwillemvanwingerden.nl/',
    link: 'https://www.tudelft.nl/en/',
    year: '2022 - 2025',
  },
  {
    school: 'Beijing Institute of Technology (BIT)',
    degree: 'B.S. Automation Engineering',
    supervisor: 'Kun Liu',
    supervisorlink: 'https://kunliubit.github.io/',
    link: 'https://english.bit.edu.cn/',
    year: '2018 - 2022',
  },
];

export default degrees;
