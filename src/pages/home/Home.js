import HomeParallax from "../../components/homeParallax/HomeParallax";
import HeroBanner from "../../components/HeroBanner/HeroBanner";
import "./home.scss";
import AbsoluteWrapper from "../../components/AbsoluteWrapper/AbsoluteWrapper";

function Home() {
  return (
    <>
      <AbsoluteWrapper>
        <HeroBanner />
        <HomeParallax />
      </AbsoluteWrapper>
    </>
  );
}

export default Home;
