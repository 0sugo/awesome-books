const store = [];

const addSection = document.querySelector('.add-section');

const header = document.createElement('h2');
header.innerHTML = 'Awesome books';
addSection.appendChild(header);

const showSection = document.createElement('div');
// showSection.classList.add('');
addSection.appendChild(showSection);

const addButton = document.getElementById('add');
addButton.addEventListener('click', () => {
  showSection.innerHTML = '';
  const writer = document.getElementById('writer').value;
  const head = document.getElementById('head').value;

  const newObj = {
    author: writer,
    title: head,
  };

  store.push(newObj);

  localStorage.setItem('stored', JSON.stringify(store));
  const stored2 = JSON.parse(localStorage.getItem('stored'));

  stored2.forEach((element, index) => {
    const hostBooks = document.createElement('div');
    hostBooks.id = index;

    const author = document.createElement('p');
    author.innerHTML = `Author : ${element.author}`;
    hostBooks.appendChild(author);

    const title = document.createElement('p');
    title.innerHTML = `Title : ${element.title}`;
    hostBooks.appendChild(title);

    const remove = document.createElement('button');
    remove.innerHTML = 'Remove';
    remove.addEventListener('click', () => {
      store.splice(index, 1);
      localStorage.setItem('stored', JSON.stringify(store));
      showSection.removeChild(hostBooks);
    });
    hostBooks.append(remove);

    const hr = document.createElement('hr');
    hostBooks.append(hr);

    showSection.append(hostBooks);
  });
});
