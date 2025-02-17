import React from "react";

import { Form } from "./components/Form";
import { Message } from "./components/Message";
import { Todos } from "./components/Todos";

import { TodosContextProvider } from "./store/store";

function App() {
  return (
    <TodosContextProvider>
      <React.Fragment>
        <h3 className="text-center mt-5">ToDoList</h3>
        <div
          className="container px-4 px-sm-0 mt-3"
          style={{ maxWidth: "400px" }}
        >
          <Form />
          <Message />
          <Todos />
        </div>
      </React.Fragment>
    </TodosContextProvider>
  );
}

export default App;
