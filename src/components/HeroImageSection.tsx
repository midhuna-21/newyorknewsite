'use client';

import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { BiCalendar } from 'react-icons/bi';

interface HeroImageData {
  category: string;
  title: string;
  shortdescription?: string;
  description?: string;
  image: string;
  slug: string;
  date: string;
}

interface Props {
  data: HeroImageData;
}

const HeroImageSection: React.FC<Props> = ({ data }) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div style={{ width: '100%', paddingTop: '3rem', paddingBottom: '2rem' }}>
      <Link
        href={`/${data.category}/${data.slug}`}
        title={data.slug}
        className="text-decoration-none"
        style={{
          textDecoration: 'none',
          color: 'inherit',
          display: 'block',
        }}
      >
        <div
          style={{
            position: 'relative',
            width: '100%',
            minHeight: isMobile ? '60vh' : '90vh',
            backgroundImage: `url(${data.image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            display: 'flex',
            justifyContent: isMobile ? 'center' : 'flex-end',
            alignItems: 'center',
            padding: '0 1.5rem',
            textAlign: 'center',
          }}
        >
          <div
            style={{
              maxWidth: '550px',
              padding: '1.5rem',
              color: '#fff',
              width: '100%',
              textAlign: 'center',
            }}
          >
            <p
              style={{
                fontFamily: 'Georgia, serif',
                fontSize: isMobile ? '0.75rem' : '1rem',
                textTransform: 'uppercase',
                letterSpacing: '1px',
                fontWeight: 400,
                marginBottom: '0.5rem',
              }}
            >
              {data.category}
            </p>

            <h2
              style={{
                fontFamily: 'Georgia, serif',
                fontSize: isMobile ? '1.2rem' : '2rem',
                textTransform: 'uppercase',
                letterSpacing: '1px',
                fontWeight: 400,
                marginBottom: '0.75rem',
              }}
            >
              {data.title}
            </h2>

            <p
              style={{
                fontFamily: 'TNYAdobeCaslonPro, "Times New Roman", Times, serif',
                fontSize: isMobile ? '1rem' : '1.25rem',
                fontWeight: 400,
                marginBottom: '1rem',
              }}
            >
              {data.shortdescription}
            </p>

            <div style={{ fontSize: '10px', marginTop: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <BiCalendar
                size={10}
                style={{ marginRight: '4px', color: '#fff' }}
              />
              <span style={{ color: '#fff', fontWeight: 500, fontSize: '8px' }}>
                Published on
              </span>
              <span style={{ color: '#fff', marginLeft: '4px', fontSize: '8px' }}>
                {data.date}
              </span>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );

};

export default HeroImageSection;
