import React, {useContext } from "react";
// import TaskStorage from "../api/TaskStorage";
import { Tasks } from "../api/TaskStorage";
import { GrAdd } from "react-icons/gr";
import {MdDeleteForever} from "react-icons/md";
import {BiSolidEdit } from "react-icons/bi";
const TaskGen=(props)=>{
    const {data,handleCreate,handleDelete,handleEdit,myRef,editingTask,handleSave}= useContext(Tasks);
    // const myButtonRef =useRef();
    return(
        // <h1 className="text-[red]">hello adil</h1>
        <>
        <section className="bg-slate-400 h-[100vh] overflow-y-auto flex flex-col ">
            <form className="flex flex-col  items-center justify-center" onSubmit={handleCreate}>
            <textarea className="mt-10 resize-none h-20 w-[50%] textarea-class" cols="30" rows="10" ref={myRef}></textarea>
            <button className="mt-5 w-[5%] bg-[red] flex items-center justify-center h-10 rounded-[10px] bg-purple-500 plusbutton-class"><GrAdd/></button>
             {editingTask ? <button className='py-2  flex justify-center bg-emerald-400 border-2 border-emerald-400  hover:bg-emerald-500 text-3xl w-[50%] text-white mt-[20px] '  onClick={()=>handleSave()}>SAVE</button> : ""}
            </form>
            <article className='flex flex-wrap justify-center gap-3  overflow-y-scroll mt-[20px] flex-wrap'>
                {
                    data.length !=0 ? data.map(value=>{
                    return    <article className="flex flex-col justify-end gap-[100px] bg-rose-200 py-2 px-6 h-52 w-[30%]  rounded-xl box-class" key={Math.random()*1000}>  
                        <h2>{value.task}</h2>
                        <div className=" flex  w-[80%] justify-between items-end  ">
                            <button className=" h-10 w-10 text-4xl text-indigo-500"onClick={()=>handleDelete(value.id)}><MdDeleteForever /></button>
                            <button className=" h-10 w-10 text-4xl text-rose-400"  onClick={()=>handleEdit(value)}><BiSolidEdit /></button>
                        </div>
                            </article>
                    }):<h2 className="text-[96px] capitalize heading-class"> no task available</h2>
                }
                </article>
        </section>
        </>
    )
};
export default TaskGen;