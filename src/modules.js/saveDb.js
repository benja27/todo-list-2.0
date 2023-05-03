import { showDb } from './showDb.js';
import { changeIcons } from './changeIcons.js';

export const saveDb = (arryOfActivities) => {
  arryOfActivities.forEach((element, index) => {
    element.index = index + 1;
  });

  localStorage.setItem('to-do-list', JSON.stringify(arryOfActivities));
  showDb(JSON.parse(localStorage.getItem('to-do-list')));
  changeIcons();
};

export default saveDb;