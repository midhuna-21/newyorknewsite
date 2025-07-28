import React from 'react';
import Image from 'next/image';

interface NewsImageWithCaptionProps {
  data: {
    image: string;
    shortdescription: string;
    date: string;
    slug: string;
  };
}

const NewsImageWithCaption = ({ data }: NewsImageWithCaptionProps) => {
  const { image, shortdescription, date, slug } = data;

  return (
    <div className="container my-4">
      <div className="row">
        <div className="col-lg-10 mx-auto">
          <div style={{ width: '100%' }}>
            <Image
              src={image}
              alt={slug}
              width={1200}
              height={675}
              style={{
                width: '100%',
                height: 'auto',
                objectFit: 'cover',
              }}
            />
          </div>
          <p
            style={{
              fontFamily: 'Graphik, "Helvetica Neue", Helvetica, Arial, sans-serif',
              fontSize: '13px',
              color: '#000',
              marginTop: '10px',
              lineHeight: 1.6,
            }}
          >
            {shortdescription}{' '}
            <span style={{ color: '#000', opacity: 0.6, fontSize: '8px' }}>Published on</span>
            <span style={{ color: '#555', marginLeft: '4px', fontSize: '8px' }}>{date}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default NewsImageWithCaption;
