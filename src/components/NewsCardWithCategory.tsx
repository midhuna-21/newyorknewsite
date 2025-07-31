import Link from 'next/link';
import Image from 'next/image';
import { BiCalendar } from 'react-icons/bi';
import React from 'react';

interface NewsCardProps {
  data: {
    category: string;
    title: string;
    shortdescription?: string;
    description?: string;
    image: string;
    slug: string;
    date: string;
  };
}

const NewsCardWithCategory: React.FC<NewsCardProps> = ({ data }) => {
  return (
    <div className="w-100">
      <Link
        href={`/${data.category}/${data.slug}`}
        title={data.slug}
        className="text-decoration-none"
        style={{ color: 'inherit', display: 'block' }}
      >
        {/* Desktop View */}
        <div className="d-none d-lg-block">
          <Image
            src={data.image}
            alt={data.title}
            width={400}
            height={300}
            style={{
              aspectRatio: '4 / 3',
              objectFit: 'cover',
              width: '100%',
              height: 'auto',
              borderRadius: 0,
              display: 'block',
            }}
            sizes="(max-width: 768px) 100vw, 33vw"
          />

          {/* <p
            style={{
              fontSize: '12px',
              fontWeight: 400,
              color: 'rgb(219, 51, 52)',
              textTransform: 'uppercase',
              letterSpacing: '0.5px',
              marginTop: '20px',
              marginBottom: '10px',
              fontFamily: 'Georgia, serif',
            }}
          >
            {data.category}
          </p> */}

          <p
            style={{
              color: '#000',
              fontFamily: `TNYAdobeCaslonPro, "Times New Roman", Times, serif`,
              fontSize: '22px',
              fontWeight: 400,
              marginBottom: '10px',
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
              marginBottom: '10px',
              display: '-webkit-box',
              WebkitLineClamp: 3,
              WebkitBoxOrient: 'vertical',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
            }}
          >
            {data.shortdescription}
          </p>

          <div className="d-flex align-items-center mt-2" style={{ fontSize: '10px' }}>
            <BiCalendar size={10} style={{ marginRight: '4px', color: '#999' }} />
            <span style={{ color: '#c0392b', fontWeight: 500, fontSize: '8px' }}>
              Published on
            </span>
            <span style={{ color: '#4d5459ff', marginLeft: '4px', fontSize: '8px' }}>
              {data.date}
            </span>
          </div>
        </div>

        {/* === Mobile & Tablet === */}
        <div className="d-block d-lg-none">
          {/* <p
            style={{
              fontSize: '12px',
              fontWeight: 400,
              color: 'rgb(219, 51, 52)',
              textTransform: 'uppercase',
              letterSpacing: '0.5px',
              marginTop: '10px',
              marginBottom: '6px',
              fontFamily: 'Georgia, serif',
            }}
          >
            {data.category}
          </p> */}

          <p
            style={{
              color: '#000',
              fontFamily: `TNYAdobeCaslonPro, "Times New Roman", Times, serif`,
              fontSize: '22px',
              fontWeight: 400,
              marginBottom: '6px',
            }}
            className='hover-underline'
          >
            {data.title}
          </p>

          <div
            className="d-flex gap-2 align-items-start"
            style={{ marginBottom: '10px' }}
          >
            <div style={{ flex: 1 }}>
              <p
                style={{
                  color: 'rgb(51, 51, 51)',
                  fontFamily: `TNYAdobeCaslonPro, "Times New Roman", Times, serif`,
                  fontSize: '16px',
                  fontWeight: 400,
                  display: '-webkit-box',
                  WebkitLineClamp: 3,
                  WebkitBoxOrient: 'vertical',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  marginBottom: '10px',
                }}
              >
                {data.shortdescription}
              </p>

              <div className="d-flex align-items-center" style={{ fontSize: '10px' }}>
                <BiCalendar size={10} style={{ marginRight: '4px', color: '#999' }} />
                <span style={{ color: '#c0392b', fontWeight: 500, fontSize: '8px' }}>
                  Published on
                </span>
                <span style={{ color: '#4d5459ff', marginLeft: '4px', fontSize: '8px' }}>
                  {data.date}
                </span>
              </div>
            </div>

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
                width={100}
                height={100}
                style={{
                  objectFit: 'cover',
                  display: 'block',
                  width: '100px',
                  height: '100px',
                }}
              />
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default NewsCardWithCategory;
