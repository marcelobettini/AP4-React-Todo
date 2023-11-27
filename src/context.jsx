import { createContext, useState } from "react";
function getTasksFromStorage() {
  const storedTasks = window.localStorage.getItem("tasks");
  const tasks = JSON.parse(storedTasks);
  return tasks ? tasks : [];
}
export const AppCtx = createContext();
export const AppCtxPovider = ({ children }) => {
  const [tasks, setTasks] = useState(getTasksFromStorage());
  const [filteredTasks, setFilteredTasks] = useState(tasks);
  const [searchQuery, setSearchQuery] = useState("");
  return (
    <AppCtx.Provider
      value={{
        tasks,
        setTasks,
        filteredTasks,
        setFilteredTasks,
        searchQuery,
        setSearchQuery,
      }}
    >
      {children}
    </AppCtx.Provider>
  );
};
