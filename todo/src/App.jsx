import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItem1 from "./components/TodoItem1";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <center className="todo-container">
        <AppName />
        <AddTodo />
        <TodoItem1 />
      </center>
    </>
  );
}

export default App;
