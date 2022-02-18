import { render } from "react-dom";
import { App } from "./App";
import { Route, Routes, MemoryRouter } from "react-router-dom";
import Movie from "./components/movies/movie";

render(
  <MemoryRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/movies/:movie" element={<Movie />} />
    </Routes>
  </MemoryRouter>,
  document.getElementById("root")
);
