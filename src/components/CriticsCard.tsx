'use client';

import Link from 'next/link';
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
        slug: string;
    };
}

const TheCritics: React.FC<CriticsCardProps> = ({ data }) => {
    return (
        <div className="text-center py-4" style={{ fontFamily: 'Georgia, serif' }}>

            <Link
                title={`${data.slug}`}
                href={`/${data.category}/${data.slug}`}
                className='text-decoration-none'
                style={{ display: 'flex', width: '100%', textDecoration: 'none', color: 'inherit', }}
            >
                <div>

                    <div style={{ width: '200px', height: '270px', margin: '0 auto', overflow: 'hidden' }}>
                        <img
                            src={data.image}
                            alt={data.title}
                            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                        />
                    </div>

                    <p
                        style={{
                            fontSize: '12px',
                            fontWeight: 400,
                            color: 'rgb(219, 51, 52)',
                            textTransform: 'uppercase',
                            letterSpacing: '0.5px',
                            marginTop: '20px',
                            marginBottom: '10px',
                            fontFamily: `'Georgia', serif`
                        }}
                    >
                        {data.category}
                    </p>

                    <h2
                        style={{
                            color: "#000",
                            fontFamily: 'TNYAdobeCaslonPro, "Times New Roman", Times, serif',
                            fontSize: '22px',
                            fontWeight: 400,
                            marginBottom: '15px',
                            maxWidth: '600px',
                            margin: '0 auto',
                        }}
                    >
                        {data.title}
                    </h2>

                    {/* Short Description */}
                    <p
                        style={{
                            color: "rgb(51, 51, 51)",
                            fontFamily: 'TNYAdobeCaslonPro, "Times New Roman", Times, serif',
                            fontSize: '17px',
                            fontWeight: 400,
                            maxWidth: '600px',
                            margin: '0 auto 20px',
                        }}
                    >
                        {data.shortdescription}
                    </p>

                    <p
                        style={{
                            fontWeight: 'bold',
                            fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif',
                            fontSize: '1rem',
                        }}
                    >
                        <BiCalendar size={10} style={{ marginRight: '4px', color: '#000' }} />
                        <span style={{ color: '#000', opacity: 0.6, fontSize: '8px' }}>Published on</span>
                        <span style={{ color: '#555', marginLeft: '4px', fontSize: '8px' }}>{data.date}</span>
                    </p>
                </div>
            </Link>
        </div>
    );
};

export default TheCritics;
