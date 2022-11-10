import React,{useState} from 'react';
import ContactServices from './services/ContactServices';


const ContactList = (props) => {
  let [state, setState] = useState({
    contacts:ContactServices.getContactList()
  });
  let {contacts} = state; 
  let contactclick =(contact)=>{
      props.sendContact(contact);
  };
  return (
    <React.Fragment>
        <table className='table table-hover table-striped text-center'>
            <thead className='bg-dark text-white'>
              <tr>
                  <th>S.No</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Gender</th>
                  <th>Status</th>

              </tr>
            </thead>
            <tbody>
              {
                contacts.length >0 && contacts.map(contact=>{
                   return (
                    <tr key={contact.id} onClick={() =>contactclick(contact)}>
                      <td>{contact.id}</td>
                      <td>{contact.name}</td>
                      <td>{contact.email}</td>
                      <td>{contact.gender}</td>
                      <td>{contact.status}</td>
                    </tr>
                   )
                })
              }
            </tbody>
        </table>
    </React.Fragment>
  )
}

export default ContactList
