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

                        <Image
                            src={data.image}
                            alt={data.title}
                            layout="fill"
                            objectFit="cover"
                        />
                    </div>
                </div>


                {/* Right Text */}
                <div className="col-md-6 mt-4 mt-md-0">
                    <Link
                        title={`${data.slug}`}
                        href={`/${data.category}/${data.slug}`}
                        className='text-decoration-none'
                        style={{ display: 'flex', width: '100%', textDecoration: 'none', color: 'inherit' }}
                    >

                        <div style={{ textAlign: 'center', maxWidth: '600px' }}>

                            <p style={{
                                fontSize: '12px',
                                fontWeight: 400,
                                color: 'rgb(219, 51, 52)',
                                textTransform: 'uppercase',
                                letterSpacing: '0.5px',
                                marginTop: '20px',
                                marginBottom: '10px',
                                fontFamily: `'Georgia', serif`
                            }}>
                                {data.category}

                            </p>
                            <h2
                                style={{
                                    fontFamily: '"Georgia", serif',
                                    fontSize: '36px',
                                    textTransform: 'uppercase',
                                    letterSpacing: '1px',
                                    fontWeight: 400,
                                }}
                            >
                                {data.title.toUpperCase()}
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
            </div>
        </div>
    );
};

export default CatNewsFeatureCard;
