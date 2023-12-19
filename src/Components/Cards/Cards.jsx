import React, { useState, useEffect } from "react";
import "./Cards.css";
import { cardsData } from "../../Assets/Data/Data";

import Card from "../Card/Card";
import axios from "axios";

const Cards = () => {
  let id = "656c99945f8f9d21d69c548c";

  const [cardData, setCardData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/v1/user/user-details/${id}`);
        const apiData = response.data.performanceMetrics;
  
        console.log('apiData',apiData)
        const updatedCardData = apiData.map(metric => ({
          title: metric.title,
          color: metric.color,
          barValue: metric.barValue,
          value: "25,970", // This can be updated as per your requirement
          png: "UilUsdSquare", // This can be updated as per your requirement
          series:metric.series,
        }));
        setCardData(updatedCardData);
        // setCardData(cardData)
        console.log(response);
      } catch (error) {
        console.log(error);
      }
    };
  
    fetchData();
  }, []);
  

  return (
    <div className="Cards">
      {cardData.map((card, id) => {
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