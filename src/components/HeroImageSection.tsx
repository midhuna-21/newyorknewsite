'use client';

import Link from 'next/link';
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
      className="container py-5"
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
      <Link
        title={`${data.slug}`}
        href={`/${data.category}/${data.slug}`}
        className='text-decoration-none'
        style={{ display: 'flex', width: '100%', textDecoration: 'none', color: 'inherit', }}
      >

        <Container>
          <p
            style={{
              fontFamily: '"Georgia", serif',
              fontSize: '12px',
              textTransform: 'uppercase',
              letterSpacing: '1px',
              fontWeight: 400,
            }}
          >
            {data.category}
          </p>

          <h1
              style={{
                    fontFamily: '"Georgia", serif',
                    fontSize: '36px',
                    textTransform: 'uppercase',
                    letterSpacing: '1px',
                    fontWeight: 400,
                  }}
          >
            {data.title}
          </h1>

          <p
            style={{
              color: "#fff",
              fontFamily: 'TNYAdobeCaslonPro, "Times New Roman", Times, serif',
              fontSize: '21px',
              fontWeight: 400,
              marginTop: '1rem',
              maxWidth: '700px',
              margin: '1rem auto 0',
            }}
          >
            {data.shortdescription}
          </p>
        </Container>
      </Link>
    </div>
  );
};

export default HeroImageSection;
