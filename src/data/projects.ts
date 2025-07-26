export interface Project {
  title: string;
  subtitle?: string;
  link?: string;
  image: string;
  date: string;
  desc: string;
  slug?: string; // Optional slug for routing
}

const data: Project[] = [
  {
    title: 'Super Auto Max: The Autonomous Racing System',
    subtitle: 'The Autonomous Racing System for the FSG 2024',
    image: '/images/projects/SuperMax.png',
    date: '2023-10-01',
    desc:
      'Can a race car drive itself? Absolutely! We answered this question by building Super-Auto-Max, ' +
      'an autonomous race car powered by advanced AI and sensor technology that navigates the track without human input.' +
      'Inspired by the human body, Max integrates perception (its eyes), state estimation (the brain sensory system), path planning (the prefrontal cortex), and control (the nervous system), ' +
      'enabling it to drive autonomously and compete on the track.',
  },
  // LiDAR-enhanced Wake Mixinng Control
  // 5G Automatic Toolbox
];

export default data;
