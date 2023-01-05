const input =
  "L'appending ou enrichissement de base au sens large est un principe reposant sur le croisement de votre base de données";

const vowels = ["a", "e", "i", "o", "u"];

const resultArray = [];

for (let i = 0; i < input.length; i++) {
  if (["e", "i", "u"].includes(input[i])) {
    resultArray.push(input[i], input[i]);
  } else {
    for (let j = 0; j < vowels.length; j++) {
      if (input[i] === vowels[j]) {
        resultArray.push(vowels[j]);
      }
    }
  }
}

const final = resultArray.map((element) => {
  return element.toUpperCase();
});
const final2 = final.join("");

console.log(final2);
