// imports

import html from './index.html';
import './index.css';

const esl = html;
document.getElementById('eslint').innerHTML = esl;

// document.getElementById("esling").

// general variables

const container = document.getElementById('list-item-container');

const arrayOfTasks = [
  {
    index: 0,
    completed: false,
    description: 'first task',
  },
  {
    index: 1,
    completed: false,
    description: 'second task',
  },
  {
    index: 2,
    completed: false,
    description: 'third task',
  },
];

window.addEventListener('DOMContentLoaded', () => {
  container.innerHTML = '';

  arrayOfTasks.forEach((element) => {
    container.innerHTML += `
       <div class="item-itself mb-3">

            <div class="form-check d-flex justify-content-between align-items-center ">

              <input class="form-check-input" type="checkbox" value="" id="">

              <span class="flex-grow-1 px-2">
                <input type="text" class="form-control" name="" id="" aria-describedby="helpId"
                  value="${element.description}" placeholder="">
              </span>

              <span>
                <i class="fa-solid fa-ellipsis-vertical"></i>
              </span>
            </div>
          </div>
    `;
  });
});