'use client';

import React from 'react';
import Image from 'next/image';

const AuthorInfo = () => {
  return (
    <div className="container py-4" style={{ maxWidth: '800px' }}>
      <div className="row align-items-center mb-4">
        {/* Author Image */}
        <div className="col-auto">
          <Image
            src="/images/author-dummy.webp" 
            alt="Isaac Chotiner"
            width={100}
            height={100}
            style={{
              borderRadius: '50%',
            }}
          />
        </div>

        {/* Author Bio */}
        <div className="col">
          <p
            style={{
              fontFamily: 'Georgia, serif',
              fontSize: '18px',
              fontStyle: 'italic',
              margin: 0,
            }}
          >
            <a
              href="#"
              style={{
                color: 'black',
                textDecoration: 'underline',
                fontStyle: 'italic',
              }}
            >
              Isaac Chotiner
            </a>{' '}
            is a staff writer at <em>The New Yorker</em>, where he is the principal contributor to{' '}
            <strong>Q. &amp; A.</strong>, a series of interviews with public figures in politics, media,
            books, business, technology, and more.
          </p>
        </div>
      </div>

      {/* Tags */}
      <div
        className="d-flex flex-wrap align-items-center"
        style={{
          fontFamily: 'Georgia, serif',
          fontSize: '16px',
          fontWeight: 500,
        }}
      >
        <span style={{ color: '#888', marginRight: '10px' }}>More:</span>
        <span className="me-4">Trump Administration</span>
        <span className="me-4">Immigrants, Immigration</span>
        <span className="me-4">Deportations</span>
        <span>U.S. Supreme Court</span>
      </div>
    </div>
  );
};

export default AuthorInfo;
