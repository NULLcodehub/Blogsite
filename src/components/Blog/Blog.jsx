import React from 'react';
import blogImage from '../../assets/static.jpg'
import BlogDatas from "../../../data.json"
const Blog = () => {

    console.log(BlogDatas)

    return (
        <>  

            <section >
                {
                        BlogDatas.map((BlogData,index)=>
                    (
                        <>
                        
                            <section className='flex  flex-col md:flex-row p-5 justify-center  '>
                                <div className='w-6/6 md:w-1/6 '>
                                    <img src={blogImage} alt="" className='w-fit h-fit' />
                                </div>
                            
                                <div className='px-6 md:w-3/6' key={index}>
                                    <h1 className='text-xl md:text-2xl text-gray-800 uppercase'>{BlogData.title}</h1>
                                    <p className=' py-3 text-gray-600'> published: 25-05-2024</p>
                                    <p className='py-2 text-gray-600'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae eaque nesciunt dolor! Consequatur, explicabo non porro officiis quasi rerum illo!</p>
                                </div>
                                
                            </section>
                            
                        </> 
                    ))
                }
                    
                
                
            </section>
        
        
        </>
    );
};

export default Blog;