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
        <div>
            <h1
                style={{
                    marginTop: '50px',
                    textAlign: 'center',
                    textTransform: 'capitalize',
                    fontFamily: 'Georgia, serif',
                }}
            >
                {data.category}
            </h1>
            <div className='py-4'>
                <div className="row align-items-center">
                    <div className="col-md-6 order-1 order-md-1 mb-4 mb-md-0">
                        <div style={{ position: 'relative', width: '100%', height: '100%', aspectRatio: '17/12' }}>
                            <Image
                                src={data.image}
                                alt={data.title}
                                layout="fill"
                                objectFit="cover"
                                priority={true}
                                fetchPriority="high"
                            />
                        </div>
                    </div>

                    <div className="col-md-6 order-2 order-md-2">
                        <Link
                            title={`${data.slug}`}
                            href={`/${data.category}/${data.slug}`}
                            className='text-decoration-none'
                            style={{ display: 'flex', width: '100%', textDecoration: 'none', color: 'inherit' }}
                        >
                            <div style={{ textAlign: 'center', maxWidth: '600px' }}>

                                <h2
                                    className='hover-underline'
                                    style={{
                                        fontFamily: '"Georgia", serif',
                                        fontSize: 'clamp(18px, 2vw, 26px)',
                                        textTransform: 'uppercase',
                                        letterSpacing: '1px',
                                        fontWeight: 400,
                                        marginBottom: '10px'
                                    }}>
                                    {data.title.toUpperCase()}
                                </h2>

                                <p style={{
                                    color: 'rgb(51, 51, 51)',
                                    fontFamily: 'TNYAdobeCaslonPro, "Times New Roman", Times, serif',
                                    fontSize: 'clamp(14px, 1.8vw, 16px)',
                                    fontWeight: 400,
                                    marginBottom: '2px'
                                }}>
                                    {data.shortdescription}
                                </p>
                                <div style={{ fontSize: '10px', marginTop: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                    <BiCalendar
                                        size={10}
                                        style={{ marginRight: '4px', color: '#999' }}
                                    />
                                    <span style={{ color: '#c0392b', fontWeight: 500, fontSize: '8px' }}>
                                        Published on
                                    </span>
                                    <span style={{ color: '#4d5459ff', marginLeft: '4px', fontSize: '8px' }}>
                                        {data.date}
                                    </span>
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CatNewsFeatureCard;
