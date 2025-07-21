'use client';

import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { BiCalendar } from 'react-icons/bi';

interface CriticsCardProps {
  data: {
    title: string;
    shortdescription: string;
    image: string;
    author?: string;
    category?: string;
    date: string;
    slug: string;
  };
}

const TheCritics: React.FC<CriticsCardProps> = ({ data }) => {
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 992);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div
      style={{
        fontFamily: 'Georgia, serif',
        textAlign: isMobile ? 'left' : 'center',
        paddingTop: '1rem',
        paddingBottom: '1rem',
      }}
    >
      <Link
        title={data.slug}
        href={`/${data.category}/${data.slug}`}
        style={{
          textDecoration: 'none',
          color: 'inherit',
          display: 'block',
        }}
      >
        <div style={{ display: 'block' }}>
          {/* Desktop Image */}
          {!isMobile && (
            <div
              style={{
                width: '200px',
                height: '270px',
                margin: '0 auto',
                overflow: 'hidden',
              }}
            >
              <img
                src={data.image}
                alt={data.title}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  display: 'block',
                }}
              />
            </div>
          )}

          {/* Category */}
          <p
            style={{
              fontSize: '12px',
              fontWeight: 400,
              color: 'rgb(219, 51, 52)',
              textTransform: 'uppercase',
              letterSpacing: '0.5px',
              marginTop: '15px',
              marginBottom: '10px',
              marginLeft: isMobile ? 0 : 'auto',
              marginRight: isMobile ? 0 : 'auto',
              maxWidth: isMobile ? '100%' : '600px',
            }}
          >
            {data.category}
          </p>

          {/* Title */}
          <h2
            style={{
              color: '#000',
              fontFamily: `TNYAdobeCaslonPro, "Times New Roman", Times, serif`,
              fontSize: '22px',
              fontWeight: 400,
              margin: isMobile ? '0 0 6px 0' : '-6px auto 12px',
              maxWidth: isMobile ? '100%' : '600px',
            }}
          >
            {data.title}
          </h2>

          {/* Mobile View: Description + Image side-by-side */}
          {isMobile && (
            <div
              style={{
                display: 'flex',
                gap: '12px',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginBottom: '8px',
              }}
            >
              <p
                style={{
                  color: 'rgb(51, 51, 51)',
                  fontFamily: `TNYAdobeCaslonPro, "Times New Roman", Times, serif`,
                  fontSize: '16px',
                  fontWeight: 400,
                  flex: 1,
                  margin: 0,
                }}
              >
                {data.shortdescription}
              </p>
              <div style={{ flexShrink: 0 }}>
                <img
                  src={data.image}
                  alt={data.title}
                  style={{
                    width: '100px',
                    height: '100px',
                    objectFit: 'cover',
                    display: 'block',
                  }}
                />
              </div>
            </div>
          )}

          {/* Description for Desktop */}
          {!isMobile && (
            <p
              style={{
                color: 'rgb(51, 51, 51)',
                fontFamily: `TNYAdobeCaslonPro, "Times New Roman", Times, serif`,
                fontSize: '16px',
                fontWeight: 400,
                margin: '0 auto 8px',
                maxWidth: '600px',
              }}
            >
              {data.shortdescription}
            </p>
          )}

          {/* Date */}
          <p
            style={{
              fontWeight: 'bold',
              fontFamily: `"Helvetica Neue", Helvetica, Arial, sans-serif`,
              fontSize: '0.9rem',
              margin: isMobile ? '0' : '0 auto',
              maxWidth: isMobile ? '100%' : '600px',
            }}
          >
            <BiCalendar size={10} style={{ marginRight: '4px', color: '#000' }} />
            <span
              style={{
                color: '#000',
                opacity: 0.6,
                fontSize: '8px',
              }}
            >
              Published on
            </span>
            <span
              style={{
                color: '#555',
                marginLeft: '4px',
                fontSize: '8px',
              }}
            >
              {data.date}
            </span>
          </p>
        </div>
      </Link>
    </div>
  );
};

export default TheCritics;
