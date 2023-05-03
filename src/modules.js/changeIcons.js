/* eslint-disable  */
import { saveDb } from './saveDb.js';

export const changeIcons = () => {
  const allActivites = Array.from(document.querySelectorAll('.todo'));

  allActivites.forEach((element) => {
    element.addEventListener('change', (e) => {
      e.preventDefault();
      const db = JSON.parse(localStorage.getItem('to-do-list'));
      db[e.target.dataset.id].activity = e.target.value;
      saveDb(db);
    });

    element.addEventListener('focus', (e) => {
      e.target.nextElementSibling.classList.add('fa-trash');
      e.target.nextElementSibling.classList.remove('fa-ellipsis-vertical');
    });

    element.addEventListener('blur', (e) => {
      setTimeout(() => {
        e.target.nextElementSibling.classList.remove('trash');
        e.target.nextElementSibling.classList.add('fa-ellipsis-vertical');
      }, 1000);
    });
  });
};

export default changeIcons;