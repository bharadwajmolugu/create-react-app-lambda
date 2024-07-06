import React from 'react';
const SignUp=()=>{
    return (
        <div className=' text-center'>
            <form >
                <input className='form-control w-50 m-auto mt-2' type='text' placeholder='Enter your Full Name'/>
                <input className='form-control w-50 m-auto mt-2' type='email' placeholder='Enter your E-mail'/>
                <input className='form-control w-50 m-auto mt-2' type='number' placeholder='Enter your Phone Number'/>
                <input className='form-control w-50 m-auto mt-2' type='password' placeholder='Enter your Password'/>
            </form>
            <button className='btn m-auto btn-primary mt-2' >SignUp</button>

        </div>
    )

}

export default SignUp;