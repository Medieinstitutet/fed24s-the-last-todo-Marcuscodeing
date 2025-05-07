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
      id: Date.now(),
      title,
      completed: false,
    };

    onAddTodo(newTodo);
    setTitle(""); 
  };

  return (
    
  <div className="max-w-4xl mx-auto w-full px-6">
    <form className="flex items-center gap-20 mb-12 max-w-4xl mx-auto" onSubmit={handleSubmit}>
      <label className="text-lg whitespace-nowrap" htmlFor="todo">Lägg till en Todo:</label>
      <input className="border border-gray-300 rounded p-2 w-full" placeholder="Skriv här..."
        id="todo"
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button type="submit" className="bg-green-400 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded w-80">Add</button>
    </form>
    </div>
   
  );
};