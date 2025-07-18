'use client';

import React from 'react';
import TheCritics from './CriticsCard';
import CriticWithoutCategory from './CriticWithoutCategory';

interface NewsData {
  title: string;
  shortdescription: string;
  image: string;
  slug: string;
  category: string;
  description?: string;
  date: string;
}

interface AllCriticsProps {
  data: NewsData[];
}

export default function AllFourCritics({ data }: AllCriticsProps) {
  const displayItems = data.slice(0, 4); 

  return (
    <div className="container py-5">
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)', 
          gap: '30px',
        }}
      >
        {displayItems.map((item, index) => (
          <div key={index} style={{ position: 'relative' }}>
            <CriticWithoutCategory data={item} />

            {index !== displayItems.length - 1 && (
              <div
                style={{
                  position: 'absolute',
                  top: '30px',
                  right: '0',
                  height: '260px',
                  width: '0.5px',
                  backgroundColor: '#eee',
                }}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
