import { useState } from 'react';
import './App.css';
import { Child } from './assets/components/Child'
import { FourthComponent } from './assets/components/FourthComponent';


function App () {

  const [name, setName] = useState("Fernando Mendez León");

  return (
    <div className='App'>
      <header className='App-header'>
        <hr className='white-hr'/>
        <FourthComponent />
      <hr className='white-hr'/> 
      <Child 
        name={name}
        setName={setName} 
      />
      <hr className='white-hr'/>            
      </header>
    </div>
  )
}

export default App
