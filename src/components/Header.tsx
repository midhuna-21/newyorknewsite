'use client';

import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

const NavItems = [
  { label: 'Business', slug: 'business' },
  { label: 'Technology', slug: 'technology' },
  { label: 'Sports', slug: 'sports' },
  { label: 'Health', slug: 'health' },
  { label: 'Science', slug: 'science' },
  { label: 'Politics', slug: 'politics' },
];

const Header = () => {
  const pathname = usePathname();
  const isHomePage = pathname === '/';

  const [expanded, setExpanded] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isFixed, setIsFixed] = useState(false);
  const [isFirstSectionVisible, setIsFirstSectionVisible] = useState(true);


  useEffect(() => {
    const handleScroll = () => setIsFixed(window.scrollY > 0);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = expanded ? 'hidden' : 'auto';
  }, [expanded]);

  useEffect(() => {
    if (!isHomePage) return;

    const handleScroll = () => {
      const firstSection = document.getElementById('first-section');
      if (!firstSection) return;

      const rect = firstSection.getBoundingClientRect();
      const isVisible = rect.bottom > 70;
      setIsFirstSectionVisible(isVisible);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isHomePage]);


  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 992);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const backgroundColor = expanded && isMobile
    ? '#fff'
    : isHomePage
      ? isFirstSectionVisible
        ? '#000'
        : '#fff'
      : '#fff';

  const textColor = expanded && isMobile
    ? '#000'
    : isHomePage
      ? isFirstSectionVisible
        ? '#fff'
        : '#000'
      : '#000';


  const toggleIcon = expanded ? (
    <span style={{ fontSize: '24px', color: textColor, fontWeight: 'bold' }}>×</span>
  ) : (
    <span
      style={{
        backgroundImage:
          "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 30 30' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke='white' stroke-width='2' stroke-linecap='round' d='M4 7h22M4 15h22M4 23h22'/%3E%3C/svg%3E\")",
        filter: isHovered ? 'brightness(70%)' : 'brightness(100%)',
        width: '18px',
        height: '18px',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: '100%',
        display: 'inline-block',
        transition: 'filter 0.3s ease',
      }}
    />
  );

  return (
    <>
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
            <Col xs={2} className="d-lg-none d-flex align-items-center ps-3">
              <button
                onClick={() => setExpanded(!expanded)}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                style={{
                  background: 'none',
                  border: 'none',
                  padding: 0,
                  width: '32px',
                  height: '32px',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
                aria-label="Toggle navigation"
                aria-expanded={expanded}
              >
                {toggleIcon}
              </button>
            </Col>
            <Col xs={10} lg={12} className="text-center px-2">
              <Link
                title="index"
                href="/"
                className="text-decoration-none"
                style={{
                  display: 'inline-block',
                  textDecoration: 'none',
                  color: 'inherit',
                }}
              >
                <h1
                  style={{
                    fontFamily: 'serif',
                    fontWeight: 'normal',
                    margin: 0,
                    fontSize: 'clamp(1.2rem, 4vw, 2rem)',
                    letterSpacing: '0.05em',
                    whiteSpace: 'nowrap',
                    color: textColor,
                  }}
                >
                  THE NEW YORKER <span style={{ opacity: 0.5 }}>100</span>
                </h1>
              </Link>
            </Col>
          </Row>
        </Container>
      </div>

      {/* Mobile Specific */}
      {expanded && (
        <div
          className="position-fixed top-0 start-0 h-100 w-100 d-lg-none"
          style={{
            backgroundColor: '#fff',
            zIndex: 998,
            overflowY: 'auto',
            paddingTop: '70px',
          }}
        >
          <div className="p-4 text-black">

            <ul className="list-unstyled m-0 p-0">
              {NavItems.map((item) => (
                <li
                  key={item.slug}
                  className="py-2 border-bottom"
                  onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#f4f4f4')}
                  onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'transparent')}
                >
                  <Link
                    href={`/${item.slug}`}
                    className="text-black text-decoration-none fw-bold d-block px-2"
                    onClick={() => setExpanded(false)}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
