import './First.css';
import image from '../../assets/image.webp';
import { useState } from 'react';
const First=()=>{
    //let name = "Ramu";
    const [name,setName] = useState<string>("Ramu")
    const handleClick =()=>{
        setName("Somu");
        alert('hello');
    }
 return(<>
    <h1>Hello - {name} </h1>
    <img src={image} height="200" width="200"/>
    <button className="button" onClick={handleClick}>Click Here</button>
 </>);
}

export default First;