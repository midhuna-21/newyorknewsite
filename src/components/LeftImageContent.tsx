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
      <Link
        title={`${data.slug}`}
        href={`/${data.category}/${data.slug}`}
        className="text-decoration-none"
        style={{
          display: 'flex',
          width: '100%',
          textDecoration: 'none',
          color: 'inherit',
        }}
      >
        <div>
          <Row className="align-items-center">
            <Col
              xs={12}
              md={6}
              className="order-1 order-md-2 text-col"
              style={{ textAlign: 'center' }}
            >
              <h2
                className="responsive-title"
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
                className="responsive-description"
                style={{
                  color: 'rgb(51, 51, 51)',
                  fontFamily:
                    'TNYAdobeCaslonPro, "Times New Roman", Times, serif',
                  fontSize: '22px',
                  fontWeight: 400,
                  marginBottom: '6px',
                }}
              >
                {data.shortdescription}
              </p>
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
            </Col>

            <Col
              xs={12}
              md={6}
              className="order-2 order-md-1 image-col"
              style={{
                display: 'flex',
                justifyContent: 'center',
              }}
            >
              <div style={{ position: 'relative', width: '100%', maxWidth: '500px', height: 'auto' }}>
                <Image
                  src={data.image}
                  alt={data.title}
                  width={500}
                  height={300}
                  style={{
                    width: '100%',
                    height: 'auto',
                  }}
                />
              </div>
            </Col>
          </Row>
        </div>
      </Link>
    </div>
  );
};

export default LeftImageContent;
