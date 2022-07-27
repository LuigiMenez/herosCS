import Button from "@components/Button";
import useApi from "@services/useApi";
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
    avatar: "",
  });

  const api = useApi();
  const dispatch = useDispatch();

  const changeLog = (evt) => {
    const { name, value, type, files } = evt.target;
    let newValue = null;
    switch (type) {
      case "file":
        [newValue] = files;
        break;
      default:
        newValue = value;
    }
    setFormData({ ...formData, [name]: newValue });
  };

  const hChange = () => {
    return setRegisterUser(!registeredUser);
  };

  const hsubmit = (evt) => {
    evt.preventDefault();

    const finalData = Object.keys(formData).reduce((accu, key) => {
      accu.append(key, formData[key]);
      return accu;
    }, new FormData());

    let route = "/auth/login";
    if (registeredUser) {
      route = "/auth/signup";
    }
    api
      .post(route, finalData)
      .then(({ data }) => {
        const { token, user } = data;
        api.defaults.headers.authorization = `Bearer ${token}`;
        dispatch({
          type: "LOGIN",
          payload: { ...user, token },
        });
        toast.success("🎲 Réussite critique!");
      })
      .catch(() => {
        toast.error("🎲 Echec critique !");
      });
  };

  return (
    <SForm
      className="checkbox"
      onSubmit={hsubmit}
      method="post"
      enctype="multipart/form-data"
    >
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
            <label htmlFor="avatar">
              Avatar:
              <input type="file" name="avatar" onChange={changeLog} />
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
