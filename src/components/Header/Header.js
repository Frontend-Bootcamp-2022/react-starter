import Wrapper from "../Wrapper/Wrapper";
import HeaderSub from "./HeaderSub";
import CTAButton from "../Button/Button";

import "./Header.css";

const Header = () => {

  const title = "Kodluyoruz React Bootcamp";
  const subtitle = "Bootcamp Haziran - Aralik";
  const bootcampDate = new Date();

  const data = {
    name: "Tolga",
    age: 2
  }

  //console.log("bootcampDate", bootcampDate.getFullYear())

  return (
    <header className="header">
      <span>{bootcampDate.toLocaleDateString("tr", { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</span>

      <Wrapper className="column">
        <h1 className="header__title">{title}</h1>
        <HeaderSub text={subtitle} bootcampDate={bootcampDate} />
      </Wrapper>

      <Wrapper>
        <CTAButton className="blue" text="Ekibe Katil" />
        <CTAButton text="Bootcamp'e katil" />
      </Wrapper>
    </header>
  )
}

export default Header;