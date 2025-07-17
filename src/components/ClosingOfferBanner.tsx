'use client';

import React from 'react';
import Image from 'next/image';

const ClosingOfferBanner = () => {
  return (
    <div className="container text-center py-5">
      <p style={{ fontSize: '14px', marginBottom: '10px' }}>
        Already a subscriber?{' '}
        <a href="#" style={{ color: '#0066cc', textDecoration: 'underline' }}>
          Sign In
        </a>
      </p>
      <h2
        style={{
          fontFamily: `'Georgia', serif`,
          fontSize: '28px',
          fontWeight: 400,
          marginBottom: '30px',
        }}
      >
        Your window is closing.
      </h2>

      <div style={{ width: '120px', height: '120px', margin: '0 auto 30px' }}>
        <Image
          src="/images/tny.png" 
          alt="Closing Window"
          width={120}
          height={120}
        />
      </div>
      <p
        style={{
          fontSize: '18px',
          lineHeight: 1.6,
          maxWidth: '600px',
          margin: '0 auto 30px',
        }}
      >
        Don’t lose these views. Get full access for{' '}
        <span style={{ textDecoration: 'line-through' }}>$2.50</span>{' '}
        <strong>$1</strong> a week for one year, plus a free tote. Cancel anytime.
      </p>

      <div>
        <a
          href="#"
          className="btn"
          style={{
            backgroundColor: '#0066cc',
            color: 'white',
            fontWeight: 'bold',
            fontSize: '16px',
            padding: '10px 28px',
            borderRadius: '6px',
          }}
        >
          See Offers
        </a>
      </div>
    </div>
  );
};

export default ClosingOfferBanner;
