const niceList = document.getElementById("nice-list")
const naughtyList = document.getElementById("naughty-list")
const btn = document.getElementById("btn")
const nameInput = document.getElementById("name-input");
const addBtn = document.getElementById("add-btn");

btn.addEventListener("click", sort)
addBtn.addEventListener('click', add)

const sorteesArr = [
    {
        name: "David",
        hasBeenGood: false
    },
    {
        name: "Del",
        hasBeenGood: true
    },
    {
        name: "Valerie",
        hasBeenGood: false
    },
    {
        name: "Astrid",
        hasBeenGood: true
    }
]

function sort() {
  niceList.innerHTML = ''
  naughtyList.innerHTML = ''

  sorteesArr.forEach(person => {
    const listItem = createListItem(person)

    if(person.hasBeenGood) {
      niceList.appendChild(listItem)
    } else {
      naughtyList.appendChild(listItem)
    }
  })
}

function add() {
  const newName = nameInput.value.trim()
  if(newName) {
    const newPerson = {
      name: newName,
      hasBeenGood: true
    }
    sorteesArr.push(newPerson)
    nameInput.value = ''
    sort()
  }
}

function createListItem(person) {
  const listItem = document.createElement('li')
  listItem.textContent = person.name
  listItem.addEventListener('click', () => switchList(person))

  return listItem
}

function switchList(person) {
  const index = sorteesArr.findIndex((p) => p.name === person.name);
  console.log(index)

  if (index !== -1) {
    sorteesArr[index].hasBeenGood = !sorteesArr[index].hasBeenGood;

    sort();
  }
}