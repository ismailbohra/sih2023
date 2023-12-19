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

function McqQuestion({ question, setanswer, answer }) {
  const options=['Excellent',"Best","Better","Good","Need Improvment"]
  return (
    <>
      <Container>
        <DialogTitle>
          <p>Q. {question.question}</p>
        </DialogTitle>
        <hr />
        <DialogContent>
          <RadioGroup
            name="q_answer"
            value={answer[question.id]}
            onChange={(e) => setanswer(question.id, parseInt(e.target.value))}
          >
            <Grid container spacing={2} width={"100%"}>
              {
              options.map((element, index) => (
                  <Grid item xs={12} key={index}>
                    <FormControlLabel
                      control={<Radio color="primary" />}
                      label={element}
                      value={index}
                      style={{
                        backgroundColor:
                          answer[question.id] === index ? "green" : "#d9534f",
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

export default McqQuestion;
