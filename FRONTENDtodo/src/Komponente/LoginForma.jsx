import React, { useState } from "react";
import "../StiloviKomponente/LoginForma.css"

function LoginForma({onLogin}){

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    

    const [registracijaMod, setRegistracijaMod] = useState(false);
    const [username, setUsername] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

//    const [nekiElement, setStanjeElementa] = useState({
//        email:'',
//        password:'',
//        registracijaMod:false,
//        username:'',
//        confirmPassword:'',
//    })

    function obradiPotvrdu(e){
        e.preventDefault();

        if(registracijaMod){
            if(!username || !email || !password || !confirmPassword){
                alert("Popunite sva polja!");
                return
            }
            if(password !== confirmPassword){
                alert("Lozinke se ne poklapaju!");
            }

            const noviKorisnik = {
                korisnickoIme : username,
                emailAdresa: email,
                lozinka: password
            };

            console.log("Registracija je uspesna!", noviKorisnik);

            setUsername("");
            setEmail("");
            setPassword("");
            setConfirmPassword("");
            setRegistracijaMod(false);
        }else
            if(email === "a@a" && password === "a"){
                //-----------------------simulacija
                //ovo vodi dalje
                onLogin();
                //console.log("radi")
            }else{
                alert("Pogrešan email ili lozinka!");
            }
    };


    return(
        <div className="login-container">
            <form className="login-form" onSubmit={obradiPotvrdu}>
                <h1>{registracijaMod ? "Registracija" : "Prijava"}</h1>

                {registracijaMod && (
                <input
                    className="login-field"
                    name="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="Korisničko ime"
                />
                )}

                <input
                    className="login-field"
                    type="email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email"
                />
                <input
                    className="login-field"
                    type="password"
                    name="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Lozinka"
                />

                {registracijaMod && (
                <input
                    className="login-field"
                    type="password"
                    name="confirmPassword"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    placeholder="Potvrdi lozinku"
                />
                )}

                <div className="btn-div">
                    <button className="log-btn" type="submit">
                        {registracijaMod ? "Registruj se" : "Prijavi se"}
                    </button>
                    <button
                        className="reg-btn"
                        type="button"
                        onClick={() => setRegistracijaMod(!registracijaMod)}
                    >
                        {registracijaMod ? "Imate nalog?" : "Nemate nalog?"}
                    </button>
                </div>
            </form>
        </div>
    );
}
export default LoginForma
