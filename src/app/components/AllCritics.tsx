'use client';

import React from 'react';
import TheCritics from './CriticsCard';

interface NewsData {
  title: string;
  shortdescription: string;
  image: string;
  slug: string;
  category: string;
  description: string;
  date: string;
}

interface AllCriticsProps {
  data: NewsData[];
}

export default function AllCritics({ data }: AllCriticsProps) {
  return (
    <div className="container py-5">
      <div className="d-flex gap-3 overflow-auto">
        {data.map((item, index) => (
          <React.Fragment key={index}>
            <TheCritics data={item} />
            {index < data.length - 1 && (
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
}
