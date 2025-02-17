import { useContext } from "react";

import { TodosContext } from "../store/store";

export function Message() {
  const { todos } = useContext(TodosContext);

  return (
    todos.length === 0 && (
      <p
        className="text-warning text-center mt-3"
        style={{ letterSpacing: "0.1em" }}
      >
        What&#39;s up?
      </p>
    )
  );
}
