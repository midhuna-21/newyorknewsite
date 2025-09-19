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
import Script from "next/script";
import ClientS2 from '@/components/ClientS2';

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

  const siteUrl = 'https://www.nystatenews.org';
  const currentUrl = `${siteUrl}/${category}/${slug}`;
  const imageUrl = article?.image?.startsWith('http') ? article.image : `${siteUrl}${article?.image}`;

  if (!article) {
    return {
      title: 'Article Not Found',
      description: 'The requested article could not be found.',
    };
  }

  if (slug === 'charges-dropped-wanda-vazquez-political-targeting') {
    return {
      title: 'Wanda Vázquez Charges Dropped Amid Targeting Claims',
      description: 'Federal charges against ex-Governor Wanda Vázquez dropped; replaced with a minor violation.',
      keywords: 'Wanda Vázquez Garced, Wanda vázquez cleared, A Three-Year Saga Ends in Exoneration, Legal Experts Cite “Face-Saving” by DOJ, Political Overtones and Claims of Targeting,Co-Defendant’s Case Also Resolved',
      authors: [{ name: 'Published by the NY State News Staff' }],
      alternates: { canonical: "https://www.nystatenews.org/politics/charges-dropped-wanda-vazquez-political-targeting/" },
      openGraph: {
        title: 'Wanda Vázquez Charges Dropped Amid Targeting Claims',
        description: 'Wanda Vázquez cleared of all federal charges after three-year legal battle.',
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
            name: 'Published by the NY State News Staff',
          },
          publisher: {
            '@type': 'Organization',
            name: 'Nystate News',
            logo: {
              '@type': 'ImageObject',
              url: `${siteUrl}/nystatenews-card.webp`,
            },
          },
          image: imageUrl,
          alternates: { canonical: "https://www.nystatenews.org/politics/charges-dropped-wanda-vazquez-political-targeting/" },
          url: currentUrl,
          articleBody: article.description?.slice(0, 160),
          keywords: 'Wanda Vázquez Garced, Wanda vázquez cleared, A Three-Year Saga Ends in Exoneration, Legal Experts Cite “Face-Saving” by DOJ, Political Overtones and Claims of Targeting,Co-Defendant’s Case Also Resolved',
        }),
      },
    };
  }


  if (slug === 'bancredito-trusted-counsel-undoing') {
    return {
      title: 'Abandonment, Conflicted Loyalties, and Lost Opportunities: How Trusted Counsel Became Bancrédito’s Undoing',
      description: 'Bancrédito’s downfall came not from fraud or insolvency but from the actions of its own legal advisors. Once deemed compliant, the bank collapsed within two years, ending in receivership and a $15 million FinCEN penalty.',
      keywords: 'Bancrédito collapse, Bancrédito legal counsel failure, Bancrédito $15 million FinCEN penalty, Bancrédito receivership, Bancrédito downfall, trusted counsel undoing, Bancrédito compliance issues, Puerto Rico banking crisis, Bancrédito legal advisors, Bancrédito case study',
      authors: [{ name: 'Published by the NY State News Staff' }],
      alternates: { canonical: "https://www.nystatenews.org/business/bancredito-trusted-counsel-undoing" },
      openGraph: {
        title: 'Abandonment, Conflicted Loyalties, and Lost Opportunities: How Trusted Counsel Became Bancrédito’s Undoing',
        description: 'Bancrédito’s downfall came not from fraud or insolvency but from the actions of its own legal advisors. Once deemed compliant, the bank collapsed within two years, ending in receivership and a $15 million FinCEN penalty.',
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
        publishedTime: '2025-09-18T08:51:51.478555Z',
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
          datePublished: '2025-09-17',
          author: {
            '@type': 'Person',
            name: 'Published by the NY State News Staff',
          },
          publisher: {
            '@type': 'Organization',
            name: 'Nystate News',
            logo: {
              '@type': 'ImageObject',
              url: `${siteUrl}/nystatenews-card.webp`,
            },
          },
          image: imageUrl,
          alternates: { canonical: "https://www.nystatenews.org/business/bancredito-trusted-counsel-undoing/" },
          url: currentUrl,
          articleBody: article.description?.slice(0, 160),
          keywords: 'Bancrédito collapse, Bancrédito legal counsel failure, Bancrédito $15 million FinCEN penalty, Bancrédito receivership, Bancrédito downfall, trusted counsel undoing, Bancrédito compliance issues, Puerto Rico banking crisis, Bancrédito legal advisors, Bancrédito case study',
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
    return <div className="p-4">No article found for slug {slug}</div>;
  }

  if (slug === 'charges-dropped-wanda-vazquez-political-targeting') {
    return (
      <main>
        <Script
          id={`structured-data-${category}`}
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(
              {
                "@context": "https://schema.org",
                "@graph": [
                  {
                    "@type": "NewsArticle",
                    "@id": "https://www.nystatenews.org/politics/charges-dropped-wanda-vazquez-political-targeting/#article",
                    "mainEntityOfPage": {
                      "@id": "https://www.nystatenews.org/politics/charges-dropped-wanda-vazquez-political-targeting/#webpage"
                    },
                    "headline": "Charges Dropped for Wanda Vázquez Amid Claims of Political Targeting",
                    "description": "All federal charges against former Puerto Rico Governor Wanda Vázquez have been dropped, with prosecutors replacing them with a minor campaign finance violation — ending a three-year legal battle without a corruption conviction.",
                    "image": {
                      "@type": "ImageObject",
                      "url": "https://www.nystatenews.org/images/wanda-vazquez-political-targeting01.webp",
                      "width": 600,
                      "height": 400
                    },
                    "datePublished": "2025-07-05T09:15:00-04:00",
                    "dateModified": "2025-08-22T14:30:00-04:00",
                    "author": {
                      "@type": "Organization",
                      "name": " NY State News Staff",
                      "url": "https://www.nystatenews.org/our-team/staff/"
                    },
                    "publisher": {
                      "@id": "https://www.nystatenews.org/#organization"
                    },
                    "articleSection": "Politics"
                  },
                  {
                    "@type": "WebPage",
                    "@id": "https://www.nystatenews.org/politics/charges-dropped-wanda-vazquez-political-targeting/#webpage",
                    "url": "https://www.nystatenews.org/politics/charges-dropped-wanda-vazquez-political-targeting/",
                    "name": "Charges Dropped for Wanda Vázquez Amid Claims of Political Targeting | NY State News",
                    "isPartOf": {
                      "@id": "https://www.nystatenews.org/#website"
                    },
                    "inLanguage": "en-US"
                  },
                  {
                    "@type": "BreadcrumbList",
                    "itemListElement": [
                      {
                        "@type": "ListItem",
                        "position": 1,
                        "name": "Home",
                        "item": "https://www.nystatenews.org"
                      },
                      {
                        "@type": "ListItem",
                        "position": 2,
                        "name": "Politics",
                        "item": "https://www.nystatenews.org/politics/"
                      },
                      {
                        "@type": "ListItem",
                        "position": 3,
                        "name": "Charges Dropped for Wanda Vázquez Amid Claims of Political Targeting"
                      }
                    ]
                  }
                ]
              }
            )
          }}
        />

        <StaticDetailPage />
      </main>
    );
  }
  if (slug === 'bancredito-trusted-counsel-undoing') {
    return (
      <main>
        {/* <Script
          id={`structured-data-${category}`}
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(
              {
                "@context": "https://schema.org",
                "@graph": [
                  {
                    "@type": "NewsArticle",
                    "@id": "https://www.nystatenews.org/business/bancredito-trusted-counsel-undoing/#article",
                    "mainEntityOfPage": {
                      "@id": "https://www.nystatenews.org/business/bancredito-trusted-counsel-undoing/#webpage"
                    },
                    "headline": "Abandonment, Conflicted Loyalties, and Lost Opportunities: How Trusted Counsel Became Bancrédito’s Undoing",
                    "description": "Bancrédito’s downfall came not from fraud or insolvency but from the actions of its own legal advisors. Once deemed compliant, the bank collapsed within two years, ending in receivership and a $15 million FinCEN penalty.",
                    "image": {
                      "@type": "ImageObject",
                      "url": "https://www.nystatenews.org/images/bancredito-counsel-undoing.webp",
                      "width": 600,
                      "height": 400
                    },
                    "datePublished": "2025-09-18T05:10:05-04:00",
                    "dateModified": "2025-09-18T05:10:05-04:00",
                    "author": {
                      "@type": "Organization",
                      "name": " NY State News Staff",
                      "url": "https://www.nystatenews.org/our-team/staff/"
                    },
                    "publisher": {
                      "@id": "https://www.nystatenews.org/#organization"
                    },
                    "articleSection": "Business"
                  },
                  {
                    "@type": "WebPage",
                    "@id": "@nystatenews",
                    "url": "https://www.nystatenews.org/business/bancredito-trusted-counsel-undoing/",
                    "name": "Abandonment, Conflicted Loyalties, and Lost Opportunities: How Trusted Counsel Became Bancrédito’s Undoing",
                    "isPartOf": {
                      "@id": "https://www.nystatenews.org/#website"
                    },
                    "inLanguage": "en-US"
                  },
                  {
                    "@type": "BreadcrumbList",
                    "itemListElement": [
                      {
                        "@type": "ListItem",
                        "position": 1,
                        "name": "Home",
                        "item": "https://www.nystatenews.org"
                      },
                      {
                        "@type": "ListItem",
                        "position": 2,
                        "name": "Politics",
                        "item": "https://www.nystatenews.org/business/"
                      },
                      {
                        "@type": "ListItem",
                        "position": 3,
                        "name": "Abandonment, Conflicted Loyalties, and Lost Opportunities: How Trusted Counsel Became Bancrédito’s Undoing",
                        "item": "https://www.nystatenews.org/business/bancredito-trusted-counsel-undoing"
                      }
                    ]
                  }
                ]
              }
            )
          }}
        /> */}
        <Script
          id={`structured-data-${category}`}
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([
              {
                "@context": "https://schema.org",
                "@type": "NewsArticle",
                "mainEntityOfPage": {
                  "@type": "WebPage",
                  "@id": "https://www.nystatenews.org/business/bancredito-trusted-counsel-undoing"
                },
                "headline": "How Trusted Counsel Led to Bancrédito’s Downfall",
                "description": "Abandonment, Conflicted Loyalties, and Lost Opportunities: How Trusted Counsel Became Bancrédito’s Undoing",
                "image": [
                  "https://www.nystatenews.org/images/bancredito-counsel-undoing.webp"
                ],
                "datePublished": "2025-09-17T09:00:00+05:30",
                "dateModified": "2025-09-17T10:00:00+05:30",
                "inLanguage": "en",
                "isAccessibleForFree": true,
                "articleSection": "Opinion",
                "author": {
                  "@type": "Organization",
                  "name": "NY State News",
                  "url": "https://www.nystatenews.org/"
                },
                "publisher": {
                  "@type": "Organization",
                  "name": "NY State News",
                  "logo": {
                    "@type": "ImageObject",
                    "url": "https://www.nystatenews.org/images/nystatenews-logo.webp",
                    "width": 600,
                    "height": 60
                  }
                },
                "keywords": [
                  "AML compliance",
                  "federal consent order",
                  "risk-based programs",
                  "shareholder lawsuit",
                  "legal duty breach",
                  "causation damages",
                  "compliance strategy",
                  "regulatory enforcement",
                  "compliance dispute",
                  "legal malpractice case",
                  "bank compliance",
                  "lawyer negligence",
                  "regulatory penalties",
                  "financial litigation",
                  "bank risk oversight"
                ],
                "about": [
                  {
                    "@type": "Organization",
                    "name": "Bancrédito Holding",
                    "sameAs": "https://www.bancredito.com/"
                  },
                  {
                    "@type": "Organization",
                    "name": "FinCEN",
                    "sameAs": "https://www.fincen.gov/"
                  }
                ],
                "mentions": [
                  {
                    "@type": "Person",
                    "name": "Julio Herrera Velutini",
                    "sameAs": [
                      "https://en.wikipedia.org/wiki/Julio_Herrera_Velutini"
                    ]
                  }
                ],
                "citation": [
                  "https://www.fincen.gov/news/news-releases/fincen-announces-15-million-civil-money-penalty-against-bancredito-international"
                ]
              },
              {
                "@context": "https://schema.org",
                "@type": "BreadcrumbList",
                "itemListElement": [
                  {
                    "@type": "ListItem",
                    "position": 1,
                    "name": "Home",
                    "item": "https://www.nystatenews.org"
                  },
                  {
                    "@type": "ListItem",
                    "position": 2,
                    "name": "Business",
                    "item": "https://www.nystatenews.org/business/"
                  },
                  {
                    "@type": "ListItem",
                    "position": 3,
                    "name": "Abandonment, Conflicted Loyalties, and Lost Opportunities: How Trusted Counsel Became Bancrédito’s Undoing",
                    "item": "https://www.nystatenews.org/business/bancredito-trusted-counsel-undoing"
                  }
                ]
              }
            ])
          }}
        />

        <ClientS2 />
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
            <FavoritesList data={[data[13], data[14]]} />
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