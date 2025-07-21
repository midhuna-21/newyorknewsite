import Image from "next/image";
import styles from "./page.module.css";
import FirstIndexSection from "../components/FirstIndexSection";
import HorizontalNewsCard from "../components/HorizontalNewsCard";
import HeroImageSection from "../components/HeroImageSection";
import AllCritics from "../components/AllCritics";
import LeftImageContent from "../components/LeftImageContent";
import RigtImageContent from "../components/RightImagecontent";
import DailyNews from "../components/DailyNews";
import TrumpCards from "../components/TrumpCards";
import FeaturedStroy from "../components/FeaturedStory";
import HeroMiniCards from "../components/HeroMiniCards";
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

export default function Home() {
  return (
    <main>
      <div id="first-section">
        <FirstIndexSection data={TechnologyData[16]} />
      </div>
      <div className="d-none d-md-block">
        <Navbar />
      </div>

      <div className="container py-4">
        <SectionWrapper title="Today’s News">
          <HorizontalNewsCard data={[ScienceData[0], TechnologyData[0], SportsData[0], BusinessData[0]]} />
        </SectionWrapper>

        <HeroImageSection data={PoliticalData[28]} />

        <SectionWrapper title="The Lede">
          <HorizontalNewsCard data={[ScienceData[1], TechnologyData[2], SportsData[1], BusinessData[1], PoliticalData[1], HealthData[0], ScienceData[10]]} />
        </SectionWrapper>


        <SecondImageContent data={SportsData[2]} />

        <SectionWrapper title="The Critics">
          <AllCritics data={[ScienceData[2], TechnologyData[3], SportsData[3], BusinessData[2], HealthData[10], PoliticalData[10]]} />
        </SectionWrapper>

        <LeftImageContent data={BusinessData[3]} />

        <SectionWrapper title="Our Columnists">
          <HorizontalNewsWithCategory data={[TechnologyData[4], SportsData[4], HealthData[1], ScienceData[3]]} />
        </SectionWrapper>

        <RigtImageContent data={HealthData[2]} />

        <SectionWrapper title="Ideas">
          <AllFourCritics data={[ScienceData[22], TechnologyData[13], SportsData[13], BusinessData[22]]} />
        </SectionWrapper>

        <HeroImageSection data={ScienceData[26]} />

        <SectionWrapper title="Persons of Interest">
          <HorizontalLessContent data={[TechnologyData[4], SportsData[4], HealthData[1], ScienceData[4]]} />
        </SectionWrapper>

        <HeroLeftImage data={ScienceData[4]} />

        <AllMiniCards data={[TechnologyData[6], SportsData[6], HealthData[4], ScienceData[6]]} />

        <FeaturedStroy data={HealthData[3]} />

        <SectionWrapper title="The Talk of the Town">
          <TrumpCards data={[TechnologyData[6], SportsData[6], HealthData[4], ScienceData[6]]} />
        </SectionWrapper>

        <div >
          <div className="row">
            <div className="col-12 col-md-9">
              <SectionWrapper title="Daily Cartoon">
                <DailyNews data={PoliticalData[3]} />
              </SectionWrapper>
            </div>
            <div className="d-none d-md-block col-md-3"></div>
          </div>
        </div>
        <SectionWrapper title="Shouts & Murmurs">

          <ScrollingLessContent data={[HealthData[4], BusinessData[5], HealthData[5], ScienceData[7], TechnologyData[9], BusinessData[14], HealthData[22]]} />
        </SectionWrapper>
      </div>
    </main>
  );
}
