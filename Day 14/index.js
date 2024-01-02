const elf = document.getElementById("elf");
const elfContainer = document.querySelector(".elf-hangout-zone");
const btn = document.getElementById("btn");
let elfCount = 0;

btn.addEventListener("click", duplicateElf);

function duplicateElf() {
  if (elfCount <= 100) {
    const elfClone = elf.cloneNode(true)
    elfContainer.appendChild(elfClone) 

    elfCount++;
  } else {
    alert("Sorry, the hangout zone is full! No more elves allowed.");
  }
}