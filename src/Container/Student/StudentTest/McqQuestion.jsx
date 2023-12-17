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
  return (
    <>
      <Container>
      <DialogTitle>
        <h2 >Q. {question.question}</h2>
      </DialogTitle>
      <hr/>
      <DialogContent>
        <RadioGroup
          name="q_answer"
          value={answer[question.id]}
          onChange={(e) => setanswer(question.id, parseInt(e.target.value))}
        >
          <Grid container spacing={2} width={'100%'}>
            <Grid item xs={12}>
              <FormControlLabel
                control={<Radio color="primary" />}
                label={question.option1}
                value={1}
                style={{
                  backgroundColor:
                    answer[question.id] === 1 ? "green" : "#d9534f",
                    width:'100%',
                    borderRadius:'10px'
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={<Radio color="primary" />}
                label={question.option2}
                value={2}
                style={{
                  backgroundColor:
                    answer[question.id] === 2 ? "green" : "#d9534f",
                    width:'100%',
                    borderRadius:'10px'
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={<Radio color="primary" />}
                label={question.option3}
                value={3}
                style={{
                  backgroundColor:
                    answer[question.id] === 3 ? "green" : "#d9534f",
                    width:'100%',
                    borderRadius:'10px'
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={<Radio color="primary" />}
                label={question.option4}
                value={4}
                style={{
                  backgroundColor:
                    answer[question.id] === 4 ? "green" : "#d9534f",
                    width:'100%',
                    borderRadius:'10px'
                }}
              />
            </Grid>
          </Grid>
        </RadioGroup>
      </DialogContent>
    </Container>
    </>
  );
}

export default McqQuestion;
