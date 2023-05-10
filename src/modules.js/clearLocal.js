export const clearLocal = (db) => {
  const incompleteTodos = db.filter((element) => !element.completed);
  localStorage.setItem('to-do-list', JSON.stringify(incompleteTodos));
  return incompleteTodos;
};

export default clearLocal;