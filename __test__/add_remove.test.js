/**
 * @jest-environment jsdom
 */
const add = require('../src/modules.js/saveToDo.js');
const remove = require('../src/modules.js/delete.js');

describe('vamos a ver si hace algo esta shit', () => {
  beforeEach(() => {
    document.body.innerHTML = `
    <form class="mb-3" id="form">
    <input type="text" class="form-control" name="" id="new-todo" aria-describedby="helpId"
            placeholder="Add to your list ..">
    </form>    
    <div class="" id="list-item-container"> 
    </div> `;
  });

  test('checa si se crea un objeto dom', () => {
    const item = {
      actividad: 'buy groseries',
      estatus: false,
      index: 1,
    };

    add(item);
  });

  test('check if remove the proper element', () => {
    remove(1);
  });
});
