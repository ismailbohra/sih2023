import React, { useState, useEffect } from "react";
import "./Cards.css";
import { cardsData } from "../../Assets/Data/Data";

import Card from "../Card/Card";
import axios from "axios";

const Cards = (props) => {
  
  

  return (
    <div className="Cards">
      {props.cardData.map((card, id) => {
        return (
          <div className="parentContainer" key={id}>
            <Card
              title={card.title}
              color={card.color}
              barValue={card.barValue}
              value={card.value}
              png={card.png}
              series={card.series}
            />
          </div>
        );
      })}
    </div>

  );
};

export default Cards;