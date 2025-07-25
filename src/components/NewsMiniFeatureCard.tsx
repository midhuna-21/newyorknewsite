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
                title={`${data.slug}`}
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
                <div style={{ flex: 1, minWidth: 0 }}>

                    <p
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
                    </p>

                    <div
                        style={{
                            display: 'flex',
                            flexDirection: 'row',
                            gap: '10px',
                            alignItems: 'flex-start',
                        }}
                    >
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

                            <div style={{ fontSize: '10px', marginTop: '10px', display: 'flex', alignItems: 'center', justifyContent: 'flex-start' }}>
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

                        <div
                            className="news-image-wrapper"
                            style={{
                                flexShrink: 0,
                                width: isMobile ? '100px' : '140px',
                                height: isMobile ? '100px' : '140px',
                                overflow: 'hidden',
                            }}
                        >
                            <Image
                                src={data.image}
                                alt={data.title}
                                width={isMobile ? 100 : 140}
                                height={isMobile ? 100 : 140}
                                style={{
                                    objectFit: 'cover',
                                    width: '100%',
                                    height: '100%',
                                    display: 'block',
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
