import Kalendar from "./Komponente/Kalendar.jsx"
import ToDo from "./Komponente/ToDoComponent.jsx"
import Vreme from "./Komponente/Vreme.jsx"
import Mapa from "./Komponente/Mapa.jsx";
import ScrollToTop from "react-scroll-to-top";

import "./App.css";
import LoginForma from "./Komponente/LoginForma.jsx";
import { useState } from "react";
import MainStranica from "./GlavnaStranica.jsx";

function App() {

  const [ulogovan, setUlogovan] = useState(false);
  function handleLogin(){
    setUlogovan(true)
  }

  return (
    <div className="app-container">
      {ulogovan ? <MainStranica /> : <LoginForma onLogin={handleLogin} />}
    </div>
    
  );
}

export default App
