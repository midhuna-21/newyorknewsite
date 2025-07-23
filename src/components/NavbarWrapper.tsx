'use client';

import React, { useEffect, useRef, useState } from 'react';
import Navbar from './Navbar'; 

const NavbarWrapper = () => {
  const navbarRef = useRef<HTMLDivElement>(null);
  const todaySectionRef = useRef<HTMLElement | null>(null);
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    todaySectionRef.current = document.getElementById('todays-news');

    const handleScroll = () => {
      if (!navbarRef.current || !todaySectionRef.current) return;

      const navbarTop = navbarRef.current.getBoundingClientRect().top;
      const todayBottom = todaySectionRef.current.getBoundingClientRect().bottom;

      const shouldStick = navbarTop <= 70; 

      const shouldUnstick = todayBottom <= 70;

      setIsSticky(shouldStick && !shouldUnstick);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div ref={navbarRef}>
      {isSticky && <div style={{ height: '50px' }} />}
      <div
        className="d-none d-md-block"
        style={{
          position: isSticky ? 'fixed' : 'static',
          top: isSticky ? '70px' : 'auto',
          width: '100%',
          zIndex: 998,
          background: '#fff',
          boxShadow: isSticky ? '0 2px 5px rgba(0,0,0,0.1)' : 'none',
          transition: 'top 0.3s ease, box-shadow 0.3s ease',
          willChange: 'top',
        }}
      >
        <Navbar />
      </div>
    </div>

  );
};

export default NavbarWrapper;
