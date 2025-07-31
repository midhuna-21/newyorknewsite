import React from 'react';
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
    <div
      style={{
        width: '100%',
        maxWidth: '1200px',
        margin: '0 auto',
      }}
    >
      {/* Desktop view */}
      <div
        className="d-none d-lg-grid"
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '30px',
        }}
      >
        {displayItems.map((item, index) => (
          <div key={index} style={{ position: 'relative' }}>
            <CriticWithoutCategory data={item} />
            
          </div>
        ))}
      </div>

      {/* Mobile view */}
      <div className="d-block d-lg-none">
        {displayItems.map((item, index) => (
          <div key={index} style={{ marginBottom: '20px' }}>
            <CriticWithoutCategory data={item} />

              {index !== displayItems.length - 1 && (
              <hr
                style={{
                  margin: '10px 0',
                  border: 'none',
                  borderTop: '1px solid #ccc',
                }}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
