class AbstractManager {
  constructor(connection, table) {
    this.connection = connection;
    this.table = table;
  }

  find(id) {
    return this.connection.query(`select * from  ${this.table} where id = ?`, [
      id,
    ]);
  }

  findAll() {
    return this.connection.query(`select * from  ${this.table}`);
  }

  delete(id) {
    return this.connection.query(`delete from ${this.table} where id = ?`, [
      id,
    ]);
  }

  CharactersByGame(id) {
    return this.connection.query(
      `SELECT ch.id, nameCharacters, sexe, size, origin, idUser, idJdr, lvl FROM Characters AS ch
INNER JOIN jdr ON idJdr = jdr.id WHERE idJdr = ?`,
      [id]
    );
  }
}

module.exports = AbstractManager;
