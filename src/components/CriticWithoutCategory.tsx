'use client';

import React from 'react';
import { Card } from 'react-bootstrap';
import { BiCalendar } from 'react-icons/bi';

interface CriticsCardProps {
    data: {
        title: string;
        shortdescription: string;
        image: string;
        author?: string;
        category?: string;
        date: string;
    };
}

const CriticWithoutCategory: React.FC<CriticsCardProps> = ({ data }) => {
    return (
        <div className="text-center py-4" style={{ fontFamily: 'Georgia, serif' }}>
            {/* Image */}
            <div style={{ width: '200px', height: '270px', margin: '0 auto', overflow: 'hidden' }}>
                <img
                    src={data.image}
                    alt={data.title}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
            </div>

            {/* Title */}
            <h2
                style={{
                    fontSize: '1.8rem',
                    fontWeight: 'normal',
                     marginTop: '15px',
                    maxWidth: '600px',
                    margin: '0 auto',
                }}
            >
                {data.title}
            </h2>

            {/* Short Description */}
            <p
                style={{
                    fontSize: '1rem',
                    lineHeight: '1.6',
                    maxWidth: '600px',
                    margin: '0 auto 20px',
                    color: '#444',
                }}
            >
                {data.shortdescription}
            </p>

            {/* Author */}
            <p
                style={{
                    fontWeight: 'bold',
                    fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif',
                    fontSize: '1rem',
                }}
            >
                <BiCalendar size={10} style={{ marginRight: '4px', color: '#000' }} />
                <span style={{ color: '#000', opacity: 0.6, fontSize: '8px' }}>Published on</span>
                <span style={{ color: '#aaa', marginLeft: '4px', fontSize: '8px' }}>{data.date}</span>
            </p>
        </div>
    );
};

export default CriticWithoutCategory;
