export const updateActivity = (id, newText, tasks) => {
  const db = tasks;
  db[id].activity = newText;
  return db;
};

export default updateActivity;