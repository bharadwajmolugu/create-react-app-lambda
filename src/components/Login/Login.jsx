import React from 'react';
const Login=()=>{
return (
    <div>
        <form className='text-center'>
            <input className='form-control w-50 m-auto mt-2' type='text'  placeholder='Enter email...'/>
            <input className='form-control w-50 m-auto mt-2' type='password' placeholder='Enter Password'/>
            <button className='btn btn-primary mt-2 text-center'>Login</button>
        </form>
    </div>
)
}

export default Login;