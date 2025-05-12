import React, {useState} from "react";
import "../StiloviKomponente/Kalendar.css"
function Kalendar(){

    const danas = new Date();
    const [trenutniMesec, setTrenutniMesec] = useState(danas.getMonth());
    const [trenutnaGodina, setTrenutnaGodina] = useState(danas.getFullYear());

    const meseci = ["Januar", "Februar", "Mart", "April", "Maj", "Jun",
                    "Jul", "Avgust", "Septembar", "Oktobar", "Novembar", "Decembar"
    ];

    function crtajKalendar(){
        const prviDan = new Date(trenutnaGodina, trenutniMesec, 1).getDay();
        const daniUMesecu = new Date(trenutnaGodina, trenutniMesec + 1, 0).getDate();
        const startDan = (prviDan + 6) % 7; 
        //pon kao prvi dan u nedelji
        const redovi = [];
        let datum = 1;

        for (let i = 0; i < 6; i++){
            const red = [];
            for (let j = 0; j < 7; j++){
                if( i === 0 && j < startDan){
                    red.push(<td key={j}></td>);
                } else if (datum > daniUMesecu){
                    red.push(<td key={j}></td>);
                } else {
                    const danasJE = 
                        datum === danas.getDate() &&
                                  trenutniMesec === danas.getMonth() &&
                                  trenutnaGodina === danas.getFullYear();

                    red.push(
                        <td key={j} className={danasJE ? "danas" : ""}>
                            {datum}
                        </td>
                    );
                    datum++
                }
            }
            redovi.push(<tr key = {i}>{red}</tr>);
        }
        return redovi;
    };
    function prethodniMesec(){
        if(trenutniMesec === 0){
            setTrenutniMesec(11);
            setTrenutnaGodina(trenutnaGodina - 1);
        }else {
            setTrenutniMesec(trenutniMesec - 1);
        }
    };
    function sledeciMesec(){
        if(trenutniMesec === 11){
            setTrenutniMesec(0);
            setTrenutnaGodina(trenutnaGodina + 1);
        } else {
            setTrenutniMesec(trenutniMesec + 1);
        }
    };



    return(
        <div className="calendar">
            <div className="calendar-header">
                <button onClick={prethodniMesec}>⬅️</button>
                <span>{meseci[trenutniMesec]} {trenutnaGodina}</span>
                <button onClick={sledeciMesec}>➡️</button>
            </div>
            <table className="calendar-table">
                <thead>
                    <tr>
                        <th>Pon</th>
                        <th>Uto</th>
                        <th>Sre</th>
                        <th>Čet</th>
                        <th>Pet</th>
                        <th>Sub</th>
                        <th>Ned</th>
                    </tr>
                </thead>
                <tbody>{crtajKalendar()}</tbody>
            </table>

        </div>
    );
}
export default Kalendar