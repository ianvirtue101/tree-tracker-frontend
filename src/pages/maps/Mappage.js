import MapComp from "../../components/Maps/MapComp";
import StackedAreaChart from "../../components/StackedAreaChart/StackedAreaChart";
import MapHeroBanner from "../../components/MapHeroBanner/MapHeroBanner";
import AbsoluteWrapper from "../../components/AbsoluteWrapper/AbsoluteWrapper";

import { useSpring, animated } from "react-spring";
import { useState, useEffect } from "react";

import "./mappage.scss";

function Mappage() {
  const [{ param }, set] = useSpring(() => ({ param: 0 }));

  const onScroll = () => {
    let ratio = window.scrollY / (window.innerHeight / 2);
    ratio = ratio > 2 ? 1 : ratio;

    set({
      param: ratio,
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <>
      <AbsoluteWrapper>
        <MapHeroBanner />

        <div className="map-content-container">
          <animated.div
            style={{
              // ...textStyle,
              opacity: param.to({
                range: [0, 1],
                output: [0, 1],
              }),
              transform: param
                .to({ range: [3, 2, 1], output: [-100, -50, 0] })
                .to((x) => `translateX(${x}100%)`),
            }}
          >
            <div className="map-content-container__under-siege">
              <div className="map-content-container-section__left">
                <h1 className="map-content-container-section__title">
                  Brazil under siege
                </h1>
                <p className="map-content-container-section__text">
                  Between 2001 and 2019, Brazil lost 565,000 square kilometers
                  (218,148 square miles) of tree cover — an area larger than the
                  state of California — to deforestation
                </p>
                <span>
                  Global Forest Watch. Global Tree Cover Loss. Retrieved March,
                  2020, from https://www.globalforestwatch.org/dashboards/global
                </span>
              </div>
            </div>
          </animated.div>

          <animated.div
            style={{
              // ...textStyle,
              opacity: param.to({
                range: [0, 0.5, 0.75, 1],
                output: [0, 0.5, 0.75, 1],
              }),
              transform: param
                .to({ range: [1, 2, 3], output: [-50, -25, 0] })
                .to((x) => `translate(${x}100%)`),
            }}
          >
            <div className="map-content-container__global-tropics">
              <div className="map-content-container-section__right">
                <h2 className="map-content-container-section__title">
                  About 30% of Global Tropical Deforestation Occurs in Brazil{" "}
                </h2>
                <p className="map-content-container-section__text">
                  Globally, we lose about 5 million hectares of forest a year
                  due to land clearing for agriculture and livestock farming,
                  logging activities to produce materials like paper, palm oil
                  and soy production, as well as gold mining. The Amazon
                  rainforest covers land across nine countries including
                  Colombia and Peru, but around 60% of it lies within Brazil.
                  Despite efforts to protect forest land, legal deforestation is
                  still rampant, and about a third of global tropical
                  deforestation occurs in Brazil’s Amazon forest, amounting 1.7
                  million hectares each year.
                </p>
              </div>
            </div>
          </animated.div>

          <div className="map-content-container-section__graph">
            <StackedAreaChart />
            <div>
              <h2 className="map-content-container-section__title">
                Negative Feedback Loops and Wildfires
              </h2>
              <p className="map-content-container-section__text">
                Globally, we lose about 5 million hectares of forest a year due
                to land clearing for agriculture and livestock farming, logging
                activities to produce materials like paper, palm oil and soy
                production, as well as gold mining. The Amazon rainforest covers
                land across nine countries including Colombia and Peru, but
                around 60% of it lies within Brazil. Despite efforts to protect
                forest land, legal deforestation is still rampant, and about a
                third of global tropical deforestation occurs in Brazil’s Amazon
                forest, amounting 1.7 million hectares each year.{" "}
              </p>
            </div>
          </div>
          <div className="map-content-container-section__map">
            <MapComp />
          </div>
        </div>
      </AbsoluteWrapper>
    </>
  );
}

export default Mappage;
