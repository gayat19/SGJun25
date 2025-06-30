
import { useDispatch, useSelector } from "react-redux";
import { deleteemployee } from "../redux/employeeSlice";

export default function Employees(){
    const emps = useSelector((data:any)=>data.employee) as []
    const dispatch = useDispatch();
    const deleteEmp=(eid:any)=>{
        dispatch(deleteemployee(eid));
    }
    return (<>
    {
        emps?emps.map((emp:any)=><div key={emp.id}>{emp.id}--{emp.name} <button onClick={()=>deleteEmp(emp.id)}>Delete</button></div>):<p> NO employees</p>
    }
    </>)
}