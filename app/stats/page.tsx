import React from 'react';

import type { Metadata } from 'next';
import Link from 'next/link';

import Personal from '@/components/Stats/Personal';

// import Site from '@/components/Stats/Site';

import PageWrapper from '../components/PageWrapper';

export const metadata: Metadata = {
  title: 'Stats',
  description: 'Some statistics about Zekai Chen',
};

export default function StatsPage() {
  return (
    <PageWrapper>
      <article className="post" id="stats">
        <header>
          <div className="title">
            <h2>
              <Link href="/stats">Stats & Stories</Link>
            </h2>
          </div>
        </header>
        <Personal />
        {/* <Site /> */}
      </article>
    </PageWrapper>
  );
}
