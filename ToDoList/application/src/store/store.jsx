import PropTypes from "prop-types";

import { createContext, useReducer, useRef } from "react";

export const TodosContext = createContext({
  todos: [],
  todoInputReference: {},
  appendTodo: () => {},
  deleteTodo: () => {},
});

const todosReducer = (currentTodoInputs, action) => {
  let todoInputs = currentTodoInputs;
  if (action.type === "APPEND_TODO") {
    todoInputs = [...currentTodoInputs, action.payload.todoInput];
  } else if (action.type === "DELETE_TODO") {
    todoInputs = currentTodoInputs.filter(
      (filteredTodo) => filteredTodo !== action.payload.todo
    );
  }
  return todoInputs;
};

export const TodosContextProvider = ({ children }) => {
  const [todos, dispatchTodos] = useReducer(todosReducer, []);

  const todoInputReference = useRef();

  const appendTodo = (event) => {
    event.preventDefault();
    const todoInput = todoInputReference.current.value;
    const appendTodoAction = {
      type: "APPEND_TODO",
      payload: {
        todoInput,
      },
    };
    dispatchTodos(appendTodoAction);
    todoInputReference.current.value = "";
  };

  const deleteTodo = (todo) => {
    const deleteTodoAction = {
      type: "DELETE_TODO",
      payload: {
        todo,
      },
    };
    dispatchTodos(deleteTodoAction);
  };

  return (
    <TodosContext.Provider
      value={{
        todos,
        todoInputReference,
        appendTodo,
        deleteTodo,
      }}
    >
      {children}
    </TodosContext.Provider>
  );
};

TodosContextProvider.propTypes = {
  children: PropTypes.object,
};
