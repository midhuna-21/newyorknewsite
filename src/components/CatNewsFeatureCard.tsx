'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { BiCalendar } from 'react-icons/bi';

interface NewsCardProps {
    data: {
        category: string;
        title: string;
        shortdescription?: string;
        description?: string;
        date: string;
        image: string;
        slug: string;
    };
}

const CatNewsFeatureCard = ({ data }: NewsCardProps) => {
    return (
        <div className="container py-5">
            <div className="row align-items-center">
                <div className="col-md-6">
                    <div style={{ position: 'relative', width: '100%', height: '100%', aspectRatio: '17/12' }}>
                        <Link href={`/${data.category}/${data.slug}`}>

                            <Image
                                src={data.image}
                                alt={data.title}
                                layout="fill"
                                objectFit="cover"
                            />
                        </Link>
                    </div>
                </div>

                {/* Right Text */}
                <div className="col-md-6 mt-4 mt-md-0">
                    <div style={{ textAlign: 'center', maxWidth: '600px' }}>


                        <h2
                            style={{
                                fontFamily: `'Georgia', serif`,
                                fontSize: '28px',
                                fontWeight: 600,
                                lineHeight: 1.25,
                            }}
                        >
                            {data.title.toUpperCase()}
                        </h2>

                        <p
                            style={{
                                fontSize: '16px',
                                color: '#444',
                                marginTop: '15px',
                                marginBottom: '15px',
                                maxWidth: '600px',
                            }}
                        >
                            {data.shortdescription}
                        </p>

                        <BiCalendar size={10} style={{ marginRight: '4px', color: '#000' }} />
                        <span style={{ color: '#000', opacity: 0.6, fontSize: '8px' }}>Published on</span>
                        <span style={{ color: '#aaa', marginLeft: '4px', fontSize: '8px' }}>{data.date}</span>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default CatNewsFeatureCard;
