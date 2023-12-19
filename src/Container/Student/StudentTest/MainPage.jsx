import React, { useEffect, useState } from "react";
import "./MainPage.css";
import McqQuestion from "./McqQuestion";
import ImageQuestion from "./ImageQuestion";
import VideoQuestion from "./VideoQuestion";
import AudioQuestion from "./AudioQuestion";
import { Container, Dialog, DialogContent, Button, Box } from "@mui/material";

// const questions = [
//   {
//     id: 0,
//     question: "question 1",
//     option1: "option a1",
//     option2: "option b1",
//     option3: "option c1",
//     option4: "option d1",
//     type: "textual",
//   },
//   {
//     id: 1,
//     question: "question 2",
//     option1: "option a2",
//     option2: "option b2",
//     option3: "option c2",
//     option4: "option d2",
//     imagelink:
//       "https://media.istockphoto.com/id/886636648/photo/young-man-is-taking-pictures-with-an-old-camera.jpg?s=612x612&w=0&k=20&c=xhNzBup3llLNBJjj4wU6kO8gmK8xiXIbxKX6cpveUhI=",
//     type: "image",
//   },
//   {
//     id: 2,
//     question: "question 3",
//     option1: "option a",
//     option2: "option b",
//     option3: "option c",
//     option4: "option d",
//     type: "textual",
//   },
//   {
//     id: 3,
//     question: "question 4",
//     option1: "option a",
//     option2: "option b",
//     option3: "option c",
//     option4: "option d",
//     videoLink: "https://ajar-me.com/assets/video/Ajar_Video.mp4",
//     type: "video",
//   },
//   {
//     id: 4,
//     question: "question 5",
//     option1: "option a",
//     option2: "option b",
//     option3: "option c",
//     option4: "option d",
//     type: "audio",
//   },
// ];

function StudentTest() {
  const [questions, setquestions] = useState([]);
  const [answer, setAnswer] = useState({});

  useEffect(() => {
    fetch(`http://172.172.170.251:5000/api/v1/test/getquestion`)
      .then((response) => response.json())
      .then((resp) => {
        setquestions(resp.data);
        resp.data.map((e) => {
          setAnswer((prev) => ({
            ...prev,
            [e._id]: -1,
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
    let tempanswer = [];
    for( const key in answer){
      tempanswer.push({
        question_id:key,
        response:answer[key]
      })
    }
    const postData={
      userId:localStorage.getItem('userId')|| '656c99945f8f9d21d69c548c',
      answer:tempanswer
    }
    fetch('http://172.172.170.251:5000/api/v1/test/insertTestResponse', {
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
      })
      .catch((error) => {
        console.error("Error:", error);
      });
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

export default StudentTest;
