import React, {useState} from "react";

function ToDo(){

    const [taskovi, setTask] = useState([]);
    const [noviTask, setNoviTask] = useState("");

    function obradiPromenuUnosa(event){
        setNoviTask(event.target.value)
    }
    function dodajTask(){
        if(noviTask.trim() !== ""){
            setTask(t=>[...t, noviTask]);
            setNoviTask("");
        }
    }
    function obrisiTask(indeks){
        const updatedTasks = taskovi.filter((_, ind)=>ind !== indeks);
        setTask(updatedTasks);
    }
    function moveUpTask(indeks){
        if(indeks > 0){
            const updatedTasks = [...taskovi];
            [updatedTasks[indeks], updatedTasks[indeks - 1]] = 
            [updatedTasks[indeks - 1], updatedTasks[indeks]];

            setTask(updatedTasks);
        }
    }
    function moveDownTask(indeks){
        if(indeks < taskovi.length - 1){
            const updatedTasks = [...taskovi];
            [updatedTasks[indeks], updatedTasks[indeks + 1]] = 
            [updatedTasks[indeks + 1], updatedTasks[indeks]];      
            
            setTask(updatedTasks);
        }
    }


    return(
        <div className="to-do-list">
            <h1>Tvoja dnevna misija🎯</h1>
            <p className="subtitle">
                ...tvoj dan, tvoj plan...
            </p>
            <div className="bar">
                <input 
                    type="text"
                    placeholder="Unesi zadatak..."
                    value={noviTask}
                    onChange={obradiPromenuUnosa}
                />
                <button
                    className="add-button"
                    onClick={dodajTask}
                >
                    +
                </button>
            </div>
            <ol>
                {taskovi.map((taskEl, ind)=>
                    <li key={ind}>
                        <span className="text">{taskEl}</span>
                        <button 
                            className="delete-button"
                            onClick={()=>obrisiTask(ind)}
                        >
                            🗑️
                        </button>
                        <button
                            className="move-button"
                            onClick={()=>moveUpTask(ind)}
                        >
                            ⬆️
                        </button>
                        <button
                            className="move-button"
                            onClick={()=>moveDownTask(ind)}
                        >
                            ⬇️
                        </button>
                    </li>
                )}
            </ol>
        </div>
    );
}

export default ToDo