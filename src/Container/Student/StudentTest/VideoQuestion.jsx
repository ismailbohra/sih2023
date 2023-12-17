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

function VideoQuestion({ question, setanswer, answer }) {
  return (
    <>
      <Container>
        <h2>Q. {question.text}</h2>
        <div className="image">
          <video controls autoPlay width="300" height="200">
            <source src={question?.link} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
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

export default VideoQuestion;
