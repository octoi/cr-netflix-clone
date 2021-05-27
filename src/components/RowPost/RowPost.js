import { useEffect, useState } from 'react';
import { imgUrl } from '../../constants/constants';
import axios from '../../axios';
import './RowPost.css';

export default function RowPost({ title, small, endpoint }) {

    const [movies, setMovies] = useState([]);

    useEffect(() => {
        axios.get(endpoint).then(res => {
            setMovies(res.data.results);
        });
    }, [])

    return (
        <div className="row">
            <h2>{title}</h2>
            <div className="posters">
                {movies.map((movie, id) => (
                    <img src={imgUrl + movie?.backdrop_path} key={id} alt="poster" className={small ? "small-poster" : "poster"} />
                ))}
            </div>
        </div>
    )
}
