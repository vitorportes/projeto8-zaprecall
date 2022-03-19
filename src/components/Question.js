import React from "react";
import Icon from "./Icon";
import Card from "./Card";

export default function Question(props) {
  const { card } = props;
  const { index, addAnsweredQuestion } = props;
  const { question, answer } = card;
  // console.log(card);

  const [showCard, setShowCard] = React.useState(false);
  const [chosenAnswer, setChosenAnswer] = React.useState("");

  function showAnswerCard(answered) {
    if (!showCard && answered === "") {
      setShowCard(true);
    }
  }

  function chooseAnswer(choice) {
    setChosenAnswer(choice);
    setShowCard(false);
    addAnsweredQuestion(choice);
  }

  if (!showCard) {
    return (
      <div className="question" onClick={() => showAnswerCard(chosenAnswer)}>
        <h3 className={chosenAnswer}>Pergunta {index}</h3>
        <Icon choice={chosenAnswer} />
      </div>
    );
  } else {
    return (
      <Card question={question} answer={answer} chooseAnswer={chooseAnswer} />
    );
  }
}
