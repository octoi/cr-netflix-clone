import { useEffect, useState } from 'react';
import { imgUrl, apiKey } from '../../constants/constants';
import axios from '../../axios';
import Youtube from 'react-youtube';
import './RowPost.css';

export default function RowPost({ title, small, endpoint }) {

    const [movies, setMovies] = useState([]);
    const [urlId, setUrlId] = useState('');

    useEffect(() => {
        axios.get(endpoint).then(res => {
            setMovies(res.data.results);
        });
    }, [endpoint]);

    const opts = {
        height: '390',
        width: '100%',
        playerVars: {
            autoplay: 1,
        }
    }

    const handleMovie = (id) => {
        axios.get(`/movie/${id}/videos?api_key=${apiKey}&language=en-US`).then(res => {
            if (res.data.results.length === 0) throw new Error()
            setUrlId(res.data.results[0])
        }).catch(() => {
            alert("Trailer not available")
        })
    }

    return (
        <div className="row">
            <h2>{title}</h2>
            <div className="posters">
                {movies.map(movie => (
                    <img onClick={() => handleMovie(movie?.id)} src={imgUrl + movie?.backdrop_path} key={movie?.id} alt="poster" className={small ? "small-poster" : "poster"} />
                ))}
            </div>
            {urlId && <Youtube opts={opts} videoId={urlId?.key} />}
        </div>
    )
}
