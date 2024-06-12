import React, { useState } from 'react';
import { Link, Navigate, json } from 'react-router-dom';
import './Login.css'

const Login = () => {

    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const [redirect,setRedirect]=useState(false)

    const handleLogin=async (e)=>{
        e.preventDefault()

       const responce= await fetch('http://localhost:4000/login',
            {
                method:'POST',
                body:JSON.stringify({email,password}),
                headers:{'Content-Type': 'application/json'},
                credentials: 'include'

            }
            
        )
        if (responce.ok){
            setRedirect(true)
        }else{
            alert('wrong credentials')
        }


    }

    


    if (redirect){
        return <Navigate to={'/'} />
    }



    return (
        <>
            <section>
                <div className='flex  justify-center mt-14 '>
                    <div className=' md:w-4/12  p-7 md:shadow-md shadow-gray-100'>
                        <h1 className='text-center text-3xl my-3'><Link to='/'>Code blog</Link></h1>

                        <div className='  '>
                            <form action="" onSubmit={handleLogin}>
                                <input type="text" className=' w-full h-11 border-b-2 p-2 border-gray-400 my-3'
                                    placeholder='yourmail@email.com'
                                    value={email}
                                    onChange={(e)=>setEmail(e.target.value)}
                                 
                                 />
                                <input type="password" className=' w-full h-11 border-b-2 border-gray-400 p-2 my-3'
                                     placeholder='password'
                                     value={password}
                                    onChange={(e)=>setPassword(e.target.value)}
                                     
                                     
                                     />
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