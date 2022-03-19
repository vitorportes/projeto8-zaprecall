export default function shuffle(deck) {
  return deck.sort(mix);
}

function mix() {
  return Math.random() - 0.5;
}
