// modules
import { useState, useEffect } from "react";
import { SeriesCharacters } from "./services/api";
// components
import Logo from "./components/Logo/Logo";
import FilterByName from "./components/FilterByName/FilterByName";
import FilterBySpecies from "./components/FilterBySpecies/FilterBySpecies";
import Pagination from "./components/Pagination/Pagination";
import Characters from "./components/Characters/Characters";
// constants
import { CHARACTERS_BASE_URL } from "./constants/endPoints";

function App() {
  const [characters, setCharacters] = useState([]);
  const [info, setInfo] = useState({});
  const [filterOn, setFilterOn] = useState(true);
  const [nameText, setNameText] = useState("");
  const [speciesText, setSpeciesText] = useState("");
  const [actualPage, setActualPage] = useState(1);

  const fetchCharacters = async (url) => {
    const data = await SeriesCharacters.get(url);
    setCharacters(data.results);
    setInfo(data.info);
    setActualPage(getActualPage(data.info));
  };

  const onPrevious = () => {
    fetchCharacters(info.prev);
  };

  const onNext = () => {
    fetchCharacters(info.next);
  };

  const getQuery = () => {
    return nameText && speciesText
      ? `/?name=${nameText}&species=${speciesText}`
      : nameText && speciesText.length === 0
      ? `/?name=${nameText}`
      : nameText.length === 0 && speciesText
      ? `/?species=${speciesText}`
      : "";
  };

  const getActualPage = (info) => {
    let pageNumber = 1;
    if (info.next) {
      pageNumber = parseInt(new URL(info.next).searchParams.get("page"));
      return pageNumber > 1 ? pageNumber - 1 : pageNumber;
    } else if (info.next === null && info.prev) {
      pageNumber = parseInt(new URL(info.prev).searchParams.get("page"));
      return pageNumber + 1;
    } else if (info.next === null && info.prev === null) {
      return 1;
    }
  };

  useEffect(() => {
    const query = getQuery();
    setFilterOn(query ? true : false);
    fetchCharacters(CHARACTERS_BASE_URL + query);
  }, [nameText, speciesText]);

  return (
    <>
      <Logo filterOn={filterOn} />
      <div className="container my-4">
        <div className="row">
          <FilterByName nameText={nameText} setNameText={setNameText} />
          <FilterBySpecies
            speciesText={speciesText}
            setSpeciesText={setSpeciesText}
          />
        </div>
      </div>
      <Pagination
        info={info}
        actualPage={actualPage}
        onPrevious={onPrevious}
        onNext={onNext}
      />
      <Characters loaded={characters} />
      <Pagination
        info={info}
        actualPage={actualPage}
        onPrevious={onPrevious}
        onNext={onNext}
      />
    </>
  );
}

export default App;
