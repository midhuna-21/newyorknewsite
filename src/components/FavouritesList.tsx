'use client';

import React from 'react';

const FavoritesList = () => {
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
      <h3
        style={{
          fontFamily: 'Georgia, serif',
          fontWeight: 'bold',
          fontSize: '28px',
          marginBottom: '15px',
        }}
      >
        New Yorker Favorites
      </h3>
      <hr />
      <ul style={{ listStyle: 'disc', paddingLeft: '20px', fontFamily: 'Georgia, serif', fontSize: '18px' }}>
        {items.map((item, index) => (
          <li key={index} style={{ marginBottom: '15px' }}>
            {item.text}
            <a href={item.href} style={{ color: 'black', textDecoration: 'underline' }}>
              {item.linkText}
            </a>
          </li>
        ))}
      </ul>

      {/* Newsletter */}
      <p style={{ fontFamily: 'Georgia, serif', fontSize: '18px' }}>
        <a href="#" style={{ color: 'black', textDecoration: 'underline' }}>
          Sign up for our daily newsletter
        </a>{' '}
        to receive the best stories from
      </p>
    </div>
  );
};

export default FavoritesList;
