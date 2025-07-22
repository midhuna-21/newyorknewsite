import React from 'react';
import { notFound } from 'next/navigation';
import businessData from '../../../../public/data/business.json';
import technologyData from '../../../../public/data/technology.json';
import sportsData from '../../../../public/data/sports.json';
import healthData from '../../../../public/data/health.json';
import politicsData from '../../../../public/data/politics.json';
import scienceData from '../../../../public/data/science.json';
import ArticleParagraphWith from '@/components/ArticleParagraph';
import CardListCategoryPage from '@/components/CardListCategoryPage';
import ClosingOfferBanner from '@/components/ClosingOfferBanner';
import FavoritesList from '@/components/FavouritesList';
import AuthorInfo from '@/components/AuthorInfo';
import Signup from '@/components/Signup';
import SectionWrapper from '@/components/SectionWrapper';
import DetailFirst from '@/components/DetailFirst';
import CategoryNavbar from '@/components/CategoryNavbar';
import Header from '@/components/Header';
import SecondHeader from '@/components/SecondHeader';

interface NewsItem {
    category: string;
    title: string;
    shortdescription: string;
    description?: string;
    image: string;
    slug: string;
    date: string;
}

interface DetailPageProps {
    params: Promise<{ category: string, slug: string }>;
}

const allData: Record<string, NewsItem[]> = {
    business: businessData,
    technology: technologyData,
    sports: sportsData,
    health: healthData,
    politics: politicsData,
    science: scienceData,
};

export default async function DetailPage({ params }: DetailPageProps) {
    const { category, slug } = await params;
    const data = allData[category?.toLowerCase()];

    if (!data) return notFound();

    const article = data.find(item => item.slug === slug);
    if (!article) return notFound();

    return (
        <div>
            <SecondHeader />

            <div className="d-none d-md-block">

                <CategoryNavbar />
            </div>

            {/* <NewsArticleHeading data={article} /> */}
            <DetailFirst data={article} />
            <div className="container py-5">

                <div className="row justify-content-center">
                    <div className="col-12 col-lg-7 mz-autho">
                        {/* <NewsImageWithCaption data={article} /> */}
                        <ArticleParagraphWith data={article} />
                        <ClosingOfferBanner />
                        <FavoritesList />
                        <AuthorInfo />
                        <Signup />
                    </div>
                </div>

                <SectionWrapper title='Read More'>
                    <CardListCategoryPage data={[data[1], data[2], data[3], data[4]]} />
                    <CardListCategoryPage data={[data[5], data[6], data[7], data[8]]} />
                    <CardListCategoryPage data={[data[9], data[10], data[11], data[12]]} />
                </SectionWrapper>
            </div>
        </div>


    );
}
