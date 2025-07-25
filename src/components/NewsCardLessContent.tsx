'use client';

import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { BiCalendar } from 'react-icons/bi';
import Image from 'next/image';

interface NewsCardProps {
  data: {
    category: string;
    title: string;
    shortdescription?: string;
    description?: string;
    image: string;
    slug: string;
    date: string;
  };
}

const NewsCardLessContent = ({ data }: NewsCardProps) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div style={{ fontFamily: '"Georgia", serif' }}>
      <Link
        title={`${data.slug}`}
        href={`/${data.category}/${data.slug}`}
        className="text-decoration-none"
        style={{ textDecoration: 'none', color: 'inherit', display: 'block' }}
      >
        {isMobile ? (
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'flex-start',
              width: '100%',
            }}
          >
            <div
              style={{
                flex: '1 1 auto',
                paddingRight: '12px',
                maxWidth: 'calc(100% - 120px)',
              }}
            >
              <p
                style={{
                  color: '#000',
                  fontFamily: 'TNYAdobeCaslonPro, "Times New Roman", Times, serif',
                  fontSize: '16px',
                  fontWeight: 500,
                  marginBottom: '8px',
                  lineHeight: '1.3',
                }}
              >
                {data.title}
              </p>

              <div style={{ fontSize: '10px', marginTop: '10px', display: 'flex', alignItems: 'center', justifyContent: 'flex-start' }}>
                <BiCalendar
                  size={10}
                  style={{ marginRight: '4px', color: '#999' }}
                />
                <span style={{ color: '#c0392b', fontWeight: 500, fontSize: '8px' }}>
                  Published on
                </span>
                <span style={{ color: '#4d5459ff', marginLeft: '4px', fontSize: '8px' }}>
                  {data.date}
                </span>
              </div>
            </div>


            <div
              style={{
                width: '100px',
                flexShrink: 0,
                position: 'relative',
              }}
            >
              <Image
                src={data.image}
                alt={data.title}
                width={100}
                height={100}
                style={{
                  width: '100px',
                  height: '100px',
                  objectFit: 'cover',
                  display: 'block',
                }}
              />
            </div>

          </div>
        ) : (
          <div style={{ maxWidth: '300px', margin: '0 auto' }}>
            <Image
              src={data.image}
              alt={data.title ?? 'News image'}
              width={400}
              height={300}
              style={{
                aspectRatio: '4 / 3',
                objectFit: 'cover',
                width: '100%',
                height: 'auto',
                borderRadius: 0,
              }}
              sizes="(max-width: 768px) 100vw, 33vw"
              priority
            />

            <div style={{ padding: '20px 0 0 0' }}>
              <p
                style={{
                  color: '#000',
                  fontFamily: 'TNYAdobeCaslonPro, "Times New Roman", Times, serif',
                  fontSize: '22px',
                  fontWeight: 400,
                    marginBottom: '4px',
                }}
              >
                {data.title}
              </p>

              {data.shortdescription && (
                <p
                  style={{
                    fontSize: '1rem',
                    lineHeight: '1.8',
                    color: '#333',
                    marginTop: '12px',
                  }}
                >
                  {data.shortdescription}
                </p>
              )}

              <div style={{ fontSize: '10px', marginTop: '10px', display: 'flex', alignItems: 'center', justifyContent: 'flex-start' }}>
                <BiCalendar
                  size={10}
                  style={{ marginRight: '4px', color: '#999' }}
                />
                <span style={{ color: '#c0392b', fontWeight: 500, fontSize: '8px' }}>
                  Published on
                </span>
                <span style={{ color: '#4d5459ff', marginLeft: '4px', fontSize: '8px' }}>
                  {data.date}
                </span>
              </div>
            </div>
          </div>
        )}
      </Link>
    </div>
  );
};

export default NewsCardLessContent;
