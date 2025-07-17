'use client';

import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

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
            <h2
              style={{
                fontFamily: '"Graphik", "Helvetica Neue", Helvetica, Arial, sans-serif',
                fontSize: '2rem',
                marginBottom: '30px',
                textTransform: 'uppercase',
                letterSpacing: '1px',
              }}
            >
              {data.category}
            </h2>
            <p
              style={{
                fontFamily: '"Georgia", serif',
                fontSize: '1.2rem',
                lineHeight: '1.8',
                maxWidth: '500px',
                margin: '0 auto',
              }}
            >
              {data.shortdescription}{' '}
            </p>
            <p
              style={{
                marginTop: '20px',
                fontSize: '0.9rem',
                color: '#aaa',
              }}
            >
              {data.date}
            </p>
          </Col>

          <Col
            md={6}
            style={{
              paddingTop: '20px',
              paddingBottom: '20px',
              paddingRight: '40px',
              paddingLeft: '0',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: '#000',
            }}
          >
            <img
              src={data.image}
              alt={data.title}
              style={{
                width: '100%',
                height: '600px',
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

export default SecondImageContent;
