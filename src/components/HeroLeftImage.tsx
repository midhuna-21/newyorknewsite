'use client';
import Image from 'next/image';
import Link from 'next/link';
import { BiCalendar } from 'react-icons/bi';
import { useEffect, useState } from 'react';

interface HeroLeftImageProps {
  data: {
    category?: string;
    title: string;
    shortdescription: string;
    author?: string;
    image: string;
    date: string;
    slug: string;
  };
}

export default function HeroLeftImage({ data }: HeroLeftImageProps) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const sharedTextStyle = {
    fontFamily: 'TNYAdobeCaslonPro, "Times New Roman", Times, serif',
    color: '#fff',
    fontWeight: 400,
    margin: '10px 0',
  };

  const rowStyle = {
    width: '100%',
    display: 'flex',
    flexWrap: 'wrap' as const,
    height: isMobile ? 'auto' : '600px',
  };

  const textColumnStyle = {
    backgroundColor: '#000',
    color: '#fff',
    padding: isMobile ? '20px' : '40px',
    height: isMobile ? 'auto' : '100%',
    display: 'flex',
    flexDirection: 'column' as const,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center' as const,
    width: isMobile ? '100%' : '50%',
  };

  const imageColumnStyle = {
    width: isMobile ? '100%' : '50%',
    height: isMobile ? '300px' : '100%',
  };

  return (
  <div className="py-5" style={{ paddingTop: '20px', paddingBottom: '20px' }}>
    <Link
      title={data.slug}
      href={`/${data.category}/${data.slug}`}
      className="text-decoration-none"
      style={{
        display: 'block',
        width: '100%',
        textDecoration: 'none',
        color: 'inherit',
      }}
    >
      <div
        className="row align-items-stretch m-0"
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          height: isMobile ? 'auto' : '600px',
        }}
      >
        <div
          className="col-12 col-md-6 order-1 order-md-2"
          style={{
            backgroundColor: '#000',
            color: '#fff',
            padding: isMobile ? '20px' : '40px',
            height: isMobile ? 'auto' : '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center',
          }}
        >
          <div style={{ width: '100%' }}>
            <div
              style={{
                fontFamily: '"Georgia", serif',
                fontSize: isMobile ? '20px' : '28px',
                textTransform: 'uppercase',
                letterSpacing: '1px',
                fontWeight: 400,
              }}
            >
              {data.category}
            </div>

            <h1
              style={{
                fontFamily: 'TNYAdobeCaslonPro, "Times New Roman", Times, serif',
                color: '#fff',
                fontWeight: 400,
                margin: '10px 0',
                fontSize: isMobile ? '16px' : '21px',
              }}
            >
              {data.title}
            </h1>

            <p
              style={{
                fontFamily: 'TNYAdobeCaslonPro, "Times New Roman", Times, serif',
                color: '#fff',
                fontWeight: 400,
                margin: '10px 0',
                fontSize: isMobile ? '14px' : '17px',
              }}
            >
              {data.shortdescription}
            </p>

            <div style={{ marginTop: '10px' }}>
              <BiCalendar size={10} style={{ marginRight: '4px', color: '#fff' }} />
              <span style={{ fontSize: '8px', color: '#fff', opacity: 0.6 }}>Published on</span>
              <span style={{ fontSize: '8px', color: '#ccc', marginLeft: '4px' }}>{data.date}</span>
            </div>
          </div>
        </div>
        <div
          className="col-12 col-md-6 order-2 order-md-1 p-0"
          style={{
            height: isMobile ? '300px' : '100%',
          }}
        >
          <div style={{ height: '100%', width: '100%' }}>
            <Image
              src={data.image}
              alt={data.title}
              width={700}
              height={600}
              className="img-fluid"
              style={{
                height: '100%',
                width: '100%',
                objectFit: 'cover',
              }}
              priority
            />
          </div>
        </div>
      </div>
    </Link>
  </div>
);

}
