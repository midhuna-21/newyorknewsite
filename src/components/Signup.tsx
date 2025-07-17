'use client';

import React from 'react';

const Signup = () => {
  return (
    <div className="container text-center py-5">
      {/* Heading */}
      <h2
        style={{
          fontFamily: 'Georgia, serif',
          fontSize: '36px',
          fontWeight: 500,
          marginBottom: '20px',
        }}
      >
        Get the News & Politics <br /> newsletter
      </h2>

      {/* Description */}
      <p
        style={{
          fontFamily: 'Georgia, serif',
          fontSize: '18px',
          maxWidth: '700px',
          margin: '0 auto 30px',
          lineHeight: '1.6',
        }}
      >
        The latest from Washington and beyond, covering current events, the economy, and more,
        from our columnists and correspondents.
      </p>

      {/* Signup Form */}
      <div
        className="row justify-content-center"
        style={{ maxWidth: '700px', margin: '0 auto 20px' }}
      >
        <div className="col-8 col-md-9 p-0">
          <input
            type="email"
            className="form-control"
            placeholder="Enter your email"
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
              backgroundColor: 'black',
              color: 'white',
              fontWeight: 'bold',
              border: 'none',
              borderRadius: 0,
              fontSize: '16px',
            }}
          >
            Sign up
          </button>
        </div>
      </div>

      {/* Legal Text */}
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
