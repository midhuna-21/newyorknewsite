'use client';

import React from 'react';

interface NewsHeroProps {
  data: {
    title: string;
    shortdescription?: string;
    description?:string;
    date: string;
  };
}

const NewsArticleHeading = ({ data }: NewsHeroProps) => {
  return (
    <div>
          {/* Title */}
          <h1
            style={{
              fontFamily: `'Georgia', serif`,
              fontSize: '40px',
              fontWeight: 600,
              lineHeight: 1.2,
              marginBottom: '12px',
              textTransform: 'uppercase',
            }}
          >
            {data.title}
          </h1>

          {/* Subtitle */}
          <p
            style={{
              fontStyle: 'italic',
              fontSize: '18px',
              color: '#333',
              lineHeight: 1.6,
              maxWidth: '800px',
              marginBottom: '30px',
            }}
          >
            {data.shortdescription}
          </p>
    </div>
  );
};

export default NewsArticleHeading;
