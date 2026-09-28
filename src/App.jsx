import { useState } from "react"; 


const App = () => { 
  const [isvisible, setVisible] = useState(false); 
  const toggle = () => { 
    setVisible(!isvisible); 
  }; 
  return ( 
  <> 
    <p>Button is {isvisible ? "On" : "Off"}</p> 
    <button onClick={toggle}> Turn {isvisible ? "Off" : "On"} </button> 
  </> 
);

}; 
export default App;