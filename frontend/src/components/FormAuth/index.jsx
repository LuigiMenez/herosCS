import Button from "@components/Button";
import axios from "axios";
import { toast } from "react-toastify";
import { useState } from "react";
import { useDispatch } from "react-redux";
import SForm from "./style";

export default function FormAuth() {
  const [registeredUser, setRegisterUser] = useState(false);
  const [formData, setFormData] = useState({
    login: "",
    mail: "",
    password: "",
    lastname: "",
    firstname: "",
  });
  const dispatch = useDispatch();

  const changeLog = (evt) => {
    const newData = { ...formData };
    newData[evt.target.name] = evt.target.value;
    setFormData(newData);
  };
  const hChange = () => {
    return setRegisterUser(!registeredUser);
  };

  const hsubmit = (evt) => {
    evt.preventDefault();
    let route = "http://localhost:5050/auth/login";
    if (registeredUser) {
      route = "http://localhost:5050/auth/signup";
    }
    axios
      .post(route, formData)
      .then(({ data }) => {
        dispatch({
          type: "LOGIN",
          payload: data,
        });
        toast.success("🎲 Réussite critique!");
      })
      .catch(() => {
        toast.error("🎲 Echec critique !");
      });
  };

  return (
    <SForm className="checkbox" onSubmit={hsubmit}>
      <input type="checkbox" checked={registeredUser} onChange={hChange} />
      {registeredUser ? (
        <div className="formLogin">
          <p>Heureux de te rencontrer</p>
          <div className="form">
            <label htmlFor="lastname">
              Lastname:
              <input
                type="text"
                name="lastname"
                value={formData.lastname}
                onChange={changeLog}
              />
            </label>
            <label htmlFor="firstname">
              Firstname:
              <input
                type="text"
                name="firstname"
                value={formData.firstname}
                onChange={changeLog}
              />
            </label>
            <label htmlFor="login">
              Pseudo:
              <input
                type="text"
                name="login"
                value={formData.login}
                onChange={changeLog}
              />
            </label>
            <label htmlFor="mail">
              E-mail:
              <input
                type="mail"
                name="mail"
                value={formData.mail}
                onChange={changeLog}
              />
            </label>
            <label htmlFor="password">
              Password:
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={changeLog}
              />
            </label>
            <Button title="Inscription" func={hsubmit} />
          </div>
        </div>
      ) : (
        <div className="formLogin">
          <p>Vous n&apos;avez pas de compte?</p>
          <div className="form">
            <label htmlFor="mail">
              E-mail:
              <input
                type="email"
                name="mail"
                value={formData.mail}
                onChange={changeLog}
              />
            </label>
            <label htmlFor="password">
              Password:
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={changeLog}
              />
            </label>
            <Button title="Connection" func={hsubmit} />
          </div>
        </div>
      )}
    </SForm>
  );
}
