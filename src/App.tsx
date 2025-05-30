import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Taskx } from ".";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
     
     <Taskx 
       task={{ id: '1', title: 'Sample Task', state: 'TASK_INBOX' }} 
       onArchiveTask={() => console.log('Task archived')} 
       onPinTask={() => console.log('Task pinned')} 
     />
      <p className="read-the-docs">
        Click on the Vite and React logos to learn  more
      </p>
    </>
  );
}

export default App;
