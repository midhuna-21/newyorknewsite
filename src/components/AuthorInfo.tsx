
import Link from 'next/link';
import React from 'react';

const AuthorInfo = () => {

  return (
    <div className="container py-4" style={{ maxWidth: '800px' }}>
      <div className="text-center">
        <div className="px- mx-auto" style={{ maxWidth: '720px' }}>
          <Link href="/about" className="mb-0" style={{
            fontStyle: 'italic',
            fontWeight: 300,
            opacity: 0.9
          }}>
            Published by the NY State News Staff
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AuthorInfo;
