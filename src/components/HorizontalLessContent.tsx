'use client';

import React from 'react';
import NewsCardWithCategory from './NewsCardWithCategory';
import NewsCardLessContent from './NewsCardLessContent';

interface NewsCardProps {
    data: Array<{
        category: string;
        title: string;
        shortdescription?: string;
        description?: string;
        image: string;
        slug: string;
        date: string;
    }>;
}

const HorizontalLessContent = ({ data }: NewsCardProps) => {
    const displayItems = data.slice(0, 4); 

    return (
        <div
            className='container py-5'
            style={{
                display: 'flex',
                gap: '20px',
                alignItems: 'flex-start',
            }}
        >
            {displayItems.map((item, index) => (
                <React.Fragment key={index}>
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                        <NewsCardLessContent   data={{
                                    category: item.category,
                                    title: item.title,
                                    image: item.image,
                                    slug: item.slug,
                                    date: item.date,
                                }} />
                    </div>

                    {index < displayItems.length - 1 && (
                        <div
                            style={{
                                width: '1px',
                                backgroundColor: '#ccc',
                                height: '180px',
                                alignSelf: 'flex-start',
                            }}
                        ></div>
                    )}
                </React.Fragment>
            ))}
        </div>

    );
};

export default HorizontalLessContent;
