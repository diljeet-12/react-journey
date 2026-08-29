// import Greeting from "./Components/greet";
// import Introduction from "./Components/introduction";
// import { useState } from "react";
import User from "./Components/user";

function App() {
  // const [count,setCount] = useState(0)
  return (
    <div>
      {/* <Greeting />
      <Introduction /> */}
      {/* <h1>Count: {count}</h1>
      <button onClick={()=>setCount(count+1)}>Increase</button> */}
      <User name="Diljeet" role="MERN Developer" />
      <User name="Rahul" role="Frontend Developer" />
    </div>
  );
}

export default App;