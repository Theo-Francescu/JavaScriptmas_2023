const wishlistContainer = document.getElementById('wishlist');
const newItemNameInput = document.getElementById('newItemName');
const newItemDescInput = document.getElementById('newItemDesc');
const newItemLinkInput = document.getElementById('newItemLink');

let wishlist = [
  {
    name: 'Toy Car',
    description: 'A fun toy car for kids',
    link: 'https://example.com/toy-car',
  },
  {
    name: 'Warm Socks',
    description: 'Cozy socks for winter',
    link: 'https://example.com/warm-socks',
  },
  {
    name: 'Book',
    description: 'An interesting book to read',
    link: 'https://example.com/book',
  },
  {
    name: 'Candle',
    description: 'A scented candle for relaxation',
    link: 'https://example.com/candle',
  },
];

function renderWishlist() {
  wishlistContainer.innerHTML = '';

  wishlist.forEach((item, index) => {
    const wishlistItem = document.createElement('div');
    wishlistItem.classList.add('wishlist-item');
    wishlistItem.innerHTML = `
      <div>
        <h3>${item.name}</h3>
        <p>${item.description}</p>
        <a href="${item.link}" target="_blank">Purchase</a>
      </div>
      <button onclick="removeItem(${index})">Remove</button>
    `;
    wishlistContainer.appendChild(wishlistItem); 
  });
}

function addItem() {
  const newItemName = newItemNameInput.value.trim();
  const newItemDesc = newItemDescInput.value.trim();
  const newItemLink = newItemLinkInput.value.trim();

  if (newItemName !== '' && newItemDesc !== '' && newItemLink !== '') {
    const newItem = {
      name: newItemName,
      description: newItemDesc,
      link: newItemLink,
    };

    wishlist.push(newItem);
    renderWishlist();

    // Clear the input fields
    newItemNameInput.value = '';
    newItemDescInput.value = '';
    newItemLinkInput.value = '';
  }
}

function removeItem(index) {
  wishlist.splice(index, 1);
  renderWishlist();
}

renderWishlist();