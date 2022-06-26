// import "./Button.css";
import style from "./Button.module.css";

const CTAButton = (props) => {

  const classes = style.button + " " + props.className

  return (
    <button className={classes}>{props.text}</button>
  )
}

export default CTAButton;