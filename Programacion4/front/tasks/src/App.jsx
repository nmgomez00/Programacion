import FormTask from "./components/form-task";
import TaskProvider from "./contexts/tasks/provider";

function App() {
  return (
    <>
      <h1>Tareas</h1>
      <TaskProvider>
        <FormTask />
        <TaskList title="Tareas:"
      />

      <TaskList title="Tareas completadas:" completed />
      </TaskProvider>
    </>
  );
}

export default App;
