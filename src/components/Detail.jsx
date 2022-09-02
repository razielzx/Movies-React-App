//React
import React, { useEffect, useState } from 'react';

//Assets
import noImage from '../assets/no-image.png'

//Libraries
import axios from 'axios';
import swal from '@sweetalert/with-react';
import { useNavigate } from 'react-router';

const Detail = () => {

  const navigate = useNavigate();

  const [movieDetail, SetMovieDetail] = useState(null);

  //Redirection in case of not having token
  useEffect(() => {
    const token = localStorage.getItem("token")
    if (token === null) {
      navigate("/")
    };
    //console.log(token)
  }, []);


  //Get Movie ID
  let query = new URLSearchParams(window.location.search);
  let movieID = query.get("movieID");
  //console.log(movieID);

  //Axios petition to get movie details from API
  useEffect(() => {
    const apiKey = "2fd337d6d466b0f2073f359c4122e7ea"
    const movieDetailEndPoint = `https://api.themoviedb.org/3/movie/${movieID}?api_key=${apiKey}&language=en-US`
    axios.get(movieDetailEndPoint)
      .then((res) => SetMovieDetail(res.data))
      .catch((err) => swal(<h4>The movie you are trying to look for does not exist</h4>))
  }, []);

  //console.log(movieDetail)

  //button to homepage
  const sendToNetflix = () => {
    if (movieDetail.homepage === "") {
      swal(<h3>Homepage is not available</h3>)
    } else {
      window.open(`${movieDetail.homepage}`, '_blank')
    }
  };

  return (
    <div className='row'>
      <div className='col-4'>
        <img className="card-img-top img-thumbnail" src={movieDetail?.poster_path ? (`https://image.tmdb.org/t/p/w500${movieDetail.poster_path}`) : (noImage)} alt="Card image cap" />
      </div>
      <div className='col-8'>
        <h1>{movieDetail?.title}</h1>
        <h4>Released: {movieDetail?.release_date}</h4>
        <h2>Overview:</h2>
        <p>{movieDetail?.overview}</p>
        <h3>Genres:</h3>
        {movieDetail?.genres.map((genre, idx) => {
          return (
            <ul key={idx}>
              <li>{genre.name}</li>
            </ul>
          )
        })}
        <button type="button" className="btn btn-info" onClick={sendToNetflix}>Homepage</button>
      </div>
    </div>
  );
};

export default Detail;