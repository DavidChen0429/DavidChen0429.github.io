import { notFound } from 'next/navigation';

import data from '@/data/projects';

interface ProjectProps {
  params: { slug: string };
}

export default function ProjectPage({ params }: ProjectProps) {
  const project = data.find((p) => p.slug === params.slug);

  if (!project) return notFound();

  return (
    <div>
      <h1>{project.title}</h1>
      <img src={project.image} alt={project.title} width={600} height={400} />
      <p>{project.desc}</p>
      {/* Add more details as needed */}
    </div>
  );
}
