import "./App.css";
import { useState } from "react";

//import des images
import logo from "./img/logo.png";
import poubelle from "./img/poubelle.png";

//import des composants
import Task from "./Components/Task";
import Checkbox from "./Components/Checkbox";

function App() {
  const [search, setSearch] = useState("");

  const [tab, setTab] = useState([]);
  const [checked, setChecked] = useState(false);

  return (
    <div className="App">
      <header>
        <img src={logo} alt="" />
        <h1>Todo List</h1>
      </header>
      <div className="tot">
        <div className="container">
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
              newTab.push(search);
              setTab(newTab);
              // a chaque clic on remplit le newTab avec l'état
            }}
          >
            {/* il faut gérer le changement de couleur du bouton */}
            {/* le bouton récupère données du search et affiche le contenu dans une span */}
            <button className="button">Add task</button>
          </div>
        </div>

        <div className="return">
          {tab.map((elem, index) => {
            return (
              <div className="returnbox">
                <Checkbox
                  key={index}
                  value={checked}
                  setChecked={setChecked}
                  checked={checked}
                />
                <div>
                  <Task key={index} search={elem} />
                </div>
                <div>
                  <img src={poubelle} alt="" />
                </div>
              </div>
            );
          })}
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
