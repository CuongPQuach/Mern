import React,{useState} from "react";


const Todolistform = (props) => {
    const {Todolist,setTodolist} = props

    const [Todoassignment, setTodoassignment] = useState ({
        name:'',
        taskdiscrip:'',
        personincharged:''
    })


    const onChangeHandler = (e) => {
        setTodoassignment(prevState =>({...prevState,[e.target.name]: e.target.value}))
    }

    const runValidations = () => {
        let isValid = true
        if (Todoassignment.name.length < 2 || Todoassignment.taskdiscrip.length < 2 || Todoassignment.personincharged.length < 2  ) {
            console.log ('Please Check The Requirement')
            isValid = false
            return isValid
        }
        else{
            return isValid
        }
    }
    const SubmitHandler = (e) => {
        e.preventDefault();
        let isValid = runValidations ()
        if (isValid) {
            let id = crypto.randomUUID()
            console.log(id)
            let newTodoassignment = {...Todoassignment, id:id}
            setTodolist([...Todolist,newTodoassignment])
            setTodoassignment({
                name:'',
                taskdiscrip:'',
                personincharged:''
            })
        }
        else{
            return isValid
        }
    }
    return (
        <div>
            <form onSubmit={SubmitHandler}>
                <label htmlFor="name">Assignment Name:</label>
                <input type="text" onChange={onChangeHandler} name='name' value={Todoassignment.name}/>
                {
                   Todoassignment.name&& Todoassignment.name.length <2?
                    <p>Task Name must at least 2 Character</p>:
                    null
                }
                <label htmlFor="taskdiscrip">Assignment Discriptions:</label>
                <input type="text" onChange={onChangeHandler} name='taskdiscrip' value={Todoassignment.taskdiscrip}/>
                {
                   Todoassignment.taskdiscrip&& Todoassignment.taskdiscrip.length <2?
                    <p>Task Discriptions must at least 2 Character</p>:
                    null
                }
                <label htmlFor="personincharged">Assignment Person In Charged:</label>
                <input type="text" onChange={onChangeHandler} name='personincharged' value={Todoassignment.personincharged}/>
                {
                   Todoassignment.personincharged&& Todoassignment.personincharged.length <2?
                    <p>Task Manager must at least 2 Character</p>:
                    null
                }
                <button>Submit Task</button>
            </form>
            
        </div>
    )
    
}

export default Todolistform