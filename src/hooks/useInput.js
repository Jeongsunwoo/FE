import { useState } from "react";

const useInput = (initialState) => {
  const [state, setState] = useState(initialState);

  const handleInputChange = (e) => {
    setState(e.target.value);
  };

  const reset = (resetState = initialState) => {
    setState(resetState);
  };

  return [state, handleInputChange, reset];
};

export default useInput;
