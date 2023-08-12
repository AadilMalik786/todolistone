import React, { useContext } from "react";
// import TaskStorage from "../api/TaskStorage";
import { Tasks } from "../api/TaskStorage";
import { GrAdd } from "react-icons/gr";
import {MdDeleteForever} from "react-icons/md";
import {BiSolidEdit } from "react-icons/bi";
const TaskGen=(props)=>{
    const {data,handleCreate,handleDelete}= useContext(Tasks);
    return(
        // <h1 className="text-[red]">hello adil</h1>
        <>
        <section className="bg-slate-400 h-[100vh] overflow-y-auto flex flex-col ">
            <form className="flex flex-col  items-center justify-center" onSubmit={handleCreate}>
            <textarea className="mt-10 resize-none h-20 w-[50%]" cols="30" rows="10"></textarea>
            <button className="mt-5 w-[5%] bg-[red] flex items-center justify-center h-10 rounded-[10px] bg-purple-500"><GrAdd/></button>
            </form>
            <article className='flex flex-wrap justify-center gap-3  overflow-y-scroll '>
                {
                    data.length !=0 ? data.map(value=>{
                    return    <article className="flex flex-col justify-end gap-[100px] bg-rose-200 py-2 px-6 h-52 w-[30%]  rounded-xl" key={Math.random()*1000}>  
                        <h2>{value.task}</h2>
                        <div className=" flex  w-[80%] justify-between items-end  ">
                            <button className=" h-10 w-10 text-4xl text-indigo-500"onClick={()=>handleDelete(value.id)}><MdDeleteForever /></button>
                            <button className=" h-10 w-10 text-4xl text-rose-400"><BiSolidEdit /></button>
                        </div>
        
                            </article>
                    }):<h2 className="text-[96px] capitalize"> no task available</h2>
                }
                </article>
        </section>
        </>
    )
}
export default TaskGen;