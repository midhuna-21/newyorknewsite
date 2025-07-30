import React from 'react';
import { notFound } from 'next/navigation';
import businessData from '../../../../public/data/business.json';
import technologyData from '../../../../public/data/technology.json';
import sportsData from '../../../../public/data/sports.json';
import healthData from '../../../../public/data/health.json';
import politicsData from '../../../../public/data/politics.json';
import scienceData from '../../../../public/data/science.json';
import entertainmentData from '../../../../public/data/entertainment.json'
import educationData from '../../../../public/data/education.json';
import ArticleParagraphWith from '@/components/ArticleParagraph';
import CardListCategoryPage from '@/components/CardListCategoryPage';
import FavoritesList from '@/components/FavouritesList';
import AuthorInfo from '@/components/AuthorInfo';
import SectionWrapper from '@/components/SectionWrapper';
import DetailFirst from '@/components/DetailFirst';
import CategoryNavbar from '@/components/CategoryNavbar';
import SecondHeader from '@/components/SecondHeader';
import { Metadata } from 'next';
import StaticDetailPage from '@/components/StaticDetailPage';
import DateDisplay from '@/components/DateDisplay';


export async function generateStaticParams() {
  const allData = [
    { category: 'politics', articles: politicsData },
    { category: 'business', articles: businessData },
    { category: 'technology', articles: technologyData },
    { category: 'sports', articles: sportsData },
    { category: 'science', articles: scienceData },
    { category: 'health', articles: healthData },
    { category: 'entertainment', articles: entertainmentData },
    { category: 'education', articles: educationData },

  ];

  const params = allData.flatMap(({ category, articles }) =>
    articles.map((article) => ({
      category,
      slug: article.slug,
    }))
  );

  return params;
}


interface NewsItem {
  category: string;
  title: string;
  shortdescription?: string;
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
  entertainment: entertainmentData,
  education: educationData,
};

export async function generateMetadata({ params }: DetailPageProps): Promise<Metadata> {
  const { category, slug } = await params;

  const allDataMap: Record<string, NewsItem[]> = {
    politics: politicsData,
    business: businessData,
    technology: technologyData,
    sports: sportsData,
    science: scienceData,
    health: healthData,
    entertainment: entertainmentData,
    education: educationData,
  };

  const articles = allDataMap[category] || [];
  const article = articles.find((a) => a.slug === slug);

  const siteUrl = 'https://nystatenews.org';
  const currentUrl = `${siteUrl}/${category}/${slug}`;
  const imageUrl = article?.image?.startsWith('http') ? article.image : `${siteUrl}${article?.image}`;

  if (!article) {
    return {
      title: 'Article Not Found',
      description: 'The requested article could not be found.',
    };
  }

  if (slug === 'wanda-vazquez-charges-dropped') {
    return {
      title: 'Charges Dropped for Wanda Vázquez Amid Claims of Political Targeting',
      description: 'All federal charges against former Puerto Rico Governor Wanda Vázquez have been dropped, with prosecutors replacing them with a minor campaign finance violation — ending a three-year legal battle without a corruption conviction.',
      keywords: 'Wanda Vázquez Garced, Wanda vázquez cleared, A Three-Year Saga Ends in Exoneration, Legal Experts Cite “Face-Saving” by DOJ, Political Overtones and Claims of Targeting,Co-Defendant’s Case Also Resolved',
      authors: [{ name: 'Cameron Ellis' }],
      openGraph: {
        title: 'Charges Dropped for Wanda Vázquez Amid Claims of Political Targeting',
        description: 'All federal charges against former Puerto Rico Governor Wanda Vázquez have been dropped, with prosecutors replacing them with a minor campaign finance violation — ending a three-year legal battle without a corruption conviction.',
        url: currentUrl,
        siteName: 'Nystate News',
        images: [
          {
            url: imageUrl,
            width: 1200,
            height: 630,
            alt: article.title,
          },
        ],
        locale: 'en_US',
        type: 'article',
        publishedTime: '2025-06-18T00:00:00.000Z',
      },
      twitter: {
        card: 'summary_large_image',
        title: article.title,
        description: article.shortdescription,
        images: [imageUrl],
        site: '@nystatenews',
        creator: '@nystatenews',
      },
      other: {
        'script:ld+json': JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'NewsArticle',
          headline: article.title,
          datePublished: '2025-06-18',
          author: {
            '@type': 'Person',
            name: 'Cameron Ellis',
          },
          publisher: {
            '@type': 'Organization',
            name: 'Nystate News',
            logo: {
              '@type': 'ImageObject',
              url: `${siteUrl}/nystatenews-logo.webp`,
            },
          },
          image: imageUrl,
          url: currentUrl,
          articleBody: article.description?.slice(0, 160),
          keywords: 'Wanda Vázquez Garced, Puerto Rico, DOJ',
        }),
      },
    };
  }

  return {
    title: article.title,
    description: article.shortdescription,
    keywords: `Wanda Vázquez Garced, news, ${article.title}`,
    authors: [{ name: 'Staff Writer' }],
    openGraph: {
      title: article.title,
      description: article.shortdescription,
      url: currentUrl,
      siteName: 'nystatenews',
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: article.title,
        },
      ],
      locale: 'en_US',
      type: 'article',
    },
    twitter: {
      card: 'summary_large_image',
      title: article.title,
      description: article.shortdescription,
      images: [imageUrl],
      site: '@nystatenews',
      creator: '@nystatenews',
    },
  };
}


export default async function DetailPage({ params }: DetailPageProps) {
  const { category, slug } = await params;
  const data = allData[category?.toLowerCase()];

  if (!data) return notFound();

  const article = data.find(item => item.slug === slug);
  if (!article) {
    return <div className="p-4">No article found for slug: {slug}</div>;
  }

  if (slug === 'charges-dropped-wanda-vazquez-political-targeting') {
    return (
      <main>
        <StaticDetailPage />
      </main>
    );
  }

  return (
    <div>
      {/* <SecondHeader /> */}

       <div className="d-none d-lg-block">
        <CategoryNavbar />
      </div>

      <DetailFirst data={article} />
      <div className="container py-3">
        <div className="row justify-content-center">
          <div className="col-12 col-lg-7 mz-autho">
            <DateDisplay date={article.date} />
            <ArticleParagraphWith data={article} />
           <FavoritesList data={[data[13], data[14], data[15], data[16],data[17]]}/>
            <AuthorInfo />
          </div>
        </div>

        <SectionWrapper title="Read More">
          <div style={{ marginBottom: '24px' }}>
            <CardListCategoryPage data={[data[1], data[2], data[3], data[4]]} />
          </div>
          <div style={{ marginBottom: '24px' }}>
            <CardListCategoryPage data={[data[5], data[6], data[7], data[8]]} />
          </div>
          <div>
            <CardListCategoryPage data={[data[9], data[10], data[11], data[12]]} />
          </div>
        </SectionWrapper>

      </div>
    </div>


  );
}