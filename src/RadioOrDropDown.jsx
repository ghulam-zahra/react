import { useState } from "react"

function RadioOrDropDown(){
    const[gender,setGender]=useState("male")
    const[city,setCity]=useState("faisalabad")
    return(
        <div>
            <h1>Radio and DropDown</h1>
            <h2>Select Gender</h2>
            <input type="radio" onChange={(event)=>setGender(event.target.value)} name="gender" checked={gender=='male'} id="male" value="male" />
                <label htmlFor="male">Male</label>
                <br />
                 <input type="radio" onChange={(event)=>setGender(event.target.value)} name="gender" checked= {gender=='female'} id="female" value="female" />
                <label htmlFor="female">Female</label>
                <br />
                <h3>Selected Gender: {gender}</h3>

                <br /><br />
                <h2>Select City</h2>
                <select defaultValue={"faisalabad"} onChange={(event)=>setCity(event.target.value)}>
                    <option value="karachi">Karachi</option>
                    <option value="lahore">Lahore</option>
                    <option value="faisalabad">Faisalabad</option>
                    <option value="peshawar">Peshawar</option>
                   
                </select>
                 <h3>Selected City: {city}</h3>
        </div>
    )
}
export default RadioOrDropDown