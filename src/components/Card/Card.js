import React, { useState } from "react";
import ButtonTicket from "../Button/ButtonTicket";
import style from "./Card.module.scss";

const Card = (props) => {

  const [limitOfLesson, setLimitOfLesson] = useState(props.limit);
  console.log("Card Components");


  const reserveHandler = () => {
    if (limitOfLesson === "Tukendi") return;
    let hasLimit = limitOfLesson - 1;

    if (!hasLimit) {
      setLimitOfLesson("Tukendi");
      return;
    }

    setLimitOfLesson(hasLimit);
  }

  return (
    <div className={style.card}>
      <div className={style.card__name}>{props.name}</div>
      <div className={style.card__date}>{props.date.toLocaleDateString("tr", { year: 'numeric', month: "long" })}</div>
      <ButtonTicket text={limitOfLesson} onClickAction={reserveHandler} />
    </div>
  )
}

export default Card;