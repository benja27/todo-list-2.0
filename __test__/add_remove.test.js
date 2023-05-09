/**
 * @jest-environment jsdom
 */
import { saveToDo } from '../src/modules.js/saveToDo.js';
import { deleteItem } from '../src/modules.js/delete.js';

describe('testing both add and remove functions', () => {
  beforeEach(() => {
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

  test('check if a new element is added', () => {
    const item = {
      actividad: 'buy groseries',
      estatus: false,
      index: 1,
    };

    saveToDo(item);
    deleteItem(0);

    // Check if an element with the expected text content was added to the DOM
    const addedItem = document.querySelector('#list-item-container').children[0];

    expect(addedItem).not.toBeNull();
  });

  test('check if it removes the proper element', () => {
    const item = {
      actividad: 'buy groseries',
      estatus: false,
      index: 1,
    };

    saveToDo(item);
    deleteItem(0);

    // Check if an element with the expected text content was added to the DOM
    const addedItem = document.querySelector('#list-item-container').children;

    expect(addedItem).toHaveLength(0);
  });
});
