import React from 'react';
import NewsCardWithCategory from './NewsCardWithCategory';

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

const HorizontalNewsWithCategory = ({ data }: NewsCardProps) => {
  const displayItems = data.slice(0, 4);

  return (
    <div className="w-100">
      {/* Desktop View */}
      <div className="d-none d-lg-flex" style={{ gap: '20px', alignItems: 'flex-start' }}>
        {displayItems.map((item, index) => {
          const isLast = index === displayItems.length - 1;
          return (
            <React.Fragment key={index}>
              <div style={{ flex: '1 1 0' }}>
                <NewsCardWithCategory data={item} />
              </div>
              {!isLast && (
                <div
                  style={{
                    width: '1px',
                    height: '230px',
                    backgroundColor: '#ccc',
                    alignSelf: 'flex-start',
                  }}
                />
              )}
            </React.Fragment>
          );
        })}
      </div>

      {/*  Mobile/Tablet View */}
      <div className="d-block d-lg-none">
        {displayItems.map((item, index) => {
          const isLast = index === displayItems.length - 1;
          return (
            <React.Fragment key={index}>
              <div className="mb-2">
                <NewsCardWithCategory data={item} />
              </div>
              {!isLast && (
                <div
                  style={{
                    width: '100%',
                    height: '1px',
                    backgroundColor: '#ccc',
                    marginBottom: '10px',
                  }}
                />
              )}
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
};

export default HorizontalNewsWithCategory;
