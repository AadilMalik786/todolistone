import React, { createContext, useState } from "react";
const Tasks=createContext();
const TaskStorage=(props)=>{
    const [data,setData]=useState([])
const handleCreate=(e)=>{
    e.preventDefault();
    if(e.target[0].value.length!==0)
    setData([...data,{task:e.target[0].value,id:Math.random()*1000000}]);
}
const handleDelete=(id)=>{
setData(data.filter((value)=>(value.id!==id)))
}
// const handleEdit(){

// }

    return(
        <>
        <Tasks.Provider value={{data,handleCreate,handleDelete}}>
            {props.children}
        </Tasks.Provider>
        </>
    )
}
export default TaskStorage;
export {Tasks}