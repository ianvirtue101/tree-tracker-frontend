import "./HeroBanner.scss";
import CountUp from "react-countup";

function HeroBanner() {
  return (
    <>
      <div className="hero-banner">
        <div>
          <h1 className="hero-banner__text">
            <CountUp
              className="hero-banner__counter"
              start={0}
              end={137}
              duration={4}
              delay={1}
              separator=" "
            />{" "}
            different species of plants, animals, and birds are lost every
            single day due to global deforestation.
          </h1>
        </div>
      </div>
      <div class="arrow"></div>
    </>
  );
}
export default HeroBanner;
