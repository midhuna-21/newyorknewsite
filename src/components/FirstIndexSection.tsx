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
        <Row className="align-items-center">
          {/* Text Section */}
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
            <Link
              href={`/${data.category}/${data.slug}`}
              title={data.slug}
              className="text-decoration-none w-100"
              style={{ color: 'inherit' }}
            >
              {/* CATEGORY */}
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

              {/* TITLE - Desktop */}
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

              {/* TITLE - Mobile */}
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

              {/* SHORT DESCRIPTION - Desktop */}
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

              {/* SHORT DESCRIPTION - Mobile */}
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

              {/* DATE */}
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
            </Link>
          </Col>

          {/* Image Section */}
          <Col
            md={6}
            xs={12}
            className="d-flex align-items-center justify-content-center"
            style={{
              padding: '10px 20px',
              backgroundColor: '#fff',
            }}
          >
            <div style={{ width: '100%', maxWidth: '480px' }}>
              <Image
                src={data.image}
                alt={data.title}
                width={800}
                height={500}
                className="img-fluid w-100"
                style={{
                  display: 'block',
                  width: '100%',
                  height: 'auto',
                }}
                sizes="100vw"
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
