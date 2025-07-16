'use client';

import React from 'react';
import { Card } from 'react-bootstrap';

interface CriticsCardProps {
    data: {
        title: string;
        shortdescription: string;
        image: string;
        author?: string;
        category?: string;
    };
}


const TheCritics: React.FC<CriticsCardProps> = ({ data }) => {

    return (
        <div className="container py-4">
            <Card
                style={{
                    border: 'none',
                    maxWidth: '400px',
                    margin: '0 auto',
                    fontFamily: '"Georgia", serif',
                    textAlign: 'center',
                }}
            >
                <div style={{ position: 'relative' }}>
                    <Card.Img
                        src={data.image}
                        alt={data.title}
                        style={{
                            width: '100%',
                            height: 'auto',
                            borderRadius: '0',
                        }}
                    />
                    <div
                        style={{
                            position: 'absolute',
                            bottom: '10px',
                            right: '10px',
                            backgroundColor: '#fff',
                            borderRadius: '6px',
                            padding: '4px 6px',
                            fontSize: '1.1rem',
                        }}
                    >
                        🎧
                    </div>
                </div>

                <Card.Body style={{ paddingTop: '20px' }}>
                    <p
                        style={{
                            color: '#c4170c',
                            fontSize: '0.85rem',
                            letterSpacing: '0.5px',
                            textTransform: 'uppercase',
                            marginBottom: '0.6rem',
                            fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif',
                        }}
                    >
                        {data.category || 'Critics'}
                    </p>

                    <Card.Title
                        style={{
                            fontSize: '1.5rem',
                            lineHeight: '1.4',
                            marginBottom: '1rem',
                        }}
                    >
                        {data.title}
                    </Card.Title>

                    <Card.Text
                        style={{
                            fontSize: '1rem',
                            color: '#333',
                            lineHeight: '1.7',
                            padding: '0 10px',
                            marginBottom: '1rem',
                        }}
                    >
                        {data.shortdescription}
                    </Card.Text>

                    <p
                        style={{
                            fontWeight: 'bold',
                            fontSize: '1rem',
                            fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif',
                        }}
                    >
                        By <span style={{ fontWeight: 700 }}>{data.author || 'Unknown'}</span>
                    </p>
                </Card.Body>
            </Card>
        </div>

    );
};

export default TheCritics;
