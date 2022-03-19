import ReactDom from "react-dom";
import React from "react";

import "./css/reset.css";
import "./css/style.css";

import shuffle from "./components/shuffle";

import StartScreen from "./components/StartScreen";
import QuestionsScreen from "./components/QuestionsScreen";

function App() {
  const [openDeck, setOpenDeck] = React.useState(false);
  const [zapGoal, setZapGoal] = React.useState(0);
  const [deck, setDeck] = React.useState([]);

  function getDeck(event) {
    if (event.target.value === "React") {
      setDeck([...deckReact]);
    } else if (event.target.value === "Potterhead") {
      setDeck([...shuffle(deckPotterhead)]);
    }
  }

  function activateOpenDeck() {
    setOpenDeck(true);
  }

  function getZapGoal(event) {
    setZapGoal(event.target.value);
  }

  const deckReact = [
    {
      question: "O que é JSX?",
      answer: "Uma extensão de linguagem do JavaScript",
    },
    {
      question: "O React é __",
      answer: "uma biblioteca JavaScript para construção de interfaces",
    },
    { question: "Componentes devem iniciar com __", answer: "letra maiúscula" },
    { question: "Podemos colocar __ dentro do JSX", answer: "expressões" },
    {
      question: "O ReactDOM nos ajuda __",
      answer: "interagindo com a DOM para colocar componentes React na mesma",
    },
    {
      question: "Usamos o npm para __",
      answer: "gerenciar os pacotes necessários e suas dependências",
    },
    {
      question: "Usamos props para __",
      answer: "passar diferentes informações para componentes",
    },
    {
      question: "Usamos estado (state) para __",
      answer:
        "dizer para o React quais informações quando atualizadas devem renderizar a tela novamente",
    },
  ];

  const deckPotterhead = [
    {
      question: "Qual é o nome do caça-guarda de Hogwarts?",
      answer: "Rúbeo Hagrid",
    },
    {
      question:
        "Em qual livro/filme da série o professor Horácio Slughorn começa a lecionar poções em Hogwarts?",
      answer: "Sexto livro/filme",
    },
    { question: "Qual é o nome da coruja de Harry?", answer: "Hedwiges" },
    {
      question: "Quantas horcruxes Lord Voldemort produziu?",
      answer: "Oito horcruxes",
    },
    {
      question:
        "Qual é o nome da poção que faz com que quem a tome se transforme em outra pessoa?",
      answer: "Poção polissuco",
    },
    {
      question: "Quais são as três maldições imperdoáveis?",
      answer: "Imperius, Cruciatus e Avada Kedavra",
    },
    {
      question: "Quem mata a cobra Nagini?",
      answer: "Neville Longbottom",
    },
    {
      question: "Qual feitiço é usado para atrair objetos?",
      answer: "Accio",
    },
    {
      question: "Qual é a maldição da tortura?",
      answer: "Cruciatus",
    },
  ];

  return (
    <>
      {!openDeck ? (
        <StartScreen
          fncOpenDeck={activateOpenDeck}
          zapGoal={zapGoal}
          getZapGoal={getZapGoal}
          getDeck={getDeck}
          deck={deck}
        />
      ) : (
        <QuestionsScreen
          deck={deck}
          setOpenDeck={setOpenDeck}
          zapGoal={zapGoal}
          setZapGoal={setZapGoal}
          setDeck={setDeck}
        />
      )}
    </>
  );
}

ReactDom.render(<App />, document.querySelector(".root"));
