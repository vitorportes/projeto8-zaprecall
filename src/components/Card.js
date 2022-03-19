import React from "react";
import setinha from "./../assets/setinha.svg";

export default function Card(props) {
  const { question, answer, chooseAnswer } = props;

  const [showAnswer, setShowAnswer] = React.useState(false);

  if (!showAnswer) {
    return (
      <div className="question-card">
        <p>{question}</p>
        <img src={setinha} alt="seta" onClick={() => setShowAnswer(true)} />
      </div>
    );
  } else {
    return (
      <div className="question-card">
        <p>{answer}</p>
        <div className="buttons">
          <button
            className="error-button"
            onClick={() => chooseAnswer("error")}
          >
            Não lembrei
          </button>
          <button
            className="almost-button"
            onClick={() => chooseAnswer("almost")}
          >
            Quase não lembrei!
          </button>
          <button
            className="right-button"
            onClick={() => chooseAnswer("right")}
          >
            Zap!
          </button>
        </div>
      </div>
    );
  }
}
