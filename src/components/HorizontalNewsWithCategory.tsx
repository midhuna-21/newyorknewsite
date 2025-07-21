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
    const checkDesktop = () => setIsDesktop(window.innerWidth >= 993);
    checkDesktop();
    window.addEventListener('resize', checkDesktop);
    return () => window.removeEventListener('resize', checkDesktop);
  }, []);

  if (isDesktop === null) return null;

  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: isDesktop ? 'repeat(4, 1fr)' : '1fr',
        gap: 0,
        position: 'relative',
      }}
    >
      {displayItems.map((item, index) => {
        const isLast = index === displayItems.length - 1;

        const borderStyle = isDesktop
          ? {
              borderRight: isLast ? 'none' : '1px solid #ccc',
              padding: '0 10px',
            }
          : {
              borderBottom: isLast ? 'none' : '1px solid #ddd',
              padding: '0 10px',
            };

        return (
          <div key={index} style={{ position: 'relative', ...borderStyle }}>
            <NewsCardWithCategory data={item} />
          </div>
        );
      })}
    </div>
  );
};

export default HorizontalNewsWithCategory;
