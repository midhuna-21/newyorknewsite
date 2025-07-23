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
import SecondImageContent from "@/components/SecondImageContent";
import HorizontalNewsWithCategory from "@/components/HorizontalNewsWithCategory";
import AllFourCritics from "@/components/AllFourCritics";
import HorizontalLessContent from "@/components/HorizontalLessContent";
import ScrollingLessContent from "@/components/ScrollingLessContent";
import Navbar from "../components/Navbar";
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
              name: "Business,Politics, Technology,Health,Science,Sports",
              description:
                "Stay informed with the latest breaking news, global business trends, financial strategies, investment opportunities, and expert market analysis.",
              url: "https://tangentweekly.com/",
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
              "@type": "ItemList",
              url: "https://tangentweekly.com/",
              numberOfItems: 5,
              itemListOrder: "http://schema.org/ItemListOrderAscending",
              mainEntityOfPage: {
                "@type": "WebPage",
                "@id": "https://tangentweekly.com/",
              },


            },
            null,
            2
          ),
        }}
      />

        <Header />
        <div id="first-section">
          <FirstIndexSection data={TechnologyData[16]} />
        </div>
        <NavbarWrapper/>

       <div className="container py-lg-5 py-3">
          <section id="todays-news">

          <SectionWrapper title="Today’s News">
            <HorizontalNewsCard data={[ScienceData[0], TechnologyData[0], SportsData[0], BusinessData[0]]} />
          </SectionWrapper>
          </section>

          <HeroImageSection data={PoliticalData[28]} />

          <SectionWrapper title="The Lede">
            <HorizontalNewsCard data={[ScienceData[1], TechnologyData[2], SportsData[1], BusinessData[1], PoliticalData[1], HealthData[0], ScienceData[10]]} />
          </SectionWrapper>


          <SecondImageContent data={ScienceData[2]} />

          <SectionWrapper title="The Critics">
            <AllCritics data={[ScienceData[2], TechnologyData[3], SportsData[3], BusinessData[2], HealthData[10], PoliticalData[10]]} />
          </SectionWrapper>

          <LeftImageContent data={BusinessData[10]} />

          <SectionWrapper title="Our Columnists">
            <HorizontalNewsWithCategory data={[TechnologyData[4], SportsData[4], HealthData[1], ScienceData[3]]} />
          </SectionWrapper>

          <RigtImageContent data={HealthData[11]} />

          <SectionWrapper title="Ideas">
            <AllFourCritics data={[ScienceData[22], TechnologyData[13], SportsData[13], BusinessData[22]]} />
          </SectionWrapper>

          <HeroImageSection data={ScienceData[26]} />

          <SectionWrapper title="Persons of Interest">
            <HorizontalLessContent data={[TechnologyData[4], SportsData[4], HealthData[1], ScienceData[4]]} />
          </SectionWrapper>

          <HeroLeftImage data={TechnologyData[11]} />

          <AllMiniCards data={[TechnologyData[6], SportsData[6], HealthData[4], ScienceData[6]]} />

          <FeaturedStroy data={HealthData[3]} />

          <SectionWrapper title="The Talk of the Town">
            <TrumpCards data={[TechnologyData[6], SportsData[6], HealthData[4], ScienceData[6]]} />
          </SectionWrapper>
          <SectionWrapper title="Shouts & Murmurs">

            <ScrollingLessContent data={[HealthData[4], BusinessData[5], HealthData[5], ScienceData[7], TechnologyData[9], BusinessData[14], HealthData[22]]} />
          </SectionWrapper>
        </div>
    </main>
  );
}
