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

function AudioQuestion({ question, setanswer, answer }) {
  const link1 =
    "https://firebasestorage.googleapis.com/v0/b/bohratraders-b6570.appspot.com/o/Communication.mp3?alt=media&token=4bd9c196-2c53-41fa-86b9-eccb72dda33a";
  const link2 =
    "https://firebasestorage.googleapis.com/v0/b/bohratraders-b6570.appspot.com/o/Communication1.mp3?alt=media&token=39a55b49-58aa-4f44-a8af-247a3a181d46";
  function name(params) {
    switch (params) {
      case "Communication.mp3":
        return link1;
        break;

      case "Communication1.mp3":
        return link2;
        break;

      default:
        return ""
        break;
    }
  }
  return (
    <>
      <Container>
        <h2>Q. {question.text}</h2>
        <div className="image">
          <audio autoPlay controls>
            <source src={name(question?.link)} type="audio/mp3" />
            Your browser does not support the audio tag.
          </audio>
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

export default AudioQuestion;
