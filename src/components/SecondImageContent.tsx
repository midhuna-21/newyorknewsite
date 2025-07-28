'use client';

import Link from 'next/link';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { BiCalendar } from 'react-icons/bi';

interface NewsData {
  category: string;
  title: string;
  slug: string;
  date: string;
  image: string;
  shortdescription: string;
  description?: string;
}

interface Props {
  data: NewsData;
}

const SecondImageContent: React.FC<Props> = ({ data }) => {
  const [windowWidth, setWindowWidth] = useState<number | null>(null);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  if (!data || windowWidth === null) return null;

  const isMobile = windowWidth <= 768;
  const isSmallMobile = windowWidth <= 480;
  const isLarge = windowWidth > 1024;

  return (
    <div className='py-5'>
      <Link
        href={`/${data.category}/${data.slug}`}
        title={data.slug}
        style={{
          color: 'inherit',
          textDecoration: 'none',
          width: '100%',
          display: 'block',
        }}
      >
        <Container fluid style={{ padding: 0, backgroundColor: '#000', color: '#fff' }}>
          <Row
            style={{
              display: 'flex',
              flexDirection: isMobile ? 'column' : 'row',
              margin: 0,
              minHeight: isMobile ? undefined : isLarge ? '620px' : '650px',
            }}
          >
            <Col
              md={6}
              xs={12}
              style={{
                padding: isMobile ? '30px 20px' : '50px 30px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                textAlign: 'center',
                backgroundColor: '#000',
              }}
            >
              <h2
                style={{
                  fontFamily: 'Georgia, serif',
                  fontSize: isSmallMobile ? '10px' : isMobile ? '12px' : '13px',
                  textTransform: 'uppercase',
                  fontWeight: 400,
                  marginBottom: '10px',
                }}
              >
                {data.category}
              </h2>

              <p
                style={{
                  fontFamily: 'Georgia, serif',
                  fontSize: isSmallMobile ? '14px' : isMobile ? '20px' : '28px',
                  textTransform: 'uppercase',
                  fontWeight: 400,
                  marginBottom: '4px',
                }}
              >
                {data.title}
              </p>

              <p
                style={{
                  color: '#fff',
                  fontFamily: `TNYAdobeCaslonPro, 'Times New Roman', Times, serif`,
                  fontSize: isSmallMobile ? '13px' : isMobile ? '16px' : '20px',
                  fontWeight: 400,
                  maxWidth: '500px',
                  margin: '0 auto',
                  padding: isMobile ? '0 10px' : undefined,
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
            </Col>

            <Col
              md={6}
              xs={12}
              style={{
                backgroundColor: '#000',
                paddingTop: isMobile ? 0 : '30px',
                paddingBottom: isMobile ? 0 : '30px',
                paddingRight: isMobile ? 0 : '30px',
                paddingLeft: isMobile ? 0 : undefined,
                display: 'flex',
                alignItems: 'stretch',
              }}
            >

              <Image
                src={data.image}
                alt={data.title ?? 'Image'}
                width={300}
                height={200}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                }}
                sizes="(max-width: 768px) 100vw, 300px"
                  fetchPriority="high" 
              />

            </Col>
          </Row>
        </Container>
      </Link>
    </div>
  );
};

export default SecondImageContent;
