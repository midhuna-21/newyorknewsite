'use client';

import React from 'react';
import NewsCard from './NewsCard';

interface NewsCardListProps {
  data: Array<{
    category: string;
    title: string;
    shortdescription: string;
    description: string;
    image: string;
    slug: string;
    date: string;
  }>;
}

const NewsCardList = ({ data }: NewsCardListProps) => {
  // Only show 4 items per page
  const displayItems = data.slice(0, 4);

  return (
    <div className="container py-4">
      <div
        className="d-flex justify-content-between align-items-stretch"
        style={{ gap: '20px' }}
      >
        {displayItems.map((item, index) => (
          <React.Fragment key={index}>
            {/* NewsCard */}
            <div style={{ flex: 1 }}>
              <NewsCard data={item} />
            </div>

            {/* Vertical Line (except after the last item) */}
            {index < displayItems.length - 1 && (
              <div
                style={{
                  width: '1px',
                  backgroundColor: '#ccc',
                  height: 'auto',
                }}
              ></div>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default NewsCardList;
