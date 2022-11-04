//create-todo <- create todo button onclick open ".new-item"

// new-item <- if button pressed it save and hide "new-item"


const items = [

    {"item": "Record next video", "status": 0},
    {"item": "Record next video", "status": 1}
];

const itemsStr= JSON.stringify(items);

console.log(itemsStr);
console.log(items);

function fetchItems(){

    const itemsList = document.querySelector('ul.todo-items');
    itemsList.innerHTML = '';
    var newItemHTML = '';

    try{
        var items = localStorage.getItem('todo-items');
        var itemsArr = JSON.parse(items);


        for(var i = 0; i < itemsArr.length; i++){

            var status = '';

            if(itemsArr[i].status == 1){
                status = 'class="done"';
            }


            newItemHTML += `<li data-itemindex="${i}" class="done">
                            <span class="item">${itemsArr[i]}</span>  <div>
                            <span> ✔  </span>
                            <span> 🥡</span> </li>`;

            itemsList.innerHTML = newItemHTML;
         }

    }catch(e){
        // create a default item list..

    }
}

function saveItems(obj){

    var string = JSON.stringify(obj);

    localStorage.setItem('todo-items', string);

}

fetchItems();
