import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css'

const Login = () => {
    return (
        <>
            <section>
                <div className='flex  justify-center mt-14 '>
                    <div className=' md:w-4/12  p-7 md:shadow-md shadow-gray-100'>
                        <h1 className='text-center text-3xl my-3'><Link to='/'>Code blog</Link></h1>

                        <div className='  '>
                            <form action="">
                                <input type="text" className=' w-full h-11 border-b-2 p-2 border-gray-400 my-3' placeholder='yourmail@email.com'  />
                                <input type="password" className=' w-full h-11 border-b-2 border-gray-400 p-2 my-3' placeholder='password'  />
                                <button className='login-btn'>Log in</button>
                            </form>
                        </div>
                    </div>
                </div>
                
            </section>
        
        </>
    );
};

export default Login;