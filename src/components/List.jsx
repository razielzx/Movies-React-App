import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';
import swal from '@sweetalert/with-react';

const List = () => {
  const navigate = useNavigate()

  const [moviesLIst, setMoviesLIst] = useState([])

  useEffect(() => {
    const endPoint = "https://api.themoviedb.org/3/discover/movie?api_key=2fd337d6d466b0f2073f359c4122e7ea&language=en-US&page=1"
    axios.get(endPoint)
      .then(res => setMoviesLIst(res.data.results))
      .catch(err => swal(<h2>Seems like we're having issues, please try later</h2>));
  }, []);

  //console.log(moviesLIst)

  //If there is not token, redirect to login
  useEffect(() => {
    const token = localStorage.getItem("token")
    if (token === null) {
      navigate("/")
    };
    //console.log(token)
  }, []);


  return (
    <div className='row'>
      {moviesLIst.map((movie, idx) => {
        return (
          <div className="col-sm-3 pb-3" key={idx}>
            <div className="card">
              <img className="card-img-top" src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt="Card image cap"/>
              <div className="card-body">
                <h5 className="card-title">{movie.title}</h5>
                <p className="card-text">{movie.overview}</p>
                <Link to={`/detail?movieID=${movie.id}`} className="btn btn-primary">Go to Movie</Link>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  );
};

export default List;