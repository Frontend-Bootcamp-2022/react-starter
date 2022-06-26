const HeaderSub = (props) => {

  return <h2 className="header__subtitle" style={{
    height: "100px",
    width: "200px",
    "background-color": "purple"
  }}>{props.text}</h2>
}

export default HeaderSub;