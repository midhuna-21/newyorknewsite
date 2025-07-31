import Link from 'next/link';
import React from 'react';
import { Row, Col } from 'react-bootstrap';
import Image from 'next/image';
import { BiCalendar } from 'react-icons/bi';

interface NewsData {
  title: string;
  shortdescription: string;
  image: string;
  slug: string;
  category: string;
  date: string;
}

const LeftImageContent = ({ data }: { data: NewsData }) => {
  return (
    <div className="py-5" style={{ backgroundColor: '#fff' }}>
      <Row className="align-items-center mx-0">
        <Col
          xs={12}
          lg={6}
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '10px',
          }}
        >
          <Link
            href={`/${data.category}/${data.slug}`}
            title={data.slug}
            className="text-decoration-none w-100"
            style={{ textAlign: 'center' }}
          >
            <div
              style={{
                position: 'relative',
                width: '100%',
                maxWidth: '100%',
                height: 'clamp(240px, 40vw, 440px)',
                margin: '0 auto',
              }}
            >
              <Image
                src={data.image}
                alt={data.title}
                fill
                style={{
                  objectFit: 'cover',
                  objectPosition: 'center',
                }}
              />
            </div>
          </Link>
        </Col>

        <Col
          xs={12}
          lg={6}
          style={{
            textAlign: 'center',
            padding: '20px',
          }}
        >
          <Link
            href={`/${data.category}/${data.slug}`}
            title={data.slug}
            className="text-decoration-none w-100"
            style={{ color: 'inherit', textDecoration: 'none' }}
          >
            <h2
              className="d-none d-lg-block hover-underline"
              style={{
                fontFamily: 'Georgia, serif',
                fontSize: '30px',
                textTransform: 'uppercase',
                fontWeight: 400,
                marginBottom: '16px',
              }}
            >
              {data.title}
            </h2>

            <h2
              className="d-block d-lg-none hover-underline"
              style={{
                fontFamily: 'Georgia, serif',
                fontSize: '22px',
                textTransform: 'uppercase',
                fontWeight: 400,
                marginBottom: '16px',
              }}
            >
              {data.title}
            </h2>


            <p
              className="d-none d-lg-block"
              style={{
                color: '#333',
                fontFamily: '"Times New Roman", serif',
                fontSize: '20px',
                fontWeight: 400,
                marginBottom: '8px',
              }}
            >
              {data.shortdescription}
            </p>

            {/* Mobile View */}
            <p
              className="d-block d-lg-none"
              style={{
                color: '#333',
                fontFamily: '"Times New Roman", serif',
                fontSize: '15px',
                fontWeight: 400,
                marginBottom: '8px',
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
          </Link>
        </Col>
      </Row>
    </div>
  );
};

export default LeftImageContent;
