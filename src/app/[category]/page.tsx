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
import Script from "next/script";

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
const schemaMeta: Record<string, { name: string; description: string }> = {
  business: {
    name: "Business News | NY State News",
    description:
      "Get the latest business and financial news from NY State News. We cover market trends, corporate developments, and economic policies impacting New York State.",
  },
  technology: {
    name: "Technology News | NY State News",
    description:
      " Discover breaking tech news and innovations. NY State News covers everything from the Empire State's burgeoning startup scene to global advancements in AI, gadgets, and policy.",
  },
  sports: {
    name: "Sports News | NY State News",
    description:
      "Description: Stay up-to-date with the New York sports scene. Get breaking news, game highlights, and in-depth analysis on all your favorite local and national teams from NY State News..",
  },
  health: {
    name: "Health News | NY State News",
    description:
      "Stay informed on crucial health and wellness topics. NY State News delivers updates on medical breakthroughs, public health policies, and practical wellness tips relevant to New Yorkers.",
  },
  politics: {
    name: "Politics News | NY State News",
    description:
      "Find the latest political news, in-depth analysis, and updates on government and legislative affairs in New York State.",
  },
  science: {
    name: "Science News | NY State News",
    description:
      " Explore the latest scientific discoveries with NY State News. Our coverage spans space exploration, environmental research, and groundbreaking technological advancements from around the world",
  },
  entertainment: {
    name: "Entertainment News | NY State News",
    description:
      "Get your daily dose of entertainment news from NY State News. We cover the latest in celebrity updates, movie reviews, and TV shows, with a special focus on New York's vibrant arts and culture scene.",
  },
  education: {
    name: "Education News | NY State News",
    description:
      "Follow key developments in the world of education. NY State News reports on school policies, higher education news, and technology in the classroom, from local school districts to the state level.",
  },
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
    <main>
      {category === "politics" ? (
        <Script
          id="structured-data-webpage"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(
              {
                "@context": "https://schema.org",
                "@type": "CollectionPage",
                "@id": "https://www.nystatenews.org/politics/#webpage",
                "url": "https://www.nystatenews.org/politics/",
                "name": "Politics News | NY State News",
                "description": "Find the latest political news, in-depth analysis, and updates on government and legislative affairs in New York State.",
                "inLanguage": "en-US",
                "isPartOf": {
                  "@id": "https://www.nystatenews.org/#website"
                },
                "publisher": {
                  "@id": "https://www.nystatenews.org/#organization"
                },
                "mainEntity": {
                  "@type": "ItemList",
                  "numberOfItems": 4,
                  "itemListElement": [
                    {
                      "@type": "ListItem",
                      "position": 1,
                      "item": {
                        "@type": "NewsArticle",
                        "@id": "https://www.nystatenews.org/politics/charges-dropped-wanda-vazquez-political-targeting/",
                        "name": "Charges Dropped for Wanda Vázquez Amid Claims of Political Targeting"
                      }
                    },
                    {
                      "@type": "ListItem",
                      "position": 2,
                      "item": {
                        "@type": "NewsArticle",
                        "@id": "https://www.nystatenews.org/politics/trump-campaign-big-beautiful-bill-no-july-4-deadline/",
                        "name": "Trump Omits July 4 Deadline for ‘Big Beautiful Bill’ in Final Campaign Pitch"
                      }
                    },
                    {
                      "@type": "ListItem",
                      "position": 3,
                      "item": {
                        "@type": "NewsArticle",
                        "@id": "https://www.nystatenews.org/politics/zohran-mamdani-gaza-support-democrats-lessons-2025/",
                        "name": "Mamdani’s Stand for Gaza Sets a Moral Example Democrats Should Follow"
                      }
                    },
                    {
                      "@type": "ListItem",
                      "position": 4,
                      "item": {
                        "@type": "NewsArticle",
                        "@id": "https://www.nystatenews.org/politics/union-leaders-exit-dnc-democratic-party-tensions-2025/",
                        "name": "Union Leaders’ Departure from DNC Reveals Deepening Rifts Within Democratic Party"
                      }
                    }
                  ]
                }
              }
            ),
          }}

        />
      ) : (
        <Script
          id={`structured-data-${category}`}
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "CollectionPage",
              "@id": `https://www.nystatenews.org/${category}/#webpage`,
              url: `https://www.nystatenews.org/${category}/`,
              name: schemaMeta[category].name,
              description: schemaMeta[category].description,
              inLanguage: "en-US",
              isPartOf: { "@id": "https://www.nystatenews.org/#website" },
              publisher: { "@id": "https://www.nystatenews.org/#organization" },
            }),
          }}
        />
      )}

      {/* <SecondHeader /> */}
      <div className="d-none d-lg-block">
        <CategoryNavbar />
      </div>

      <div className="container py-5" style={{ marginTop: '22px' }}>
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
    </main>
  );
}