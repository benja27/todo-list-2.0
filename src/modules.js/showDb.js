export const showDb = (db) => {
  const container = document.getElementById('list-item-container');

  container.innerHTML = '';

  db.forEach((element, index) => {
    let check = '';
    if (element.completed) {
      check = 'checked';
    }
    container.innerHTML += `         
           <div class="item-itself mb-3">
    
                <div  class="form-check d-flex  justify-content-between align-items-center ">
    
                  <input ${check} data-id=${index} class="form-check-input" type="checkbox" value="" id="">
    
                  
                    <input type="text" data-id=${index} class="form-control todo flex-grow-1 mx-4" name="" id="" aria-describedby="helpId"
                      value="${element.activity}" placeholder="">
                  
                  
                    <i class="fa-solid fa-ellipsis-vertical" data-id=${index} ></i>
                  
                </div>
              </div>     
     `;
  });

  const ArrayOfActivities = Array.from(document.querySelectorAll('.todo'));

  db.forEach((element) => {
    if (element.completed) {
      ArrayOfActivities[db.indexOf(element)].style.textDecoration = 'line-through';
      ArrayOfActivities[db.indexOf(element)].style.opacity = 0.5;
    }
  });
};

export default showDb;