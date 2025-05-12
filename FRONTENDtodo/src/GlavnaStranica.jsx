import Kalendar from "./Komponente/Kalendar.jsx"
import ToDo from "./Komponente/ToDoComponent.jsx"
import Vreme from "./Komponente/Vreme.jsx"
import Mapa from "./Komponente/Mapa.jsx";
import ScrollToTop from "react-scroll-to-top";
import React  from "react";

function MainStranica(){
    return(
        <div className="app">
            <header className="header">
                <Vreme />
            </header>
            <main className="main-content">
                <ToDo />
                <div>
                    <Kalendar />
                    <Mapa />
                </div>                 
            </main> 
            <ScrollToTop smooth style=
                {
                {
                    backgroundColor:"rgba(255, 255, 255, 0.35)",
                    color: "#rgb(255, 255, 255)",
                    display: "flex",
                    justifyContent: "center",
                    borderRadius: "30px",
                    padding: "10px"
                } 
                } 
            />
        </div>
    );
}
export default MainStranica