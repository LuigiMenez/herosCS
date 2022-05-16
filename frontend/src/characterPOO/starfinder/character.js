class Character {
  constructor(str, dex, con, int, wis, cha) {
    this.baseStr = str;
    this.baseDex = dex;
    this.baseCon = con;
    this.baseInt = int;
    this.baseWis = wis;
    this.baseCha = cha;
    this.race = {
      label: "Orc",
      mods: {
        str: 2,
        con: 2,
        int: -2,
        cha: -2,
      },
    };
  }

  str() {
    return Math.floor((this.baseStr - 10) / 2);
  }
}

// export default Character;

const superToto = new Character(10, 18, 10, 14, 13, 15);
console.log(superToto.str());
