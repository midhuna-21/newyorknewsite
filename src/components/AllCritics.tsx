'use client';

import React from 'react';
import TheCritics from './CriticsCard';

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

export default function AllCritics({ data }: AllCriticsProps) {
  const displayItems = data.slice(0, 6); 

  return (
    <div>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '30px',
        }}
      >
        {displayItems.map((item, index) => (
          <div key={index} style={{ position: 'relative' }}>
            <TheCritics data={item} />

            {(index % 3 === 0 || index % 3 === 1) && (
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
