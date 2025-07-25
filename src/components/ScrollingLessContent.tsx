'use client';

import React, { useRef, useState, useEffect } from 'react';
import NewsCenteredText from './NewsCenteredText';

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

  useEffect(() => {
    const updateItemsPerPage = () => {
      const isMobile = window.innerWidth < 576;
      setItemsPerPage(isMobile ? 1 : 4);
    };

    updateItemsPerPage();
    window.addEventListener('resize', updateItemsPerPage);
    return () => window.removeEventListener('resize', updateItemsPerPage);
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
        }}
        className="custom-scrollbar"
      >
        {data.map((item, index) => (
          <div
            key={index}
            style={{
              flex: `0 0 ${100 / itemsPerPage}%`,
              scrollSnapAlign: 'start',
              paddingRight:
                itemsPerPage === 1
                  ? '0px'
                  : index !== data.length - 1
                    ? '20px'
                    : '0px',
              marginBottom: '16px',
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
        ))}

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
