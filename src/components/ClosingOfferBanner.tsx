'use client';

import React from 'react';
import Image from 'next/image';

const ClosingOfferBanner = () => {
  return (
    <div className="container text-center py-5">
      <p style={{ fontSize: '13px', marginBottom: '10px', color: 'rgb(102, 102, 102)', fontFamily: 'Graphik, "Helvetica Neue", Helvetica, Arial, sans-serif', fontStyle: "normal" }}>
        Already a subscriber?{' '}
        <a href="#" style={{ color: 'rgb(8, 121, 191)', fontSize: '13px', textDecoration: 'underline', fontFamily: 'Graphik, "Helvetica Neue", Helvetica, Arial, sans-serif', fontStyle: "normal" }}>
          Sign In
        </a>
      </p>
      <h2
        style={{
          fontFamily: 'TNYAdobeCaslonPro, "Times New Roman", Times, serif',
          color: "#000",
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
          fontFamily: 'Graphik, "Helvetica Neue", Helvetica, Arial, sans-serif', fontStyle: "normal",
          fontSize: '16px',
          lineHeight: 1.6,
          color: "#000",
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
            fontFamily: 'Graphik, "Helvetica Neue", Helvetica, Arial, sans-serif', fontStyle: "normal",

            backgroundColor: '#0879BF',
            color: 'white',
            fontWeight: 'bold',
            fontSize: '13px',
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
