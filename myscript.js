const addForm = document.querySelector('.add');
const list =  document.querySelector('.todos');
const search =  document.querySelector('.search input');


const templateGenerator =  todo =>{
  const html = `<li class="list-group-item d-flex justify-content-between align-items-center">
                  <span>${todo}</span>
                  <i class="far fa-trash-alt delete"></i>
                </li>`;
  list.innerHTML += html;
};
//Adding elements to the list
addForm.addEventListener('submit', e => {
  e.preventDefault();
  const todo =  addForm.add.value.trim();
  if (todo.length){
      templateGenerator(todo);
      addForm.reset();
  }
});
//Removing elements from the List
list.addEventListener('click', e=>{
  if (e.target.classList.contains('delete')){
    e.target.parentElement.remove();
  }
});


//Function to find the element in the list of items
let filteredTodos =  term  => {
  // Remove the items that do not contain the text entered in the search bar
  Array.from(list.children)
  .filter(todo=> !todo.textContent.toLowerCase().includes(term))
  .forEach(todo=>todo.classList.add('filtered'));
  // Bring back the elements that contain the text remaining in the search bar
  Array.from(list.children)
  .filter(todo=> todo.textContent.toLowerCase().includes(term))
  .forEach(todo=>todo.classList.remove('filtered'));

};

//Filtering the search
search.addEventListener('keyup', ()=>{

  let term =  search.value.trim().toLowerCase();
  console.log(term);
  filteredTodos(term);
});
