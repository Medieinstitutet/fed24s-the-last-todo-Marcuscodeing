import { useState } from "react";
import { Todo } from "../models/model";

export const TodoList = () => {
  const [todos, setTodos] = useState<Todo[]> ([
    { id: 1, title: 'Träna', completed: false },
    { id: 2, title: 'Äta', completed: false },
    { id: 3, title: 'Koda', completed: false },
  ]);

  
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
    <ul>
      {todos.map(todo => (
        <li key={todo.id}>
          <input type="checkbox" 
          checked={todo.completed} 
          onChange={() => changeTodo(todo.id)}
          />
          {todo.title}

        <button onClick = {() => removeTodo(todo.id)}> Ta bort Todo</button>
        </li>
      ))}
    </ul>

    </>
  );
}