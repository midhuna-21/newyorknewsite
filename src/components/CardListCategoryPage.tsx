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

const CardListCategoryPage = ({ data }: NewsCardProps) => {
  const displayItems = data.slice(0, 4); 

  return (
  <div
  className='container py-3'
  style={{
    display: 'flex',
    gap: '30px',
    alignItems: 'flex-start',
  }}
>
  {displayItems.map((item, index) => (
    <React.Fragment key={index}>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <NewsCardWithCategory data={item} />
      </div>
    </React.Fragment>
  ))}
</div>

  );
};

export default CardListCategoryPage;
