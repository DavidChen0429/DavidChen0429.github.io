/**
 * Conforms to https://jsonresume.org/schema/
 */
export interface Position {
  name: string;
  position: string;
  url: string;
  location: string;
  startDate: string;
  endDate?: string;
  summary?: string;
  highlights?: string[];
}

const work: Position[] = [
  {
    name: 'HAI Robotics',
    position: 'Application Engineer',
    url: 'https://www.hairobotics.com/',
    location: 'Amsterdam, the Netherlands',
    startDate: '2025-08-01',
    // endDate: '2024-08-31',
    summary: 'Automation warehouse',
    highlights: ['Something here.'],
  },
  {
    name: 'Formula Racing Team Delft',
    position: 'Control Engineer',
    url: 'https://www.fsteamdelft.nl/',
    location: 'Delft, the Netherlands',
    startDate: '2023-08-01',
    endDate: '2024-08-31',
    summary:
      'I worked as a control system engineer in the department of vehicle dynamic and control. Within the team, I am in charge of developing cutting-edge autonomous racing systems with a multidisciplinary team of five engineers using AI and advanced control technology.',
    highlights: [
      'Acted as a technical lead in the autonomous team. Conducted technical requirement analysis, and architected the complete autonomous system framework, covering perception, vehicle modeling, state estimation, and control. Created documentations, visualizaitons, and presentations for the designed framework.',
      'Used Python3 to build to robust state estimation based on first-principle vehicle models and a Kalman filter to reconstruct all the race car states using sensor data (LiDAR, IMU, Gyroscope).',
      'Developed a new 2 DOF control system that generates control inputs through real-time optimization using Model Predictive Control (MPC) using Python3 on ROS platform, eliminating instability issues caused by the decoupled PI and Stanley controllers. This significantly enhanced the system robustness and performance.',
      'Led weekly technical code reviews for platform components in Python, MATLAB, and C++. Implemented and maintained source control to code across platform components using Git and Docker.',
      'Integrated systems via ROS and led cross-deparment system deployment and testing on the DUT24 race car. The built system is able to finish Skidpad racing robustly (90% team failed).',
      'Represented the team in high-impact technical presentations to sponsors (KLM and Shell) and showcased the system at the public car roll-off event.',
    ],
  },
  {
    name: 'Telefonaktiebolaget LM Ericsson',
    position: 'Research and Development Engineer',
    url: 'https://www.ericsson.com/en',
    location: 'Beijing, China',
    startDate: '2021-05-01',
    endDate: '2021-11-31',
    summary: `I joined Ericsson as a System and Application Engineering Intern, responsible in developing the fault detection module within the 5G Machine Learning Toolkit for baseband communication systems..`,
    highlights: [
      'Developed an automated data-processing pipeline in Python3, enabling seamless data ingestion, NaN handling, restructuring, correlation analysis, and key feature extraction.',
      'Modeled Ericsson 5G baseband communication station in Beijing (serving a population of 22 million) using XGBoost. The model achieved 80% accuracy on real-world data, effectively capturing system dynamics while maintaining interpretability for engineers and researchers.',
      'Developed a fault detection module based on a clustering algorithm in Python3 for anomaly detection and root cause analysis. Created visualization of the result using Power BI, enabling 3 times faster detection and providing interpretable error factors for debugging.',
      'Authored technical documentation for the 5G Machine Learning Toolkit and contributed to pattern recognition research in 5G systems as part of a multinational engineering team.',
      'Coordinated weekly technical meetings, interviews, and guest lectures in both English and Chinese. Also contributed to cross-department event planning, including knowledge-sharing sessions and collaborative initiatives.',
    ],
  },
];

export default work;
