import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import './Home.css';
function Home() {
    return (
        <div className='bg'>
            Home Page
            <BrowserRouter>
                <Navbar />
            </BrowserRouter>
        </div>
    )
}

export default Home
