import { useState } from "react";

import Header from "./components/Header/Header";
import Lessons from "./components/Lessons/Lessons";
import FilterSelect from "./components/Filter/FilterSelect";
import Register from "./components/Register/Register";

import "./App.css";

const App = () => {

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

  const [filteredLessons, setFilteredLessons] = useState(DATA);

  const formSubmitHandler = (name, email) => {
    console.log(name, email)
  }

  const filterLessons = (selected) => {
    if (selected == "") {
      return setFilteredLessons(DATA);
    }

    const filtered = DATA.filter(lessons => lessons.name.includes(selected));
    setFilteredLessons(filtered);
  }

  return (
    <section className="app">
      <Register onFormSubmit={formSubmitHandler} />
      <Header></Header>
      <FilterSelect onFilterCities={filterLessons} />
      <Lessons data={filteredLessons}></Lessons>
    </section>
  );
}

export default App;
