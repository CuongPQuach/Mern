import React,{useState} from "react";
import './todolistdisplay.css'



const DisplayTodolist = (props) => {
    const {Todolist,setTodolist} = props


    const checkboxhandler = (taskcheckbox) =>{
        
    }

    const deleteHandler = (id) => {
        let updatedlist = Todolist.filter((Todoassignment) => Todoassignment.id ==! id)
        console.log (updatedlist)
    }

    return(
        <div className='todolist-container'>
            {
                props.Todolist.map((Todoassignment) => {
                    return(
                    <div key={Todoassignment.id} className='task'>
                    <p>{Todoassignment.name}</p>
                    <p>{Todoassignment.taskdiscrip}</p>
                    <p>{Todoassignment.personincharged}</p>
                    <button onClick={() => deleteHandler(Todoassignment.id)}>Delete Task </button>
                    </div>
                    )
                }) 
                 
            }
        </div>
    )
}

export default DisplayTodolist