import React, { useState } from "react";
import "./MainPage.css";
import { Box } from "@mui/material";
import McqQuestion from "./McqQuestion";
import ImageQuestion from "./ImageQuestion";
import VideoQuestion from "./VideoQuestion";
import AudioQuestion from "./AudioQuestion";

const questions = [
  {
    id: 0,
    question: "question 1",
    option1: "option a1",
    option2: "option b1",
    option3: "option c1",
    option4: "option d1",
    category: "textual",
  },
  {
    id: 1,
    question: "question 2",
    option1: "option a2",
    option2: "option b2",
    option3: "option c2",
    option4: "option d2",
    imagelink:
      "https://media.istockphoto.com/id/886636648/photo/young-man-is-taking-pictures-with-an-old-camera.jpg?s=612x612&w=0&k=20&c=xhNzBup3llLNBJjj4wU6kO8gmK8xiXIbxKX6cpveUhI=",
    category: "image",
},
{
    id: 2,
    question: "question 3",
    option1: "option a",
    option2: "option b",
    option3: "option c",
    option4: "option d",
    category: "textual",
  },
  {
    id: 3,
    question: "question 4",
    option1: "option a",
    option2: "option b",
    option3: "option c",
    option4: "option d",
    videoLink:'https://ajar-me.com/assets/video/Ajar_Video.mp4',
    category: "video",
  },
  {
    id: 4,
    question: "question 5",
    option1: "option a",
    option2: "option b",
    option3: "option c",
    option4: "option d",
    category: "audio",
  },
];

function StudentTest() {
  const [answer, setAnswer] = useState({
    0: 0,
    1: 0,
    2: 0,
    3: 0,
    4: 0,
    5: 0,
  });
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const markAnswer = (question_id, value) => {
    setAnswer((prevAnswers) => ({
      ...prevAnswers,
      [question_id]: value,
    }));
  };

  const previousQuestion = () => {
    setCurrentQuestion((prevQuestion) => prevQuestion - 1);
};

const nextQuestion = () => {
    setCurrentQuestion((prevQuestion) => prevQuestion + 1);
  };
  const submit=()=>{
    console.log(answer);
  }

  return (
    <>
      <div className="container-fluid">
        <div className="modal-dialog">
          <div className="modal-content">
            {questions[currentQuestion].category === "textual" ? (
              <McqQuestion
                question={questions[currentQuestion]}
                answer={answer}
                setanswer={markAnswer}
              />
            ) : null}
            
            {questions[currentQuestion].category === "image" ? (
              <ImageQuestion
                question={questions[currentQuestion]}
                answer={answer}
                setanswer={markAnswer}
              />
            ) : null}
            {questions[currentQuestion].category === "video" ? (
              <VideoQuestion
                question={questions[currentQuestion]}
                answer={answer}
                setanswer={markAnswer}
              />
            ) : null}
            {questions[currentQuestion].category === "audio" ? (
              <AudioQuestion
                question={questions[currentQuestion]}
                answer={answer}
                setanswer={markAnswer}
              />
            ) : null}
            
            <Box
              sx={{ justifyContent: "space-between" }}
              mt={5}
              width={"100%"}
              display={"flex"}
              padding={"15px"}
            >
              <button
                type="button"
                className="btn btn-primary"
                onClick={previousQuestion}
                disabled={currentQuestion - 1 == -1 ? true : false}
              >
                Previous
              </button>
              {
                (questions.length-1==currentQuestion)?<><button
                type="button"
                className="btn btn-success"
                onClick={submit}
              >
                Submit
              </button></>:<button
                type="button"
                className="btn btn-primary"
                onClick={nextQuestion}
              >
                Next
              </button>
              }
            </Box>
          </div>
        </div>
      </div>
    </>
  );
}

export default StudentTest;
