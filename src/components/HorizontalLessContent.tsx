'use client';

import React, { useEffect, useState } from 'react';
import NewsCardLessContent from './NewsCardLessContent';

interface NewsCardProps {
  data: Array<{
    category: string;
    title: string;
    shortdescription?: string;
    description?: string;
    image: string;
    slug: string;
    date: string;
  }>;
}

const HorizontalLessContent = ({ data }: NewsCardProps) => {
  const displayItems = data.slice(0, 4);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 992);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: isMobile ? 'column' : 'row',
        gap: isMobile ? '40px' : '20px',
        alignItems: 'flex-start',
      }}
    >
      {displayItems.map((item, index) => (
        <React.Fragment key={index}>
          <div style={{ flex: '1 1 0' }}>
            <NewsCardLessContent
              data={{
                category: item.category,
                title: item.title,
                image: item.image,
                slug: item.slug,
                date: item.date,
              }}
            />
          </div>

          {/* Only show divider on desktop */}
          {!isMobile && index < displayItems.length - 1 && (
            <div
              style={{
                width: '1px',
                backgroundColor: '#ccc',
                height: '180px',
                alignSelf: 'flex-start',
              }}
            ></div>
          )}
        </React.Fragment>
      ))}
    </div>
  );
};

export default HorizontalLessContent;
