import { useState } from "react";
import SForm from "./style";

export default function FormAuth() {
  const [registeredUser, setRegisterUser] = useState(false);
  const [log, setLog] = useState({
    login: "",
    mail: "",
    password: "",
    lastname: "",
    firstname: "",
  });

  const changeLog = (evt) => {
    const newData = { ...log };
    newData[evt.target.name] = evt.target.value;
    setLog(newData);
  };
  const hChange = () => {
    return setRegisterUser(!registeredUser);
  };
  return (
    <SForm className="checkbox">
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
                value={log.lastname}
                onChange={changeLog}
              />
            </label>
            <label htmlFor="firstname">
              Firstname:
              <input
                type="text"
                name="firstname"
                value={log.firstname}
                onChange={changeLog}
              />
            </label>
            <label htmlFor="login">
              Pseudo:
              <input
                type="text"
                name="login"
                value={log.login}
                onChange={changeLog}
              />
            </label>
            <label htmlFor="mail">
              E-mail:
              <input
                type="mail"
                name="mail"
                value={log.mail}
                onChange={changeLog}
              />
            </label>
            <label htmlFor="password">
              Password:
              <input
                type="password"
                name="password"
                value={log.password}
                onChange={changeLog}
              />
            </label>
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
                value={log.mail}
                onChange={changeLog}
              />
            </label>
            <label htmlFor="password">
              Password:
              <input
                type="password"
                name="password"
                value={log.password}
                onChange={changeLog}
              />
            </label>
          </div>
        </div>
      )}
    </SForm>
  );
}
