let currentTodos = []; //["Get Dry cleaning", "Review functions", "Review arrays"];
let doneTodos = []; //["Finish all coded tasks", "Sent important email"];

const current = (newParamCurrent) => currentTodos.indexOf(newParamCurrent);
const done = (newParamDone) => doneTodos.indexOf(newParamDone);

const todosShow = (currentTodos2, doneTodos2) => {
  if (currentTodos2 && doneTodos2) {
    currentTodos = currentTodos2;
    doneTodos = doneTodos2;
    console.log(`Current todos \n${currentTodos}`);
    console.log(`Done todos \n${doneTodos}`);
  } else {
    console.log(`Current todos \n${currentTodos}`);
    console.log(`Done todos \n${doneTodos}`);
  }
};

todosShow(
  ["Get Dry cleaning", "Review functions", "Review arrays"],
  ["Finish all coded tasks", "Sent important email"]
);

//console.log(currentTodos);
const completedTodo = (todo) => {
  //console.log(current);
  let newCurrent = current(todo);
  if (current(todo) >= 0) {
    currentTodos.splice(newCurrent, 1);
    doneTodos.push(todo);
    console.log(currentTodos);
    console.log(doneTodos);
  } else {
    console.log("There is no task that matches this task in current todos");
  }
};

completedTodo("Review functions");
//todosShow(["Get Dry cleaning", "Review functions", "Review arrays"],["Finish all coded tasks", "Sent important email"])

const validateTodo = (todo) => {
  if (todo.length >= 2) {
    return true;
  } else {
    return false;
  }
};

console.log(validateTodo("test"));

const addNewTodo = (todo) => {
  //console.log(current);
  if (
    current(todo) < 0 &&
    done(todo) < 0 &&
    validateTodo(todo) == true &&
    Array.isArray(todo)
  ) {
    currentTodos.push(...todo);
    console.log(currentTodos);
    console.log(doneTodos);
  } else if (
    current(todo) < 0 &&
    done(todo) < 0 &&
    validateTodo(todo) == true
  ) {
    currentTodos.push(todo);
    console.log(currentTodos);
    console.log(doneTodos);
  }
  //   else if (currentTodos.length > 0) {}
  else if (validateTodo(todo) == false) {
    console.log("Please enter more than 1 characters");
  } else if (current(todo) < 0 && done(todo) >= 0) {
    console.log("You have already done this task");
  } else {
    console.log("The task is already there");
  }
};
addNewTodo(["retest", "new"]);
// addNewTodo("test");
// addNewTodo("t");
// addNewTodo("Review functions");
// addNewTodo("Get Dry cleaning");

// const uncheckTodo = (undo) => {
//   let newDone = done(undo);
//   if (done(undo) >= 0) {
//     doneTodos.splice(newDone, 1);
//     currentTodos.push(undo);
//     console.log(currentTodos);
//     console.log(doneTodos);
//   } else if (current(undo) >= 0) {
//     console.log("You are not done with this task yet");
//   } else {
//     console.log("there is no task done with that name");
//   }
// };

// uncheckTodo("Finish all coded tasks");
// uncheckTodo("test");
// uncheckTodo("jshg");

// const editTodo = (index, todoList, updatedTodo) => {
//   let place = todoList.indexOf(index);
//   if (place >= 0) {
//     todoList[place] = updatedTodo;
//     console.log(todoList);
//   } else {
//     console.log("there is no task with the same naming");
//   }
// };

// editTodo("test", currentTodos, "New To do");

// todosShow();
