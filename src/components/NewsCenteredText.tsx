import Link from 'next/link';
import React from 'react';
import { Card } from 'react-bootstrap';
import { BiCalendar } from 'react-icons/bi';

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


const NewsCenteredText = ({ data }: NewsCardProps) => {
    return (
        <div>
            <Link
                title={`${data.slug}`}
                href={`/${data.category}/${data.slug}`}
                className='text-decoration-none'
                style={{ display: 'flex', width: '100%', textDecoration: 'none', color: 'inherit', }}
            >

                <Card
                    style={{
                        border: 'none',
                        maxWidth: '300px',
                        margin: '0 auto',
                        fontFamily: '"Georgia", serif',
                    }}
                >
                    <Card.Img
                        src={data.image}
                        alt={data.title}
                        style={{
                            aspectRatio: '4 / 3',
                            objectFit: 'cover',
                            width: '100%',
                            height: 'auto',
                            borderRadius: '0',
                        }}
                    />

                    <Card.Body style={{ padding: '20px 0 0 0', textAlign: "center" }}>
                        <Card.Title
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
                        </Card.Title>

                        <Card.Text
                            style={{
                                fontSize: '1rem',
                                lineHeight: '1.8',
                                color: '#333',
                                marginTop: '12px',
                            }}
                        >
                            {data.shortdescription}
                        </Card.Text>

                        <BiCalendar size={10} style={{ marginRight: '4px', color: '#000' }} />
                        <span style={{ color: '#000', opacity: 0.6, fontSize: '8px' }}>Published on</span>
                        <span style={{ color: '#555', marginLeft: '4px', fontSize: '8px' }}>{data.date}</span>
                    </Card.Body>
                </Card>
            </Link>
        </div>
    );
};

export default NewsCenteredText;
