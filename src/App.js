import React from 'react';
import NavBar from './components/Navbar/NavBar';
import Banner from './components/Banner/Banner';
import RowPost from './components/RowPost/RowPost';
import * as url from './constants/urls';
import './App.css';

export default function App() {
    return (
        <div>
            <NavBar />
            <Banner />
            <RowPost title="Netflix Originals" endpoint={url.originals} />
            <RowPost title="Action" small endpoint={url.actions} />
            <RowPost title="Comedy" small endpoint={url.comedy} />
            <RowPost title="Action" small endpoint={url.horror} />
            <RowPost title="Romance" small endpoint={url.romance} />
            <RowPost title="Documentaries" small endpoint={url.documentaries} />
        </div>
    )
}
