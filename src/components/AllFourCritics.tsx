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
      {/* === Desktop: 4-column layout === */}
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

      {/* === Mobile / Tablet: 1-column layout === */}
      <div className="d-block d-lg-none">
        {displayItems.map((item, index) => (
          <div key={index} style={{ marginBottom: '20px' }}>
            <CriticWithoutCategory data={item} />
          </div>
        ))}
      </div>
    </div>
  );
}
