import { useState } from "react";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([
    {
      id: Date.now(),
      text: "react를 배워봅시다.",
    },
  ]);
  const [todo, setTodo] = useState("자바스크립트를 배워봅시다");

  const addTodo = () => {
    const newTodos = {
      id: Date.now(),
      text: todo,
    };
    setTodos([...todos, newTodos]);
  };

  return (
    <>
      <div className="input-con">
        <input
          type="text"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
        ></input>
        <button onClick={addTodo}>추가하기</button>
      </div>
      <h1>Todo List</h1>
      <ul className="todo-con">
        {todos.map((todo) => (
          <li>{todo.text}</li>
        ))}
      </ul>
    </>
  );
}
export default App;
