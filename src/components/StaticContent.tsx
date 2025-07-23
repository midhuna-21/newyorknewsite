import React from 'react';

interface TitleWithDescriptionProps {
  title: string;
  description: string;
}

const StaticContent: React.FC<TitleWithDescriptionProps> = ({ title, description }) => {
  return (
    <div
      className="fade-in-up"
      style={{
        marginBottom: '3rem',
        padding: '0 1rem',
      }}
    >
      <h2
        style={{
          fontFamily: 'Georgia, serif',
          fontSize: 'clamp(24px, 5vw, 32px)',
          fontWeight: 400,
          textTransform: 'capitalize',
          lineHeight: 1.3,
          marginBottom: '1rem',
          color: '#111',
          textAlign: 'center',
          letterSpacing: '0.5px',
          borderBottom: '2px solid rgba(0,0,0,0.1)',
          paddingBottom: '0.5rem',
          maxWidth: '800px',
          marginInline: 'auto',
          textShadow: '0 1px 1px rgba(0, 0, 0, 0.05)',
        }}
      >
        {title.replace(/_/g, ' ')}
      </h2>

      <p
        style={{
          fontFamily: '"Times New Roman", Times, serif',
          fontSize: 'clamp(15px, 2vw, 19px)',
          lineHeight: 1.6,
          color: '#333',
          textAlign: 'justify',
          maxWidth: '800px',
          margin: '0 auto',
        }}
      >
        {description}
      </p>
    </div>
  );
};

export default StaticContent;
