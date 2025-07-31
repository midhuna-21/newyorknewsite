import Link from 'next/link';
import { BiCalendar } from 'react-icons/bi';
import React from 'react';

interface HeroImageData {
  category: string;
  title: string;
  shortdescription?: string;
  description?: string;
  image: string;
  slug: string;
  date: string;
}

interface Props {
  data: HeroImageData;
}

const HeroImageSection: React.FC<Props> = ({ data }) => {
  return (
    <div style={{ width: '100%', paddingTop: '3rem', paddingBottom: '2rem' }}>
      <Link
        href={`/${data.category}/${data.slug}`}
        title={data.slug}
        className="text-decoration-none"
        style={{ color: 'inherit', display: 'block' }}
      >
        {/* Desktop  view */}
        <div
          className="d-none d-lg-flex align-items-center justify-content-end px-3"
          style={{
            width: '100%',
            minHeight: '90vh',
            backgroundImage: `url(${data.image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            textAlign: 'center',
          }}
        >
          <div
            className="text-white w-100"
            style={{
              maxWidth: '550px',
              padding: '1.5rem',
            }}
          >
            <p
              className="text-uppercase mb-2"
              style={{
                fontFamily: 'Georgia, serif',
                fontSize: '1rem',
                letterSpacing: '1px',
                fontWeight: 400,
              }}
            >
              {data.category}
            </p>

            <h2
              className="text-uppercase mb-3"
              style={{
                fontFamily: 'Georgia, serif',
                fontSize: '2rem',
                letterSpacing: '1px',
                fontWeight: 400,
              }}
            >
              {data.title}
            </h2>

            <p
              className="mb-3"
              style={{
                fontFamily: 'TNYAdobeCaslonPro, Times New Roman, Times, serif',
                fontSize: '1.25rem',
                fontWeight: 400,
              }}
            >
              {data.shortdescription}
            </p>

            <div
              className="d-flex align-items-center justify-content-center mt-2"
              style={{ fontSize: '10px' }}
            >
              <BiCalendar size={10} style={{ marginRight: '4px', color: '#fff' }} />
              <span style={{ color: '#fff', fontWeight: 500, fontSize: '8px' }}>
                Published on
              </span>
              <span style={{ color: '#fff', marginLeft: '4px', fontSize: '8px' }}>
                {data.date}
              </span>
            </div>
          </div>
        </div>

        {/* Mobile View */}
        <div
          className="d-block d-lg-none d-flex align-items-center justify-content-center px-3"
          style={{
            width: '100%',
            minHeight: '60vh',
            backgroundImage: `url(${data.image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            textAlign: 'center',
          }}
        >
          <div
            className="text-white w-100"
            style={{
              maxWidth: '90%',
              padding: '1.5rem',
            }}
          >
            <p
              className="text-uppercase mb-2"
              style={{
                fontFamily: 'Georgia, serif',
                fontSize: '0.75rem',
                letterSpacing: '1px',
                fontWeight: 400,
              }}
            >
              {data.category}
            </p>

            <h2
              className="text-uppercase mb-3"
              style={{
                fontFamily: 'Georgia, serif',
                fontSize: '22px',
                letterSpacing: '1px',
                fontWeight: 400,
              }}
            >
              {data.title}
            </h2>

            <p
              className="mb-3"
              style={{
                fontFamily: 'TNYAdobeCaslonPro, Times New Roman, Times, serif',
                fontSize: '18px',
                fontWeight: 400,
              }}
            >
              {data.shortdescription}
            </p>

            <div
              className="d-flex align-items-center justify-content-center mt-2"
              style={{ fontSize: '10px' }}
            >
              <BiCalendar size={10} style={{ marginRight: '4px', color: '#fff' }} />
              <span style={{ color: '#fff', fontWeight: 500, fontSize: '8px' }}>
                Published on
              </span>
              <span style={{ color: '#fff', marginLeft: '4px', fontSize: '8px' }}>
                {data.date}
              </span>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default HeroImageSection;
