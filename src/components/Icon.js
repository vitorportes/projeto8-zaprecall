export default function Icon(props) {
  const { choice } = props;

  if (choice === "error") {
    return <ion-icon class={choice} name="close-circle"></ion-icon>;
  } else if (choice === "almost") {
    return <ion-icon class={choice} name="help-circle"></ion-icon>;
  } else if (choice === "right") {
    return <ion-icon class={choice} name="checkmark-circle"></ion-icon>;
  }
  return <ion-icon name="play-outline"></ion-icon>;
}
