import style from "./Card.module.scss";

const Card = (props) => {

  return (
    <div className={style.card}>
      <div className={style.card__name}>{props.name}</div>
      <div className={style.card__date}>{props.date.toISOString()}</div>
      <div className={style.card__limit}>{props.limit}</div>
    </div>
  )
}

export default Card;