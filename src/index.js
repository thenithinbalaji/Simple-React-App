import React from 'react';
import ReactDOM from 'react-dom';
import logo from './logo512.png'
import Switcher from "./Switcher";

function Navbar() {
    return (
        <ul className='flex justify-center gap-8 pt-5 font-[Montserrat]'>
            <li><a href='https://github.com/facebook/react/' target="_blank" className='hover:text-cyan-500'>GitHub</a></li>
            <li><a href='https://www.reddit.com/r/reactjs/' target="_blank" className='hover:text-cyan-500'>Reddit</a></li>
            <li><a href='https://en.wikipedia.org/wiki/React_(JavaScript_library)' target="_blank" className='hover:text-cyan-500'>Wiki</a></li>
        </ul>
    )
}

function Footer() {
    return (
        <p className='text-center w-full font-[Montserrat] mt-16 mb-5'>All Rights Reserved | <a href="https://github.com/thenithinbalaji" target="_blank" className='text-cyan-500'>TheNithinBalaji</a></p>
    )
}

function MainBody() {
    return (
        <div className='sm:flex sm:flex-row justify-center mt-20 gap-10'>
            <div className='flex flex-row justify-center pb-5 sm:pb-0'>
                <img src={logo} alt="React Logo" className='drop-shadow-md hover:animate-[spin_0.2s_linear_infinite] w-3/4 sm:w-full' />
            </div>

            <div className='flex flex-col justify-center gap-10 '>

                <div className='flex flex-row justify-center'>
                    <p className='text-4xl font-[Montserrat] drop-shadow-md w-3/4 sm:w-full text-md sm:text-5xl lg:text-5xl xl:text-5xl'>Hello <br />Welcome To React!</p>
                </div>

                <div className='text-center px-5 py-3 text-sm md:text-lg'>
                    <a href="https://reactjs.org/tutorial/tutorial.html" target="_blank" className='px-5 py-3 bg-cyan-500 w-40 shadow-xl text-white rounded-3xl font-bold'>Start Learning</a>
                </div>

            </div>

        </div >
    )
}


const element =
    <div className='overflow-hidden bg-white'>
        <Navbar />
        <MainBody />
        <Footer />
    </div>;


ReactDOM.render(element, document.getElementById('root'));
