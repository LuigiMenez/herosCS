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
      `SELECT * FROM characteristics as ch right join Characters on Characters.id = idCharacter  left join raceStarFinder as ra on ra.id = idRace where idJdr = ?`,
      [id]
    );
  }
}

module.exports = AbstractManager;
