import React,{useState} from 'react';
import ContactList from './ContactList';
import ContactCard from './ContactCard';

const ContactApp = () => {
    let [state,setState] = useState({
        selectedContact: {}
    })
    let {selectedContact} = state;

    let receiveContact=(contact)=>{
        setState((state)=>({
          selectedContact:contact
        }));
    };
  return (
    <React.Fragment>
        
        <div className='container mt-3'>
            <div className='row'>
                <div className='col'>
                    <p className='h4 text-success'>Contact App</p>
                    <p>Access and edit your contacts from personal, business, and other accounts with the Contacts app. 
                        Features: • Add contacts manually. Or sync them from iCloud, Gmail, Exchange, or your Mac or PC. •</p>
                </div>
            </div>
        </div>
        <div className='container mt-3'>
            <div className='row'>
                <div className='col-md-9'>
                    <ContactList sendContact={receiveContact} />
                </div>
                <div  className='col-md-3'>
                    < ContactCard selectedContact={selectedContact}/>
                </div>
            </div>
        </div>
    </React.Fragment>
  )
}

export default ContactApp