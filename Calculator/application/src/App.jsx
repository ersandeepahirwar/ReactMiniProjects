import { useState } from "react";

import { MDBBtn, MDBInput } from "mdb-react-ui-kit";

function App() {
  const symbols = [
    "C",
    "7",
    "8",
    "9",
    "+",
    "4",
    "5",
    "6",
    "-",
    "1",
    "2",
    "3",
    "*",
    "0",
    ".",
    "=",
    "/",
  ];

  const [inputValue, setInputValue] = useState("");

  const handleOnClick = (symbol) => {
    if (symbol === "C") {
      setInputValue("");
    } else if (symbol === "=") {
      try {
        const evaluatedInputValue = eval(inputValue);
        setInputValue(evaluatedInputValue);
      } catch (error) {
        console.log(error);
        setInputValue("Error");
      }
    } else {
      const updatedInputValue = inputValue + symbol;
      setInputValue(updatedInputValue);
    }
  };

  return (
    <div
      className="container bg-light border border-2 rounded mt-5 p-3"
      style={{ maxWidth: "270px" }}
    >
      <MDBInput
        type="text"
        value={inputValue}
        readonly
        className="bg-light text-end fw-bold"
        style={{ letterSpacing: "0.1em", fontSize: "20px" }}
      />
      <div className="d-flex flex-wrap justify-content-between mt-3">
        {symbols.map((symbol, index) => (
          <MDBBtn
            color={`${symbol === "C" || symbol === "=" ? "info" : "dark"}`}
            key={index}
            onClick={() => handleOnClick(symbol)}
            className="my-1"
          >
            {symbol}
          </MDBBtn>
        ))}
      </div>
    </div>
  );
}

export default App;
