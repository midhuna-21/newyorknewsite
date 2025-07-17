'use client';

import React from 'react';
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
  const displayItems = data.slice(0, 4); // show only up to 4

  return (
  <div
  className='container py-5'
  style={{
    display: 'flex',
    gap: '20px',
    alignItems: 'flex-start',
  }}
>
  {displayItems.map((item, index) => (
    <React.Fragment key={index}>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <NewsCardWithCategory data={item} />
      </div>

      {/* Show vertical line between cards */}
      {index < displayItems.length - 1 && (
        <div
          style={{
            width: '1px',
            backgroundColor: '#ccc',
            height: '180px', // match this to your image height
            alignSelf: 'flex-start',
          }}
        ></div>
      )}
    </React.Fragment>
  ))}
</div>

  );
};

export default HorizontalNewsWithCategory;
