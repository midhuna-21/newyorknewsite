import React from 'react';
import NewsCard from './NewsCard';

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
      {/* Mobile View*/}
      <div
        className="d-flex d-md-none overflow-auto pb-2"
        style={{
          scrollSnapType: data.length > 1 ? 'x mandatory' : 'none',
          WebkitOverflowScrolling: 'touch',
          scrollbarWidth: 'thin',
          scrollbarColor: '#ccc transparent',
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
              <NewsCard data={item} />
            </div>
          );
        })}
      </div>

      {/* Tablet View */}
      <div
        className="d-none d-md-flex d-lg-none overflow-auto pb-2"
        style={{
          scrollSnapType: data.length > 1 ? 'x mandatory' : 'none',
          WebkitOverflowScrolling: 'touch',
          scrollbarWidth: 'thin',
          scrollbarColor: '#ccc transparent',
        }}
      >
        {data.map((item, index) => {
          const isLastItem = index === data.length - 1;
          return (
            <div
              key={index}
              style={{
                flex: '0 0 50%',
                scrollSnapAlign: 'start',
                minWidth: '50%',
                paddingRight: isLastItem ? '0' : '12px',
              }}
            >
              <NewsCard data={item} />
            </div>
          );
        })}
      </div>

      {/* Large View*/}
      <div
        className="d-none d-lg-flex d-xl-none overflow-auto pb-2"
        style={{
          scrollSnapType: data.length > 1 ? 'x mandatory' : 'none',
          WebkitOverflowScrolling: 'touch',
          scrollbarWidth: 'thin',
          scrollbarColor: '#ccc transparent',
        }}
      >
        {data.map((item, index) => {
          const isLastItem = index === data.length - 1;
          return (
            <div
              key={index}
              style={{
                flex: '0 0 33.3333%',
                scrollSnapAlign: 'start',
                minWidth: '33.3333%',
                paddingRight: isLastItem ? '0' : '12px',
              }}
            >
              <NewsCard data={item} />
            </div>
          );
        })}
      </div>

      {/* Desktop View*/}
      <div
        className="d-none d-xl-flex pb-2"
        style={{
          overflowX: data.length > 4 ? 'auto' : 'visible',
          WebkitOverflowScrolling: 'touch',
          scrollSnapType: data.length > 4 ? 'x mandatory' : 'none',
          scrollbarWidth: 'thin',
          scrollbarColor: '#ccc transparent',
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
                <NewsCard data={item} />
              </div>

              {!isLastItem && (
                <div
                  style={{
                    width: '1px',
                    height: '50%',
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
