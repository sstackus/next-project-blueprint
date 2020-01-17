import React from 'react';

import Test from '@/components/Test';

export default function IndexPage() {
  return (
    <main className="container mx-auto">
      <h1 className="font-semibold text-2xl py-6 px-3">
        Hello world!
      </h1>

      <Test />
    </main>
  );
}
