import React from "react";

function AudioQuestion({ question, setanswer, answer }) {
  return (
    <>
      <div className="modal-header">
        <h3>Q. {question.question}</h3>
        <div className="image">
          <audio autoPlay controls>
            <source src={question?.audioLink} type="audio/mp3" />
            Your browser does not support the audio tag.
          </audio>
        </div>
      </div>
      <div className="modal-body">
        <div className="col-xs-3 5"></div>
        <div className="quiz" id="quiz" data-toggle="buttons">
          <label
            className="element-animation1 btn btn-lg btn-danger btn-block"
            style={{
              backgroundColor: answer[question.id] == 1 ? "green" : "#d9534f",
            }}
          >
            <span className="btn-label">
              <i className="glyphicon glyphicon-chevron-right"></i>
            </span>{" "}
            <input
              type="radio"
              name="q_answer"
              value="1"
              onClick={() => setanswer(question.id, 1)}
            />
            {question.option1}
          </label>
          <label
            className="element-animation2 btn btn-lg btn-danger btn-block"
            style={{
              backgroundColor: answer[question.id] == 2 ? "green" : "#d9534f",
            }}
          >
            <span className="btn-label">
              <i className="glyphicon glyphicon-chevron-right"></i>
            </span>{" "}
            <input
              type="radio"
              name="q_answer"
              value="2"
              onClick={() => setanswer(question.id, 2)}
            />
            {question.option2}
          </label>
          <label
            className="element-animation3 btn btn-lg btn-danger btn-block"
            style={{
              backgroundColor: answer[question.id] == 3 ? "green" : "#d9534f",
            }}
          >
            <span className="btn-label">
              <i className="glyphicon glyphicon-chevron-right"></i>
            </span>{" "}
            <input
              type="radio"
              name="q_answer"
              value="3"
              onClick={() => setanswer(question.id, 3)}
            />
            {question.option3}
          </label>
          <label
            className="element-animation4 btn btn-lg btn-danger btn-block"
            style={{
              backgroundColor: answer[question.id] == 4 ? "green" : "#d9534f",
            }}
          >
            <span className="btn-label">
              <i className="glyphicon glyphicon-chevron-right"></i>
            </span>{" "}
            <input
              type="radio"
              name="q_answer"
              value="4"
              onClick={() => setanswer(question.id, 4)}
            />
            {question.option4}
          </label>
        </div>
      </div>
    </>
  );
}

export default AudioQuestion;
