import "./App.css";
import { useState } from "react";
import logo from "./img/logo.png";

function App() {
  const [search, setSearch] = useState("");
  const [tab, setTab] = useState([0]);

  return (
    <div className="App">
      <header>
        <img src={logo} alt="" />
        <h1>Todo List</h1>
      </header>
      <div className="tot">
        <div className="global">
          <input
            type="text"
            value={search}
            placeholder="new task"
            onChange={(event) => {
              setSearch(event.target.value);
            }}
          />
        </div>
        <div
          className="addTask"
          onClick={() => {
            const newTab = [...tab];
            newTab.push(0);
            setTab(newTab);
            // a chaque clic on remplit le newTab avec l'état
          }}
        >
          {/* il faut gérer le changement de couleur du bouton */}
          {/* le bouton récupère données du search et affiche le contenu dans une span */}
          <button className="button">Add task</button>
        </div>
      </div>
      <footer>
        <p>
          Made with <span> React </span> at <span> Le Reacteur </span> by{" "}
          <span> Guillaume</span>
        </p>
      </footer>
    </div>
  );
}

export default App;
