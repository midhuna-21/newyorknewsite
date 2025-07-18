import React from 'react';
import businessData from '../../../public/data/business.json';
import technologyData from '../../../public/data/technology.json';
import sportsData from '../../../public/data/sports.json';
import healthData from '../../../public/data/health.json';
import politicsData from '../../../public/data/politics.json';
import scienceData from '../../../public/data/science.json';
import CategoryNavbar from '@/components/CategoryNavbar';
import CatNewsFeatureCard from '@/components/CatNewsFeatureCard';
import CardListCategoryPage from '@/components/CardListCategoryPage';
import NewsMiniFeatureCard from '@/components/NewsMiniFeatureCard';
import SectionWrapper from '@/components/SectionWrapper';

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

export default async function CategoryPage({ params }: CategoryPageProps) {
    const { category } = params;
    const data = allData[category];

    if (!data) {
        return (
            <div className="container py-5">
                <h2>Category not found</h2>
            </div>
        );
    }

    return (
        <div>
            <CategoryNavbar />
            <div className="container py-5">
                <h1
                    style={{
                        fontFamily: 'Georgia, serif',
                        textTransform: 'capitalize',
                        marginTop: '50px',
                        textAlign: 'center',
                    }}
                >
                    {category}
                </h1>

                <CatNewsFeatureCard data={data[0]} />

                <SectionWrapper title="Reporting & News">
                    <CardListCategoryPage data={[data[1], data[2], data[3], data[4]]} />
                </SectionWrapper>

                <SectionWrapper title="Commentary">
                    <CardListCategoryPage data={[data[5], data[6], data[7], data[8]]} />
                </SectionWrapper>

                <SectionWrapper title="Conversations">
                    <div className="row mt-5">
                        <div className="col-md-7">
                            {data.slice(9, 13).map((item, index, arr) => (
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
                </SectionWrapper>

                <SectionWrapper title="From Our Columnists">
                    <CardListCategoryPage data={[data[14], data[15], data[16], data[17]]} />
                </SectionWrapper>

                 <SectionWrapper title="More News">
                    <div className="row mt-5">
                        <div className="col-md-7">
                            {data.slice(18).map((item, index, arr) => (
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
                </SectionWrapper>
            </div>
        </div>
    );
}
