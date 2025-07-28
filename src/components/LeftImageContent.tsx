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
    <div className="py-5" style={{ backgroundColor: '#fff' }} id="left-image-content">
      <Row className="align-items-center mx-0">
        {/* Image Left */}
        <Col
          xs={12}
          md={6}
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
            <div style={{ position: 'relative', width: '100%', maxWidth: '500px' }}>
              <Image
                src={data.image}
                alt={data.title}
                width={500}
                height={300}
                className="img-fluid"
                style={{
                  width: '100%',
                  height: 'auto',
                  display: 'block',
                }}
                  fetchPriority="high" 
              />
            </div>
          </Link>
        </Col>

        {/* Text Right */}
        <Col
          xs={12}
          md={6}
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
            {/* Desktop Title */}
            <h2
              className="d-none d-sm-block"
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

            {/* Mobile Title */}
            <h2
              className="d-block d-sm-none"
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

            {/* Desktop Description */}
            <p
              className="d-none d-sm-block"
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

            {/* Mobile Description */}
            <p
              className="d-block d-sm-none"
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
