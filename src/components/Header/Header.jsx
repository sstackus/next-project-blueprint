import React from 'react';

export default function Header() {
  return (
    <header className="bg-gray-100 border-b border-gray-300 flex-initial">
      <div className="container mx-auto py-6 px-3">
        <h1 className="font-semibold text-2xl">
          Hello
          {` ${process.env.ENV_VAR} `}
          world!
        </h1>
      </div>
    </header>
  );
}
