import { useState, useRef, useEffect } from "react";
// import MapboxWorker from "worker-loader!mapbox-gl/dist/mapbox-gl-csp-worker"; // Load

import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";

import "./MapComp.scss";

// mapboxgl.workerClass = MapboxWorker;

mapboxgl.accessToken =
  "pk.eyJ1IjoiaWFudmlydHVlMTAxIiwiYSI6ImNrejY1OTZrMTB4N3Uyb3FvOGFwMmlqMzEifQ.W5GYYfwhQ6VQG2HOcXDpoQ";

// const position = [56.130367, -106.346771];
function MapComp() {
  const mapContainer = useRef();

  useEffect(() => {
    const map = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/ianvirtue101/ckytpfp0o000114nvq97j3t0v",
      center: [-51.9253, -14.235],
      zoom: 4,
    });

    map.on("load", () => {
      // Map Source for all fires
      map.addSource("inpe_brazilian_amazon_fires_1-6ltfic", {
        type: "vector",
        url: "mapbox://ianvirtue101.bu47bnyy",
      });

      map.addLayer({
        id: "All Years",
        type: "heatmap",
        source: "inpe_brazilian_amazon_fires_1-6ltfic",
        layout: {
          visibility: "none",
        },
        "source-layer": "inpe_brazilian_amazon_fires_1-6ltfic",
      });

      // 2019 ==================================== 2019
      // Map source for 2019
      map.addSource("brazil-fires-2019", {
        type: "vector",
        url: "mapbox://ianvirtue101.ckyw0f1e93qnn27rvbczipp3h-2i55p",
      });
      // Map layer for 2019
      map.addLayer({
        id: "2019",
        type: "circle",
        source: "brazil-fires-2019",
        paint: {
          "circle-radius": 7,
          "circle-color": "rgba(235, 184, 49, 0.8)",
        },

        "source-layer": "brazil-fires-2019",
      });
      // ====================================

      // 2018 ==================================== 2018
      // Map source for 2018
      map.addSource("brazil-fires-2018", {
        type: "vector",
        url: "mapbox://ianvirtue101.ckyw0eody2fzm2elnwl3y52q2-1zwxi",
      });
      // Map layer for 2018
      map.addLayer({
        id: "2018",
        type: "circle",
        source: "brazil-fires-2018",
        paint: {
          "circle-radius": 7,
          "circle-color": "rgba(242, 171, 56, 0.8)",
        },
        "source-layer": "brazil-fires-2018",
      });
      // ====================================

      // 2017 ==================================== 2017
      // Map source for 2017
      map.addSource("brazil-fires-2017", {
        type: "vector",
        url: "mapbox://ianvirtue101.ckyw0ed0j1u1r20rzpf7v77n9-3545h",
      });
      // Map layer for 2017
      map.addLayer({
        id: "2017",
        type: "circle",
        source: "brazil-fires-2017",
        paint: {
          "circle-radius": 7,
          "circle-color": "rgba(219, 134, 62, 0.8)",
        },
        "source-layer": "brazil-fires-2017",
      });
      // ====================================

      // 2016 ==================================== 2016
      // Map source for 2016
      map.addSource("brazil-fires-2016", {
        type: "vector",
        url: "mapbox://ianvirtue101.ckyw0e0mg0fe922nvgqayxy91-2vc57",
      });
      // Map layer for 2016
      map.addLayer({
        id: "2016",
        type: "circle",
        source: "brazil-fires-2016",
        paint: {
          "circle-radius": 7,
          "circle-color": "rgba(242, 112, 56, 0.8)",
        },
        "source-layer": "brazil-fires-2016",
      });
      // ====================================

      // 2015 ==================================== 2015
      // Map source for 2015
      map.addSource("brazil-fires-2015", {
        type: "vector",
        url: "mapbox://ianvirtue101.ckyw0dq3t2jrm20lnr6xeff1l-70kyz",
      });
      // Map layer for 2015
      map.addLayer({
        id: "2015",
        type: "circle",
        source: "brazil-fires-2015",
        paint: {
          "circle-radius": 7,
          "circle-color": "rgba(235, 75, 49, 0.8)",
        },
        "source-layer": "brazil-fires-2015",
      });
      // ====================================

      // 2014 ==================================== 2014
      // Map source for 2014
      map.addSource("brazil-fires-2014", {
        type: "vector",
        url: "mapbox://ianvirtue101.ckyw0ddle11zk21o0mpt0qml6-6t11x",
      });
      // Map layer for 2014
      map.addLayer({
        id: "2014",
        type: "circle",
        source: "brazil-fires-2014",
        paint: {
          "circle-radius": 7,
          "circle-color": "rgba(235, 53, 50, 0.8)",
        },
        "source-layer": "brazil-fires-2014",
      });
      // ====================================
    });

    map.on("idle", () => {
      // If these layers are not added to the map abort
      if (
        !map.getLayer(
          "All Years",
          "2019",
          "2018",
          "2017",
          "2016",
          "2015",
          "2014"
        )
      ) {
        return;
      }
      // Enumerate ids of the layers
      const toggleLayerIds = [
        "All Years",
        "2019",
        "2018",
        "2017",
        "2016",
        "2015",
        "2014",
      ];

      // Set up the corresponding toggle button for each layer
      for (const id of toggleLayerIds) {
        // Skip layers that already have a button set up
        if (document.getElementById(id)) {
          continue;
        }

        // Create a link
        const link = document.createElement("a");
        link.id = id;
        link.href = "#";
        link.textContent = id;
        link.className = "active";

        // Show or hide layer when toggle is clicked
        link.onclick = function (event) {
          const clickedLayer = this.textContent;
          event.preventDefault();
          event.stopPropagation();

          const visibility = map.getLayoutProperty(clickedLayer, "visibility");

          // Toggle layer visibility by changing the layout object;s visibility property
          if (visibility === "visible") {
            map.setLayoutProperty(clickedLayer, "visibility", "none");
            this.className = "";
          } else {
            this.className = "active";
            map.setLayoutProperty(clickedLayer, "visibility", "visible");
          }
        };

        const layers = document.getElementById("menu");
        layers.appendChild(link);
      }
    });

    return () => map.remove();
  }, []);

  return (
    <>
      <h1 className="map-header">
        Heatmap of Forest Fires in Brazil from 2014-2019
      </h1>
      <div className="menu-container">
        <div className="menu" id="menu" />
      </div>
      <div className="map-container">
        <div
          className="map-container__map"
          ref={mapContainer}
          // style={{ width: "100%", height: "100vh" }}
        ></div>
      </div>
    </>
  );
}
export default MapComp;
