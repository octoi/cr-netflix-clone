import { useEffect, useState } from 'react';
import { apiKey, imgUrl } from '../../constants/constants';
import axios from '../../axios';
import './Banner.css'

export default function Banner() {

    const [movie, setMovie] = useState();

    useEffect(() => {
        axios.get(`/trending/all/week?api_key=${apiKey}&language=en-US`).then(res => {
            const randomNumber = Math.floor((Math.random() * 11) + 1) - 1;
            setMovie(res.data.results[randomNumber]);
        });
    }, []);

    return (
        <div className="banner" style={{ backgroundImage: `url(${movie ? imgUrl + movie.backdrop_path : ""})` }}>
            <div className="content">
                <h1 className="title">{movie?.title}</h1>
                <div className="banner-buttons">
                    <button className="button">Playing</button>
                    <button className="button">My list</button>
                </div>
                <h1 className="description">{movie?.overview}</h1>
            </div>
            <div className="fade-bottom"></div>
        </div>
    )
}
