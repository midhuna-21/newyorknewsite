'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';

const ClosingOfferBanner = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize(); 
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="container text-center py-5">
      {/* Already a subscriber */}
      <p
        style={{
          fontSize: isMobile ? '12px' : '13px',
          marginBottom: '10px',
          color: 'rgb(102, 102, 102)',
          fontFamily: 'Graphik, "Helvetica Neue", Helvetica, Arial, sans-serif',
          fontStyle: 'normal',
        }}
      >
        Already a subscriber?{' '}
        <a
          href="#"
          style={{
            color: 'rgb(8, 121, 191)',
            fontSize: isMobile ? '12px' : '13px',
            textDecoration: 'underline',
            fontFamily: 'Graphik, "Helvetica Neue", Helvetica, Arial, sans-serif',
            fontStyle: 'normal',
          }}
        >
          Sign In
        </a>
      </p>

      {/* Title */}
      <h2
        style={{
          fontFamily: 'TNYAdobeCaslonPro, "Times New Roman", Times, serif',
          color: '#000',
          fontSize: isMobile ? '22px' : '28px',
          fontWeight: 400,
          marginBottom: '30px',
        }}
      >
        Your window is closing.
      </h2>

      {/* Icon */}
      <div
        style={{
          width: isMobile ? '80px' : '120px',
          height: isMobile ? '80px' : '120px',
          margin: '0 auto 30px',
        }}
      >
        <Image
          src="/images/tny.png"
          alt="Closing Window"
          width={isMobile ? 80 : 120}
          height={isMobile ? 80 : 120}
        />
      </div>

      {/* Offer Text */}
      <p
        style={{
          fontFamily: 'Graphik, "Helvetica Neue", Helvetica, Arial, sans-serif',
          fontStyle: 'normal',
          fontSize: isMobile ? '14px' : '16px',
          lineHeight: 1.6,
          color: '#000',
          maxWidth: '600px',
          margin: '0 auto 30px',
        }}
      >
        Don’t lose these views. Get full access for{' '}
        <span style={{ textDecoration: 'line-through' }}>$2.50</span>{' '}
        <strong>$1</strong> a week for one year, plus a free tote. Cancel anytime.
      </p>

      {/* Button */}
      <div>
        <a
          href="#"
          className="btn"
          style={{
            fontFamily: 'Graphik, "Helvetica Neue", Helvetica, Arial, sans-serif',
            fontStyle: 'normal',
            backgroundColor: '#0879BF',
            color: 'white',
            fontWeight: 'bold',
            fontSize: isMobile ? '12px' : '13px',
            padding: isMobile ? '8px 22px' : '10px 28px',
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
