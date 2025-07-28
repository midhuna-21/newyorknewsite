import React from 'react';
import HeroMiniCards from './HeroMiniCards';

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

const AllMiniCards = ({ data }: NewsCardProps) => {
  const displayItems = data.slice(0, 4);

  return (
    <div id="all-mini-cards" className="container">
      <div className="row g-4">
        {displayItems.map((item, index) => (
          <div
            key={index}
            className="col-12 col-sm-6 col-xl-3"
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}
          >
            <HeroMiniCards
              data={{
                category: item.category,
                title: item.title,
                image: item.image,
                slug: item.slug,
                date: item.date,
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllMiniCards;
