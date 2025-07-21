'use client';

import React, { useRef, useState, useEffect } from 'react';
import NewsCard from './NewsCard';

interface NewsCardListProps {
  data: Array<{

    category: string;
    title: string;
    shortdescription: string;
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
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  const calculateItemsPerPage = () => {
    const width = window.innerWidth;
    if (width < 576) return 1;
    if (width < 768) return 2;
    if (width < 992) return 3;
    return 4;
  };

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setItemsPerPage(calculateItemsPerPage());
      setIsSmallScreen(width < 576);
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
    <div>
      <div
        ref={containerRef}
        style={{
          display: 'flex',
          overflowX: data.length > itemsPerPage ? 'scroll' : 'hidden',
          scrollSnapType: data.length > itemsPerPage ? 'x mandatory' : 'none',
          scrollbarWidth: 'auto',
          paddingBottom: '4px',
        }}
        className="custom-scrollbar"
      >

        {data.map((item, index) => {
          const isLastItem = index === data.length - 1;

          return (
            <div
              key={index}
              style={{
                display: 'flex',
                flexDirection: 'row',
                flex: `0 0 ${100 / itemsPerPage}%`,
                scrollSnapAlign: 'start',

                minWidth: 0,
              }}
            >
              <div style={{ flex: 1 }}>
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
                    width: '0.5px',
                    backgroundColor: '#eee',
                    margin: '16px',
                    height: '40%',
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
            ></div>
          ))}
        </div>
      )}
    </div>
  );
};

export default NewsCardList;
