import React,{useState} from 'react'

const Registerform=()=>{
    let [state,setState] =useState({
        user:{
            username:"",
            email:"",
            password:"",
            designation:"",
            bio:"",
            terms:false
        }
    })
    let {user}=state
    let updateevent=(event)=>{
        setState((state)=>({
            user:{
                ...state.user,
                [event.target.name]:event.target.value
            }
        }));
    };
    let updatecheck=(event)=>{
        setState((state)=>({
            user:{
                ...state.user,
                [event.target.name]:event.target.checked
            }
        }));
    };
    let submitform =(event)=>{
        event.preventDefault()
        console.log(user)
    }
    
  return (
    <React.Fragment>
        {/* <pre>{JSON.stringify(state.user)}</pre> */}
       <div className='container mt-3'>
          <div className='row'>
              <div className='col-md-3'>
                  <div className='card'>
                    <div className='card-header bg-warning text-white text-center'>
                         <p className='h4'>Registration Form</p>
                    </div>
                    <div className='card-body'>
                        <form onSubmit={submitform}>
                           <div className='mt-3'>
                           
                               <input
                                 name="username"
                                 value={user.username}
                                 onChange={updateevent}
                               type="text" className='form-control' placeholder="username"/>
                           </div>
                           <div className='mt-3'>
                               <input 
                               name="email"
                               value={user.email}
                               onChange={updateevent}
                               type="email" className='form-control' placeholder="email"/>
                           </div>
                          <div className='mt-3'>
                               <input 
                               name="password"
                               value={user.password}
                               onChange={updateevent}
                               type="password" className='form-control' placeholder="password"/>
                           </div>
                           <div className='mt-3'>
                            <select className='form-control'
                            name="designation"
                            value={user.designation}
                            onChange={updateevent}>
                            <option value="">Select Designation</option>
                            <option value="software engineer">software engineer</option>
                            <option value="Sr.software engineer">Sr.software engineer</option>
                            <option value="tech-expert">tech-expert</option>
                            <option value="Ui developer">Ui developer</option>
                            </select>
                           </div>
                           <div className='mt-3'>
                               <textarea name="bio"
                                value={user.bio}
                                onChange={updateevent}
                             rows={5} className="form-control" placeholder='bio'/>
                           </div>
                           <div className='mt-3'>
                               <input
                                name="terms"
                                
                                onChange={updatecheck}
                               type="checkbox" className='form-check-input' /> Accept terms
                           </div>
                           <div className='mt-3'>
                               <input type="submit" className='btn btn-warning btn-sm' value='Register'/> 
                           </div>
                           <div className='mt-3'>
                               <button className='btn btn-success btn-sm'>cancel</button>
                           </div>

                        </form>
                    </div>
                  </div>
              </div>
          </div>

       </div>
    </React.Fragment>
  )
}

export default Registerform