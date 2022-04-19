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

  findAllCharacter(id) {
    return this.connection.query(
      `SELECT * FROM Characters INNER JOIN jdr ON idJdr = jdr.id WHERE idJdr = ?`,
      [id]
    );
  }
}

module.exports = AbstractManager;
