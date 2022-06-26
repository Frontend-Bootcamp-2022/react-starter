import "./Button.css";

const CTAButton = (props) => {

  const classes = "button  " + props.className

  return (
    <button className={classes}>{props.text}</button>
  )
}

export default CTAButton;