/**
 * @jest-environment jsdom
 */
import { checkItem } from '../src/modules.js/checkItem.js';
import { updateActivity } from '../src/modules.js/updateActivity.js';

describe('testing both check and update functions', () => {
  beforeEach(() => {
    // Mock the DOM elements
    document.body.innerHTML = `
        <form class="mb-3" id="form">
        <input type="text" class="form-control" name="" id="new-todo" aria-describedby="helpId"
                placeholder="Add to your list ..">
        </form>    
        <div class="" id="list-item-container"> 
        </div> `;
  });

  afterEach(() => {
    // Clean up any changes made to the DOM
    const itemContainer = document.getElementById('list-item-container');

    itemContainer.innerHTML = '';
  });
  
  // test if the status of the element is changed from false to true
  // test('check if the status of the element is changed from false to true and the oposite', () => {
  //   let localStorage = [
  //     { id: 1, name: 'Task 1', completed: false },
  //     { id: 2, name: 'Task 2', completed: true },
  //     { id: 3, name: 'Task 3', completed: false }
  //   ]

  //   let id = 0
  //   let result = checkItem(id, localStorage)

  //   expect(result[id].completed).toBe(true)


  // }) 

  // test if activity text is chenged when running the function
  test('checking if we can update the text of the activity', () => {
    let localStorage = [
      { id: 1, activity: 'Task 1', completed: false },
      { id: 2, activity: 'Task 2', completed: true },
      { id: 3, activity: 'Task 3', completed: false }
    ]

    let id = 0
    let new_text = "go to the gym"
    let result = updateActivity(id, new_text, localStorage)

    expect(result[id].activity).toBe("go to the gym")


  })
});
