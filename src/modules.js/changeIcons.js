export const changeIcons = () => {
  const allActivites = Array.from(document.querySelectorAll('.todo'));

  allActivites.forEach((element) => {
    element.addEventListener('change', (e) => {
      e.preventDefault();
      const db = JSON.parse(localStorage.getItem('to-do-list'));
      db[e.target.dataset.id].activity = e.target.value;
      localStorage.setItem('to-do-list', JSON.stringify(db));
    });

    element.addEventListener('focus', (e) => {
      e.target.nextElementSibling.classList.add('fa-trash');
      e.target.nextElementSibling.classList.remove('fa-ellipsis-vertical');
      setTimeout(() => {
        e.target.nextElementSibling.classList.remove('trash');
        e.target.nextElementSibling.classList.add('fa-ellipsis-vertical');
      }, 2000);
    });
  });
};

export default changeIcons;