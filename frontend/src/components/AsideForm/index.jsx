import { useState } from "react";
import { races, classes } from "../../characterPOO/starfinder/character";
import SAsideForm from "./style";

export default function AsideForm() {
  const [formData, setFormData] = useState({
    name: "",
    race: "",
    classe: "",
    img: "",
    size: "",
    weight: "",
    speed: "",
    eyes: "",
    align: "",
    deeus: "",
    sex: "",
    hair: "",
    bio: "",
  });

  const formChara = (evt) => {
    const { name, value } = evt.target;
    setFormData({ ...formData, [name]: value });
  };

  const hSubmit = (evt) => {
    evt.preventDefault();
  };
  return (
    <SAsideForm onSubmit={hSubmit}>
      <input
        className="name"
        type="text"
        name="name"
        placeholder="Name"
        value={formData.name}
        onChange={formChara}
      />
      <br />
      <select name="classe" onChange={formChara} value={formData.classe}>
        <option> --- Classe ---</option>
        {Object.keys(classes).map((classe) => (
          <option key={classe.id}>{classe}</option>
        ))}
      </select>
      <select name="race" onChange={formChara} value={formData.race}>
        <option> --- Espèce ---</option>
        {Object.keys(races).map((race) => (
          <option key={race.id}>{race}</option>
        ))}
      </select>
      <br />
      <input
        className="img"
        type="file"
        name="img"
        value={formData.img}
        onChange={formChara}
      />
      <div className="container">
        <div className="columnLeft">
          <label htmlFor="size">
            Taille:
            <input
              type="text"
              name="size"
              value={formData.size}
              onChange={formChara}
            />
          </label>
          <label htmlFor="weight">
            Poid:
            <input
              type="text"
              name="weight"
              value={formData.weight}
              onChange={formChara}
            />
          </label>
          <label htmlFor="speed">
            Vitesse:
            <input
              type="text"
              name="speed"
              value={formData.speed}
              onChange={formChara}
            />
          </label>
          <label htmlFor="eyes">
            Yeux:
            <input
              type="text"
              name="eyes"
              value={formData.eyes}
              onChange={formChara}
            />
          </label>
        </div>
        <div className="columnRight">
          <label htmlFor="align">
            Alignement:
            <input
              type="text"
              name="align"
              value={formData.align}
              onChange={formChara}
            />
          </label>
          <label htmlFor="deeus">
            Divinité:
            <input
              type="text"
              name="deeus"
              value={formData.deeus}
              onChange={formChara}
            />
          </label>
          <label htmlFor="sex">
            Sexe:
            <input
              type="text"
              name="sex"
              value={formData.sex}
              onChange={formChara}
            />
          </label>
          <label htmlFor="hair">
            Cheveux:
            <input
              type="text"
              name="hair"
              value={formData.hair}
              onChange={formChara}
            />
          </label>
        </div>
      </div>
      <section>
        <h3 className="bio">Biographie :</h3>
        <textarea
          type="textarea"
          name="bio"
          value={formData.bio}
          onChange={formChara}
        />
      </section>
    </SAsideForm>
  );
}
