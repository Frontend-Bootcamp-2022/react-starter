import Wrapper from "../Wrapper/Wrapper";
import HeaderSub from "./HeaderSub";
import CTAButton from "../Button/Button";

import "./Header.css";

const Header = () => {

  const title = "Kodluyoruz React Bootcamp";
  const subtitle = "Bootcamp Haziran - Aralik";
  const bootcampDate = new Date();

  return (
    <header className="header">
      <span className="header__date">{bootcampDate.toLocaleDateString("tr", { year: 'numeric' })}</span>

      <Wrapper className="column">
        <h1 className="header__title">{title}</h1>
        <HeaderSub text={subtitle} bootcampDate={bootcampDate} />
        <p className="header__content">
          Hayalindeki yazılım kariyerine ilk adımı at
          <br />
          Türkiye'yi teknolojide bir yetenek merkezi yapmak için gençlere ihtiyaçları olan eğitimi sağlıyoruz.
        </p>
      </Wrapper>

      <Wrapper>
        <CTAButton className="blue" text="Ekibe Katil" />
        <CTAButton text="Bootcamp'e katil" />
      </Wrapper>
    </header>
  )
}

export default Header;