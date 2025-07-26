import React from 'react';

import Image from 'next/image';
import Link from 'next/link';

import dayjs from 'dayjs';

import type { Project } from '@/data/projects';

interface CellProps {
  data: Project;
}

// const Cell: React.FC<CellProps> = ({ data }) => (
//   <div className="cell-container">
//     <article className="mini-post">
//       <header>
//         <h3>
//           <Link href={`/projects/${data.slug}`}>{data.title}</Link>
//         </h3>
//         <time className="published">{dayjs(data.date).format('MMMM, YYYY')}</time>
//       </header>
//       <Link href={`/projects/${data.slug}`} className="image">
//         <Image src={data.image} alt={data.title} width={600} height={400} />
//       </Link>
//       <div className="description">
//         <p>{data.desc}</p>
//       </div>
//     </article>
//   </div>

const Cell: React.FC<CellProps> = ({ data }) => (
  <div className="cell-container">
    <article className="mini-post">
      <header>
        <h3>
          <a href={data.link}>{data.title}</a>
        </h3>
        <time className="published">{dayjs(data.date).format('MMMM, YYYY')}</time>
      </header>
      <a href={data.link} className="image">
        <Image src={data.image} alt={data.title} width={600} height={400} />
      </a>
      <div className="description">
        <p>{data.desc}</p>
      </div>
    </article>
  </div>
);

export default Cell;
