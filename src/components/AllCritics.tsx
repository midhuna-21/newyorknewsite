import React from 'react';
import TheCritics from './CriticsCard';

interface NewsData {
  title: string;
  shortdescription?: string;
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
    <div className="w-100">
      {/* === Desktop layout: 3 columns === */}
      <div className="d-none d-lg-grid" style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: '20px',
      }}>
        {displayItems.map((item, index) => {
          const isLastColumn = (index + 1) % 3 === 0;
          return (
            <div key={index} style={{ position: 'relative' }}>
              <TheCritics data={item} />

              {!isLastColumn && (
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
            </div>
          );
        })}
      </div>

      {/* === Mobile/tablet layout: 1 column === */}
      <div className="d-block d-lg-none">
        {displayItems.map((item, index) => (
          <div key={index}>
            <TheCritics data={item} />

            {index !== displayItems.length - 1 && (
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
