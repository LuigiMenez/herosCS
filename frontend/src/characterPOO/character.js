// const races = {
//   race: "Orcs",
//   say() {
//     console.log(`Whaaaaaaag ${this.name}`);
//   },
// };

// class Character {
//   constructor(
//     name,
//     size,
//     pound,
//     move,
//     eyes,
//     hair,
//     sexe,
//     deus,
//     biographie,
//     image
//   ) {
//     this.name = name;
//     this.size = size;
//     this.pound = pound;
//     this.move = move;
//     this.eyes = eyes;
//     this.hair = hair;
//     this.sexe = sexe;
//     this.deus = deus;
//     this.biographie = biographie;
//     this.image = image;
//   }
// }

// Object.assign(Character.prototype, races);

// const superToto = new Character(
//   "Cylian",
//   1.25,
//   75,
//   4,
//   "black",
//   "M",
//   "Zeus",
//   "djfjjidfiofijfo"
// ).say().classes;
// console.log(superToto);
// module.export = Character;

class Character {
  constructor(name, sexe) {
    this.name = name;
    this.sexe = sexe;
  }
}



const perso = new Character("Cylian", "M");
console.log(perso.name);
