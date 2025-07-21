'use client';

import React, { useEffect, useState } from 'react';

interface ArticleParagraphProps {
  data: {
    description?: string;
  };
}

const ArticleParagraphWith = ({ data }: ArticleParagraphProps) => {
  const description = data.description ?? '';
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div>
      <p
        style={{
          fontFamily: 'TNYAdobeCaslonPro, "Times New Roman", Times, serif',
          fontSize: isMobile ? '17px' : '21px',
          lineHeight: 1.4,
          color: '#000',
          textAlign: 'justify',
        }}
      >
        <span
          style={{
            float: 'left',
            fontSize: isMobile ? '40px' : '56px',
            paddingRight: '6px',
            fontWeight: 600,
            lineHeight: 1,
          }}
        >
          {description.charAt(0)}
        </span>
        {description.slice(1)}
      </p>
    </div>
  );
};

export default ArticleParagraphWith;
