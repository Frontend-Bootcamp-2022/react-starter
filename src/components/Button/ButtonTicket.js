import style from "./Button.module.css";

const ButtonTicket = (props) => {

  const clickAction = () => {
    props.onClickAction();
    console.log("clickAction")
  }

  return (
    <button className={style.button} onClick={clickAction}>{props.text}</button>
  )
}

export default ButtonTicket