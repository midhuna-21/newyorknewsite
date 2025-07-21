import React from 'react';
import NewsCard from './NewsCard';

interface NewsCardListProps {
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

const NewsCardListScrolling = ({ data }: NewsCardListProps) => {
    const displayItems = data.slice(0, 4);

    return (
        <div className="container py-4">
            <div
                className="d-flex justify-content-between align-items-stretch"
                style={{ gap: '20px' }}
            >
                {displayItems.map((item, index) => (
                    <React.Fragment key={index}>
                        <div style={{ flex: 1 }}>
                            <NewsCard
                                data={{
                                    category: item.category,
                                    title: item.title,
                                    image: item.image,
                                    slug: item.slug,
                                    date: item.date,
                                    shortdescription:item.shortdescription
                                }}
                            />
                        </div>

                        {index < displayItems.length - 1 && (
                            <div
                                style={{
                                    width: '1px',
                                    backgroundColor: '#ccc',
                                    height: 'auto',
                                }}
                            ></div>
                        )}
                    </React.Fragment>
                ))}
            </div>
        </div>
    );
};

export default NewsCardListScrolling;
