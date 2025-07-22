'use client';

import React, { useEffect, useState } from 'react';
import NewsCardWithCategory from './NewsCardWithCategory';

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

const HorizontalNewsWithCategory = ({ data }: NewsCardProps) => {
  const displayItems = data.slice(0, 4);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsDesktop(window.innerWidth >= 993);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: isDesktop ? 'row' : 'column',
        gap: isDesktop ? '20px' : '10px',
        alignItems: 'flex-start',
      }}
    >
      {displayItems.map((item, index) => {
        const isLast = index === displayItems.length - 1;
        return (
          <React.Fragment key={index}>
            <div style={{ flex: '1 1 0' }}>
              <NewsCardWithCategory data={item} />
            </div>

            {!isLast && (
              <div
                style={{
                  width: isDesktop ? '1px' : '100%',
                  height: isDesktop ? '180px' : '1px',
                  backgroundColor: '#ccc',
                  alignSelf: isDesktop ? 'flex-start' : 'stretch',
                }}
              />
            )}
          </React.Fragment>
        );
      })}
    </div>
  );
};

export default HorizontalNewsWithCategory;
