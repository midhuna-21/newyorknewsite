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
  const displayItems = data.slice(0, 4); 
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

      {index < displayItems.length - 1 && (
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

export default HorizontalNewsWithCategory;
