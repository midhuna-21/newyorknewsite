'use client';

import React, { useRef, useState, useEffect } from 'react';
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
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(4);

  const calculateItemsPerPage = () => {
    const width = window.innerWidth;
    if (width < 576) return 1;
    if (width < 768) return 2;
    if (width < 992) return 3;
    return 4;
  };

  useEffect(() => {
    const handleResize = () => {
      setItemsPerPage(calculateItemsPerPage());
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const totalPages = Math.ceil(data.length / itemsPerPage);

  const handleScroll = () => {
    const container = containerRef.current;
    if (!container) return;
    const scrollLeft = container.scrollLeft;
    const pageWidth = container.offsetWidth;
    const newIndex = Math.round(scrollLeft / pageWidth);
    setActiveIndex(newIndex);
  };

  useEffect(() => {
    const container = containerRef.current;
    if (container && data.length > itemsPerPage) {
      container.addEventListener('scroll', handleScroll);
      return () => container.removeEventListener('scroll', handleScroll);
    }
  }, [data.length, itemsPerPage]);

  return (
    <div className="w-100">
      <div
        ref={containerRef}
        className="d-flex overflow-auto pb-2"
        style={{
          scrollSnapType: data.length > itemsPerPage ? 'x mandatory' : 'none',
          scrollbarWidth: 'thin',
          WebkitOverflowScrolling: 'touch',
        }}
      >
        {data.map((item, index) => {
          const isLastItem = index === data.length - 1;
          const widthPercent = 100 / itemsPerPage;
          const spacing = itemsPerPage > 1 ? 12 : 0;

          return (
            <div
              key={index}
              className="d-flex"
              style={{
                flex: `0 0 ${widthPercent}%`,
                scrollSnapAlign: 'start',
                minWidth: 0,
                paddingRight: !isLastItem ? `${spacing}px` : '0',
              }}
            >
              <div className="d-flex flex-column h-100 w-100">
                <NewsCard
                  data={{
                    category: item.category,
                    title: item.title,
                    image: item.image,
                    slug: item.slug,
                    date: item.date,
                    shortdescription: item.shortdescription,
                  }}
                />
              </div>

              {!isLastItem && (
                <div
                  style={{
                    width: '1px',
                    height: '50%',
                    backgroundColor: '#ddd',
                    marginLeft: '12px',
                    alignSelf: 'flex-start',
                    marginBottom: '16px',
                  }}
                />
              )}
            </div>
          );
        })}
      </div>

      {data.length > itemsPerPage && (
        <div className="d-flex justify-content-center mt-3" style={{ gap: '8px' }}>
          {Array.from({ length: totalPages }).map((_, idx) => (
            <div
              key={idx}
              style={{
                width: '10px',
                height: '10px',
                borderRadius: '50%',
                backgroundColor: idx === activeIndex ? '#000' : '#ccc',
                transition: 'background-color 0.3s ease',
              }}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default NewsCardList;
