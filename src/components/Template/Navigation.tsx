'use client';

import React from 'react';

import Link from 'next/link';

import routes from '../../data/routes';
import type { Route } from '../../data/routes';
import Hamburger from './Hamburger';

const renderNavLink = (l: Route) => {
  if (l.link) {
    // External link
    return (
      <a key={l.label} href={l.link} target="_blank" rel="noopener noreferrer">
        {l.label}
      </a>
    );
  }
  // Internal link
  return (
    <Link key={l.label} href={l.path}>
      {l.label}
    </Link>
  );
};

const Navigation: React.FC = () => (
  <header id="header">
    <h1 className="index-link">{routes.filter((l) => l.index).map(renderNavLink)}</h1>
    <nav className="links">
      <ul>
        {routes
          .filter((l) => !l.index)
          .map((l) => (
            <li key={l.label}>{renderNavLink(l)}</li>
          ))}
      </ul>
    </nav>
    <Hamburger />
  </header>
);

export default Navigation;

// 'use client';

// import React from 'react';

// import Link from 'next/link';

// import routes from '../../data/routes';
// import Hamburger from './Hamburger';

// // Websites Navbar, displays routes defined in 'src/data/routes'
// const Navigation: React.FC = () => (
//   <header id="header">
//     <h1 className="index-link">
//       {routes
//         .filter((l) => l.index)
//         .map((l) => (
//           <Link key={l.label} href={l.path}>
//             {l.label}
//           </Link>
//         ))}
//     </h1>
//     <nav className="links">
//       <ul>
//         {routes
//           .filter((l) => !l.index)
//           .map((l) => (
//             <li key={l.label}>
//               <Link href={l.path}>{l.label}</Link>
//             </li>
//           ))}
//       </ul>
//     </nav>
//     <Hamburger />
//   </header>
// );

// export default Navigation;
