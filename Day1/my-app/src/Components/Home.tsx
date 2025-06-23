import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function Home(){
    const navigate = useNavigate();
    return (<>
    <h1>Welcome</h1>
    <Button onClick={()=>navigate('menu')}>Proceed</Button>
    </>)
}