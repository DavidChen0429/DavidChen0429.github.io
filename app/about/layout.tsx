import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About',
  description: "Learn about Zekai Chen",
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return children;
}
