import React,{useState} from 'react'
import FunCompone from './FunCompone'
import FunComptwo from './FunComptwo'
import '../App.css'



const ToggleFunc = () => {
  const [funcone, setfuncone] = useState(false);
  const [functwo, setfuncptwo] = useState(false);


  return (
    <div>
      <button onClick={() => setfuncone(!funcone)}>First Functional Component</button>
      <button onClick={() => setfuncptwo(!functwo)}>Second Functional Component</button>


      <center><div className="container">
        {funcone ? <FunCompone /> : null}
        {functwo ? <FunComptwo /> : null}
      </div></center>

    </div>
  )
}

export default ToggleFunc