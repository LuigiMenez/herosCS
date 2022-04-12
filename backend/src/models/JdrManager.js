const AbstractManager = require("./AbstractManager");

class JdrManager extends AbstractManager {
  static table = "jdr";

  insert(jdr) {
    return this.connection.query(
      `insert into ${JdrManager.table} (title) values (?)`,
      [jdr.title]
    );
  }

  update(jdr) {
    return this.connection.query(
      `update ${JdrManager.table} set title = ? where id = ?`,
      [jdr.title, jdr.id]
    );
  }
}

module.exports = JdrManager;
