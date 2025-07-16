'use client';

import React from 'react';
import { Container } from 'react-bootstrap';

interface HeroImageData {
  category: string;
  title: string;
  shortdescription: string;
  description?: string;
  image: string;
  slug: string;
  date: string;
}

interface Props {
  data: HeroImageData;
}

const HeroImageSection: React.FC<Props> = ({ data }) => {
  return (
    <div
      className="container-fluid py-5"
      style={{
        position: 'relative',
        width: '100%',
        height: '90vh',
        backgroundImage: `url(${data.image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        color: '#fff',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        padding: '0 20px',
      }}
    >
      <Container>
        <p
          style={{
            textTransform: 'uppercase',
            fontSize: '0.9rem',
            letterSpacing: '1px',
          }}
        >
          {data.category}
        </p>

        <h1
          style={{
            fontSize: '2.5rem',
            fontFamily: '"Georgia", serif',
            fontWeight: 'bold',
            lineHeight: '1.3',
            maxWidth: '800px',
            margin: '0 auto',
          }}
        >
          {data.title}
        </h1>

        <p
          style={{
            fontSize: '1.25rem',
            marginTop: '1rem',
            maxWidth: '700px',
            margin: '1rem auto 0',
          }}
        >
          {data.shortdescription}
        </p>

        {/* <p
          style={{
            marginTop: '1rem',
            fontWeight: 'bold',
            fontSize: '1.1rem',
          }}
        >
          By <span style={{ color: '#fff' }}>Unknown Author</span>
        </p>

        <button
          style={{
            marginTop: '20px',
            border: '1px solid #fff',
            backgroundColor: 'transparent',
            color: '#fff',
            padding: '10px 25px',
            borderRadius: '999px',
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginLeft: 'auto',
            gap: '10px',
          }}
        >
          🎧 Listen
        </button> */}
      </Container>
    </div>
  );
};

export default HeroImageSection;
