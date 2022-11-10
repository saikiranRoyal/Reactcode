import React, { Fragment } from 'react';
import './App.css';
import ContactApp from './components/ContactApp';





const App = () => {
  return (
    <React.Fragment>
    <nav className='navbar navbar-dark bg-dark navbar-expand-sm'>
      <a href="/" className='navbar-brand'>React component contacts App</a>
    </nav>
    <ContactApp />
   </React.Fragment>
 
  )
}

export default App