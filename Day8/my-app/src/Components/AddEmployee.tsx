import { useState } from "react"
import { useDispatch } from "react-redux"
import { addemployee } from "../redux/employeeSlice";

export default function AddEMployee(){

    const [employee,setEmployee] = useState({})
    const dispatch =useDispatch();
    return(<>
    <h1>Employee - Add</h1>
    <input type="number" value={(employee as any).id} onChange={(e:any)=>setEmployee((emp:any)=>({...emp,id:e.target.value}))}/>
     <input type="text" value={(employee as any).name} onChange={(e:any)=>setEmployee((emp:any)=>({...emp,name:e.target.value}))}/>
     <button onClick={()=>{dispatch(addemployee(employee as any))}}>Add Employee</button>
    </>)
}