import Image from "next/image";
import styles from "./page.module.css";
import FirstIndexSection from "./components/FirstIndexSection";
import CategoryNavbar from "./components/CategoryNavbar";
import HorizontalNewsCard from "./components/HorizontalNewsCard";
import HeroImageSection from "./components/HeroImageSection";
import HeroScrollingCards from "./components/HeroScrollingCards";
import AllCritics from "./components/AllCritics";
import LeftImageContent from "./components/LeftImageContent";
import HorizontalMixedCard from "./components/HorizontalMixedCard";
import RigtImageContent from "./components/RightImagecontent";
import DailyNews from "./components/DailyNews";
import TrumpCards from "./components/TrumpCards";
import FeaturedStroy from "./components/FeaturedStory";
import HeroMiniCards from "./components/HeroMiniCards";
import HeroLeftImage from "./components/HeroLeftImage";
import PoliticalData from "../../public/data/politics.json";
import HealthData from "../../public/data/health.json";
import ScienceData from "../../public/data/science.json";
import TechnologyData from '../../public/data/technology.json';
import SportsData from "../../public/data/sports.json";
import BusinessData from "../../public/data/business.json";

export default function Home() {
  return (
    <main>
      <FirstIndexSection data={PoliticalData[0]} />
      <CategoryNavbar />

      <HorizontalNewsCard data={[ScienceData[0], TechnologyData[0], SportsData[0], BusinessData[0]]} />

      <div className='container py-5'>
        <HeroImageSection data={PoliticalData[21]} />
      </div>

      <HeroScrollingCards data={[ScienceData[1], TechnologyData[2], SportsData[1], BusinessData[1], PoliticalData[1], HealthData[0]]} />

      <div
        className='container py-5'>
        <FirstIndexSection data={SportsData[2]} />
      </div>

      <AllCritics data={[ScienceData[2], TechnologyData[3], SportsData[3], BusinessData[2], HealthData[10],PoliticalData[10]]} />

      <LeftImageContent data={BusinessData[3]} />

      <HorizontalNewsCard data={[TechnologyData[4], SportsData[4], HealthData[1], ScienceData[3]]} />

      <RigtImageContent data={HealthData[2]} />

      <HeroLeftImage data={ScienceData[4]} />

      <HeroImageSection data={PoliticalData[2]} />

      <div className="container py-5">
        <div className="row">
          <div className="col"><HeroMiniCards data={SportsData[5]} /></div>
          <div className="col"><HeroMiniCards data={TechnologyData[5]} /></div>
          <div className="col"><HeroMiniCards data={ScienceData[5]} /></div>
          <div className="col"><HeroMiniCards data={BusinessData[4]} /></div>
        </div>
      </div>
      <FeaturedStroy data={HealthData[3]} />

      <TrumpCards data={[TechnologyData[6], SportsData[6], HealthData[4], ScienceData[6]]} />

      <div className="container py-5">
        <div className="row">
          <div className="col-12 col-md-9">
            <DailyNews data={PoliticalData[3]} />
          </div>
          <div className="d-none d-md-block col-md-3"></div>
        </div>
      </div>

      <HorizontalNewsCard data={[HealthData[4], BusinessData[5], HealthData[5], ScienceData[7]]} />
    </main>
  );
}
