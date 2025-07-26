export interface Project {
  title: string;
  subtitle?: string;
  link?: string;
  image: string;
  date: string;
  desc: string;
}

const data: Project[] = [
  {
    title: 'LiDAR-Enhanced Closed-Loop Active Wake Mixing Control',
    subtitle: 'Let the Wind Turbline See the Wind',
    link: 'https://www.youtube.com/watch?v=17tM3d1KKBw&ab_channel=Jan-WillemWingerden',
    image: '/images/projects/WakeMixing.png',
    date: '2025-01-31',
    desc:
      'Wind turbines suffer from wake effect in a wind farm, which reduce the power production and increase structural load for downstream turbines. ' +
      'While wake mixing control has shown promise in mitigating this effect, current methods are implemented in open-loop configurations, limiting wind farm ability to handle uncertainties and external disturbance. ' +
      'Our work address this issue by incorporating LiDAR sensing technology to build a flow-informed closed-loop wake mixing control framwork. To put in a more interesting way --- letting the turbine see the wind. ' +
      'Thus, allowing turbines to form control actions adaptively and dynamically, making them smarter and more autonomous in decision-making process.',
  },
  {
    title: 'Super Auto Max: The Autonomous Racing System',
    subtitle: 'The Autonomous Racing System for the FSG 2024',
    link: 'https://youtu.be/-kuBGSIF_PUe',
    image: '/images/projects/SuperAutoMax.png',
    date: '2023-10-01',
    desc:
      'Can a race car drive itself and win a race? Absolutely! We answered this question by building Super-Auto-Max, ' +
      'an autonomous race system powered by AI, sensor, and advanced control technology that allow a race car (DUT24 in our case) to navigate the track without human input.' +
      'Inspired by the human body, Super-Auto-Max integrates perception (the eyes), state estimation (the brain sensory system), path planning (the prefrontal cortex), and control (the nervous system), ' +
      'enabling it to drive autonomously and compete on the track. Check out the demonstration video (Acceleration Competition) to see it in action!',
  },
  {
    title: 'AI Doctor for Ericsson 5G Network',
    subtitle: 'Using Machine Learning to Diagnose 5G Network Issues',
    image: '/images/projects/Ericsson5GAI.jpg',
    date: '2021-05-01',
    desc:
      'If there is one area that proves how technology enhances our lives, it is communication, and 5G is at the forefront. ' +
      'In a city like Beijing with over 25 million residents, the 5G network handles millions of data points daily, constantly operating at full capacity. ' +
      'With such scale, failures are inevitable. But how do we diagnose and resolve these issues quickly? Relying on manual analysis is no longer feasible, the data volume is simply overwhelming. ' +
      'Our solution? An AI Doctor powered by machine learning that can analyze network data in real-time, identify issues, and recommend solutions faster than any human team. ' +
      'By leveraging the power of AI, we can ensure that the 5G network remains reliable and efficient, ultimately improving the quality of life for millions of people.',
  },
  {
    title: 'Driving Simulator based on Unity-3D and Stewart 6-DOF Platform',
    subtitle: 'Learn how to drive with a realistic simulator',
    link: 'https://youtu.be/vWxRraed-mQ',
    image: '/images/projects/DrivingSimulator.png',
    date: '2019-06-01',
    desc:
      'Cars are deeply integrated into our daily lives, and driving is an essential skill in our world today. ' +
      'To help people learn how to drive, we developed a realistic driving simulator based on Unity-3D and the Stewart 6-DOF platform. ' +
      'This simulator provides an immersive experience, allowing users to practice driving in a safe and controlled environment.',
  },
];

export default data;
