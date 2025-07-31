import React from 'react';
import NewsCardLessContent from './NewsCardLessContent';

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

const HorizontalLessContent = ({ data }: NewsCardProps) => {
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
                <NewsCardLessContent
                  data={{
                    category: item.category,
                    title: item.title,
                    image: item.image,
                    slug: item.slug,
                    date: item.date,
                  }}
                />
              </div>
              {!isLast && (
                <div
                  style={{
                    width: '1px',
                    backgroundColor: '#ccc',
                    height: '220px',
                    alignSelf: 'flex-start',
                  }}
                />
              )}
            </React.Fragment>
          );
        })}
      </div>

      {/*Mobile View */}
      <div className="d-block d-lg-none">
        {displayItems.map((item, index) => (
          <div key={index} className="mb-4">
            <NewsCardLessContent
              data={{
                category: item.category,
                title: item.title,
                image: item.image,
                slug: item.slug,
                date: item.date,
              }}
            />

              {index !== displayItems.length - 1 && (
              <hr
                style={{
                  margin: '10px 0',
                  border: 'none',
                  borderTop: '1px solid #ccc',
                }}
              />)}
          </div>
        ))}
      </div>
    </div>
  );
};

export default HorizontalLessContent;
