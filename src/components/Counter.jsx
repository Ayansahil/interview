import React, { useEffect, useState } from "react";



function Counter() {
    const [count, setCount] = useState(0);

// 🔥 Mount
useEffect(()=>{
console.log("Component Mounted");
},[])

 // 🔥 Update
useEffect(()=>{
    console.log("Component Updated");
},[count])

// 🔥Unmounted
useEffect(()=>{
    return()=>{
 console.log("Component Unmount");
} 
},[])

  return (
    <div>
      <h3>Counter {count}</h3>
      <button onClick={() => {setCount(count + 1)}}>
        Increase
      </button>
      <button onClick={()=>{setCount(count - 1)}}> 
        Decrease
        </button>
    </div>
  );
}

export default Counter;
