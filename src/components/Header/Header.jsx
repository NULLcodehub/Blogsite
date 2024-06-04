import React from 'react';
import Navbar from '../Navbar/Navbar';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <>
            <main className='flex justify-around  py-5'>
                <section>
                    <div><Link to="/">CodeBlog</Link></div>
                </section>
                <section>
                    <div>
                        <Navbar/>
                    </div>
                </section>
            </main>
        
        
        </>
    );
};

export default Header;