// import React, { useEffect, useState } from "react";
// import useCounter from "../useCounter";

// function Counter() {
//   const [count, setCount] = useState(0);
//   const {count, increment, decrement } = useCounter(10);
//   // 🔥 Mount
//   useEffect(()=>{
//   console.log("Component Mounted");
//   },[])

//    // 🔥 Update
//   useEffect(()=>{
//       console.log("Component Updated");
//   },[count])

//   // 🔥Unmounted
//   useEffect(()=>{
//       return()=>{
//    console.log("Component Unmount");
//   }
//   },[])

//   return (
//     <div>

//       {/* <h3>Counter {count}</h3>
//       <button
//         onClick={() => {
//           setCount(count + 1);
//         }}
//       >
//         Increase
//       </button>
//       <button
//         onClick={() => {
//           setCount(count - 1);
//         }}
//       >
//         Decrease
//       </button> */}

//       {/* //Custom Hook 

//       <h3>Counter {count}</h3>
//       <button onClick={increment}>+</button>
//       <button onClick={decrement}>-</button> */}
//     </div>
//   );
// }

// export default Counter;
