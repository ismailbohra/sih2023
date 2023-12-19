import { Box, Button, Container } from "@mui/material";
import React, { useEffect, useState } from "react";
import "./MainPage.css";
import McqQuestion from "./McqQuestion";
import { useNavigate } from "react-router-dom";


function AddFeedback() {
  const [questions, setquestions] = useState([]);
  const [answer, setAnswer] = useState({});

  useEffect(() => {
    fetch(`http://172.172.170.251:5000/api/v1/faculty/getquestion`)
      .then((response) => response.json())
      .then((resp) => {
        setquestions(resp.data);
        resp.data.map((e) => {
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
  // console.log('questions',questions)
  // console.log('answer',answer)

  const [currentQuestion, setCurrentQuestion] = useState(0);

  const markAnswer = (question_id, value) => {
    setAnswer((prevAnswers) => ({
      ...prevAnswers,
      [question_id]: value,
    }));
  };

  const navigate=useNavigate();
  const previousQuestion = () => {
    setCurrentQuestion((prevQuestion) => prevQuestion - 1);
  };

  const nextQuestion = () => {
    setCurrentQuestion((prevQuestion) => prevQuestion + 1);
  };
  const submit = () => {

    const postData={
        answer:answer,
        userId:"656c99945f8f9d21d69c548c"
    }
    console.log(answer)
    
    fetch('http://172.172.170.251:5000/api/v1/faculty/insertTestResponse', {
      method: "POST",
      headers: {
        "Content-Type": "application/json", 
      },
      body: JSON.stringify(postData), 
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json(); 
      })
      .then((data) => {
        console.log("Success:", data);
        navigate('/teacher/report')
      })
      .catch((error) => {
        console.error("Error:", error);
      });
    // console.log(answer)

  };

  return (
    <>
      {questions && questions.length > 0 && (
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
      )}
    </>
  );
}

export default AddFeedback;
