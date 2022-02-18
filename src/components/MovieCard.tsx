import { Star, Clock } from "react-feather";
import { Link } from "react-router-dom";

import "../styles/movie-card.scss";

interface MovieCardProps {
  title: string;
  poster: string;
  rating: string;
  runtime: string;
  movie: {
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
  };
}

export function MovieCard(props: MovieCardProps) {
  return (
    <Link to={`/movies/${props.title}`} state={{ movie: props.movie }}>
      <div className="movie-card">
        <img src={props.poster} alt={props.title} />

        <div>
          <div className="movie-info">
            <span>{props.title}</span>
            <div className="meta">
              <div>
                <Star /> {props.rating}
              </div>

              <div>
                <Clock /> {props.runtime}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
