import Card from "../Card/Card";
import style from "./Lessons.module.scss";

const Lessons = () => {

  const DATA = [{
    id: 1,
    name: "Kodluyoruz Istanbul React Bootcamp",
    limit: 10,
    date: new Date()
  },
  {
    id: 2,
    name: "Kodluyoruz Bursa Vue Bootcamp",
    limit: 0,
    date: new Date()
  },
  {
    id: 3,
    name: "Kodluyoruz Mersin Angular Bootcamp",
    limit: 5,
    date: new Date()
  },
  {
    id: 4,
    name: "Kodluyoruz Antalya Front-End Bootcamp",
    limit: 5,
    date: new Date()
  }];

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