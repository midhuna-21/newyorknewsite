'use client';
import Image from 'next/image';

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

const CriticWithoutCategory: React.FC<CriticsCardProps> = ({ data }) => {
  const [isMobile, setIsMobile] = useState(false);

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
        <div>
          {!isMobile && (

            <div
              style={{
                width: '200px',
                height: '270px',
                margin: '0 auto',
                overflow: 'hidden',
                position: 'relative',
              }}
            >
              <Image
                src={data.image}
                alt={data.title}
                width={200}
                height={270}
                style={{
                  objectFit: 'cover',
                  display: 'block',
                }}
              />
            </div>

          )}

          <p
            style={{
              color: '#000',
              fontFamily: `TNYAdobeCaslonPro, "Times New Roman", Times, serif`,
              fontSize: '22px',
              fontWeight: 400,
              margin: isMobile ? '0 0 6px 0' : '12px auto 12px',
              maxWidth: isMobile ? '100%' : '600px',
              lineHeight: 1.2,
            }}
          >
            {data.title}
          </p>

          {isMobile ? (
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
                  margin: isMobile ? '0' : '0 auto 8px',
                  maxWidth: isMobile ? '100%' : '600px',
                  display: '-webkit-box',
                  WebkitLineClamp: 4,
                  WebkitBoxOrient: 'vertical',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                }}
              >
                {data.shortdescription}
              </p>

              <div style={{ flexShrink: 0, width: '100px', height: '100px', position: 'relative' }}>
                <Image
                  src={data.image}
                  alt={data.title}
                  width={100}
                  height={100}
                  style={{
                    objectFit: 'cover',
                    display: 'block',
                  }}
                />
              </div>
            </div>
          ) : (
            <p
              style={{
                color: 'rgb(51, 51, 51)',
                fontFamily: `TNYAdobeCaslonPro, "Times New Roman", Times, serif`,
                fontSize: '16px',
                fontWeight: 400,
                margin: isMobile ? '0' : '0 auto 8px',
                maxWidth: isMobile ? '100%' : '600px',
                display: '-webkit-box',
                WebkitLineClamp: 2,
                WebkitBoxOrient: 'vertical',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
              }}
            >
              {data.shortdescription}
            </p>

          )}

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

export default CriticWithoutCategory;
