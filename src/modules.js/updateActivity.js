export const updateActivity = (id,new_text, tasks ) => {
  const db = tasks;
  db[id].activity = new_text;
  return db;
}

