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
        <div className='py-4'>
            <div className="row align-items-center">

                <div className="col-md-6 order-1 order-md-1 mb-4 mb-md-0">
                    <div style={{ position: 'relative', width: '100%', height: '100%', aspectRatio: '17/12' }}>
                        <Image
                            src={data.image}
                            alt={data.title}
                            layout="fill"
                            objectFit="cover"
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
                            <p style={{
                                fontSize: 'clamp(10px, 1vw, 14px)',
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
                            <h2 style={{
                                fontFamily: '"Georgia", serif',
                                fontSize: 'clamp(20px, 4vw, 36px)',
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
                                fontSize: 'clamp(14px, 2vw, 17px)',
                                fontWeight: 400,
                                marginBottom: '2px'
                            }}>
                                {data.shortdescription}
                            </p>
                            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '4px' }}>
                                <BiCalendar size={10} style={{ color: '#000' }} />
                                <span style={{ color: '#000', opacity: 0.6, fontSize: 'clamp(7px, 1vw, 10px)' }}>Published on</span>
                                <span style={{ color: '#555', fontSize: 'clamp(7px, 1vw, 10px)' }}>{data.date}</span>
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default CatNewsFeatureCard;
