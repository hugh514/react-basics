import { useState, useEffect } from "react";
import "./TodoApp.css";

const TodoApp = () => {
  const [inputValue, setInput] = useState();
  const jsonTodo = JSON.parse(localStorage.getItem("listTodo")) || [];
  const [listTodo, setList] = useState(jsonTodo);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim() !== "") {
      const newTodo = {
        id: Date.now(),
        text: inputValue,
      };

      setList((prevList) => [...prevList, newTodo]);
      setInput("");
    }
  };

  const handleDelete = (id) => {
    setList(listTodo.filter((todo) => todo.id !== id));
  };

  useEffect(() => {
    localStorage.setItem("listTodo", JSON.stringify(listTodo));
  }, [listTodo]);
  return (
    <div className="app-container">
      <h1 className="title">Lista de Tarefas</h1>
      <form onSubmit={handleSubmit} className="form-container">
        <input
          type="text"
          className="input-field"
          placeholder="Digite o nome da tarefa"
          value={inputValue}
          onChange={(e) => setInput(e.target.value)}
        />
        <button type="submit" className="add-button">
          Adicionar
        </button>
      </form>

      {listTodo.length === 0 && (
        <p className="empty">Não existe tarefas cadastradas.</p>
      )}
      <ul className="todo-list">
        {listTodo.map((todo) => (
          <li key={todo.id} className="todo-item">
            {todo.text}
            <button
              className="delete-button"
              onClick={() => handleDelete(todo.id)}
            >
              Excluir
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoApp;
