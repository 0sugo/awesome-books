const addSection = document.querySelector('.list-section');

const header = document.createElement('h2');
header.innerHTML = 'All awesome books';
addSection.appendChild(header);

const showSection = document.createElement('div');
showSection.id = 'showsection';
addSection.appendChild(showSection);

const store = [];
class Books {
  constructor(author, title) {
    this.author = author;
    this.title = title;
  }

  update() {
    const writer = document.getElementById('writer').value;
    const head = document.getElementById('head').value;

    const newObj = {
      writer,
      head,
    };
    store.push(newObj);

    localStorage.setItem('stored', JSON.stringify(store));
    return this;
  }

  retrieve() {
    showSection.innerHTML = '';

    const stored2 = JSON.parse(localStorage.getItem('stored'));

    stored2.forEach((stored, index) => {
      const hostBooks = document.createElement('div');
      hostBooks.id = index;
      if (index % 2 === 0) {
        hostBooks.style.backgroundColor = 'grey';
      } else {
        hostBooks.style.backgroundColor = '#fff';
      }
      showSection.append(hostBooks);

      const author = document.createElement('p');
      author.innerHTML = `Author :${stored.writer}`;
      hostBooks.append(author);

      const title = document.createElement('p');
      title.innerHTML = `Title :${stored.head}`;
      hostBooks.append(title);

      const remover = document.createElement('button');
      remover.innerHTML = 'Remove';
      remover.addEventListener('click', () => {
        store.splice(index, 1);
        localStorage.setItem('stored', JSON.stringify(store));
        showSection.removeChild(hostBooks);
      });
      hostBooks.append(remover);

      const line = document.createElement('hr');
      hostBooks.append(line);
      return this;
    });
  }
}

const addButton = document.getElementById('add');
addButton.addEventListener('click', () => {
// console.log("clicked")
  const bookItem = new Books();
  bookItem.update().retrieve();
});

const lister = document.querySelector('#lister');
const contacter = document.querySelector('#contacter');
const adder = document.querySelector('#unique-border');

const list = document.querySelector('.list-section');
const add = document.querySelector('.add');
const contact = document.querySelector('.contact');

lister.addEventListener('click', () => {
  list.style.display = 'block';
  add.style.display = 'none';
  contact.style.display = 'none';
});
adder.addEventListener('click', () => {
  add.style.display = 'block';
  list.style.display = 'none';
  contact.style.display = 'none';
});
contacter.addEventListener('click', () => {
  contact.style.display = 'flex';
  add.style.display = 'none';
  list.style.display = 'none';
});
