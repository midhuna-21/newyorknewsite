import React from 'react';
import businessData from '../../../public/data/business.json';
import technologyData from '../../../public/data/technology.json';
import sportsData from '../../../public/data/sports.json';
import healthData from '../../../public/data/health.json';
import politicsData from '../../../public/data/politics.json';
import scienceData from '../../../public/data/science.json';
import entertainmentData from '../../../public/data/entertainment.json';
import educationData from '../../../public/data/education.json';
import CategoryNavbar from '@/components/CategoryNavbar';
import CatNewsFeatureCard from '@/components/CatNewsFeatureCard';
import CardListCategoryPage from '@/components/CardListCategoryPage';
import NewsMiniFeatureCard from '@/components/NewsMiniFeatureCard';
import SectionWrapper from '@/components/SectionWrapper';
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

const allData: Record<string, NewsItem[]> = {
  business: businessData,
  technology: technologyData,
  sports: sportsData,
  health: healthData,
  politics: politicsData,
  science: scienceData,
  entertainment: entertainmentData,
  education: educationData,
};

export async function generateStaticParams() {
  return Object.keys(allData).map((category) => ({
    category,
  }));
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category } = await params;
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
      {/* <SecondHeader /> */}
      <div className="d-none d-lg-block">
        <CategoryNavbar />
      </div>

      <div className="container py-5" style={{ marginTop:'22px' }}>
        <CatNewsFeatureCard data={data[0]} />

        <SectionWrapper title="Reporting & News">
          <CardListCategoryPage data={[data[1], data[2], data[3], data[4]]} />
        </SectionWrapper>

        <SectionWrapper title="More to Explore">
          <div className="row">
            <div className="col-12 col-lg-7">
              {data.slice(5, 10).map((item, index, arr) => (
                <div
                  key={index}
                  style={{
                    borderBottom:
                      index < arr.length - 1 ? '1px solid #ddd' : 'none',
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
        <SectionWrapper title="">
          <CardListCategoryPage data={[data[11], data[12], data[13], data[14]]} />
        </SectionWrapper>
      </div>
    </div>
  );
}