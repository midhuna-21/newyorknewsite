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
            <Link
                title={`${data.slug}`}
                href={`/${data.category}/${data.slug}`}
                className='text-decoration-none'
                style={{ display: 'flex', width: '100%', textDecoration: 'none', color: "inherit" }}
            >

                <div className="row align-items-center">
                    <div className="col-md-8">
                        <div style={{ textAlign: 'left' }}>
                            <h3
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
                            </h3>

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
                    </div>

                    {/* Right Content */}
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
            </Link>
        </div>
    );
};

export default NewsMiniFeatureCard;
