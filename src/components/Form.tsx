import { useState } from "react";
import { Todo } from "../models/model";

type FormProps = {
  onAddTodo: (todo: Todo) => void;
};

export const Form = ({ onAddTodo }: FormProps) => {
  const [title, setTitle] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim()) return;

    const newTodo: Todo = {
      id: Date.now(), // enkel unik ID
      title,
      completed: false,
    };

    onAddTodo(newTodo);
    setTitle(""); // nollställ input
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="todo">Todo:</label>
      <input
        id="todo"
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button type="submit">Lägg till</button>
    </form>
  );
};