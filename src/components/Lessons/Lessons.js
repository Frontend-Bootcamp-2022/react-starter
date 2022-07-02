import Card from "../Card/Card";
import style from "./Lessons.module.scss";

const Lessons = (props) => {

  const DATA = props.data;

  //let lessonsContent = <p>Ders bulunamadi</p>

  if (DATA.length === 0) {
    return <p>Ders yok</p>
  }

  return (
    <div className={style.lessons}>
      {DATA.map(
        lesson => <Card key={lesson.id} name={lesson.name} date={lesson.date} limit={lesson.limit} />
      )}
    </div>
  )
}

export default Lessons;