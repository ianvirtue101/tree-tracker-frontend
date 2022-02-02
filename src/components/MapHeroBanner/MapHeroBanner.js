import "./MapHeroBanner.scss";
import CountUp from "react-countup";

function MapHeroBanner() {
  return (
    <>
      <div className="map-hero-banner">
        <div>
          <h1 className="map-hero-banner__text">
            Leading Banks Financed{" "}
            <CountUp
              className="map-hero-banner__counter"
              start={0}
              end={119000000000}
              duration={6}
              delay={1}
              separator=" "
              prefix="$"
            />{" "}
            to Companies Linked to Deforestation
          </h1>
        </div>
      </div>
    </>
  );
}
export default MapHeroBanner;
