import { useState } from "react"

function ControlledComp (){
    const[name,setName]=useState('')
    const[password,setPassword]=useState('')
    const[email,setEmail]=useState('')
    return(
        <div>
            <h1>Controlled Component</h1>
            <form action="" method="get">
                <input type="text" onChange={(event)=>setName(event.target.value)} placeholder="Enter Name" />
                <br /><br />
                <input type="password" onChange={(event)=>setPassword(event.target.value)} name="" id="" placeholder="Enter Password" />
                <br /><br />
                <input type="email" onChange={(event)=>setEmail(event.target.value)} name="" id="" placeholder="Enter Email" />
                <br /><br />
                <button type="submit">Submit</button> <br />
                <button type="reset" onClick={()=>{setEmail(''),setName(''),setPassword('')}}>Reset</button>
                <h3>{name}</h3>
                <h3>{password}</h3>
                <h3>{email}</h3>
            </form>

        </div>
    )
}
export default ControlledComp