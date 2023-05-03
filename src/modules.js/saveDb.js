/* eslint-disable  */

import { showDb } from './showDb.js';
import { changeIcons } from './changeIcons.js';

export const saveDb = (arryOfActivities) => {
  localStorage.setItem('to-do-list', JSON.stringify(arryOfActivities));
  showDb(arryOfActivities);
  changeIcons();
};

export default saveDb;