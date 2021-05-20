import React from 'react';
import NavBar from './components/Navbar/NavBar';
import Banner from './components/Banner/Banner';
import RowPost from './components/RowPost/RowPost';
import './App.css';

export default function App() {
    return (
        <div>
            <NavBar />
            <Banner />
            <RowPost />
        </div>
    )
}
