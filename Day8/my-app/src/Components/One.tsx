import React from "react"

const One =()=>{
    console.log("One loaded")
    return(<><h1>Component child 1</h1></>)
}

export default React.memo(One)