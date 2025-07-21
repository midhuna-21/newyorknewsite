'use client';

import React, { useEffect, useState } from 'react';

const FavoritesList = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize(); 
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const items = [
    {
      text: 'How to die in ',
      linkText: 'good health.',
      href: '#',
    },
    {
      text: 'The hottest restaurant in France is an ',
      linkText: 'all-you-can-eat buffet.',
      href: '#',
    },
    {
      text: 'A heat shield for ',
      linkText: 'the most important ice on Earth.',
      href: '#',
    },
    {
      text: 'Was Machiavelli ',
      linkText: 'misunderstood?',
      href: '#',
    },
    {
      text: 'A major Black novelist made a remarkable début. ',
      linkText: 'Why did he disappear?',
      href: '#',
    },
    {
      text: 'Andy Warhol obsessively documented his life, but he also lied constantly, ',
      linkText: 'almost recreationally.',
      href: '#',
    },
  ];

  return (
    <div className="container py-5">
      {/* Heading */}
      <h3
        style={{
          fontFamily: 'TNYAdobeCaslonPro, "Times New Roman", Times, serif',
          fontWeight: 400,
          fontSize: isMobile ? '24px' : '31px',
          marginBottom: '15px',
        }}
      >
        New Yorker Favorites
      </h3>

      <hr />

      {/* List */}
      <ul
        style={{
          listStyle: 'disc',
          paddingLeft: '20px',
          fontFamily: 'TNYAdobeCaslonPro, "Times New Roman", Times, serif',
          fontSize: isMobile ? '16px' : '21px',
          color: '#000',
        }}
      >
        {items.map((item, index) => (
          <li key={index} style={{ marginBottom: '15px' }}>
            {item.text}
            <a href={item.href} style={{ color: 'black', textDecoration: 'underline' }}>
              {item.linkText}
            </a>
          </li>
        ))}
      </ul>

      {/* Newsletter Signup */}
      <p
        style={{
          fontFamily: 'Georgia, serif',
          fontSize: isMobile ? '15px' : '18px',
        }}
      >
        <a href="#" style={{ color: 'black', textDecoration: 'underline' }}>
          Sign up for our daily newsletter
        </a>{' '}
        to receive the best stories from
      </p>
    </div>
  );
};

export default FavoritesList;
