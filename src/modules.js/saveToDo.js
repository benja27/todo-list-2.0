import { saveDb } from './saveDb.js';

export const saveToDo = (item) => {
  let arryOfActivities = [];
  if (localStorage.getItem('to-do-list')) {
    arryOfActivities = JSON.parse(localStorage.getItem('to-do-list'));
  }
  arryOfActivities.push(item);
  saveDb(arryOfActivities);
};

export default saveToDo;
// module.exports = saveToDo;