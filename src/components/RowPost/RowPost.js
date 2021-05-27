import { useEffect, useState } from 'react';
import { apiKey, imgUrl } from '../../constants/constants';
import axios from '../../axios';
import './RowPost.css';

export default function RowPost() {

    const [movies, setMovies] = useState([]);

    useEffect(() => {
        axios.get(`/discover/tv?api_key=${apiKey}&with_networks=213`).then(res => {
            setMovies(res.data.results);
        });
    }, [])

    return (
        <div className="row">
            <h2>Netflix Originals</h2>
            <div className="posters">
                {movies.map((movie, id) => (
                    <img src={imgUrl + movie.backdrop_path} key={id} alt="poster" className="poster" />
                ))}
            </div>
        </div>
    )
}
