import { Link, useLocation } from "react-router-dom";
import { CgArrowLeft } from "react-icons/cg";

import "./movie.scss";

interface Movie {
  imdbID: string;
  Title: string;
  Poster: string;
  Ratings: Array<{
    Source: string;
    Value: string;
  }>;
  Runtime: string;
  Director: string;
  Writer: string;
  Actors: string;
  Plot: string;
  Language: string;
  Country: string;
  Year: string;
  Released: string;
  Production: string;
}

export default function Movie() {
  const location: any = useLocation()?.state;
  const movie: Movie = location.movie;

  return (
    <div id="movie">
      <header>
        <Link to="/" id="goBackLink">
          <CgArrowLeft size={32} />
        </Link>
        <h1>{movie.Title}</h1>
      </header>

      <main id="movie_container">
        <section id="movie_main_informations">
          <img src={movie.Poster} alt={movie.Title} />
          <p>{movie.Plot}</p>
        </section>
        <section id="movie_another_informations">
          <h3>Extra Informations</h3>
          <ul>
            <li>
              <strong>Runtime:</strong> <span>{movie.Runtime}</span>
            </li>
            <li>
              <strong>Production:</strong> <span>{movie.Production}</span>
            </li>
            <li>
              <strong>Director:</strong> <span>{movie.Director}</span>
            </li>
            <li>
              <strong>Language:</strong> <span>{movie.Language}</span>
            </li>
            <li>
              <strong>Country:</strong> <span>{movie.Country}</span>
            </li>
            <li>
              <strong>Year:</strong> <span>{movie.Year}</span>
            </li>
            <li>
              <strong>Released:</strong> <span>{movie.Released}</span>
            </li>
            <li>
              <strong>Actors:</strong> <span>{movie.Actors}</span>
            </li>

            {movie.Ratings.map((rate, index) => {
              return (
                <li key={index}>
                  <strong>Rating</strong> <span>{rate.Source}</span>
                  <p>{rate.Value}</p>
                </li>
              );
            })}
          </ul>
        </section>
      </main>
    </div>
  );
}
