import React,{useState} from "react";

const Personalcard = (props) => {
    const {fname,lname,age,haircolor} = props;


    const [birthday,setbirthday] = useState(age)
    const newyear = () => {
        setbirthday(birthday+1)
    }
    const rewrite_history = () => {
        setbirthday(age)
    }
    
    return(
        <div>
            <h2>{fname},{lname}</h2>
            <p> Age: {birthday}</p>
            <p> Hair Color: {haircolor}</p>
            <button onClick={newyear}>HappyBirthDay</button>
            <button onClick={rewrite_history}>Do You Wish To Turn Back Time</button>
        </div>
    )
}

export default Personalcard