  'use client';

  import React, { useRef, useState, useEffect } from 'react';
  import { Container, Button } from 'react-bootstrap';
  import Link from 'next/link';
  import Image from 'next/image';
  import { FiMenu, FiX, FiSearch } from 'react-icons/fi';

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

  const Header = () => {
    const [expanded, setExpanded] = useState(false);
    const [scrollProgress, setScrollProgress] = useState(0);
    const headerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
      const handleScroll = () => {
        const scrollTop = window.scrollY || document.documentElement.scrollTop;
        const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
        const progress = Math.min((scrollTop / scrollHeight) * 100, 100);
        setScrollProgress(progress);
      };

      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }, []);


      
    return (
      <div>
        <div
          ref={headerRef}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            zIndex: 999,
            backgroundColor: '#fff',
            color: '#000',
            padding: '15px 0',
            height: '70px',
            display: 'flex',
            alignItems: 'center',
            transition: 'all 0.3s ease',
          }}
        >
          <Container fluid className="px-lg-5">
            <div style={{ position: 'relative', height: '70px', width: '100%' }}>
              <div className="d-flex d-lg-none align-items-center justify-content-between px-3" style={{ height: '100%' }}>
                <button
                  onClick={() => setExpanded(!expanded)}
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
                  {expanded ? <FiX size={24} color="#000" /> : <FiMenu size={24} color="#000" />}
                </button>

                <Link href="/" className="text-decoration-none" title="index">
                  <Image
                    src="/images/nystatenews-logo.webp"
                    alt="Nystate News logo"
                    width={200}
                    height={20}
                    style={{ height: '20px', width: 'auto', objectFit: 'contain' }}
                    onError={(e) => {
                      (e.currentTarget as HTMLImageElement).src = '/images/fallback-logo.png';
                    }}
                  />
                 
                </Link>

                <Button
                  style={{
                    fontSize: '10px',
                    backgroundColor: '#0267A4',
                    color: 'white',
                    fontWeight: 500,
                    padding: '3px 8px',
                    borderRadius: '2px',
                    border: 'none',
                    whiteSpace: 'nowrap',
                  }}
                >
                  Subscribe
                </Button>
              </div>

              <div className="d-none d-lg-flex justify-content-center align-items-center px-lg-5" style={{ height: '100%' }}>
                <Link href="/" className="text-decoration-none" title="index">
                  <Image
                    src="/images/nystatenews-logo.webp"
                    alt="Nystate News logo"
                    width={200}
                    height={35}
                    style={{ height: '35px', width: 'auto', objectFit: 'contain' }}
                    onError={(e) => {
                      (e.currentTarget as HTMLImageElement).src = '/images/fallback-logo.png';
                    }}
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
                    color: '#000',
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
            </div>
          </Container>
        </div>

        <div
          style={{
            position: 'fixed',
            top: '70px',
            left: 0,
            width: '100%',
            height: '2px',
            backgroundColor: '#e5e5e541',
            zIndex: 998,
          }}
        >
          <div
            style={{
              height: '100%',
              width: `${scrollProgress}%`,
              backgroundColor: '#000',
              transition: 'width 0.2s ease-out',
            }}
          />
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
                    style={{ cursor: 'pointer' }}
                    onClick={() => setExpanded(false)}
                  >
                    <Link
                      title={item.slug}
                      href={`/${item.slug}`}
                      className="text-black text-decoration-none fw-bold d-block px-2"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>
    );
  };

  export default Header;
