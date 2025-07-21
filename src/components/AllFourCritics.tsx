'use client';

import React, { useEffect, useState } from 'react';
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
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 992);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <div
      style={{
        width: '100%',
        maxWidth: '1200px',
        margin: '0 auto',
      }}
    >
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: isMobile ? '1fr' : 'repeat(4, 1fr)',
          gap: isMobile ? '20px' : '30px',
        }}
      >
        {displayItems.map((item, index) => (
          <div key={index} style={{ position: 'relative' }}>
            <CriticWithoutCategory data={item} />

            {/* Vertical Divider for desktop only */}
            {/* {!isMobile && index !== displayItems.length - 1 && (
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
            )} */}
          </div>
        ))}
      </div>
    </div>
  );
}
