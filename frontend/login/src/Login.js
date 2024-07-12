import axios from 'axios'
import React, { useState } from 'react'

const Login = () => {
    const[info,setInfo]=useState({
        id:'',
        email:'',
        password:''
    })
    const{id,email,password}=info
    const changeHandler =(e)=>{
        setInfo({...info,[e.target.name]:e.target.value})
    }
    const submitHandler=(e)=>{
        e.preventDefault();
        //console.log(info)
        setInfo({id:'',email:'',password:''})
        
        axios.post('http://localhost:7070/data',info)
        
          .then(dt=>console.log(dt))
          
          .catch(err=>console.log(err))
        

        
    }
  return (
    <div>
      <h2 style={{textAlign:'center'}}> Reactjs connected with My Sql</h2>
      <form onSubmit={submitHandler} style={{marginLeft:'auto',marginRight:'auto',width:"30%"}}>
        <div>
          <label>id:</label><br/>
          <input type='text' name='id' value={id} onChange={changeHandler}/>
        </div>
        <div>
          <label>email:</label> <br/>
          <input type='text' name='email' value={email} onChange={changeHandler}/> 
        </div>
        <div>
          <label>pwd:</label> <br/>
          <input type='password' name='password' value={password} onChange={changeHandler}/> 
        </div>
        <input type='submit' value='send'/>
      </form>
    </div>
  )
}

export default Login
