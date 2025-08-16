import "./globals.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import FirstIndexSection from "../components/FirstIndexSection";
import HorizontalNewsCard from "../components/HorizontalNewsCard";
import HeroImageSection from "../components/HeroImageSection";
import AllCritics from "../components/AllCritics";
import LeftImageContent from "../components/LeftImageContent";
import RigtImageContent from "../components/RightImagecontent";
import TrumpCards from "../components/TrumpCards";
import FeaturedStroy from "../components/FeaturedStory";
import HeroLeftImage from "../components/HeroLeftImage";
import PoliticalData from "../../public/data/politics.json";
import HealthData from "../../public/data/health.json";
import ScienceData from "../../public/data/science.json";
import TechnologyData from '../../public/data/technology.json';
import SportsData from "../../public/data/sports.json";
import BusinessData from "../../public/data/business.json";
import EducationData from "../../public/data/education.json";
import EntertainmentData from "../../public/data/entertainment.json";
import SecondImageContent from "@/components/SecondImageContent";
import HorizontalNewsWithCategory from "@/components/HorizontalNewsWithCategory";
import AllFourCritics from "@/components/AllFourCritics";
import HorizontalLessContent from "@/components/HorizontalLessContent";
import ScrollingLessContent from "@/components/ScrollingLessContent";
import SectionWrapper from "@/components/SectionWrapper";
import AllMiniCards from "@/components/AllMiniCards";
import Header from "@/components/Header";
import NavbarWrapper from "@/components/NavbarWrapper";
import Script from "next/script";


export default function Home() {
  return (
    <main>
      <Script
        id="structured-data-webpage"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            {
              "@context": "https://schema.org",
              "@type": "WebPage",
              name: "Business,Politics, Technology, Health, Science, Sports, Entertainment, Education",
              description:
                "Stay informed with the latest breaking news, global business trends, financial strategies, investment opportunities, and expert market analysis.",
              url: "https://www.nystatenews.org/",
              speakable: {
                "@type": "SpeakableSpecification",
                cssSelector: ["h1"],
              },
            },
            null,
            2
          ),
        }}
      />

      <Script
        id="structured-data-itemlist"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            {
              "@context": "https://schema.org",
              "@type": "NewsMediaOrganization ",
              url: "https://www.nystatenews.org/",
              numberOfItems: 5,
              itemListOrder: "http://schema.org/ItemListOrderAscending",
              mainEntityOfPage: {
                "@type": "WebPage",
                "@id": "https://www.nystatenews.org/",
              },


            },
            null,
            2
          ),
        }}
      />

      <div id="first-section">
        <FirstIndexSection data={TechnologyData[16]} />
      </div>
      <NavbarWrapper />
      <div className="container py-lg-5 py-3">
        <div id="todays-news">
          <SectionWrapper title="Latest News">
            <HorizontalNewsCard data={[ScienceData[0], TechnologyData[0], SportsData[0], BusinessData[0]]} />
          </SectionWrapper>
        </div>
        <HeroImageSection data={HealthData[2]} />
        <SectionWrapper title="The Lede">
          <HorizontalNewsCard data={[ScienceData[1], TechnologyData[2], SportsData[1], BusinessData[1], PoliticalData[1], HealthData[0], ScienceData[10]]} />
        </SectionWrapper>

        <SecondImageContent data={ScienceData[2]} />

        <SectionWrapper title="Also in the News">
          <AllCritics data={[BusinessData[24], TechnologyData[3], SportsData[3], ScienceData[17], HealthData[10], PoliticalData[10]]} />
        </SectionWrapper>

        <LeftImageContent data={PoliticalData[0]} />

        <SectionWrapper title="Sports">
          <HorizontalNewsWithCategory data={[SportsData[25], SportsData[24], SportsData[23], SportsData[22]]} />
        </SectionWrapper>

        <RigtImageContent data={HealthData[11]} />

        <SectionWrapper title="Business">
          <AllFourCritics data={[BusinessData[21], BusinessData[22], BusinessData[23], BusinessData[19]]} />
        </SectionWrapper>

        <HeroImageSection data={ScienceData[26]} />

        <SectionWrapper title="Health">
          <HorizontalLessContent data={[HealthData[20], HealthData[21], HealthData[22], HealthData[23]]} />
        </SectionWrapper>

        <HeroLeftImage data={TechnologyData[11]} />

        <AllMiniCards data={[TechnologyData[6], SportsData[6], HealthData[4], ScienceData[6]]} />

        <FeaturedStroy data={HealthData[3]} />

        <SectionWrapper title="Education">
          <TrumpCards data={[EducationData[0], EducationData[1], EducationData[2], EducationData[3]]} />
        </SectionWrapper>

        <SectionWrapper title="The Spotlight">
          <ScrollingLessContent data={[EntertainmentData[0], EntertainmentData[1], EntertainmentData[2], EntertainmentData[3], EntertainmentData[4], EntertainmentData[5], EntertainmentData[6]]} />
        </SectionWrapper>
      </div>
    </main>
  );
}
