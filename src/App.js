import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  setSearchResult,
  setSearchNaruto,
  setSearchClicked,
} from "./Redux/characterSlice";
import "./App.css";
import axios from "axios";
import CharacterCard from "./CharacterCard";
import submitIcon from "./submit.svg";

const API_URL = "https://narutodb.xyz/api/character/search";

const App = () => {
  const dispatch = useDispatch();
  const { searchResult, searchNaruto, searchClicked } = useSelector(
    (state) => state.character
    // const [searchResult, setSearchResult] = useState(null);
    // const [searchNaruto, setSearchNaruto] = useState("");
    // const [searchClicked, setSearchClicked] = useState(false);
    // console.log("what is inside" + " " + searchResult);
  );

  const searchCharacter = async (name) => {
    const response = await axios.get(`${API_URL}?name=${name}`);
    // console.dir(response);
    // const data = await response.json();
    dispatch(setSearchResult(response.data));
    // console.log(data);
  };

  const handleSearch = () => {
    dispatch(setSearchClicked(true));
    if (searchNaruto.trim()) {
      searchCharacter(searchNaruto);
    } else {
      dispatch(setSearchResult(null));
    }
  };

  return (
    <div className="App">
      <h1>NARUTO SEARCH</h1>
      <div className="searchContainer">
        <input
          className="narutoSearch"
          value={searchNaruto}
          placeholder="Search a Naruto Character"
          onChange={(e) => dispatch(setSearchNaruto(e.target.value))}
        />
        <button className="searchButton" type="submit">
          <img
            className="submitIcon"
            src={submitIcon}
            alt="Submit"
            onClick={handleSearch}
          />
        </button>
      </div>

      {searchResult ? (
        <div className="Container">
          <CharacterCard character={searchResult} />
        </div>
      ) : (
        searchClicked &&
        !searchNaruto.trim() && (
          <div className="Empty">
            <h2>No Character Found</h2>
          </div>
        )
      )}
    </div>
  );
};

export default App;
