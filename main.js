let store = [];

const addSection = document.querySelector('.add-section');

const header = document.createElement('h2');
header.innerHTML = 'Awesome books';
addSection.appendChild(header);

const showSection = document.createElement('div');
// showSection.classList.add('');
addSection.appendChild(showSection);


const addButton = document.getElementById('add');
addButton.addEventListener('click' , function(){
    showSection.innerHTML = '';
    let writer = document.getElementById('writer').value;
    let head = document.getElementById('head').value;

    let newObj = {
        author:writer,
        title:head,
    };

    store.push(newObj);

    localStorage.setItem('stored' ,JSON.stringify(store));
    let stored2 = JSON.parse(localStorage.getItem('stored'));

    let lastStored2 = stored2[stored2.length - 1];


    stored2.forEach((element , index) => {
        let hostBooks = document.createElement('div');
        hostBooks.id = index;
        
        const author = document.createElement('p');
        author.innerHTML = `Author : ` + element.author;
        hostBooks.appendChild(author);
        
        const title = document.createElement('p');
        title.innerHTML = `Title : `+ element.title;
        hostBooks.appendChild(title);
        
        const remove = document.createElement('button');
        remove.innerHTML = 'Remove';
        remove.addEventListener('click' , function(){

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







