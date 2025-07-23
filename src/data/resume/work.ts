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
    name: 'Formula Racing Team Delft',
    position: 'Control Engineer',
    url: 'https://www.fsteamdelft.nl/',
    location: 'Delft, the Netherlands',
    startDate: '2023-08-01',
    endDate: '2024-08-31',
    summary:
      'Control system engineer in the vehicle dynamic and control department. Directed a multidisciplinary team of five engineers to develop cutting-edge autonomous racing systems.',
    highlights: [
      'Architected the complete autonomous system framework, covering perception, vehicle modeling, state estimation, and control.',
      'Built robust state estimation pipelines using first-principle vehicle models and Kalman filtering techniques.',
      'Developed a new 2 DOF control system that generates control inputs through real-time optimization using Model Predictive Control (MPC), eliminating instability issues caused by the decoupled PI and Stanley controllers. This significantly enhanced the system robustness and performance.',
      'Integrated systems via ROS on Ubuntu 22.04 and led system deployment and testing on the DUT24 race car.',
      'Represented the team in high-impact technical presentations to sponsors (KLM, Shell) and showcased the system at the public car roll-off event.',
      'Docker, Python3, ROS, Linux, source control, technical meeting, design discussion',
    ],
  },
  {
    name: 'Telefonaktiebolaget LM Ericsson',
    position: 'Research and Development Engineer',
    url: 'https://www.ericsson.com/en',
    location: 'Beijing, China',
    startDate: '2021-05-01',
    endDate: '2021-11-31',
    summary: `Joined as a System and Application Engineering Intern, responsible for the fault detection component of the
 5G AI (Machine Learning Based) Toolkit.`,
    highlights: [
      'Automated data-processing pipeline and modeled a 5G baseband communication system using XGBoost, achieving 80% accuracy on real-world data. The model captures system dynamics while remaining explainable to engineers and researchers',
      'Developed a fault detection module based on a clustering algorithm for rapid anomaly identification and root cause analysis based on XGBoost, enabling 3 times faster detection and providing interpretable error factors for debugging',
      'Contributed to pattern recognition research in 5G with a multinational team by authoring technical reports and optimizing the codebase.',
      'Coordinated key team activities, including interviews and weekly technical meetings.',
    ],
  },
];

export default work;
