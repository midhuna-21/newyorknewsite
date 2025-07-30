import Link from 'next/link';
import Image from 'next/image';
import { Container, Row, Col } from 'react-bootstrap';
import { BiCalendar } from 'react-icons/bi';
import React from 'react';

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
  return (
    <div className="py-5">
      <Link
        href={`/${data.category}/${data.slug}`}
        title={data.slug}
        style={{
          color: 'inherit',
          textDecoration: 'none',
          width: '100%',
          display: 'block',
        }}
      >
        {/* Desktop view */}
        <Container
          fluid
          className="p-0 d-none d-md-block"
          style={{ backgroundColor: '#000', color: '#fff' }}
        >
          <Row className="g-0 flex-column flex-md-row" style={{ minHeight: '500px' }}>
            <TextAndImage data={data} />
          </Row>
        </Container>

        {/* Mobile View */}
        <Container
          fluid
          className="p-0 d-block d-md-none"
          style={{ backgroundColor: '#000', color: '#fff' }}
        >
          <Row className="g-0 flex-column" style={{ minHeight: '400px' }}>
            <TextAndImage data={data} />
          </Row>
        </Container>
      </Link>
    </div>
  );
};

const TextAndImage: React.FC<{ data: NewsData }> = ({ data }) => (
  <>
    <Col
      md={6}
      xs={12}
      className="d-flex flex-column justify-content-center text-center"
      style={{
        padding: '30px 20px',
        backgroundColor: '#000',
      }}
    >
      <h2
        className="text-uppercase mb-2 d-none d-md-block"
        style={{ fontFamily: 'Georgia, serif', fontSize: '1rem', fontWeight: 400 }}
      >
        {data.category}
      </h2>
      <h2
        className="text-uppercase mb-2 d-block d-md-none"
        style={{ fontFamily: 'Georgia, serif', fontSize: '0.75rem', fontWeight: 400 }}
      >
        {data.category}
      </h2>

      <p
        className="text-uppercase mb-2 d-none d-md-block"
        style={{ fontFamily: 'Georgia, serif', fontSize: '28px', fontWeight: 400 }}
      >
        {data.title}
      </p>
      <p
        className="text-uppercase mb-2 d-block d-md-none"
        style={{ fontFamily: 'Georgia, serif', fontSize: '18px', fontWeight: 400 }}
      >
        {data.title}
      </p>

      <p
        className="mx-auto mb-2 d-none d-md-block"
        style={{
          fontFamily: `TNYAdobeCaslonPro, 'Times New Roman', Times, serif`,
          fontSize: '22px',
          fontWeight: 400,
          maxWidth: '500px',
        }}
      >
        {data.shortdescription}
      </p>
      <p
        className="mx-auto mb-2 d-block d-md-none"
        style={{
          fontFamily: `TNYAdobeCaslonPro, 'Times New Roman', Times, serif`,
          fontSize: '18px',
          fontWeight: 400,
          maxWidth: '500px',
        }}
      >
        {data.shortdescription}
      </p>

      <div
        className="d-flex align-items-center justify-content-center mt-2"
        style={{ fontSize: '10px' }}
      >
        <BiCalendar size={10} style={{ marginRight: '4px', color: '#fff' }} />
        <span style={{ color: '#fff', fontWeight: 500, fontSize: '8px' }}>Published on</span>
        <span style={{ color: '#fff', marginLeft: '4px', fontSize: '8px' }}>{data.date}</span>
      </div>
    </Col>

    <Col
      md={6}
      xs={12}
      className="d-flex align-items-stretch"
      style={{ backgroundColor: '#000' }}
    >
      <Image
        src={data.image}
        alt={data.title ?? 'Image'}
        width={300}
        height={200}
        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        sizes="(max-width: 768px) 100vw, 50vw"
      />
    </Col>
  </>
);

export default SecondImageContent;
