import React, { Fragment } from 'react';
import './App.css'
import Registerform from './components/Registerform';



const App = () => {
  return (
    <React.Fragment>
    <nav className='navbar navbar-dark bg-dark navbar-expand-sm'>
      <a href="/" className='navbar-brand'>React with Event handlers</a>
    </nav>
    {/* <User /> */}
    <Registerform />

    </React.Fragment>
 
  )
}

export default App