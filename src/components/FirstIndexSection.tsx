import Link from 'next/link';
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { BiCalendar } from 'react-icons/bi';
import Image from 'next/image';

interface NewsData {
  category: string;
  title: string;
  slug: string;
  date: string;
  image: string;
  shortdescription?: string;
  description?: string;
}

interface Props {
  data: NewsData;
}

const FirstIndexSection: React.FC<Props> = ({ data }) => {
  if (!data) return null;

  return (
    <div id="first-index-section" style={{ backgroundColor: '#fff', color: '#000', paddingTop: '80px', }}>
      <Container fluid style={{ paddingTop: '0px' }}>
        <Row
          className="first-section-row align-items-stretch"
          style={{ margin: 0, gap: 0 }}
        >
          <Col
            md={6}
            xs={12}
            id="first-section-text-col"
            style={{

              textAlign: 'center',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              backgroundColor: '#fff',
              color: '#000',
            }}
          >
            <Link
              title={data.slug}
              href={`/${data.category}/${data.slug}`}
              className="text-decoration-none"
              style={{
                width: '100%',
                textDecoration: 'none',
                color: 'inherit',
              }}
            >
              <div className="first-text-wrapper">
                <p
                  style={{
                    fontFamily: '"Georgia", serif',
                    fontSize: 'clamp(14px, 4vw, 28px)',
                    // paddingTop:'50px',
                    textTransform: 'uppercase',
                    letterSpacing: '1px',
                    fontWeight: 400,
                    marginBottom: '0.3rem',
                    marginTop: '0.5rem',
                    color: '#111',
                  }}
                >
                  {data.category}
                </p>

                <h1
                  className="responsive-title"
                >
                  {data.title}
                </h1>

                <p
                  style={{
                    color: '#111',
                    fontFamily:
                      'TNYAdobeCaslonPro, "Times New Roman", Times, serif',
                    fontSize: 'clamp(14px, 2vw, 22px)',
                    fontWeight: 400,
                    maxWidth: '700px',
                    margin: '0 auto 0.5rem',
                  }}
                >
                  {data.shortdescription}
                </p>

                {/* <div style={{ fontSize: '10px', color: '#555', marginTop: '10px' }}>
                  <BiCalendar
                    size={10}
                    style={{ marginRight: '4px', color: '#000' }}
                  />
                  <span style={{ color: '#000', opacity: 0.6, fontSize: '8px' }}>Published on</span>
                  <span style={{ color: '#555', marginLeft: '4px', fontSize: '8px' }}>{data.date}</span>
                </div> */}
                <div style={{ fontSize: '10px', marginTop: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
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
            </Link>
          </Col>

          <Col
            md={6}
            xs={12}
            style={{
              padding: '20px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: '#fff',
            }}
          >
            <div className="first-image-wrapper">
              <Image
                src={data.image}
                alt={data.title}
                width={800}
                height={500}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  display: 'block',
                }}
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default FirstIndexSection;