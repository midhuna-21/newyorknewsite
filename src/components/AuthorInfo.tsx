'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';

const AuthorInfo = () => {
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
    <div className="container py-4" style={{ maxWidth: '800px' }}>
      <div
        style={{
          display: 'flex',
          flexDirection: isMobile ? 'column' : 'row',
          alignItems: isMobile ? 'center' : 'flex-start',
          textAlign: isMobile ? 'center' : 'left',
          gap: '20px',
          marginBottom: '30px',
        }}
      >
        <div>
          <Image
            src="/images/author-dummy.webp"
            alt="Benjamin Wallace-Wells"
            width={100}
            height={100}
            style={{ borderRadius: '50%' }}
          />
        </div>

        <p
          style={{
            fontFamily: 'TNYAdobeCaslonPro, "Times New Roman", Times, serif',
            fontWeight: 400,
            fontStyle: 'italic',
            margin: 0,
            maxWidth: '700px',
            fontSize: isMobile ? '17px' : '21px',
            lineHeight: isMobile ? '1.5' : '1.7',
          }}
        >
          <a
            href="#"
            style={{
              color: 'black',
              textDecoration: 'underline',
              fontStyle: 'italic',
              fontSize: isMobile ? '17px' : '21px',
            }}
          >
            Benjamin Wallace-Wells
          </a>{' '}
          began contributing to <em>The New Yorker</em> in 2006 and joined the magazine as a staff
          writer in 2015. He writes about American politics and society.
        </p>
      </div>
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: isMobile ? 'center' : 'flex-start',
          fontFamily: 'Graphik, "Helvetica Neue", Helvetica, Arial, sans-serif',
          fontSize: isMobile ? '12px' : '13px',
          fontWeight: 700,
          rowGap: '10px',
          columnGap: '15px',
          textAlign: isMobile ? 'center' : 'left',
        }}
      >
        <span style={{ color: 'rgb(102, 102, 102)' }}>More:</span>
        <span style={{ color: '#000' }}>Trump Administration</span>
        <span style={{ color: '#000' }}>Immigrants, Immigration</span>
        <span style={{ color: '#000' }}>Deportations</span>
        <span style={{ color: '#000' }}>U.S. Supreme Court</span>
      </div>
    </div>
  );
};

export default AuthorInfo;
