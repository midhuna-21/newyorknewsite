'use client';

import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

interface NewsData {
  title: string;
  shortdescription: string;
  image: string;
}

const LeftImageContent = ({ data }: { data: NewsData }) => {
  return (
    <div className="py-5" style={{ backgroundColor: '#fff' }}>
      <Container>
        <Row className="align-items-center">
          {/* Left Image */}
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
                fontFamily: '"Bradley Hand", cursive, Georgia, serif',
                fontSize: '2rem',
                lineHeight: '1.3',
                textTransform: 'uppercase',
              }}
            >
              {data.title}
            </h2>
            <p
              style={{
                fontFamily: '"Georgia", serif',
                fontSize: '1.1rem',
                lineHeight: '1.8',
                marginTop: '20px',
                padding: '0 15px',
              }}
            >
              {data.shortdescription}
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default LeftImageContent;
