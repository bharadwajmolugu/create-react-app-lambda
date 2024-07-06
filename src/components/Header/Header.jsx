import React from 'react';
import {Link} from 'react-router-dom';

const Header=()=>{
    return(
        <div className='d-flex bg-black text-white justify-content-around'>
            <div>
                <h3 className='mt-2'><Link className='text-decoration-none' to='/'>E-comm Website</Link></h3>
            </div>
            <div >
                <ul className='d-flex list-unstyled gap-3 mt-3'>
                    <li><Link className='text-decoration-none' to='/products'>Products</Link></li>
                    <li><Link className='text-decoration-none' to='/login'>Login</Link></li>
                    <li><Link className='text-decoration-none' to='/signup'>SignUp</Link></li>
                </ul>
            </div>
        </div>
    )
}

export default Header;