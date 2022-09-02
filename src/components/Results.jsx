//React
import { useEffect, useState } from "react";

//Assets
import noImage from '../assets/no-image.png'

//Libraries
import axios from 'axios'
import swal from "@sweetalert/with-react";
import { Link, useNavigate } from 'react-router-dom';

const Results = () => {

  const navigate = useNavigate();

  //Get Movie ID
  let query = new URLSearchParams(window.location.search);
  let keyword = query.get('keyword');
  

  //Resquest from api to get the results from search
  const [movieResults, setMovieResults] = useState([]);

  useEffect(() => {
    const apiKey = "2fd337d6d466b0f2073f359c4122e7ea"
    const url = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=en-US&query=${keyword}&page=1&include_adult=fal`
    axios.get(url)
      .then((res => {
        const moviesArray = res.data.results;

        if (moviesArray.length === 0) {
          swal(<h3>No matches found</h3>);
          navigate("/list")
        }
        setMovieResults(moviesArray)
      }))

      .catch((err => swal("Seems like we could not find anything")))

    navigate(`/results?keyword=${keyword}`)
    
  }, [keyword]);

  //console.log(movieResults);


  return (
    <div className='row'>
      <h1>Results for "{keyword}"</h1>
      {movieResults.map((movieResult, idx) => {
        return (
          <div className="col-sm-3 pb-3" key={idx}>
            <div className="card">
              <img className="card-img-top img-thumbnail" src={movieResult.poster_path ? (`https://image.tmdb.org/t/p/w500${movieResult.poster_path}`) : (noImage)} alt="Card image cap" />
              <div className="card-body">
                <h5 className="card-title">{movieResult.title}</h5>
                <p className="card-text">{movieResult.overview}</p>
                <Link to={`/detail?movieID=${movieResult.id}`} className="btn btn-primary">Go to Movie</Link>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  );
};

export default Results;