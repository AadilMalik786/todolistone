import React, { createContext, useRef, useState } from "react";
const Tasks=createContext();
const TaskStorage=(props)=>{
    // const myB`` =useRef();
    const [data,setData]=useState([]);
    const [editingTask,setEditingTask]=useState(null);
    const myRef=useRef();
const handleCreate=(e)=>{
    e.preventDefault();
    if(e.target[0].value.length!==0)
    setData([...data,{task:e.target[0].value,id:Math.random()*1000000}]);
    e.target[0].value = "";
}
const handleDelete=(id)=>{
    if (window.confirm("Do you want to delete this permanently?"))
setData(data.filter((value)=>(value.id!==id)))
}

const handleEdit = (tas) => {
    setEditingTask(tas); // Set the task being edited
    if (myRef.current) {
      myRef.current.value = tas.task; // Set the textarea value to the task's value
    }
  };

  
  const handleSave = () => {
    if (editingTask && myRef.current) {
        const updatedData = data.map((item) =>
        item.id === editingTask.id ? { ...item, task: myRef.current.value } : item
        );
        console.log(editingTask.id);
      setData(updatedData);
      setEditingTask(null); // Clear the editing state
      myRef.current.value = ''; // Clear the textarea
    }
  };




    return(
        <>
        <Tasks.Provider value={{data,handleCreate,handleSave,handleDelete,handleEdit,myRef,editingTask}}>
            {props.children}
        </Tasks.Provider>
        </>
    )
}
export default TaskStorage;
export {Tasks};