import { MoreVertical } from "react-feather";
import { MovieCard } from "../components/MovieCard";

interface ContentProps {
  movies: Array<{
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
  }>;
  selectedGenre: {
    title: string;
  };
}

export function Content(props: ContentProps) {
  return (
    <div className="container">
      <header>
        <span className="category">
          Categoria:<span> {props.selectedGenre.title}</span>
        </span>
        <span className="moviesAmount">
          Filmes: <span>{props.movies.length}</span>
        </span>
      </header>

      <main>
        <div className="movies-list">
          {props.movies.map((movie) => (
            <MovieCard
              key={movie.imdbID}
              title={movie.Title}
              poster={movie.Poster}
              runtime={movie.Runtime}
              rating={movie.Ratings[0].Value}
              movie={{
                imdbID: movie.imdbID,
                Title: movie.Title,
                Poster: movie.Poster,
                Ratings: movie.Ratings,
                Runtime: movie.Runtime,
                Director: movie.Director,
                Writer: movie.Writer,
                Actors: movie.Actors,
                Plot: movie.Plot,
                Language: movie.Language,
                Country: movie.Country,
                Year: movie.Year,
                Released: movie.Released,
                Production: movie.Production,
              }}
            />
          ))}
        </div>
      </main>
    </div>
  );
}
