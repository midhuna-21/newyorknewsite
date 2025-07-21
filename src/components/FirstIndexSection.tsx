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
    <div style={{ backgroundColor: '#000', color: '#fff' }} id="first-index-section">
      <Container fluid style={{ padding: 0 }}>
        <Row
          className="align-items-stretch first-section-row"
          style={{
            minHeight: '70vh', 
          }}
        >
       <Col
  md={6}
  xs={12}
  id="first-section-text-col"
  style={{
    padding: 'clamp(40px, 5vw, 80px) clamp(20px, 5vw, 60px)',
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center', 
    backgroundColor: '#000',
  }}
>


            <Link
              title={data.slug}
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
              <h2
  className="category-heading"
  style={{
    fontFamily: '"Georgia", serif',
    fontSize: 'clamp(14px, 4vw, 28px)',
    textTransform: 'uppercase',
    letterSpacing: '1px',
    fontWeight: 400,
    marginBottom: '0.3rem',
    marginTop: '0.5rem',
  }}
>
  {data.category}
</h2>


                <p
                  style={{
                    color: '#fff',
                    fontFamily:
                      'TNYAdobeCaslonPro, "Times New Roman", Times, serif',
                    fontSize: 'clamp(14px, 2vw, 22px)',
                    fontWeight: 400,
                    maxWidth: '700px',
                    margin: '0 auto 1rem',
                  }}
                >
                  {data.shortdescription}
                </p>

                <div style={{ fontSize: '10px', color: '#aaa' }}>
                  <BiCalendar
                    size={10}
                    style={{ marginRight: '4px', color: '#fff' }}
                  />
                  <span style={{ color: '#fff', opacity: 0.6 }}>Published on</span>
                  <span style={{ color: '#ccc', marginLeft: '4px' }}>
                    {data.date}
                  </span>
                </div>
              </div>
            </Link>
          </Col>

          <Col
            md={6}
            xs={12}
            style={{
              padding: 0,
              overflow: 'hidden',
              display: 'flex',
              alignItems: 'stretch',
              justifyContent: 'center',
            }}
          >
            <img
              src={data.image}
              alt={data.title}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
              }}
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default FirstIndexSection;
