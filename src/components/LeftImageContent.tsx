'use client';

import Link from 'next/link';
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

interface NewsData {
  title: string;
  shortdescription: string;
  image: string;
  slug: string;
  category: string;
}

const LeftImageContent = ({ data }: { data: NewsData }) => {
  return (
    <div className="py-5" style={{ backgroundColor: '#fff' }}>
      <Link
        title={`${data.slug}`}
        href={`/${data.category}/${data.slug}`}
        className='text-decoration-none'
        style={{ display: 'flex', width: '100%', textDecoration: 'none', color: 'inherit', }}
      >

        <Container>
          <Row className="align-items-center">
            {/* Left Content */}
            <Col
              xs={12}
              md={6}
              style={{
                display: 'flex',
                justifyContent: 'center',
                marginBottom: '30px',
              }}
            >
              <img
                src={data.image}
                alt={data.title}
                style={{ maxWidth: '100%', height: 'auto' }}
              />
            </Col>

            {/* Right Content */}
            <Col xs={12} md={6} style={{ textAlign: 'center' }}>
              <h2
                style={{
                  fontFamily: '"Georgia", serif',
                  fontSize: '36px',
                  textTransform: 'uppercase',
                  fontWeight: 400,
                }}
              >
                {data.title}
              </h2>
              <p
                style={
                  {
                    color: 'rgb(51, 51, 51)',
                    fontFamily: 'TNYAdobeCaslonPro, "Times New Roman", Times, serif',
                    fontSize: '22px',
                    fontWeight: 400,
                  }
                }
              >
                {data.shortdescription}
              </p>
            </Col>
          </Row>
        </Container>
      </Link>
    </div>
  );
};

export default LeftImageContent;
