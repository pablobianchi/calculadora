import React, { useState, useEffect, useContext } from "react";
import { CalculadoraContext } from "../context/CalculadoraProvider";

function BotonAccion({valor,label,css}) {

  const {seleccionarAccion} = useContext( CalculadoraContext );

  const presionar = (e) => {

    seleccionarAccion( e.target.value );

  };

    return (
        <button className={(css == undefined ) ? 'tecla' : css } onClick={presionar} value={valor}>{label}</button>
    );
}

export default BotonAccion;
