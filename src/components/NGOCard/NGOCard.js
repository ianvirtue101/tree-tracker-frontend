import "./NGOCard.scss";

import { useState } from "react";

function NGOCard({ nonProfits }) {
  if (nonProfits === undefined) {
    return <span>Loading...</span>;
  }

  return (
    <>
      {nonProfits.map((nonProfit) => {
        return (
          <div key={nonProfit.id} className="ngo-card-container">
            <img className="ngo-card-container__image" src={nonProfit.image} />{" "}
            <div className="ngo-card-container__text-container">
              <div className="ngo-card-container__title">{nonProfit.name}</div>
              <div className="ngo-card-container__text">
                {nonProfit.description}
              </div>
              <a
                className="ngo-card-container__link"
                target="_blank"
                href={nonProfit.url}
              >
                Learn More
              </a>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default NGOCard;
