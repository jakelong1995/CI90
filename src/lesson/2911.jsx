import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
    const [val, setVal] = useState("");
    
    const [todos, setTodos] = useState([]);

    const handleAddTodo = () => {
        if(!val){
            toast.error("Please fill out input");
            return;
        }
    }

    const newTodo ={
        id: new Date().getTime(),
        name: val,
        isDone: false,
    };

    setTodos([...todos, newTodo]);
    
    setVal("");
    toast.success("Adding todo is success");
    
  return (
    <div>App</div>
  )
}

export default App