import Image from 'next/image';
import Link from 'next/link';
import { BiCalendar } from 'react-icons/bi';
import React from 'react';

interface CriticsCardProps {
  data: {
    title: string;
    shortdescription: string;
    image: string;
    author?: string;
    category?: string;
    date: string;
    slug: string;
  };
}

const CriticWithoutCategory: React.FC<CriticsCardProps> = ({ data }) => {
  return (
    <div style={{ fontFamily: 'Georgia, serif' }}>
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
              style={{ objectFit: 'cover', display: 'block' }}
            />
          </div>

          <p
            style={{
              color: '#000',
              fontFamily: `TNYAdobeCaslonPro, "Times New Roman", Times, serif`,
              fontSize: '22px',
              fontWeight: 400,
              margin: '12px auto',
              maxWidth: '600px',
              lineHeight: 1.2,
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
              margin: '0 auto 8px',
              maxWidth: '600px',
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
            <span style={{ color: '#c0392b', fontWeight: 500, fontSize: '8px' }}>Published on</span>
            <span style={{ color: '#4d5459ff', marginLeft: '4px', fontSize: '8px' }}>
              {data.date}
            </span>
          </div>
        </div>

        {/* Mobile/Tablet view */}
        <div className="d-block d-lg-none">
          <p
            style={{
              color: '#000',
              fontFamily: `TNYAdobeCaslonPro, "Times New Roman", Times, serif`,
              fontSize: '22px',
              fontWeight: 400,
              margin: '0 0 6px 0',
              lineHeight: 1.2,
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
                margin: 0,
                flex: 1,
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
                width: '100px',
                height: '100px',
                flexShrink: 0,
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
            <span style={{ color: '#c0392b', fontWeight: 500, fontSize: '8px' }}>Published on</span>
            <span style={{ color: '#4d5459ff', marginLeft: '4px', fontSize: '8px' }}>
              {data.date}
            </span>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default CriticWithoutCategory;
