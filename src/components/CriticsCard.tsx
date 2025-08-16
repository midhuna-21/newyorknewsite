import Link from 'next/link';
import { BiCalendar } from 'react-icons/bi';
import Image from 'next/image';
import React from 'react';

interface CriticsCardProps {
  data: {
    title: string;
    shortdescription?: string;
    image: string;
    author?: string;
    category?: string;
    date: string;
    slug: string;
  };
}

const TheCritics: React.FC<CriticsCardProps> = ({ data }) => {
  return (
    <div style={{ fontFamily: 'Georgia, serif', paddingBottom: '1rem' }}>
      <Link
        title={data.slug}
        href={`/${data.category}/${data.slug}`}
        className="text-decoration-none"
        style={{ color: 'inherit', display: 'block' }}
      >

        {/* Desktop view */}
        <div className="d-none d-lg-block text-center">
          <div
            style={{
              width: '200px',
              height: '270px',
              margin: '0 auto',
              overflow: 'hidden',
              position: 'relative',
            }}
          >
            <Image
              src={data.image}
           alt={data.title}
            title={data.title}
              width={200}
              height={270}
              style={{ objectFit: 'cover' }}
            />
          </div>

          <p
            style={{
              fontSize: '12px',
              fontWeight: 400,
              color: 'rgb(219, 51, 52)',
              textTransform: 'uppercase',
              letterSpacing: '0.5px',
              marginTop: '15px',
              marginBottom: '10px',
              marginLeft: 'auto',
              marginRight: 'auto',
              maxWidth: '600px',
            }}
          >
            {data.category}
          </p>

          <p
            style={{
              color: '#000',
              fontFamily: `TNYAdobeCaslonPro, "Times New Roman", Times, serif`,
              fontSize: '22px',
              fontWeight: 400,
              margin: '-6px auto 12px',
              maxWidth: '600px',
            }}
            className='hover-underline'
          >
            {data.title}
          </p>

          <p
            style={{
              color: 'rgb(51, 51, 51)',
              fontFamily: `TNYAdobeCaslonPro, "Times New Roman", Times, serif`,
              fontSize: '16px',
              fontWeight: 400,
              margin: 0,
              display: '-webkit-box',
              WebkitLineClamp: 2,
              WebkitBoxOrient: 'vertical',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
            }}
          >
            {data.shortdescription}
          </p>

          <div
            className="d-flex align-items-center justify-content-center mt-2"
            style={{ fontSize: '10px' }}
          >
            <BiCalendar size={10} style={{ marginRight: '4px', color: '#999' }} />
            <span style={{ color: '#c0392b', fontWeight: 500, fontSize: '8px' }}>
              Published on
            </span>
            <span style={{ color: '#4d5459ff', marginLeft: '4px', fontSize: '8px' }}>
              {data.date}
            </span>
          </div>
        </div>

        {/* Mobile View */}
        <div className="d-block d-lg-none">
          <p
            style={{
              fontSize: '12px',
              fontWeight: 400,
              color: 'rgb(219, 51, 52)',
              textTransform: 'uppercase',
              letterSpacing: '0.5px',
              marginTop: '15px',
              marginBottom: '10px',
              maxWidth: '100%',
            }}
          >
            {data.category}
          </p>

          <p
            style={{
              color: '#000',
              fontFamily: `TNYAdobeCaslonPro, "Times New Roman", Times, serif`,
              fontSize: '22px',
              fontWeight: 400,
              margin: '0 0 6px 0',
              maxWidth: '100%',
            }}
            className='hover-underline'
          >
            {data.title}
          </p>

          <div
            className="d-flex justify-content-between align-items-center mb-2"
            style={{ gap: '12px' }}
          >
            <p
              style={{
                color: 'rgb(51, 51, 51)',
                fontFamily: `TNYAdobeCaslonPro, "Times New Roman", Times, serif`,
                fontSize: '16px',
                fontWeight: 400,
                flex: 1,
                margin: 0,
                display: '-webkit-box',
                WebkitLineClamp: 4,
                WebkitBoxOrient: 'vertical',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
              }}
            >
              {data.shortdescription}
            </p>

            <div
              style={{
                flexShrink: 0,
                width: '100px',
                height: '100px',
                position: 'relative',
              }}
            >
              <Image
                src={data.image}
             alt={data.title}
            title={data.title}
                width={100}
                height={100}
                style={{ objectFit: 'cover', display: 'block' }}
              />
            </div>
          </div>

          <div
            className="d-flex align-items-center justify-content-start mt-2"
            style={{ fontSize: '10px' }}
          >
            <BiCalendar size={10} style={{ marginRight: '4px', color: '#999' }} />
            <span style={{ color: '#c0392b', fontWeight: 500, fontSize: '8px' }}>
              Published on
            </span>
            <span style={{ color: '#4d5459ff', marginLeft: '4px', fontSize: '8px' }}>
              {data.date}
            </span>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default TheCritics;
