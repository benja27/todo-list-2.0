/**
 * @jest-environment jsdom
 */
import { checkItem } from '../src/modules.js/checkItem.js';
import { updateActivity } from '../src/modules.js/updateActivity.js';
import { clearLocal } from '../src/modules.js/clearLocal.js';
import { localStorage } from './localStorage.js';

describe('testing checkbox, update and clearAll functions', () => {
  
  // ============================ TEST NUMBER 1 ==================================
  // =============================================================================

  // test if the status of the element is changed from false to true and the oposite
  test('check if the status of the element is changed from false to true and the oposite', () => {
    const id = 0;
    // calling the function and saving the output in a variable
    const result = checkItem(id, localStorage);

    // the status of element id = 0 equals false after the funcion it should be true
    expect(result[id].completed).toBe(true);
  });

  // ============================ TEST NUMBER 2 ==================================
  // =============================================================================

  // test if activity text is changed when running the function
  test('checking if we can update the text of the activity', () => {
    const id = 0;
    const newText = 'go to the gym';
    // calling the function and saving the output in a variable
    const result = updateActivity(id, newText, localStorage);

    // the activity text of element id = 0 equals "Task 1"
    // after the funcion it should be "go to the gym
    expect(result[id].activity).toBe('go to the gym');
  });

  // ============================ TEST NUMBER 3 ==================================
  // =============================================================================


  // test if activities with status true are removed from the array
  test('checking if clearAll function works', () => {
    // we have 3 elements in the array, 1 of them have status true,
    // after the function we should have only 2 element in the array
    const localStorage = [
      { id: 1, activity: 'Task 1', completed: false },
      { id: 2, activity: 'Task 2', completed: true },
      { id: 3, activity: 'Task 3', completed: false },
    ];

    // calling the function and saving the output in a variable
    const result = clearLocal(localStorage);

    // the array should have 2 elements
    expect(result).toHaveLength(2);
  });
});
