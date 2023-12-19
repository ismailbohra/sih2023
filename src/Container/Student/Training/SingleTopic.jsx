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
      category: "Logical",
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
      title: "Listening Skills",
      link: "/training_test",
      category: "Communication",
    },
    {
      title: "Attention Test",
      link: "/training_test",
      category: "Miscellaneous",
    },
  ];

  const handleTopicClick = (data) => {
    // Use the navigate function with the state object
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
