import Card from "../Card/Card";
import style from "./Lessons.module.scss";

const Lessons = () => {

  const DATA = [
    {
      name: "Kodluyoruz Istanbul React Bootcamp",
      limit: 10,
      date: new Date()
    },
    {
      name: "Kodluyoruz Bursa Vue Bootcamp",
      limit: 0,
      date: new Date()
    },
    {
      name: "Kodluyoruz Mersin Angular Bootcamp",
      limit: 5,
      date: new Date()
    },
    {
      name: "Kodluyoruz Antalya Front-End Bootcamp",
      limit: 5,
      date: new Date()
    }
  ];

  return (
    <div className={style.lessons}>
      {DATA.map(
        lesson => <Card name={lesson.name} date={lesson.date} limit={lesson.limit} />
      )}
    </div>
  )
}

export default Lessons;