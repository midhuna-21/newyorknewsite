'use client';

import React from 'react';
import Image from 'next/image';

const AuthorInfo = () => {
  return (
    <div className="container py-4" style={{ maxWidth: '800px' }}>
      <div className="row align-items-center mb-4">
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

        <div className="col">
          <p
            style={{
              fontFamily: 'TNYAdobeCaslonPro, "Times New Roman", Times, serif',
              fontWeight: 400,
              fontSize: '21px',
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

      <div
        className="d-flex flex-wrap align-items-center"
        style={{
          fontFamily: 'Georgia, serif',
          fontSize: '16px',
          fontWeight: 500,
        }}
      >
        <span
          style={{
            color: 'rgb(102, 102, 102)',
            marginRight: '10px',
            fontWeight: 700,
            fontSize: "13px",
            fontFamily: 'Graphik, "Helvetica Neue", Helvetica, Arial, sans-serif',
            fontStyle: "normal"
          }}
        >More:</span>
        <span className="me-4"  style={{
            color: '#000',
            marginRight: '10px',
            fontWeight: 700,
            fontSize: "13px",
            fontFamily: 'Graphik, "Helvetica Neue", Helvetica, Arial, sans-serif',
            fontStyle: "normal"
          }}
          >Trump Administration</span>
        <span className="me-4"  style={{
            color: '#000)',
            marginRight: '10px',
            fontWeight: 700,
            fontSize: "13px",
            fontFamily: 'Graphik, "Helvetica Neue", Helvetica, Arial, sans-serif',
            fontStyle: "normal"
          }}
          >Immigrants, Immigration</span>
        <span className="me-4"  style={{
            color: '#000',
            marginRight: '10px',
            fontWeight: 700,
            fontSize: "13px",
            fontFamily: 'Graphik, "Helvetica Neue", Helvetica, Arial, sans-serif',
            fontStyle: "normal"
          }}
          >Deportations</span>
        <span  style={{
            color: '#000',
            marginRight: '10px',
            fontWeight: 700,
            fontSize: "13px",
            fontFamily: 'Graphik, "Helvetica Neue", Helvetica, Arial, sans-serif',
            fontStyle: "normal"
          }}>U.S. Supreme Court</span>
      </div>
    </div>
  );
};

export default AuthorInfo;
