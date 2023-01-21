import React,{useState} from 'react';

const Personalaplication = (props) => {
    const[personalcard,setpersonalcard] = useState({
        fname:'',
        lname:'',
        email:'',
        password:'',
        confirmpass:''
    })
    
    const onChangehandler = (e) => {
        setpersonalcard(prevState => {return{...prevState,[e.target.name]:e.target.value}})
    }

    return(
        <div >
            <form className='d-flex'> 
                <label htmlFor="fname"> First Name: </label>
                <input type="text" name="fname" onChange={onChangehandler} />
                <label htmlFor="lname"> Last Name: </label>
                <input type="text" name="lname" onChange={onChangehandler} />
                <label htmlFor="email"> First Name: </label>
                <input type="text" name="email" onChange={onChangehandler} />
                <label htmlFor="password"> Password: </label>
                <input type="password"  name="password" onChange={onChangehandler} />
                <label htmlFor="confirmpass"> Confirm Password: </label>
                <input type="password"  name="confirmpass" onChange={onChangehandler}/>

            </form>
            <h2>First Name: {personalcard.fname}</h2>
            <h2>Last Name : {personalcard.lname}</h2>
            <h2>Email : {personalcard.email}</h2>
            <h2>Password : {personalcard.password}</h2>
            <h2>Confirm Password :{personalcard.confirmpass}</h2>
        </div>
    )
}

export default Personalaplication;