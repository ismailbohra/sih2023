import { Box, Button, Container } from "@mui/material";
import React, { useEffect, useState } from "react";
import AudioQuestion from "./AudioQuestion";
import ImageQuestion from "./ImageQuestion";
import "./MainPage.css";
import McqQuestion from "./McqQuestion";
import VideoQuestion from "./VideoQuestion";

function MainPractise({ location }) {
  const [questions, setquestions] = useState([]);
  const [answer, setAnswer] = useState({});
  const category = location.state?.category;

  useEffect(() => {
    const postData={
      subject:category
    }
    fetch("http://172.172.170.251:5000/api/v1/training/getquestion", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(postData),
    })
      .then((response) => response.json())
      .then((resp) => {
        setquestions(resp.data);
        resp.data.map((e,index) => {
          setAnswer((prev) => ({
            ...prev,
            [index]: e.correct,
          }));
        });
      })
      .catch((error) => {
        console.error("Error during GET request:", error);
      });
    console.log("useeffect");
  }, []);
  // console.log('questions',questions)
  // console.log('answer',answer)

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
  const submit = () => {
    // let tempanswer = [];
    // for( const key in answer){
    //   tempanswer.push({
    //     question_id:key,
    //     response:answer[key]
    //   })
    // }
    // const postData={
    //   userId:localStorage.getItem('userId')|| '656c99945f8f9d21d69c548c',
    //   answer:tempanswer
    // }
    // fetch('http://172.172.170.251:5000/api/v1/test/insertTestResponse', {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(postData),
    // })
    //   .then((response) => {
    //     if (!response.ok) {
    //       throw new Error(`HTTP error! Status: ${response.status}`);
    //     }
    //     return response.json();
    //   })
    //   .then((data) => {
    //     console.log("Success:", data);
    //   })
    //   .catch((error) => {
    //     console.error("Error:", error);
    //   });
  };

  return (
    <>
      {questions && questions.length > 0 && (
        <Container maxWidth="lg">
          {questions[currentQuestion].type === "textual" ? (
            <McqQuestion
              question={questions[currentQuestion]}
              answer={answer}
              setanswer={markAnswer}
            />
          ) : null}

          {questions[currentQuestion].type === "image" ? (
            <ImageQuestion
              question={questions[currentQuestion]}
              answer={answer}
              setanswer={markAnswer}
            />
          ) : null}
          {questions[currentQuestion].type === "video" ? (
            <VideoQuestion
              question={questions[currentQuestion]}
              answer={answer}
              setanswer={markAnswer}
            />
          ) : null}
          {questions[currentQuestion].type === "audio" ? (
            <AudioQuestion
              question={questions[currentQuestion]}
              answer={answer}
              setanswer={markAnswer}
            />
          ) : null}

          <Box
            sx={{ justifyContent: "space-between" }}
            mt={5}
            // width={"100%"}
            display={"flex"}
            padding={"15px"}
          >
            <Button
              variant="contained"
              color="primary"
              onClick={previousQuestion}
              disabled={currentQuestion - 1 === -1 ? true : false}
            >
              Previous
            </Button>
            {questions.length - 1 === currentQuestion ? (
              <>
                <Button variant="contained" color="success" onClick={submit}>
                  Submit
                </Button>
              </>
            ) : (
              <Button
                variant="contained"
                color="primary"
                onClick={nextQuestion}
              >
                Next
              </Button>
            )}
          </Box>
        </Container>
      )}
    </>
  );
}

export default MainPractise;
