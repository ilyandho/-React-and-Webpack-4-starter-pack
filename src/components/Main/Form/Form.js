import React from "react";

import "./Form.scss";

const Form = () => {
  const handleSubmit = e => {
    console.log(e.target.children[0].value);
    const input = e.target.children[0].value;
    const newInput = { todo: input, done: false };

    console.log(newInput);

    e.preventDefault();
    e.target.reset();
    //e.reset();
  };

  return (
    <div className="add-todo">
      <p>This is where I keep my todos.</p>
      <form onSubmit={handleSubmit}>
        <input type="text" name="add-to" id="add-to" />
        <button type="submit">Add New Todo</button>
      </form>
    </div>
  );
};

export default Form;
