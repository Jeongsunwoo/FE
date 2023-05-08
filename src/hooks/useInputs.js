import { useState } from "react";

export const useInputs = (initialState) => {
  const [post, setPost] = useState(initialState);

  const handler = (e) => {
    const { name, value } = e.target;
    setPost({ ...post, [name]: value });
  };

  const reset = (resetState = initialState) => {
    setPost(resetState);
  };

  return [post, handler, reset];
};
