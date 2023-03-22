let store = [];
class Books{
    constructor(author,title,){
        this.author = author;
        this.title = title;

    }
    update(){
        const writer = document.getElementById('writer').value;
        const head = document.getElementById('head').value;

        let newObj = {
            writer:writer,
            head:head,
        }
        store.push(newObj);

        localStorage.setItem('stored' , JSON.stringify(store));
        return this;
    }
    retrieve(){
        showSection.innerHTML = '';

        let stored2 = JSON.parse(localStorage.getItem('stored'));
        stored2.forEach((stored,index) => {
            let hostBooks = document.createElement('div');
            hostBooks.id = 'index';
            showSection.append(hostBooks);

            let author = document.createElement('p');
            author.innerHTML = `Author :` + stored.writer;
            hostBooks.append(author);

            let title = document.createElement('p');
            title.innerHTML = `Author :` + stored.head;
            hostBooks.append(title);

            let remover = document.createElement('button');
            remover.innerHTML = 'Remove';
            remover.addEventListener('click',function(){
                store.splice(index , 1);
                localStorage.setItem('stored' , JSON.stringify(store));
                showSection.removeChild(hostBooks);
            })
            hostBooks.append(remover);

            const line = document.createElement('hr');
            hostBooks.append(line);
            return this;
            
        });

    }
    

}


const addSection = document.querySelector('.add-section');

const header = document.createElement('h2');
header.innerHTML = 'Awesome books';
addSection.appendChild(header);

const showSection = document.createElement('div');
showSection.id='showsection';
addSection.appendChild(showSection);


const addButton = document.getElementById('add');
addButton.addEventListener('click' , function(){
// console.log("clicked")
let bookItem = new Books();
bookItem.update().retrieve();

});