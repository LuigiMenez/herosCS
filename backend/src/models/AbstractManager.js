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
      `SELECT *  FROM Characters AS ch INNER JOIN characteristics AS cha ON ch.id = idCharacter JOIN raceStarFinder AS ra ON ra.id = idRace WHERE idJdr = ?`,
      [id]
    );
  }
}

module.exports = AbstractManager;
