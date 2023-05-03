// imports
import html from './index.html';
import './index.css';
import { saveDb } from './modules.js/saveDb.js';
import { saveToDo } from './modules.js/saveToDo.js';
import { showDb } from './modules.js/showDb.js';
import { changeIcons } from './modules.js/changeIcons.js';
import { deleteItem } from './modules.js/delete.js';

// general variables

const container = document.getElementById('list-item-container');
const form = document.getElementById('form');
const newTodo = document.getElementById('new-todo');

// event listener
form.addEventListener('submit', (e) => {
  e.preventDefault();
  let index = 1;
  if (localStorage.getItem('to-do-list')) {
    index = Array.from(JSON.parse(localStorage.getItem('to-do-list')));
  }
  // console.log(index.length)
  const item = {
    index: index.length + 1 || index,
    completed: false,
    activity: newTodo.value,
  };
  saveToDo(item);
  form.reset();
  changeIcons();
});

const esl = html;
document.getElementById('eslint').innerHTML = esl;

window.addEventListener('DOMContentLoaded', () => {
  changeIcons();
  if (localStorage.getItem('to-do-list')) {
    showDb(JSON.parse(localStorage.getItem('to-do-list')));
    changeIcons();
  }
});

container.addEventListener('click', (e) => {
  if (e.target.classList.contains('form-check-input')) {
    const { id } = e.target.dataset;
    const db = JSON.parse(localStorage.getItem('to-do-list'));
    db[id].completed = !db[id].completed;
    saveDb(db);
  }

  if (e.target.classList.contains('fa-trash')) {
    const { id } = e.target.dataset;
    deleteItem(id);
  }
});
