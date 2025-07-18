'use client';

import Link from 'next/link';
import React from 'react';
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

const FirstIndexSection: React.FC<Props> = ({ data }) => {
  if (!data) return null;

  return (
    <div style={{ backgroundColor: '#000', color: '#fff' }}>

      <Container fluid style={{ padding: 0 }}>
        <Row
          className="align-items-stretch"
          style={{
            minHeight: '600px',
          }}
        >
          {/* Left */}
          <Col
            md={6}
            style={{
              padding: '60px 40px',
              textAlign: 'center',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              backgroundColor: '#000',
            }}
          >
            <Link
              title={`${data.slug}`}
              href={`/${data.category}/${data.slug}`}
              className='text-decoration-none'
              style={{ display: 'flex', width: '100%', textDecoration: 'none', color: 'inherit', }}
            >
              <div>

                <h2

                  style={{
                    fontFamily: '"Georgia", serif',
                    fontSize: '36px',
                    textTransform: 'uppercase',
                    letterSpacing: '1px',
                    fontWeight: 400,
                  }}
                >
                  {data.category}
                </h2>
                <p
                  style={{
                    color: "#fff",
                    fontFamily: 'TNYAdobeCaslonPro, "Times New Roman", Times, serif',
                    fontSize: '21px',
                    fontWeight: 400,
                    maxWidth: '500px',
                    margin: '0 auto',
                  }}
                >
                  {data.shortdescription}{' '}
                </p>
                <BiCalendar size={10} style={{ marginRight: '4px', color: '#fff' }} />
                <span style={{ color: '#fff', opacity: 0.6, fontSize: '8px' }}>Published on</span>
                <span style={{ color: '#555', marginLeft: '4px', fontSize: '8px' }}>{data.date}</span>
              </div>
            </Link>
          </Col>
          {/* Right: Image */}

          <Col
            md={6}
            style={{
              padding: 0,
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
          </Col>
        </Row>
      </Container>

    </div>
  );
};

export default FirstIndexSection;
