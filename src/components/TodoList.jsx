import { useState } from "react";

function TodoList() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  const addTask = (e) => {
    e.preventDefault();
    if (newTask.trim() !== "") {
      setTasks([...tasks, newTask]);
      setNewTask("");
      console.log(newTask);
    }
  };

  const removeTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  };

  let content;

  if (tasks.length > 0) {
    content = tasks.map((task, index) => (
      <div
        key={index}
        className="flex justify-start items-center p-2 hover:bg-gray-100 hover:transition-all space-x-4 border-b border-gray-400/20 last:border-0"
      >
        <div className="flex justify-between w-full">
          <div>{task}</div>
          <div>
            <button onClick={() => removeTask(index)}>
              <i className="fa-solid fa-trash"></i>
            </button>
          </div>
        </div>
      </div>
    ));
  } else {
    content = (
      <div className="text-center text-gray-500 py-2">No tasks found</div>
    );
  }

  return (
    <div className="w-full max-w-3xl shadow-lg rounded-lg p-6 bg-white mt-24">
      <form
        className="flex items-center bg-gray-100 px-4 py-4 rounded-md"
        onSubmit={addTask}
      >
        <div>
          <i className="fa-solid fa-list-check text-xl"></i>
        </div>
        <input
          type="text"
          placeholder="Type your todo"
          className="w-full text-lg px-4 py-1 border-none outline-none bg-gray-100 text-gray-500"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <button
          type="submit"
          className="appearance-none w-8 h-8 bg-no-repeat bg-contain"
          // onClick={addTask}
        >
          <i className="fa-solid fa-circle-plus text-xl"></i>
        </button>
      </form>

      <div className="mt-2 border-b py-2 font-semibold">Todo List</div>

      <ul>{content}</ul>
    </div>
  );
}

export default TodoList;
