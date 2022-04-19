const AbstractManager = require("./AbstractManager");

class CharactersManager extends AbstractManager {
  static table = "Characters";

  insert(Characters) {
    return this.connection.query(
      `insert into ${CharactersManager.table} (title) values (?)`,
      [Characters.title]
    );
  }

  update(Characters) {
    return this.connection.query(
      `update ${CharactersManager.table} set title = ? where id = ?`,
      [Characters.title, Characters.id]
    );
  }
}

module.exports = CharactersManager;
