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
    <div
      id="first-index-section"
      style={{ backgroundColor: '#fff', color: '#000', paddingTop: '80px' }}
    >
      <Container fluid>
        <Row className="align-items-center" style={{ minHeight: '450px' }}>
          <Col
            md={6}
            xs={12}
            className="text-center d-flex flex-column justify-content-center"
            style={{
              backgroundColor: '#fff',
              color: '#000',
              padding: '40px 20px',
            }}
          >
            <p
              style={{
                fontFamily: 'Georgia, serif',
                fontSize: '16px',
                textTransform: 'uppercase',
                letterSpacing: '1px',
                fontWeight: 400,
                marginBottom: '0.5rem',
                color: '#111',
              }}
            >
              {data.category}
            </p>

            <Link
              href={`/${data.category}/${data.slug}`}
              title={data.slug}
              className="text-decoration-none w-100"
              style={{ color: 'inherit' }}
            >
              <h1
                className="d-none d-sm-block"
                style={{
                  fontFamily: 'Georgia, serif',
                  fontSize: '30px',
                  fontWeight: 400,
                  letterSpacing: '0.5px',
                  lineHeight: 1.2,
                  marginBottom: '16px',
                }}
              >
                {data.title}
              </h1>
              <h1
                className="d-block d-sm-none"
                style={{
                  fontFamily: 'Georgia, serif',
                  fontSize: '22px',
                  fontWeight: 400,
                  letterSpacing: '0.5px',
                  lineHeight: 1.2,
                  marginBottom: '12px',
                }}
              >
                {data.title}
              </h1>
            </Link>

            <p
              className="d-none d-sm-block"
              style={{
                color: '#111',
                fontFamily: 'Times New Roman, serif',
                fontSize: '22px',
                fontWeight: 400,
                marginBottom: '10px',
                marginLeft: 'auto',
                marginRight: 'auto',
                maxWidth: '700px',
              }}
            >
              {data.shortdescription}
            </p>

            <p
              className="d-block d-sm-none"
              style={{
                color: '#111',
                fontFamily: 'Times New Roman, serif',
                fontSize: '15px',
                fontWeight: 400,
                marginBottom: '10px',
                marginLeft: 'auto',
                marginRight: 'auto',
                maxWidth: '100%',
              }}
            >
              {data.shortdescription}
            </p>

            <div
              style={{
                fontSize: '10px',
                marginTop: '10px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <BiCalendar
                size={10}
                style={{ marginRight: '4px', color: '#999' }}
              />
              <span
                style={{
                  color: '#c0392b',
                  fontWeight: 500,
                  fontSize: '8px',
                }}
              >
                Published on
              </span>
              <span
                style={{
                  color: '#4d5459',
                  marginLeft: '4px',
                  fontSize: '8px',
                }}
              >
                {data.date}
              </span>
            </div>
          </Col>

          <Col
            md={6}
            xs={12}
            className="d-flex align-items-center justify-content-center"
            style={{
              padding: '10px 20px',
              backgroundColor: '#fff',
            }}
          >
            <div
              style={{
                position: 'relative',
                width: '100%',
                height: '100%',
                maxWidth: '480px',
                minHeight: '450px',
              }}
            >
              <Image
                src={data.image}
                alt={data.title}
                fill
                  fetchPriority="high" 
                style={{
                  objectFit: 'cover',
                  objectPosition: 'center',
                }}
                 priority={true}
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </Col>


        </Row>
      </Container>
    </div>
  );
};

export default FirstIndexSection;
