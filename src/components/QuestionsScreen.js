import React from "react";
import QuestionsTop from "./QuestionsTop";
import Question from "./Question";
import Bottom from "./Bottom";

// import shuffle from "./shuffle";

export default function QuestionsScreen(props) {
  const { deck, setOpenDeck, zapGoal, setZapGoal, setDeck } = props;
  // shuffle(deck);
  // console.log(deck);

  const [answeredQuestions, setAnsweredQuestions] = React.useState(0);
  const [answeredQuestionsIcons, setAnsweredQuestionsIcons] = React.useState(
    []
  );

  function addAnsweredQuestion(choice) {
    setAnsweredQuestions(answeredQuestions + 1);
    setAnsweredQuestionsIcons([...answeredQuestionsIcons, choice]);
  }

  function resetZap() {
    setAnsweredQuestions(0);
    setAnsweredQuestionsIcons([]);
    setOpenDeck(false);
    setZapGoal(0);
    setDeck([]);
  }

  return (
    <div className="questions-screen">
      <QuestionsTop />

      <div className="questions">
        {deck.map((card, index) => {
          return (
            <Question
              key={index + 1}
              card={card}
              index={index + 1}
              addAnsweredQuestion={addAnsweredQuestion}
            />
          );
        })}
      </div>

      <Bottom
        answeredQuestions={answeredQuestions}
        totalQuestions={deck.length}
        answeredIcons={answeredQuestionsIcons}
        resetZap={resetZap}
        zapGoal={zapGoal}
      />
    </div>
  );
}
