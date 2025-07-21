'use client';

import React, { useEffect, useState } from 'react';
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

    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkScreen = () => {
            setIsMobile(window.innerWidth < 576);
        };
        checkScreen();
        window.addEventListener('resize', checkScreen);
        return () => window.removeEventListener('resize', checkScreen);
    }, []);

    return (
        <div style={{ display: 'block' }}>
            <Link
                href={`/${data.category}/${data.slug}`}
                className="text-decoration-none text-reset"
                style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    justifyContent: 'space-between',
                    flexWrap: 'nowrap',
                    gap: '16px',
                }}
            >
                {/* Text Content */}
         <div style={{ flex: 1, minWidth: 0 }}>

                    <h3
                        className="news-title"
                        style={{
                            color: '#000',
                            fontFamily: 'TNYAdobeCaslonPro, "Times New Roman", Times, serif',
                            fontSize: '22px',
                            fontWeight: 400,
                            marginBottom: '12px',
                            lineHeight: 1.4,
                        }}
                    >
                        {data.title}
                    </h3>

                    <div
                        style={{
                            display: 'flex',
                            flexDirection: 'row',
                            gap: '10px',
                            alignItems: 'flex-start',
                        }}
                    >
                        {/* Short Description */}
                        <div style={{ flex: 1 }}>
                            <p
                                style={{
                                    color: 'rgb(51, 51, 51)',
                                    fontFamily: `TNYAdobeCaslonPro, "Times New Roman", Times, serif`,
                                    fontSize: '16px',
                                    fontWeight: 400,
                                    marginBottom: '10px',
                                    display: '-webkit-box',
                                    WebkitLineClamp: 3,
                                    WebkitBoxOrient: 'vertical',
                                    overflow: 'hidden',
                                    textOverflow: 'ellipsis',
                                }}
                            >
                                {data.shortdescription}
                            </p>

                            <div
                                className="news-date"
                                style={{
                                    fontSize: '10px',
                                    color: '#000',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '4px',
                                    opacity: 0.7,
                                }}
                            >
                                <BiCalendar size={12} />
                                <span>Published on</span>
                                <span style={{ color: '#555' }}>{data.date}</span>
                            </div>
                        </div>

                        {/* Image beside description */}
                        <div className="news-image-wrapper">
                            {isMobile ? (
                                <img
                                    src={data.image}
                                    alt={data.title}
                                    style={{
                                        width: '100px',
                                        height: '100px',
                                        objectFit: 'cover',
                                        display: 'block',
                                    }}
                                />
                            ) : (
                                <Image
                                    src={data.image}
                                    alt={data.title}
                                    width={180}
                                    height={180}
                                    style={{
                                        objectFit: 'cover',
                                        width: '100%',
                                        height: 'auto',
                                        display: 'block',
                                    }}
                                />
                            )}
                        </div>
                    </div>
                </div>
            </Link>
    </div>
    );
};

export default NewsMiniFeatureCard;
