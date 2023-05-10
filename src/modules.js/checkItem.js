export const checkItem = (id, tasks) => {
  const db = tasks;
  db[id].completed = !db[id].completed;
  return db;
};

export default checkItem;