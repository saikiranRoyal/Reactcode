import React,{useState} from 'react';

const User = () => {
   let [state, setState] = useState({
      user:{username:"",
            password:""
}
})
  return(
    
    <React.Fragment>
       {/* <pre>{JSON.stringify(state.user)}</pre> */}
       <div className='container mt-3'>
          <div className='row'>
              <div className='col-md-3'>
                  <div className='card'>
                    <div className='card-header bg-success text-white text-center'>
                    <p className='h4'>User Login</p>
                    </div>
                    <div className='card-body'>
                        <form onSubmit={submitForm}>
                            <div className='mt-3'>
                               <input
                               name="username"
                               value={user.name}
                               
                               type="text" className="form-control" placeholder="user name" />
                            </div>
                            <div className='mt-3'>
                                 
                               <input 
                                name = "password"
                               value={user.password}
                               onChange={changeInput} 
                               type="password" className="form-control" placeholder="password" />
                            </div>
                            <div className='mt-3'>
                                
                               <input type="submit" className="btn btn-success" value="Login" />
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

export default User