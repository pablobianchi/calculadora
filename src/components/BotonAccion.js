import React, { useState, useEffect, useContext } from "react";
import { CalculadoraContext } from "../context/CalculadoraProvider";
import Swal from "sweetalert2";

function BotonAccion({valor,label,css}) {

  const {seleccionarAccion} = useContext( CalculadoraContext );

  const presionar = (e) => {

    if( e.target.value == "" ){
      Swal.fire("Pendiente de Desarrollo");
    }
    else{
      seleccionarAccion( e.target.value );
    }
    

  };

    return (
        <button className={(css == undefined ) ? 'tecla' : css } onClick={presionar} value={valor}>{label}</button>
    );
}

export default BotonAccion;
