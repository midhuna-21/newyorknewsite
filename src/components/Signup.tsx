'use client';

import React, { useState, useEffect } from 'react';

const Signup = () => {
  const [isHovered, setIsHovered] = useState(false);
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
      <h2
        style={{
          color: '#000',
          fontFamily: 'TNYAdobeCaslonPro, "Times New Roman", Times, serif',
          fontSize: isMobile ? '28px' : '38px',
          fontWeight: 400,
          marginBottom: '20px',
          lineHeight: 1.3,
        }}
      >
        Get the News & Politics <br /> newsletter
      </h2>
      <p
        style={{
          fontFamily: 'Graphik, "Helvetica Neue", Helvetica, Arial, sans-serif',
          fontSize: isMobile ? '15px' : '17px',
          fontWeight: 400,
          maxWidth: '700px',
          margin: '0 auto 30px',
          lineHeight: '1.6',
          color: '#000',
        }}
      >
        The latest from Washington and beyond, covering current events, the economy, and more,
        from our columnists and correspondents.
      </p>
      <div
        className="row justify-content-center g-0"
        style={{
          maxWidth: '700px',
          margin: '0 auto 20px',
          rowGap: '10px',
          display: 'flex',
          flexDirection: isMobile ? 'column' : 'row',
          gap: isMobile ? '10px' : '0',
        }}
      >
        <div style={{ width: isMobile ? '100%' : '70%' }}>
          <input
            type="email"
            className="form-control"
            placeholder=""
            style={{
              width: '100%',
              height: '56px',
              borderRadius: 0,
              border: '1px solid #ccc',
              fontSize: isMobile ? '15px' : '16px',
            }}
          />
        </div>

        <div style={{ width: isMobile ? '100%' : '30%' }}>
          <button
            type="button"
            style={{
              width: '100%',
              height: '56px',
              fontFamily: 'Graphik, "Helvetica Neue", Helvetica, Arial, sans-serif',
              backgroundColor: isHovered ? '#0787CA' : 'black',
              color: 'white',
              fontWeight: 500,
              border: 'none',
              borderRadius: 0,
              fontSize: '13px',
              transition: 'background-color 0.3s ease',
            }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            Sign up
          </button>
        </div>
      </div>
      <p
        style={{
          fontSize: isMobile ? '13px' : '14px',
          color: '#555',
          maxWidth: '700px',
          margin: '0 auto',
          lineHeight: '1.5',
        }}
      >
        By signing up, you agree to our{' '}
        <a href="#" style={{ color: '#000', textDecoration: 'underline' }}>
          user agreement
        </a>{' '}
        (including{' '}
        <a href="#" style={{ color: '#000', textDecoration: 'underline' }}>
          class action waiver and arbitration provisions
        </a>
        ), and acknowledge our{' '}
        <a href="#" style={{ color: '#000', textDecoration: 'underline' }}>
          privacy policy
        </a>
        .
      </p>
    </div>
  );
};

export default Signup;
