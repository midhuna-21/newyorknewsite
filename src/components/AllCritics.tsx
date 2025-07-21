'use client';

import React, { useEffect, useState } from 'react';
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
  const [columns, setColumns] = useState(3);

  useEffect(() => {
    const updateColumns = () => {
      const width = window.innerWidth;
      if (width < 992) setColumns(1); 
      else setColumns(3);         
    };

    updateColumns();
    window.addEventListener('resize', updateColumns);
    return () => window.removeEventListener('resize', updateColumns);
  }, []);

  const isLastColumn = (i: number) => {
    return (i + 1) % columns === 0;
  };

  return (
    <div>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: columns === 1 ? '1fr' : `repeat(${columns}, 1fr)`,
          gap: columns === 1 ? '0px' : '20px',
        }}
      >
        {displayItems.map((item, index) => (
          <div key={index} style={{ position: 'relative' }}>
            <TheCritics data={item} />

            {columns > 1 && !isLastColumn(index) && (
              <div
                style={{
                  position: 'absolute',
                  top: '30px',
                  right: 0,
                  height: '240px',
                  width: '1px',
                  backgroundColor: '#eee',
                }}
              />
            )}

            {columns === 1 && index !== displayItems.length - 1 && (
              <hr
                style={{
                  margin: '10px 0',
                  border: 'none',
                  borderTop: '1px solid #ddd',
                }}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
