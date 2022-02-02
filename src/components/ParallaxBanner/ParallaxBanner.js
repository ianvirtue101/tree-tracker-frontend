import { Parallax, ParallaxLayer } from "@react-spring/parallax";

function ParallaxBanner() {
  return (
    <>
      <div>
        <Parallax pages={2} style={{ top: "0", left: "0" }}>
          <ParallaxLayer
            offset={0}
            speed={2.5}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <p>Scroll down</p>
          </ParallaxLayer>

          <ParallaxLayer
            offset={1}
            speed={2}
            style={{ backgroundColor: "#8bd3dd" }}
          />

          <ParallaxLayer
            offset={1}
            speed={0.5}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              color: "white",
            }}
          >
            <p>Scroll up</p>
          </ParallaxLayer>
        </Parallax>
      </div>
    </>
  );
}

export default ParallaxBanner;
