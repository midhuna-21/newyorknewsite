import Link from 'next/link';
import React from 'react';
import { Card } from 'react-bootstrap';
import { BiCalendar } from 'react-icons/bi';
import Image from 'next/image';

interface NewsCardProps {
    data: {
        category: string;
        title: string;
        shortdescription?: string;
        description?: string;
        image: string;
        slug: string;
        date: string;
    };
}

const NewsCard = ({ data }: NewsCardProps) => {
    return (
        <div>
            <Link
                title={data.slug}
                href={`/${data.category}/${data.slug}`}
                className='text-decoration-none'
                style={{
                    display: 'block',
                    width: '100%',
                    textDecoration: 'none',
                    color: 'inherit',
                }}
            >
                <Card
                    style={{
                        border: 'none',
                        width: '100%',
                        height: 'auto',
                        fontFamily: '"Georgia", serif',
                        display: 'flex',
                        flexDirection: 'column',
                    }}
                >
                    <div
                        style={{
                            position: 'relative',
                            width: '100%',
                            height: '180px',
                            overflow: 'hidden',
                        }}
                    >
                        <Image
                            src={data.image}
                            alt={data.title}
                            width={480}
                            height={270}
                            style={{
                                objectFit: 'cover',
                                width: '100%',
                                height: '100%',
                                display: 'block',
                            }}
                        />
                    </div>

                    <Card.Body style={{ padding: '16px 0 0 0' }}>
                        <Card.Title
                            style={{
                                color: '#000',
                                fontFamily: 'TNYAdobeCaslonPro, "Times New Roman", Times, serif',
                                fontSize: 'clamp(18px, 2vw, 22px)',
                                fontWeight: 400,
                                marginBottom: '8px',
                            }}
                        >
                            {data.title}
                        </Card.Title>

                        <Card.Text
                            style={{
                                color: 'rgb(51, 51, 51)',
                                fontFamily: 'TNYAdobeCaslonPro, "Times New Roman", Times, serif',
                                fontSize: 'clamp(14px, 1.5vw, 17px)',
                                fontWeight: 400,
                                marginBottom: '4px',
                            }}
                        >
                            {data.shortdescription}
                        </Card.Text>

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
                    </Card.Body>
                </Card>
            </Link>
        </div>
    );
};

export default NewsCard;