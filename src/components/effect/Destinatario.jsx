import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';


const Destinatario = () => {
    const [incrementarDestinatario, setincrementarDestinatario] = useState("Nuevo: ");
    useEffect(() => 
    {
    })
    return (
        <div>
            <h1>Entrenador</h1>
            <h2>{incrementarDestinatario}</h2>
            <br></br>
            <button className="btn btn-success" onClick={()=>setincrementarDestinatario(incrementarDestinatario + "Entrenador")}>Agregar Entrenador</button>
        </div>
    );   
}

export default Destinatario;
