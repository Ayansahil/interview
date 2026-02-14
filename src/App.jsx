import React,{useState } from "react";
import  User  from "./components/User";
import Counter  from "./components/Counter";


function App() {

  const users = [
    {
      id: 1,
      name: "Aman Sharma",
      age: 22,
      email: "aman.sharma@example.com",
    },
    {
      id: 2,
      name: "Priya Verma",
      age: 24,
      email: "priya.verma@example.com",
    },
    {
      id: 3,
      name: "Rohan Mehta",
      age: 21,
      email: "rohan.mehta@example.com",
    },
    {
      id: 4,
      name: "Sneha Kapoor",
      age: 23,
      email: "sneha.kapoor@example.com",
    },
  ];
  const [show, setShow] = useState(true);
  
  return (
    <div>
      <h1>React reusable component</h1>
      {users.map((user) => (
        <User
          key={user.id}
          name={user.name}
          age={user.age}
          email={user.email}
        />
      ))}

     {show && <Counter/>} 

      <button onClick={() => setShow(!show)}>
        Toggle Counter
      </button>
    </div>
  );
}

export default App;
