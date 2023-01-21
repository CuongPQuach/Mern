import React,{useState} from 'react';

const Personalaplication = (props) => {
    const[personalcard,setpersonalcard] = useState({
        fname:'',
        lname:'',
        email:'',
        pass:'',
        confirmpass:''
    })
    
    const [memberlist,setmemberlist] = useState([])





    const onChangehandler = (e) => {
        setpersonalcard(prevState => {return{...prevState,[e.target.name]:e.target.value}})
    }

    const runValidations =() =>{
        let isValid = true
        if (personalcard.fname.length <2 || personalcard.lname.length <2 || personalcard.email.length <2 || personalcard.pass.length <8 || personalcard.pass !== personalcard.confirmpass){
        console.log('Please Check Requirement')
        isValid = false
        return isValid
        }
        else{
            return isValid
        }
    }




    const onSubmithandler = (e) => {
        e.preventDefault();
        // $$$$$$$ sumit with out Validation
        // console.log('NewMember:' + JSON.stringify(personalcard))
        //  back tick key (before number 1)
        // console.log(`NewMember: ${JSON.stringify(personalcard)}`)
        // ######## submit with validation
        let isValid = runValidations();
        console.log(isValid)
        if (isValid){
            console.log(`NewMember: ${JSON.stringify(personalcard)}`)
            setmemberlist([...memberlist,personalcard])
            setpersonalcard({
            fname:'',
            lname:'',
            email:'',
            pass:'',
            confirmpass:''
            })
        }
        else {
            return isValid
        }



    }
    return(
        <>
        <div  >
            <form onSubmit={onSubmithandler}> 
                <label htmlFor="fname"> First Name: </label>
                <input type="text" name="fname" onChange={onChangehandler} />
                {
                    personalcard.fname.length <2?
                    <p>First Name must at least 2 Character</p>:
                    null
                }
                <label htmlFor="lname"> Last Name: </label>
                <input type="text" name="lname" onChange={onChangehandler} />
                {
                    personalcard.lname.length <2?
                    <p>Last Name must at least 2 Character</p>:
                    null
                }
                <label htmlFor="email"> Email: </label>
                <input type="text" name="email" onChange={onChangehandler} />
                {
                    personalcard.email.length <2?
                    <p>Email must at least 2 Character</p>:
                    null
                }
                <label htmlFor="pass"> Password: </label>
                <input type="password"  name="pass" onChange={onChangehandler} />
                {
                    personalcard.pass.length <8?
                    <p>Password must at least 8 Character</p>:
                    null
                }
                <label htmlFor="confirmpass"> Confirm Password: </label>
                <input type="password"  name="confirmpass" onChange={onChangehandler}/>
                {
                    personalcard.confirmpass !== personalcard.pass?
                    <p>Passowrd must at matching confirm password</p>:
                    null
                }
                <button>Register</button>
            </form>
            {/* <h2>First Name: {personalcard.fname}</h2>
            <h2>Last Name : {personalcard.lname}</h2>
            <h2>Email : {personalcard.email}</h2>
            <h2>Password : {personalcard.pass}</h2>
            <h2>Confirm Password :{personalcard.confirmpass}</h2> */}
        </div>
        {
            memberlist.map((personalcard) => (
                <div>
                <p>First Name:{personalcard.fname}</p>
                <p>Last Name:{personalcard.lname}</p>
                <p>Email:{personalcard.email}</p>
                <p>Password:{personalcard.pass}</p>
                </div>
                ))
        }
        </>
    )}

export default Personalaplication;