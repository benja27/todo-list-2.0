import { saveDb } from './saveDb.js';

export const saveToDo = (item) => {
  // const newTodo = document.getElementById('new-todo');
  // let index = 1;
  // if (localStorage.getItem('to-do-list')) {
  //   index = Array.from(JSON.parse(localStorage.getItem('to-do-list')));
  // }
  // const item = {
  //   index: index.length + 1 || index,
  //   completed: false,
  //   activity: newTodo.value,
  // };

  let arryOfActivities = [];
  if (localStorage.getItem('to-do-list')) {
    arryOfActivities = JSON.parse(localStorage.getItem('to-do-list'));
  }
  arryOfActivities.push(item);
  saveDb(arryOfActivities);
};

export default saveToDo;
module.exports = saveToDo;