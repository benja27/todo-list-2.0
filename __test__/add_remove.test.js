/**
 * @jest-environment jsdom
 */
const add = require('../src/modules.js/saveToDo.js');
const remove = require('../src/modules.js/delete.js');

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

  test('check if a new element is added', () => {
    const item = {
      actividad: 'buy groseries',
      estatus: false,
      index: 1,
    };

    add(item);
  });

  test('check if it removes the proper element', () => {
    remove(1);
  });
});
