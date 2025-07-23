import React from 'react';

import type { Awards as AwardsType } from '@/data/resume/awards';

import Awards from './Achievement/Awards';

interface AchievementProps {
  data: AwardsType[];
}

const Achievement: React.FC<AchievementProps> = ({ data }) => (
  <div className="awards">
    <div className="link-to" id="awards" />
    <div className="title" style={{ textAlign: 'center' }}>
      <h3>Awards</h3>
    </div>
    {data.map((award) => (
      <Awards data={award} key={award.Name} />
    ))}
  </div>
);

export default Achievement;
