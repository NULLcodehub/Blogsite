import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <>
            <nav>
                <ul className='flex gap-3'>
                    <Link to='/login'><li>Log in</li></Link>
                    <Link to='/signup'><li>Sign up</li></Link>
                </ul>
            </nav>
        
        
        </>
    );
};

export default Navbar;