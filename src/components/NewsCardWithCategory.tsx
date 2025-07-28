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

const NewsCardWithCategory: React.FC<NewsCardProps> = ({ data }) => {
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 992);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  

  return (
    <div style={{ display: 'block' }}>
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
          {!isMobile && (
            <div style={{ display: 'block' }}>
              <Image
                src={data.image}
                alt={data.title}
                width={400}
                height={300}
                style={{
                  aspectRatio: '4 / 3',
                  objectFit: 'cover',
                  width: '100%',
                  height: 'auto',
                  borderRadius: 0,
                  display: 'block',
                }}
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>
          )}

          <div style={{ display: 'block' }}>
            <p
              style={{
                fontSize: '12px',
                fontWeight: 400,
                color: 'rgb(219, 51, 52)',
                textTransform: 'uppercase',
                letterSpacing: '0.5px',
                marginTop: '20px',
                marginBottom: '10px',
                fontFamily: 'Georgia, serif',
              }}
            >
              {data.category}
            </p>

            <p
              style={{
                color: '#000',
                fontFamily: `TNYAdobeCaslonPro, "Times New Roman", Times, serif`,
                fontSize: '22px',
                fontWeight: 400,
                marginBottom: '10px',
              }}
            >
              {data.title}
            </p>

            {isMobile ? (
              <div
                style={{
                  display: 'flex',
                  gap: '12px',
                  alignItems: 'flex-start',
                }}
              >
                <div style={{ flex: 1 }}>
                  <p
                    style={{
                      color: 'rgb(51, 51, 51)',
                      fontFamily: `TNYAdobeCaslonPro, "Times New Roman", Times, serif`,
                      fontSize: '16px',
                      fontWeight: 400,
                      marginBottom: '10px',
                      display: '-webkit-box',
                      WebkitLineClamp: 3,
                      WebkitBoxOrient: 'vertical',
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                    }}
                  >
                    {data.shortdescription}
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

                <div style={{ flexShrink: 0 }}>

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
              <>
                <p
                  style={{
                    color: 'rgb(51, 51, 51)',
                    fontFamily: `TNYAdobeCaslonPro, "Times New Roman", Times, serif`,
                    fontSize: '16px',
                    fontWeight: 400,
                    marginBottom: '10px',
                    display: '-webkit-box',
                    WebkitLineClamp: 3,
                    WebkitBoxOrient: 'vertical',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                  }}
                >
                  {data.shortdescription}
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
              </>
            )}
          </div>
        </div>
      </Link>
    </div>
  );
};

export default NewsCardWithCategory;
