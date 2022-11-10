import React from 'react'

const ContactCard = (props) => {
  return (
    <React.Fragment>
        {
          Object.keys(props.selectedContact).length>0 && 
          <div className='card shadow-lg sticky-top'>
            <h4>{props.selectedContact.name}</h4>
          <div className='card-body bg-warning'>
            <h6>id no:{props.selectedContact.id}</h6>
            <h6>status:{props.selectedContact.status}</h6>
            <h6>gender:{props.selectedContact.gender}</h6>
          </div>

        </div>
        }
        
    </React.Fragment>
  )
}

export default ContactCard