import React from 'react';

const TodoList = ({ todos, handleDelete, handleEdit }) => {
  return (
    <ul className="allTodos">
      {todos.map((t) => (
        <li className="singleTodo">
          <span className="todoText" key={t.id}>
            {t.todo}
          </span>
          <button onClick={() => handleEdit(t.id)}>Düzenle</button>
          <button onClick={() => handleDelete(t.id)}>Sil</button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
