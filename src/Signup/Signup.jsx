import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Signup.css'
const Signup = () => {
    const [fullname,setFullname]=useState('');
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')

    async function handleRegister(e){
        e.preventDefault()
        await fetch('http://localhost:4000/register',{
            method:'POST',
            body:JSON.stringify({fullname,email,password}),
            headers:{'Content-Type':'application/json'}
           


        })

        setEmail('')
        setFullname('')
        setPassword('')
    }



    return (
        <>
             <section>
                <div className='flex  justify-center mt-14 '>
                    <div className=' md:w-4/12  p-7 md:shadow-md shadow-gray-100'>
                        <h1 className='text-center text-3xl my-3'><Link to='/'>Code blog</Link></h1>

                        <div className='  '>
                            <form action="" onSubmit={handleRegister}>
                                <input type="text" className=' w-full h-11 border-b-2 border-gray-400 p-2 my-3'
                                    placeholder='your name' 
                                    value={fullname}
                                    onChange={(e)=>setFullname(e.target.value) }
                                    
                                />
                                <input type="text" className=' w-full h-11 border-b-2 p-2 border-gray-400 my-3'
                                    placeholder='yourmail@email.com'
                                    value={email}
                                    onChange={(e)=> setEmail(e.target.value)}

                                 
                                 />
                                <input type="password" className=' w-full h-11 border-b-2 border-gray-400 p-2 my-3' 
                                    placeholder='password'
                                    value={password}
                                    onChange={(e)=> setPassword(e.target.value)}

                                
                                />
                                <button className='signup-btn'>Sign up</button>
                                <p className='py-3 text-center text-gray-600 hover:text-indigo-500'><Link to='/login'>Already have an account? Log in</Link></p>
                            </form>
                        </div>
                    </div>
                </div>
                
            </section>
        
        </>
    );
};

export default Signup;