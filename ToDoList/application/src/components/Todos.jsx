import { useContext } from "react";

import { MDBBtn, MDBIcon } from "mdb-react-ui-kit";

import { TodosContext } from "../store/store";

export function Todos() {
  const { todos, deleteTodo } = useContext(TodosContext);

  return todos.map((todo, index) => (
    <div key={index} className="row bg-light rounded mt-2">
      <div
        className="col-9 col-sm-10 text-warning py-1"
        style={{ letterSpacing: "0.05em", fontSize: "14px" }}
      >
        {todo}
      </div>
      <div className="col-3 col-sm-2 text-center">
        <MDBBtn color="tertiary" size="sm" onClick={() => deleteTodo(todo)}>
          <MDBIcon fas icon="trash" color="dark" />
        </MDBBtn>
      </div>
    </div>
  ));
}
