import React from "react";

const TodoItem1 = () => {

    let todoName = "Buy Milk";
    let todoDate = "4/10/2023"


  return (
    <>
      <div class="container">
        <div class="row kg-row">
          <div class="col-6">
            <p>{todoName}</p>
          </div>
          <div class="col-4">
            <p>{todoDate}</p>
          </div>
          <div class="col-2">
            <button type="button" class="btn btn-danger kg-button">
              Delete
            </button>
          </div>
        </div>
        <div class="row kg-row">
          <div class="col-6">
            <p>Go to College</p>
          </div>
          <div class="col-4">
            <p>4/10/2012</p>
          </div>
          <div class="col-2">
            <button type="button" class="btn btn-danger kg-button">
              Delete
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default TodoItem1;
