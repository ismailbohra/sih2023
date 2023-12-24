import React from "react";
import {
  DialogTitle,
  DialogContent,
  Button,
  Radio,
  RadioGroup,
  FormControlLabel,
  Container,
  Typography,
  Grid,
} from "@mui/material";
import ball from "../../../Assets/photos/ball.jpg";
import banana from "../../../Assets/photos/banana.webp";
import First from "../../../Assets/photos/Firts.jpg";
import girl from "../../../Assets/photos/girl.jpg";
import imagecock from "../../../Assets/photos/imagecock.jpg";
import pic2 from "../../../Assets/photos/pic2.jpg";
import com from "../../../Assets/photos/Communication.jpeg";
import math1 from "../../../Assets/photos/Mathematics1.png";
import math2 from "../../../Assets/photos/Mathematics2.png";
import reasoning from "../../../Assets/photos/Reasoning.png";
import reasoning2 from "../../../Assets/photos/Reasoning2.jpeg";
import "./imageQuestion.css";

function ImageQuestion({ question, setanswer, answer }) {
  function getiamge(params) {
    switch (params) {
      case "ball.jpg":
        return ball;
        break;
      case "banana.webp":
        return banana;
        break;
      case "girl.jpg":
        return girl;
        break;
      case "imagecock.jpg":
        return imagecock;
        break;
      case "Firts.jpg":
        return First;
        break;
      case "pic2.jpg":
        return pic2;
        break;
      case "Communication.jpeg":
        return com;
        break;
      case "Mathematics1.png":
        return math1;
        break;
      case "Mathematics2.png":
        return math2;
        break;
      case "Reasoning.png":
        return reasoning;
        break;
      case "Reasoning2.jpeg":
        return reasoning2;
        break;

      default:
        break;
    }
  }
  return (
    <>
      <Container>
        <h2>Q. {question.text}</h2>
        <div className="iq">
          <img
            src={getiamge(question.link)}
            alt="imageofquestion"
            width={"400px"}
            height={"150px"}
          />
        </div>
        <hr />
        <DialogContent>
          <RadioGroup
            name="q_answer"
            value={answer[question._id]}
            onChange={(e) => setanswer(question._id, parseInt(e.target.value))}
          >
            <Grid container spacing={2} width={"100%"}>
              {question.options &&
                question.options.length > 0 &&
                question.options.map((element, index) => (
                  <Grid item xs={12} key={index}>
                    <FormControlLabel
                      control={<Radio color="primary" />}
                      label={element.value}
                      value={index}
                      style={{
                        backgroundColor:
                          answer[question._id] === index ? "green" : "#d9534f",
                        width: "100%",
                        borderRadius: "10px",
                      }}
                    />
                  </Grid>
                ))}
            </Grid>
          </RadioGroup>
        </DialogContent>
      </Container>
    </>
  );
}

export default ImageQuestion;
