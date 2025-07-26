export interface Route {
  label: string;
  path: string;
  index?: boolean;
  link?: string;
}

const routes: Route[] = [
  {
    index: true,
    label: 'Zekai Chen',
    path: '/',
  },
  {
    label: 'About',
    path: '/about',
  },
  {
    label: 'Resume',
    path: '/resume',
  },
  {
    label: 'Projects',
    path: '/projects',
  },
  {
    label: 'Publications',
    path: '/',
    link: 'https://scholar.google.com/citations?user=qHe4B1MAAAAJ&hl=en',
  },
  {
    label: 'Stats & Stories',
    path: '/stats',
  },
  {
    label: 'Contact',
    path: '/contact',
  },
];

export default routes;
