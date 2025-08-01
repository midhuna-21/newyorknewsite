'use client';

import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image'

const NavItems = [
  { label: 'Business', slug: 'business' },
  { label: 'Technology', slug: 'technology' },
  { label: 'Sports', slug: 'sports' },
  { label: 'Health', slug: 'health' },
  { label: 'Science', slug: 'science' },
  { label: 'Politics', slug: 'politics' },
  { label: 'Entertainment', slug: 'entertainment' },
  { label: 'Education', slug: 'education' },
];

const SecondHeader = () => {
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
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 30 30' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke='${encodeURIComponent(
          textColor
        )}' stroke-width='2' stroke-linecap='round' d='M4 7h22M4 15h22M4 23h22'/%3E%3C/svg%3E")`,
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
          <div style={{ position: 'relative', height: '70px', width: '100%' }}>
            {isMobile ? (
              <div className="d-flex d-lg-none align-items-center justify-content-between px-3" style={{ height: '100%' }}>
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

                <Link href="/" className="text-decoration-none" title='index' style={{ color: textColor }}>
                  <Image
                    src="/images/nystatenews-logo.webp"
                    alt="Nystate News logo"
                    width={200}
                    height={0}
                    style={{ height: '20px', width: 'auto', objectFit: 'contain' }}
              
                  />
                </Link>

                <Button
                  style={{
                    fontSize: '10px',
                    backgroundColor: '#0787CA',
                    color: 'white',
                    fontWeight: 500,
                    padding: '3px 8px',
                    borderRadius: '2px',
                    border: 'none',
                    whiteSpace: 'nowrap',
                    textTransform: 'none',
                  }}
                >
                  Subscribe
                </Button>
              </div>
            ) : (
              <>
                <div
                  className="d-lg-none"
                  style={{
                    position: 'absolute',
                    left: '20px',
                    top: '50%',
                    transform: 'translateY(-50%)',
                  }}
                >
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
                </div>

                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
                  <Link href="/" className="text-decoration-none" title='index' style={{ color: textColor }}>
                    <Image
                      src="/images/nystatenews-logo.webp"
                      alt="Nystate News logo"
                      width={200}
                      height={50}
                      style={{ height: '35px', width: 'auto', objectFit: 'contain' }}
                
                    />

                  </Link>
                </div>

                <div
                  className="d-none d-lg-flex align-items-center gap-3"
                  style={{ position: 'absolute', right: '20px', top: '50%', transform: 'translateY(-50%)' }}
                >
                  <a
                    href="#"
                    style={{
                      fontSize: '12px',
                      color: textColor,
                      fontWeight: 500,
                      textDecoration: 'none',
                    }}
                  >
                    Newsletter
                  </a>

                  <Button
                    style={{
                      fontSize: '12px',
                      backgroundColor: '#0267A4',
                      color: 'white',
                      fontWeight: 500,
                      padding: '4px 14px',
                      borderRadius: '2px',
                      border: 'none',

                    }}
                  >
                    Subscribe
                  </Button>
                  
                </div>
              </>
            )}
          </div>
        </Container>

      </div>

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
                    title={item.slug}
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

export default SecondHeader;
