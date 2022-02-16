import { Button } from "../components/Button";
import { AiOutlineMenu } from "react-icons/ai/index";

interface sideBarProps {
  genres: Array<{
    id: number;
    name: "action" | "comedy" | "documentary" | "drama" | "horror" | "family";
    title: string;
  }>;

  stateSelectedGenreId: {
    setSelectedGenreId: (id: number) => void;
    selectedGenreId: number;
  };
}

export function SideBar(props: sideBarProps) {
  function handleClickButton(id: number) {
    props.stateSelectedGenreId.setSelectedGenreId(id);
  }

  function toggleSideBar() {
    document.querySelector(".sidebar")?.classList.toggle("active");
  }

  return (
    <nav className="sidebar">
      <div className="sidebarToggleButton">
        <button onClick={toggleSideBar}>
          <AiOutlineMenu />
        </button>
      </div>

      <span>
        Watch<p>Me</p>
      </span>

      <div className="buttons-container">
        {props.genres.map((genre) => (
          <Button
            key={String(genre.id)}
            title={genre.title}
            iconName={genre.name}
            onClick={() => {
              toggleSideBar();
              handleClickButton(genre.id);
            }}
            selected={props.stateSelectedGenreId.selectedGenreId === genre.id}
          />
        ))}
      </div>
    </nav>
  );
}
