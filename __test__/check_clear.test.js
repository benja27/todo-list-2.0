/**
 * @jest-environment jsdom
 */
import { clearList } from '../src/modules.js/clearList';

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
    const numberOfChildren = document.querySelector('#list-item-container').children;

    // Test clearCompleted function
    describe('clearCompleted', () => {
        it('should remove completed tasks from local storage', () => {
          // Call the function and verify local storage update
          clearList();
          expect(numberOfChildren[0]).toBeNull();
          expect(numberOfChildren[2]).toBeNull();
        });
      });
    });
