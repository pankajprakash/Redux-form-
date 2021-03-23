import {useDispatch} from 'react-redux'
import React, {useState} from 'react';
import { submitAction } from '../redux/actions';

// import {submitAction}
const Form = ({history}) => {
    const show = () => {
        history.push("/home")
    }
    const dispatch = useDispatch()   
    const [initial, setIn]=useState({
        firstname:'',
        lastname:'',
        email:'',
        password:''

    })

    const change=(e)=>{
        setIn({...initial,[e.target.name]:e.target.value})
        console.log(e.target.value)
        

    }

    
    return (
        <div className="form-data">
         
         
                <input type="text" placeholder="First Name" onChange={change} value={initial.firstname}  name="firstname"/>
                <input type="text" placeholder="Last name"onChange={change} value={initial.lastname} name="lastname"/>
                <input type="text" placeholder="Email"onChange={change} value={initial.email} name="email"/>
                <input type="password" placeholder="enter password"onChange={change} value={initial.password} name="password"/>
                <button onClick={()=>dispatch(submitAction({fname:initial.firstname,lName:initial.lastname,email:initial.email,pass:initial.password}))}>Submit</button>
               <button onClick={show}>SHow</button>
            
        </div>
    )
}

export default Form;
