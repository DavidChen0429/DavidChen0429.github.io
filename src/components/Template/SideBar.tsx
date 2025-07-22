'use client';

import React from 'react';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import ContactIcons from '../Contact/ContactIcons';

const SideBar: React.FC = () => {
  const pathname = usePathname();

  return (
    <section id="sidebar">
      <section id="intro">
        <Link href="/" className="logo">
          <Image src="/images/me.jpg" alt="Zekai Chen" width={400} height={160} priority />
        </Link>
        <header>
          <h2>Zekai Chen</h2>
          <p>
            <a href="chenzk0429@gmail.com">chenzk0429@gmail.com</a>
          </p>
        </header>
      </section>

      <section className="blurb">
        <h2>About</h2>
        <p>
          Hi, I&apos;m Zekai (Kai). I am currently a PhD student at the University of British
          Columbia (UBC) Vancouver, focusing on Systems & Control. Becoming Mr. Worldwide with a
          strong passion for Systems & Control, AI, Robotics, and life in general!
        </p>
        <ul className="actions">
          <li>
            {pathname && !pathname.includes('/resume') ? (
              <Link href="/resume" className="button">
                Learn More
              </Link>
            ) : (
              <Link href="/about" className="button">
                About Me
              </Link>
            )}
          </li>
        </ul>
      </section>

      <section id="footer">
        <ContactIcons />
        <p className="copyright">
          &copy; Zekai Chen <Link href="/">davidchen0429.github.io</Link>.
        </p>
      </section>
    </section>
  );
};

export default SideBar;
