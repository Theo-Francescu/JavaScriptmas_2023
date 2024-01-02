const dangerArray = [
  ["🎅", "👺"],
  [
    ["🎅", "🦁"],
    ["👹", "🎅"],
  ],
  [
    [
      ["🎅", "🐻"],
      ["🧌", "🎅"],
    ],
    [
      ["🐯", "🎅"],
      ["🎅", "😈"],
    ],
  ],
];

// Var 1 (easy mode) - using flat() method
function saveSanta(arr) {
  return arr
    .flat(Infinity)
    .map((item) => (Array.isArray(item) ? saveSanta(item) : "🎅"));
}

// Var 2 (hard mode) - using a recursive function to traverse the nested arrays and keep only the "🎅" (Santa Claus) emoji
/* function saveSanta(arr) {
  return arr
    .map((item) => {
      if (Array.isArray(item)) {
        return saveSanta(item);
      } else {
        return "🎅";
      }
    })
    .flat();
} */

console.log(saveSanta(dangerArray));
