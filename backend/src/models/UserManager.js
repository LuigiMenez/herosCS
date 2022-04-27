const AbstractManager = require("./AbstractManager");

class UserManager extends AbstractManager {
  static table = "users";

  insert(formData) {
    const { mail, password, login, firstname, lastname, avatar } = formData;
    return this.connection.query(
      `insert into ${UserManager.table} (mail, password, login, firstname, lastname, avatar) values (?,?,?,?,?,?)`,
      [mail, password, login, firstname, lastname, avatar]
    );
  }

  find(mail) {
    return this.connection.query(
      `select id, mail, password, login, firstname, lastname, avatar from ${UserManager.table} where mail = ?`,
      [mail]
    );
  }
}

module.exports = UserManager;
