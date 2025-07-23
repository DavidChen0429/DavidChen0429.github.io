import React from 'react';

import type { Awards as AwardsType } from '@/data/resume/awards';

interface AwardsProps {
  data: AwardsType;
}

const Awards: React.FC<AwardsProps> = ({ data }) => (
  <article className="award-container">
    <header>
      {/* <h4 className="award">{data.Name}</h4> */}
      <p className="award" style={{ textTransform: 'none' }}>
        {data.Name}
      </p>
    </header>
  </article>
);

export default Awards;
