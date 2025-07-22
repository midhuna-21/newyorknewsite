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
  shortdescription: string;
  description?: string;
}

interface Props {
  data: NewsData;
}

const FirstIndexSection: React.FC<Props> = ({ data }) => {
  if (!data) return null;

  return (
    <div id="first-index-section" style={{ backgroundColor: '#fff', color: '#000', }}>
      <Container fluid style={{ paddingTop:'0px' }}>
        <Row
          className="first-section-row align-items-stretch"
          style={{ margin: 0, gap: 0 }}
        >
          {/* Text Section */}
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
              <div>
                <h2
                  style={{
                    fontFamily: '"Georgia", serif',
                    fontSize: 'clamp(14px, 4vw, 28px)',
                    // paddingTop:'50px',
                    textTransform: 'uppercase',
                    letterSpacing: '1px',
                    fontWeight: 400,
                    marginBottom: '0.3rem',
                    marginTop: '0.5rem',
                    color: '#000',
                  }}
                >
                  {data.category}
                </h2>

                <p
                  style={{
                    color: '#000',
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

                <div style={{ fontSize: '10px', color: '#555', marginTop: '10px' }}>
                  <BiCalendar
                    size={10}
                    style={{ marginRight: '4px', color: '#000' }}
                  />
                  <span style={{ color: '#555', opacity: 0.6 }}>Published on</span>
                  <span style={{ color: '#222', marginLeft: '4px' }}>
                    {data.date}
                  </span>
                </div>
              </div>
            </Link>
          </Col>

          {/* Image Section */}
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

      {/* <div
        style={{
          width: '100%',
          height: '1px',
          backgroundColor: '#ddd',
          marginTop: '0',
        }}
      /> */}
    </div>
  );
};

export default FirstIndexSection;
