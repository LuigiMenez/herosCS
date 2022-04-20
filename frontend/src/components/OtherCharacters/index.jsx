import SOtherCharacter from "./style";

export default function OtherCharacter() {
  return (
    <SOtherCharacter>
      <h2>Autres personnage</h2>
      <table>
        <thead>
          <tr>
            <th className="lvl">lvl</th>
            <th className="perso">Name</th>
            <th className="race">Race</th>
            <th className="classe">Classe</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="lvl">5</td>
            <td className="perso">Cylian</td>
            <td className="race">Drow</td>
            <td className="classe">Pirate</td>
          </tr>
          <tr>
            <td className="lvl">5</td>
            <td className="perso">Kris Cylian</td>
            <td className="race">Drow</td>
            <td className="classe">Pirate</td>
          </tr>
          <tr>
            <td className="lvl">5</td>
            <td className="perso">tokokolokigrankh</td>
            <td className="race">Drow</td>
            <td className="classe">Pirate</td>
          </tr>
        </tbody>
      </table>
    </SOtherCharacter>
  );
}
