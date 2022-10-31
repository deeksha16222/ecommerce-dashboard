import React , {useState} from 'react'
import { useNavigate } from 'react-router-dom';


export default function Register(){
const[name, setName] = useState("");
const[password, setPassword] = useState("");
const[email, setEmail] = useState("");
const navigate = useNavigate();

async function signUp(){
    let item = {name,password,email}
    console.warn(name,password,email)
    let result =  await fetch("http://localhost:8000/api/register",{
        method : 'POST',
        headers : {
            "Content-type" : "application/json",
            "Accept" : "application/json"

        },
        body: JSON.stringify(item)
    })
    result = await result.json();
    localStorage.setItem("user-info",JSON.stringify(result));
    navigate.push("/add");
}



 return(
<div className="col-sm6 offset-sm-3">
<h1>Sign Up</h1> <br/>
<input type="text" className="form-control" placeholder="name" onChange={(e)=>setName(e.target.value)}/>
<br/>
<input type="email" className="form-control" placeholder='email' onChange={(e)=>setEmail(e.target.value)}/>
<br/>
<input type="password" className="form-control" placeholder='password' onChange={(e)=>setPassword(e.target.value)}/>
<br/>
<button className="btn btn-primary" onClick={signUp}> Sign Up</button>
</div>
 )
}