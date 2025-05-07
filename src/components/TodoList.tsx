import { useState } from "react";
import { Todo } from "../models/model";
import { Form } from "./Form";

export const TodoList = () => {
  const [todos, setTodos] = useState<Todo[]> ([
    { id: 1, title: 'Träna', completed: false },
    { id: 2, title: 'Äta', completed: false },
    { id: 3, title: 'Koda', completed: false },
  ]);

  const addTodo = (todo: Todo) => {
    setTodos([...todos, todo]);
  };
  
// ta bort

const removeTodo = (id: number) => {

    setTodos(todos.filter((t) => t.id !== id));
};

// checked

const changeTodo = (id: number) => {
    setTodos(
        todos.map((t) => {
            if (t.id === id) {
                return { ...t, completed: !t.completed };
            }
            return t;
        }),
    );
};


  return (
    <>
    <section>
     <Form onAddTodo={addTodo} />
    <ul className="w-205 mx-auto py-20">
      {todos.map(todo => (
        <li className="flex items-center justify-between gap-4 mb-6 border-b pb-4" key={todo.id}>
            <div className="flex items-center gap-3 flex-1">
          <input type="checkbox" 
          checked={todo.completed} 
          onChange={() => changeTodo(todo.id)}
          
          />
          <span className="text-lg"  >{todo.title} </span> 
          </div>

        <button className="bg-blue-400 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-40 hover:shadow-lg" onClick = {() => removeTodo(todo.id)} > Ta bort Todo</button>
        </li>
      ))}
    </ul>
    </section>

    </>
  );
}