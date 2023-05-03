import { saveDb } from './saveDb.js';

export const clearList = () => {
  document.getElementById('clearList').addEventListener('click', () => {
    const db = JSON.parse(localStorage.getItem('to-do-list'));
    const incompleteTodos = db.filter((element) => !element.completed);
    saveDb(incompleteTodos);
  });
};

export default clearList;