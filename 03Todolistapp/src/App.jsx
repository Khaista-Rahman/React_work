import { useState, useCallback } from 'react';

function App() {
  let [inputText, setInputText] = useState("");
  let [tasks, setTasks] = useState([]); // Initialize tasks as an array

  const addText = useCallback(() => {
    if (inputText) {
      setTasks((prevTasks) => [...prevTasks, inputText]); // Add the new task to the task array
      setInputText(""); // Clear input
    } else {
      alert('Please enter a task.');
    }
  }, [inputText]);

  return (
    <>
      <div className="flex justify-center items-center">
        <input
          type="text"
          className="rounded"
          placeholder="Input task..."
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
        />
        <button
          className="w-16 h-7 text-sm text-center hover:bg-blue-600 hover:duration-200"
          onClick={addText}
        >
          Add
        </button>
      </div>
      <div id="taskboard" className="bg-white w-[50vw] text-center mt-4 p-4">
          {tasks.length > 0 ? (
          tasks.map((task, index) => (
            <div key={index} className="border-b py-2">
              {task}
            </div>
          ))
        ) : (
          <p>No tasks available</p>
        )}
      </div>
    </>
  );
}

export default App;

