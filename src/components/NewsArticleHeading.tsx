import React from 'react';

interface NewsHeroProps {
  data: {
    title: string;
    shortdescription?: string;
    description?: string;
    date: string;
    category: string;
  };
}

const NewsArticleHeading = ({ data }: NewsHeroProps) => {
  return (
    <div>
      <p
        style={{
          fontSize: '12px',
          fontWeight: 400,
          color: 'rgb(219, 51, 52)',
          textTransform: 'uppercase',
          letterSpacing: '0.5px',
          marginTop: '20px',
          marginBottom: '10px',
          fontFamily: `'Georgia', serif`
        }}>
        {data.category}
      </p>
      <h1
        style={{
          fontFamily: `'Georgia', serif`,
          fontSize: '40px',
          fontWeight: 400,
          lineHeight: 1.2,
          marginBottom: '12px',
          textTransform: 'uppercase',
        }}
      >
        {data.title}
      </h1>

      <p
        style={{
          fontFamily: 'TNYAdobeCaslonPro, "Times New Roman", Times, serif',
          fontStyle: 'italic',
          fontSize: '21px',
          color: 'rgb(18, 18, 18)',
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
