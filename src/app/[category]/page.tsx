'use client';

import React from 'react';
import businessData from '../../../public/data/business.json';
import technologyData from '../../../public/data/technology.json';
import sportsData from '../../../public/data/sports.json';
import healthData from '../../../public/data/health.json';
import politicsData from '../../../public/data/politics.json';
import scienceData from '../../../public/data/science.json';

import HorizontalNewsCard from '@/components/HorizontalNewsCard';
import DailyNews from '@/components/DailyNews';
import CategoryNavbar from '@/components/CategoryNavbar';
import NewsFeatureCard from '@/components/CatNewsFeatureCard';
import CatNewsFeatureCard from '@/components/CatNewsFeatureCard';
import HorizontalNewsWithCategory from '@/components/HorizontalNewsWithCategory';
import CardListCategoryPage from '@/components/CardListCategoryPage';
import NewsMiniFeatureCard from '@/components/NewsMiniFeatureCard';

interface NewsItem {
    category: string;
    title: string;
    shortdescription: string;
    description?: string;
    image: string;
    slug: string;
    date: string;
}

interface CategoryPageProps {
    params: {
        category: string;
    };
}

const allData: Record<string, NewsItem[]> = {
    business: businessData,
    technology: technologyData,
    sports: sportsData,
    health: healthData,
    politics: politicsData,
    science: scienceData,
};

export default function CategoryPage({ params }: CategoryPageProps) {
    const category = params.category.toLowerCase();
    const data = allData[category];

    if (!data) {
        return <div className="container py-5"><h2>Category not found</h2></div>;
    }

    return (
        <div >
            <CategoryNavbar />
            <div className="container py-5">
                <h1
                    style={{
                        fontFamily: 'Georgia, serif',
                        textTransform: 'capitalize',
                        marginTop: '50px',
                        textAlign: "center"
                    }}
                >
                    {category}
                </h1>

                <CatNewsFeatureCard data={data[0]} />

                <CardListCategoryPage data={[data[1], data[2], data[3], data[4]]} />

                <div className="row mt-5">
                    <div className="col-md-7">
                        {data.slice(17, 26).map((item, index, arr) => (
                            <div
                                key={index}
                                style={{
                                    borderBottom: index < arr.length - 1 ? '1px solid #ddd' : 'none',
                                    paddingBottom: '24px',
                                    marginBottom: '24px',
                                }}
                            >
                                <NewsMiniFeatureCard data={item} />
                            </div>
                        ))}
                    </div>
                </div>



            </div>
        </div>
    );
}
