const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros)

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

// const allHeros = marvel_heros.concat(dc_heros)
// console.log(allHeros);
//const all_new_Heros=[...marvel_heros,...dc_heros];
//console.log(all_new_Heros);

const another_arry = [1,3,5,[4,5,[7,4,5,6,[7,5,8]]]]
const real_arry =another_arry.flat(Infinity)
console.log(real_arry);


console.log(Array.isArray("Harsh"))
console.log(Array.from("Harsh"))

let score1=100
let score2=1200
let score3=300

console.log(Array.of(score1,score2,score3))