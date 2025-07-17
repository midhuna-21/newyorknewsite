'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { BiCalendar } from 'react-icons/bi';

interface NewsCardProps {
    data: {
        category: string;
        title: string;
        shortdescription: string;
        description?: string;
        date: string;
        image: string;
        slug: string;
    };
}

const NewsMiniFeatureCard = ({ data }: NewsCardProps) => {
    return (
        <div className="container py-4">
            <div className="row align-items-center"> {/* This ensures vertical centering */}
                {/* Left Text */}
                <div className="col-md-8">
                    <div style={{ textAlign: 'left' }}>
                        <h3
                            style={{
                                fontFamily: `'Georgia', serif`,
                                fontSize: '22px',
                                fontWeight: 600,
                                lineHeight: 1.4,
                                marginBottom: '12px',
                            }}
                        >
                            {data.title}
                        </h3>

                        <p
                            style={{
                                fontSize: '16px',
                                color: '#444',
                                lineHeight: 1.6,
                                marginBottom: '12px',
                            }}
                        >
                            {data.shortdescription}
                        </p>

                        <BiCalendar size={10} style={{ marginRight: '4px', color: '#000' }} />
                        <span style={{ color: '#000', opacity: 0.6, fontSize: '8px' }}>Published on</span>
                        <span style={{ color: '#aaa', marginLeft: '4px', fontSize: '8px' }}>{data.date}</span>

                    </div>
                </div>

                {/* Right Image */}
                <div className="col-md-4 d-flex justify-content-center align-items-center">
                    <div style={{ width: '100%', maxWidth: '300px' }}>
                        <Image
                            src={data.image}
                            alt={data.title}
                            width={400}
                            height={400}
                            style={{
                                objectFit: 'cover',
                                width: '100%',
                                height: 'auto',
                            }}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewsMiniFeatureCard;
