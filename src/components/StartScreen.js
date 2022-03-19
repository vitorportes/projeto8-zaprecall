import React from "react";
import logo from "./../assets/logo.svg";

export default function StartScreen(props) {
  const { fncOpenDeck, zapGoal, getZapGoal, getDeck, deck } = props;

  const startButton =
    zapGoal >= 1 && deck.length > 0 ? (
      <button className="active" onClick={fncOpenDeck}>
        Iniciar Recall!
      </button>
    ) : (
      <button className="blocked">Iniciar Recall!</button>
    );

  return (
    <div className="start-screen">
      <img className="start-logo" src={logo} alt="logo" />
      <h1>ZapRecall</h1>

      <select name="select" defaultValue={""} onChange={getDeck}>
        <option value="" disabled>
          Escolha seu deck...
        </option>
        <option value="React">Deck de React</option>
        <option value="Potterhead">Deck de Potterhead</option>
      </select>

      {deck.length > 0 ? <p>Esse deck possui {deck.length} cards.</p> : <></>}

      <input
        type="number"
        className="zap-goal"
        placeholder="Digite sua meta de zaps..."
        onChange={getZapGoal}
      />

      {startButton}
    </div>
  );
}
