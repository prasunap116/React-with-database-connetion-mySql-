import React ,{useEffect,useState} from 'react';
import axios from 'axios';
const Getdata=()=>{
    const[details,setDetails]=useState([])

    useEffect(()=>{
        axios.get('http://localhost:7070/')
        
        .then(res=>setDetails(res.data))
    })
    return(
        <div style={{marginLeft:'auto',marginRight:'auto',width:"30%",paddingTop:"30px"}}>
            <h3>Logged in Info</h3>
            <table style={{'border':'1px solid '}}>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Email</th>
                        <th>Password</th>
                    </tr>
                </thead>
                <tbody>
                    <tr style={{'border':'1px solid '}}>
                        <td>
                        {
                            details.map((d,i)=>{
                                return(
                                    <div key={i} style={{'border':'1px solid '}}>{d.id} </div>
                                    
                                )
                            })
                        }
                        </td>
                        <td>
                        {
                            details.map((d,i)=>{
                                return(
                                    <div key={i} style={{'border':'1px solid '}}>{d.email} </div>
                                    
                                )
                            })
                        }
                        </td>
                        <td>
                        {
                            details.map((d,i)=>{
                                return(
                                    <div key={i} style={{'border':'1px solid '}}>{d.password} </div>
                                    
                                )
                            })
                        }
                        </td>
                    </tr>
                </tbody>
            </table>
         
        
        </div>
    )
}
export default Getdata