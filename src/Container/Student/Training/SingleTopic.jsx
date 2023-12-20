import React from "react";
import { useNavigate } from "react-router-dom";
import "./SingleTopic.css";

export default function SingleTopic() {
  const navigate = useNavigate();
  const trainingData = [
    {
      title: "Aptitude",
      link: "/training_test",
      category: "Apptitude",
    },
    {
      title: "Reasoning",
      link: "/training_test",
      category: "Reasoning",
    },
    {
      title: "Communication Skills",
      link: "/training_test",
      category: "Communication grammer",
    },
    {
      title: "Mathematical Analysis",
      link: "/training_test",
      category: "Quantitative",
    },
    {
      title: "Problem Solving",
      link: "/training_test",
      category: "Logical",
    },
    {
      title: "Attention Test",
      link: "/training_test",
      category: "Attention",
    },
  ];

  const handleTopicClick = (data) => {
    navigate(data.link, { state: { category: data.category } });
  };

  return trainingData.map((data, id) => {
    return (
      <div
        className="mainTopic"
        onClick={() => handleTopicClick(data)}
        key={id}
      >
        <span>{data.title}</span>
      </div>
    );
  });
}
