import React, { useState } from "react";
import Button from "../Button/Button";
import style from "./Card.module.scss";

const Card = (props) => {

  const [limitOfLesson, setLimitOfLesson] = useState(props.limit);
  console.log("Card Components");


  const reserveHandler = () => {
    setLimitOfLesson(9)
    console.log("limitOfLesson", limitOfLesson);
  }

  return (
    <div className={style.card}>
      <div className={style.card__name}>{props.name}</div>
      <div className={style.card__date}>{props.date.toLocaleDateString("tr", { year: 'numeric', month: "long" })}</div>
      {/* <Button text={props.limit} /> */}
      <button className={style.card__limit} onClick={reserveHandler}>{limitOfLesson}</button>
    </div>
  )
}

export default Card;