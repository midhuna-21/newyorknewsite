'use client';

import React from 'react';
import { Card } from 'react-bootstrap';

interface NewsCardWithListenProps {
  data: {
    title: string;
    shortdescription: string;
    image: string;
    author?: string; 
  };
}


const NewsCardWithListen: React.FC<NewsCardWithListenProps> = ({ data }) => {

  return (
    <Card
  style={{
    border: 'none',
    maxWidth: '400px',
    fontFamily: '"Georgia", serif',
    margin: '0 auto',
  }}
>
  <div style={{ position: 'relative' }}>
    <Card.Img
      src={data.image}
      alt={data.title}
      style={{
        width: '100%',
        height: 'auto',
        borderRadius: 0,
      }}
    />

    <div
      style={{
        position: 'absolute',
        bottom: '10px',
        right: '10px',
        backgroundColor: 'white',
        borderRadius: '5px',
        padding: '6px 8px',
        boxShadow: '0 1px 4px rgba(0,0,0,0.3)',
        cursor: 'pointer',
      }}
    >
      🎧
    </div>
  </div>

  <Card.Body style={{ padding: '18px 0 0 0' }}>
    <Card.Title
      style={{
        fontSize: '1.4rem',
        fontWeight: 500,
        lineHeight: '1.4',
        marginBottom: '12px',
      }}
    >
      {data.title}
    </Card.Title>

    <Card.Text
      style={{
        fontSize: '1rem',
        lineHeight: '1.8',
        color: '#333',
        marginBottom: '16px',
      }}
    >
      {data.shortdescription}
    </Card.Text>

    <div
      style={{
        fontWeight: 'bold',
        fontSize: '1rem',
        fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif',
      }}
    >
      By <span style={{ fontWeight: 700 }}>{data.author || 'Unknown'}</span>
    </div>
  </Card.Body>
</Card>

  );
};

export default NewsCardWithListen;
