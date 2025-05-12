import React, {useState, useEffect} from "react";

function Vreme(){

    const [time, setTime] = useState(new Date());

    useEffect(()=>{
        const intervalID = setInterval(()=>{
            setTime(new Date())
        }, 1000);

        return() => {
            clearInterval(intervalID);
        }
    }, [] );

    function formatTime(){
       
        let hours = time.getHours();
        let minutes = time.getMinutes();
        let second = time.getSeconds();

        return `${padZero(hours)}:${padZero(minutes)}:${padZero(second)}`;
    }
    function padZero(broj){
        return(broj < 10 ? "0" : "") + broj;
    }

    return(
        <div className="clock-container">
            <div className="clock">
                <span>{formatTime()}</span>
            </div>
        </div>
    );
}
export default Vreme