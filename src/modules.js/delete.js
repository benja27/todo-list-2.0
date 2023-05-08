import { saveDb } from './saveDb.js';

export const deleteItem = (index) => {
  const db = JSON.parse(localStorage.getItem('to-do-list'));
  // localStorage.setItem('to-do-list', JSON.stringify(db));
  db.splice(index, 1);
  saveDb(db);
};

export default deleteItem;
module.exports = deleteItem;