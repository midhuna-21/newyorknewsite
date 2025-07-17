'use client';

import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { usePathname } from 'next/navigation';

const Header = () => {
  const pathname = usePathname();
  const isHomePage = pathname === '/'; // only homepage gets black in first section

  const [isFirstSectionVisible, setIsFirstSectionVisible] = useState(true);

  useEffect(() => {
    if (!isHomePage) return; // skip scroll check for other pages

    const handleScroll = () => {
      const firstSection = document.getElementById('first-section');
      if (!firstSection) return;

      const rect = firstSection.getBoundingClientRect();
      const isVisible = rect.bottom > 70; // header height
      setIsFirstSectionVisible(isVisible);
    };

    handleScroll(); // initial check

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isHomePage]);

  const backgroundColor = isHomePage
    ? isFirstSectionVisible
      ? '#000'
      : '#fff'
    : '#fff';

  const textColor = isHomePage
    ? isFirstSectionVisible
      ? '#fff'
      : '#000'
    : '#000';

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        zIndex: 999,
        backgroundColor,
        color: textColor,
        padding: '15px 0',
        height: '70px',
        display: 'flex',
        alignItems: 'center',
        transition: 'all 0.3s ease',
        borderBottom: backgroundColor === '#fff' ? '1px solid #ddd' : 'none',
      }}
    >
      <Container fluid>
        <Row className="align-items-center">
          <Col xs={4}></Col>
          <Col xs={4} className="text-center">
            <h1
              style={{
                fontFamily: 'serif',
                fontWeight: 'normal',
                margin: 0,
                fontSize: '1.8rem',
                letterSpacing: '0.05em',
                whiteSpace: 'nowrap',
                color: textColor,
              }}
            >
              THE NEW YORKER <span style={{ opacity: 0.5 }}>100</span>
            </h1>
          </Col>
          <Col xs={4}></Col>
        </Row>
      </Container>
    </div>
  );
};

export default Header;
