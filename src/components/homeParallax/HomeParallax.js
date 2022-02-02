import React from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import CountUp from "react-countup";
import "./HomeParallax.scss";

import { Link } from "react-router-dom";

import HomeBarChart from "../HomeBarChart/HomeBarChart";

export default function HomeParallax() {
  const alignCenter = { display: "flex", alignItems: "center" };
  return (
    <>
      <div className="parallax-container">
        <Parallax
          className="parallax-div"
          pages={4}
          style={{ width: "calc(100% + 20px)", height: "100rem" }}
          onScroll={(e) => e.stopPropagation()}
        >
          <ParallaxLayer
            // className="parallax-container__layer"
            offset={0}
            speed={0.5}
            style={{ ...alignCenter, justifyContent: "center" }}
            onScroll={(e) => e.stopPropagation()}
          >
            <div className="parallax-container__text-container">
              <div className="parallax-container__scroll-text">
                More than{" "}
                <CountUp
                  className="parallax-container__counter"
                  start={0}
                  end={12000000}
                  duration={5}
                  delay={5}
                  separator=" "
                />{" "}
                hectares of tree cover in the tropics was lost in 2020 alone.
              </div>
            </div>
          </ParallaxLayer>

          <ParallaxLayer
            // className="parallax-container__layer"
            offset={0.8}
            speed={0.5}
            style={{
              ...alignCenter,
              justifyContent: "center",
              height: "20rem",
            }}
            onScroll={(e) => e.stopPropagation()}
          >
            <div className="parallax-container__text-container">
              <div className="parallax-container__scroll-text">
                Forest loss contributes nearly{" "}
                <CountUp
                  className="parallax-container__counter"
                  start={0}
                  end={5}
                  duration={5}
                  delay={1}
                  separator=" "
                  suffix=" Billion"
                />{" "}
                tons of carbon dioxide into the atmosphere every year, which is
                equivalent to nearly 10% of annual human emissions
              </div>
            </div>
          </ParallaxLayer>

          <ParallaxLayer
            // className="parallax-container__layer"
            offset={0}
            sticky={{ start: 1, end: 1.75 }}
            style={{
              ...alignCenter,
              justifyContent: "flex-start",
              alignItems: "flex-start",
            }}
            onScroll={(e) => e.stopPropagation()}
          >
            <HomeBarChart />
          </ParallaxLayer>

          <ParallaxLayer
            className="parallax-container__layer"
            offset={1}
            speed={1.5}
            style={{
              ...alignCenter,
              justifyContent: "flex-end",
            }}
            onScroll={(e) => e.stopPropagation()}
          >
            <p className="parallax-container__card-text">
              40% of global deforestation is commodity-driven
            </p>
          </ParallaxLayer>

          <ParallaxLayer
            // className="parallax-container__layer"
            offset={1.5}
            speed={1.5}
            style={{ ...alignCenter, justifyContent: "flex-end" }}
            onScroll={(e) => e.stopPropagation()}
          >
            <p className="parallax-container__card-text">
              Production of commodities including beef, soy, palm, oil, pupl,
              paper, energy, and minerals, is the leading cause of
              deforeestation.
            </p>
          </ParallaxLayer>
          <ParallaxLayer
            className="parallax-container__layer--link"
            offset={2.0}
            speed={1.5}
            style={{
              ...alignCenter,
              justifyContent: "center",
              pointerEvents: "auto",
              zIndex: "1",
            }}
            onScroll={(e) => e.stopPropagation()}
          >
            <Link to="/maps" className="parallax-container__card-text--link">
              <h2>Learn More</h2>
            </Link>
          </ParallaxLayer>
        </Parallax>
      </div>
    </>
  );
}
