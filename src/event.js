import { useState } from "react";

function Event(){
    let [counter,setCounter]=useState(1);

    const increment=()=>{
            setCounter(counter+1);
    }
    const decrement=()=>{
            setCounter(counter-1);
    }
return(
    <div>
        <h1>This is React App</h1>

        <div>
        <button onClick={increment}>Add to cart</button><br/>
        <span>{counter}</span><br/>
        <button onClick={decrement}>Remove to cart</button>
        </div>
        
    </div>
)


//     const submit= (name)=>{
//         alert("Welcome to "+(name))
//         alert("Start "+(name))
//     }
// return(
//     <div>
//     <h2>This is react App</h2>
//     <button onClick={()=>{
//         submit("React.js")
//     }}>Start</button>
//     </div>
// )
}
export default Event;
