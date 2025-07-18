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

const CriticWithoutCategory: React.FC<CriticsCardProps> = ({ data }) => {
    return (
        <div>
            <Link
                title={`${data.slug}`}
                href={`/${data.category}/${data.slug}`}
                className='text-decoration-none'
                style={{ display: 'flex', width: '100%', textDecoration: 'none', color: 'inherit', }}
            >

                <div className="text-center py-4" style={{ fontFamily: 'Georgia, serif' }}>
                    <div style={{ width: '200px', height: '270px', margin: '0 auto', overflow: 'hidden' }}>
                        <img
                            src={data.image}
                            alt={data.title}
                            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                        />
                    </div>

                    <h2
                        style={
                            {
                                color: "#000",
                                fontFamily: 'TNYAdobeCaslonPro, "Times New Roman", Times, serif',
                                fontSize: '22px',
                                fontWeight: 400,
                            }
                        }
                    >
                        {data.title}
                    </h2>
                    <p

                        style={
                            {
                                color: 'rgb(51, 51, 51)',
                                fontFamily: 'TNYAdobeCaslonPro, "Times New Roman", Times, serif',
                                fontSize: '17px',
                                fontWeight: 400,
                                marginTop: '12px',
                            }
                        }
                    >
                        {data.shortdescription}
                    </p>

                        <BiCalendar size={10} style={{ marginRight: '4px', color: '#000' }} />
                        <span style={{ color: '#000', opacity: 0.6, fontSize: '8px' }}>Published on</span>
                        <span style={{ color: '#555', marginLeft: '4px', fontSize: '8px' }}>{data.date}</span>
                 
                </div>
            </Link>
        </div>
    );
};

export default CriticWithoutCategory;
