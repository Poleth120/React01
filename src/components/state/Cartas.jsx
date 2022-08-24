import React from 'react';
import { useState } from "react";

const cartasInicio = []

const Cartas = () => {

    const [cartas, colocarCartas] = useState(cartasInicio)

    const manejarAgregar = () => {
        const nuevaCarta = {
            asunto:"Queso",
            emisor:"Nechan",
            receptor:"Nechan mismo",
            mensaje:"Hola este es un mensaje para una carta.",
            firma:"Att Nechan"
        }
        colocarCartas([nuevaCarta,...cartas])
    }

    return (
        <>
        <div>
            <h1 class="title">Carta</h1>
            {
            cartas.map(carta =>(
                <div>
                    <td valign="middle" width="33.333%">
                        <table cellspacing="0" cellpadding="0" border="0" width="100%">
                            <tr>
                                <td class="counter-text">
                                    <span class="num">Receptor: {carta.receptor}</span>
                                    <span class="num">Emisor: {carta.emisor}</span>
                                    <span class="num">Asunto: {carta.asunto}</span>
                                    <span class="name">Mensaje: {carta.mensaje}</span>
                                    <span class="name">Firma: {carta.firma}</span>
                                </td>
                            </tr>
                        </table>
                    </td>
                </div>
                )
            )
            }
            <button className="btn btn-danger btn-sm ms-2 mt-2" onClick={()=>{manejarAgregar()}}>Agregar</button>
        </div>
        </>
    );

};

export default Cartas;
