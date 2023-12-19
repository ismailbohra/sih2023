// import React from "react";
// import {
//   DialogTitle,
//   DialogContent,
//   Button,
//   Radio,
//   RadioGroup,
//   FormControlLabel,
//   Container,
//   Typography,
//   Grid,
// } from "@mui/material";

// function McqQuestion({ question, setanswer, answer }) {
//   return (
//     <>
//       <Container>
//         <DialogTitle>
//           <h2>Q. {question.text}</h2>
//         </DialogTitle>
//         <hr />
//         <DialogContent>
//           <RadioGroup
//             name="q_answer"
//             value={answer[question._id]}
//             onChange={(e) => setanswer(question._id, parseInt(e.target.value))}
//           >
//             <Grid container spacing={2} width={"100%"}>
//               {question.options &&
//                 question.options.length > 0 &&
//                 question.options.map((element, index) => (
//                   <Grid item xs={12} key={index}>
//                     <FormControlLabel
//                       control={<Radio color="primary" />}
//                       label={element.value}
//                       value={index}
//                       style={{
//                         backgroundColor:
//                           answer[question._id] === index ? "green" : "#d9534f",
//                         width: "100%",
//                         borderRadius: "10px",
//                       }}
//                     />
//                   </Grid>
//                 ))}
//             </Grid>
//           </RadioGroup>
//         </DialogContent>
//       </Container>
//     </>
//   );
// }

// export default McqQuestion;

import React from "react";
import {
  DialogTitle,
  DialogContent,
  Button,
  Checkbox, // Import Checkbox
  FormControlLabel,
  Container,
  Typography,
  Grid,
} from "@mui/material";

function McqQuestion({ question, setanswer, answer }) {
  return (
    <>
      <Container>
        <Typography variant="h4" style={{ textAlign: "center", marginBottom: "20px" }}>
          <span style={{ color: "#ff919d" }}>M</span>edha
        </Typography>

        <DialogTitle>
          <h2 style={{ textAlign: "center" }}>Q. {question.text}</h2>
        </DialogTitle>
        <hr />
        <DialogContent>
          <Grid container spacing={2} width={"100%"}>
            {question.options &&
              question.options.length > 0 &&
              question.options.map((element, index) => (
                <Grid item xs={12} key={index}>
                  <FormControlLabel
                    control={
                      <Checkbox
                        color="primary"
                        checked={answer[question._id] === index}
                        onChange={() => {
                          const newAnswer = { ...answer };
                          if (newAnswer[question._id] === index) {
                            newAnswer[question._id] = -1;
                          } else {
                            newAnswer[question._id] = index;
                          }
                          setanswer(question._id, newAnswer[question._id]);
                        }}
                      />
                    }
                    label={element.value}
                    style={{
                      backgroundColor:
                        answer[question._id] === index ? "#add8e6" : "#ffffe0",
                      width: "100%",
                      borderRadius: "10px",
                    }}
                  />
                </Grid>
              ))}
          </Grid>
        </DialogContent>
      </Container>
    </>
  );
}

export default McqQuestion;