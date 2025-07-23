import React from 'react';

import type { Metadata } from 'next';
import Link from 'next/link';

import PageWrapper from './components/PageWrapper';

export const metadata: Metadata = {
  description:
    'Zekai Chen is a data scientist, machine learning engineer, and full-stack engineer.',
};

export default function HomePage() {
  return (
    <PageWrapper>
      <article className="post" id="index">
        <header>
          <div className="title">
            <h2>
              <Link href="/about">About this site</Link>
            </h2>
            <p>Time to tell you something about me...</p>
          </div>
        </header>
        <p>
          {' '}
          Welcome to my website! Please feel free to read more <Link href="/about">about me</Link>,
          or you can check out my <Link href="/resume">resume</Link>,{' '}
          <Link href="/projects">projects</Link>, <Link href="/stats">publications</Link>, or{' '}
          <Link href="/contact">contact</Link> me directly.
        </p>
        <p>Viva la Vida.</p>
      </article>
    </PageWrapper>
  );
}
