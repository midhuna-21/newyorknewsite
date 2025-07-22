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
  const [isDesktop, setIsDesktop] = useState<boolean | null>(null);

  useEffect(() => {
    const handleResize = () => setIsDesktop(window.innerWidth >= 993);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  if (isDesktop === null) return null;

  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: isDesktop ? 'repeat(4, 1fr)' : '1fr',
        gap: 0,
      }}
    >
      {displayItems.map((item, index) => {
        const isLast = index === displayItems.length - 1;

        return (
          <div
            key={index}
            style={{
              position: 'relative',
              padding: isDesktop ? '0 10px' : '10px 0',
            }}
          >
            {isDesktop && !isLast && (
              <div
                style={{
                  position: 'absolute',
                  top: 10,
                  right: 0,
                  height: '170px',
                  width: '1px',
                  backgroundColor: '#ccc',
                }}
              />
            )}
            <NewsCardWithCategory data={item} />
          </div>
        );
      })}
    </div>
  );
};

export default HorizontalNewsWithCategory;
