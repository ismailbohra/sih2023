import { Box, Button, Container } from "@mui/material";
import React, { useEffect, useState } from "react";
import AudioQuestion from "./AudioQuestion";
import ImageQuestion from "./ImageQuestion";
import "./MainPage.css";
import McqQuestion from "./McqQuestion";
import VideoQuestion from "./VideoQuestion";
import { useLocation } from "react-router-dom";

function MainPractise() {
  const [questions, setquestions] = useState([]);
  const [answer, setAnswer] = useState({});
  const { state } = useLocation();
  const category = state?.category;

  useEffect(() => {
    const postData = {
      subject: category,
    };
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
        resp.data.map((e, index) => {
          setAnswer((prev) => ({
            ...prev,
            [e.id]: -1,
          }));
        });
      })
      .catch((error) => {
        console.error("Error during GET request:", error);
      });
    console.log("useeffect");
  }, []);

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
  const [showScore, setshowScore] = useState(false);
  const [totalscore, settotalscore] = useState(null);
  const submit = () => {
    let total = 0;
    let index = 0;
    for (const key in answer) {
      let tempquest = questions.find((e) => e.id == key);
      console.log(tempquest)
      console.log(answer,key)
      if (tempquest.correctOptionIndex == answer[key]) {
        total += 1;
      }
      index++;
    }
    settotalscore(total);
    setshowScore(true);
  };
  return (
    <>
      {showScore ? (
        <div>{totalscore}</div>
      ) : (
        questions &&
        questions.length > 0 && (
          <Container maxWidth="lg">
            <McqQuestion
              question={questions[currentQuestion]}
              answer={answer}
              setanswer={markAnswer}
            />

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
        )
      )}
    </>
  );
}

export default MainPractise;
