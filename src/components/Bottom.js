import Icon from "./Icon";
import BottomResult from "./BottomResult";
import party from "./../assets/party.png";
import sad from "./../assets/sad.png";

export default function Bottom(props) {
  const {
    answeredQuestions,
    totalQuestions,
    answeredIcons,
    resetZap,
    zapGoal,
  } = props;

  const errors = answeredIcons.filter((answer) => answer === "error");
  const correctAnswers = totalQuestions - errors.length;

  if (answeredQuestions < totalQuestions) {
    return (
      <div className="bottom-questions">
        <h4>
          {answeredQuestions}/{totalQuestions} CONCLUÍDOS
        </h4>
        <div className="bottom-icons">
          {answeredIcons.map((choice, index) => (
            <Icon key={index} choice={choice} />
          ))}
        </div>
      </div>
    );
  } else {
    return correctAnswers < zapGoal ? (
      <BottomResult
        answeredQuestions={answeredQuestions}
        totalQuestions={totalQuestions}
        answeredIcons={answeredIcons}
        resultTitle="PUTZ!"
        resultMessage="Ainda faltaram alguns... Mas não desanime!"
        img={sad}
        imgAlt="sad"
        resetZap={resetZap}
      />
    ) : (
      <BottomResult
        answeredQuestions={answeredQuestions}
        totalQuestions={totalQuestions}
        answeredIcons={answeredIcons}
        resultTitle="PARABÉNS!"
        resultMessage="Você não esqueceu de nenhum flashcard!"
        img={party}
        imgAlt="party"
        resetZap={resetZap}
      />
    );
  }
}
