import React from 'react';
import Navbar from '../Navbar/Navbar';

const Header = () => {
    return (
        <>
            <main className='flex justify-around  py-5'>
                <section>
                    <div>CodeBlog</div>
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