import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { BiCalendar } from 'react-icons/bi';

interface NewsCardProps {
  data: {
    category: string;
    title: string;
    shortdescription: string;
    description?: string;
    date: string;
    image: string;
    slug: string;
  };
}

const NewsMiniFeatureCard = ({ data }: NewsCardProps) => {
  return (
    <div className="d-block">
      <Link
        title={data.slug}
        href={`/${data.category}/${data.slug}`}
        className="text-decoration-none text-reset d-flex flex-nowrap gap-3"
        style={{ alignItems: 'flex-start', justifyContent: 'space-between' }}
      >
        <div className="flex-grow-1" style={{ minWidth: 0 }}>
          <p
            className="mb-3"
            style={{
              color: '#000',
              fontFamily: 'TNYAdobeCaslonPro, "Times New Roman", Times, serif',
              fontSize: '22px',
              fontWeight: 400,
              lineHeight: 1.4,
            }}
          >
            {data.title}
          </p>

          <div className="d-flex flex-row gap-2 align-items-start">
            <div className="flex-grow-1">
              <p
                className="mb-2"
                style={{
                  color: 'rgb(51, 51, 51)',
                  fontFamily: 'TNYAdobeCaslonPro, "Times New Roman", Times, serif',
                  fontSize: '16px',
                  fontWeight: 400,
                  display: '-webkit-box',
                  WebkitLineClamp: 3,
                  WebkitBoxOrient: 'vertical',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                }}
              >
                {data.shortdescription}
              </p>

              <div
                className="d-flex align-items-center mt-2"
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
            <div
              className="d-block d-sm-none"
              style={{
                width: '100px',
                height: '100px',
                overflow: 'hidden',
                flexShrink: 0,
              }}
            >
              <Image
                src={data.image}
                alt={data.title}
                width={100}
                height={100}
                style={{
                  objectFit: 'cover',
                  width: '100%',
                  height: '100%',
                  display: 'block',
                }}
              />
            </div>

            {/* Tablet and above */}
            <div
              className="d-none d-sm-block"
              style={{
                width: '140px',
                height: '140px',
                overflow: 'hidden',
                flexShrink: 0,
              }}
            >
              <Image
                src={data.image}
                alt={data.title}
                width={140}
                height={140}
                style={{
                  objectFit: 'cover',
                  width: '100%',
                  height: '100%',
                  display: 'block',
                }}
              />
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default NewsMiniFeatureCard;
