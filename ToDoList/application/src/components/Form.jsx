import { useContext } from "react";

import { MDBInput, MDBBtn, MDBIcon } from "mdb-react-ui-kit";

import { TodosContext } from "../store/store";

export function Form() {
  const { appendTodo, todoInputReference } = useContext(TodosContext);

  return (
    <form onSubmit={appendTodo} className="row mb-4">
      <div className="col-9 col-sm-10">
        <MDBInput
          type="text"
          size="sm"
          ref={todoInputReference}
          style={{ letterSpacing: "0.1em" }}
        />
      </div>
      <div className="col-3 col-sm-2 text-center">
        <MDBBtn type="submit" color="success" size="sm">
          <MDBIcon fas icon="plus-circle" />
        </MDBBtn>
      </div>
    </form>
  );
}
