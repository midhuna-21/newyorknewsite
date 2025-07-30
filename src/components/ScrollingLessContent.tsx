import React from 'react';
import NewsCard from './NewsCard';
import NewsCenteredText from './NewsCenteredText';

interface NewsCardListProps {
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

const NewsCardList = ({ data }: NewsCardListProps) => {
  return (
    <div className="w-100">

      {/* Mobile view */}
      <div
        className="d-flex d-md-none overflow-auto pb-2"
        style={{
          scrollSnapType: data.length > 1 ? 'x mandatory' : 'none',
          WebkitOverflowScrolling: 'touch',
          scrollbarWidth: 'thin',
        }}
      >
        {data.map((item, index) => {
          const isLastItem = index === data.length - 1;
          return (
            <div
              key={index}
              style={{
                flex: '0 0 100%',
                scrollSnapAlign: 'start',
                paddingRight: isLastItem ? '0' : '12px',
              }}
            >
              <NewsCenteredText
              data={{
                category: item.category,
                title: item.title,
                image: item.image,
                slug: item.slug,
                date: item.date,
              }}
            />
            </div>
          );
        })}
      </div>

      {/* Desktop*/}
      <div
        className="d-none d-md-flex pb-2"
        style={{
          overflowX: data.length > 4 ? 'auto' : 'visible',
          WebkitOverflowScrolling: 'touch',
          scrollSnapType: data.length > 4 ? 'x mandatory' : 'none',
        }}
      >
        {data.map((item, index) => {
          const isLastItem = index === data.length - 1;
          return (
            <div
              key={index}
              className="d-flex"
              style={{
                flex: '0 0 25%',
                scrollSnapAlign: 'start',
                minWidth: '250px',
                paddingRight: !isLastItem ? '12px' : '0',
              }}
            >
              <div className="d-flex flex-column w-100">
                <NewsCenteredText
              data={{
                category: item.category,
                title: item.title,
                image: item.image,
                slug: item.slug,
                date: item.date,
              }}
            />
              </div>

              {!isLastItem && (
                <div
                  style={{
                    width: '1px',
                    height: '60%',
                    backgroundColor: '#ccc',
                    marginLeft: '12px',
                    alignSelf: 'stretch',
                  }}
                />
              )}
            </div>
          );
        })}
      </div>

    </div>
  );
};

export default NewsCardList;
