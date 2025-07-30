import Link from 'next/link';
import React from 'react';
import { BiCalendar } from 'react-icons/bi';

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

const NewsCenteredText = ({ data }: NewsCardProps) => {
  return (
    <div>
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
        <div
          style={{
            maxWidth: '300px',
            margin: '0 auto',
            fontFamily: '"Georgia", serif',
            display: 'flex',
            flexDirection: 'column',
            width: '100%',
          }}
        >
          <img
            src={data.image}
            alt={data.title}
            style={{
              aspectRatio: '4 / 3',
              objectFit: 'cover',
              width: '100%',
              height: 'auto',
              borderRadius: '0',
            }}
          />

          <div style={{ padding: '20px 0 0 0', textAlign: 'center' }}>
            <h3
              style={{
                color: '#000',
                fontFamily: 'TNYAdobeCaslonPro, "Times New Roman", Times, serif',
                fontSize: '22px',
                fontWeight: 400,
                margin: 0,
              }}
            >
              {data.title}
            </h3>

            <p
              style={{
                fontSize: '1rem',
                lineHeight: '1.8',
                color: '#333',
                marginTop: '12px',
                marginBottom: '0',
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
              <BiCalendar size={10} style={{ marginRight: '4px', color: '#999' }} />
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
                  color: '#4d5459ff',
                  marginLeft: '4px',
                  fontSize: '8px',
                }}
              >
                {data.date}
              </span>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default NewsCenteredText;
