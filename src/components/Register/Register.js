import { useRef, useState } from "react";
import styled from "styled-components";
import Button from "../Button/Button";

const Form = styled.form`
  margin: 10px;
  padding: 10px;

  div {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;

    label {
      display: block;
      width: 200px;
      font-size: 24px;
      font-weight: 800;
    }

    input {
      font-size: 25px;
    }
  }
`

const Register = (props) => {

  const [formName, setFormName] = useState("");
  const [formEmail, setFormEmail] = useState("");

  const userName = useRef("");
  const userEmail = useRef("");

  const updateFormName = (event) => {
    setFormName(event.target.value);
    if (event.target.value.length < 3) return;

    console.log("updateFormName", formName)
  }

  const formSubmitHandler = (event) => {
    event.preventDefault();

    props.onFormSubmit(userName.current.value,
      userEmail.current.value)

    // userName.current.value = ""
    // userEmail.current.value = ""
  }

  return (
    <Form onSubmit={formSubmitHandler}>
      <div>
        <label>Isim Soyad</label>
        <input type="text" name="Name" value={formName} onChange={updateFormName} />
      </div>
      <div>
        <label>Eposta</label>
        <input type="email" name="Email" value={formEmail} />
      </div>
      <Button text="Kayit ol" />
    </Form>
  )
}

export default Register;