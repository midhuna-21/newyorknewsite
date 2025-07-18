'use client';

import React, { useState } from 'react';

const Signup = () => {

  const [isHovered, setIsHovered] = useState(false);
  return (
    <div className="container text-center py-5">
      {/* Heading */}
      <h2
        style={{
          color: "#000",
          fontFamily: 'TNYAdobeCaslonPro, "Times New Roman", Times, serif',

          fontSize: '38px',
          fontWeight: 400,
          marginBottom: '20px',
        }}
      >
        Get the News & Politics <br /> newsletter
      </h2>

      <p
        style={{
          fontFamily: 'Graphik, "Helvetica Neue", Helvetica, Arial, sans-serif',
          fontSize: '17px',
          fontWeight: 400,
          maxWidth: '700px',
          margin: '0 auto 30px',
          lineHeight: '1.6',
          color: '#000'
        }}
      >
        The latest from Washington and beyond, covering current events, the economy, and more,
        from our columnists and correspondents.
      </p>
      <div
        className="row justify-content-center"
        style={{ maxWidth: '700px', margin: '0 auto 20px' }}
      >
        <div className="col-8 col-md-9 p-0">
          <input
            type="email"
            className="form-control"
            placeholder=""
            style={{
              height: '56px',
              borderRadius: 0,
              border: '1px solid #ccc',
              fontSize: '16px',
            }}
          />
        </div>
        <div className="col-4 col-md-3 p-0">
          <button
            type="button"
            style={{
              width: '100%',
              height: '56px',
              fontFamily:'Graphik, "Helvetica Neue", Helvetica, Arial, sans-serif',
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
          fontSize: '14px',
          color: '#555',
          maxWidth: '700px',
          margin: '0 auto',
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
