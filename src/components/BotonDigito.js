import React, { useContext } from "react";
import { CalculadoraContext } from "../context/CalculadoraProvider";

function BotonDigito({valor}) {

  const {ingresarDigito} = useContext( CalculadoraContext );

  const presionar = (e) => {
    ingresarDigito( e.target.value );
  };


    return (
        <button className="tecla" onClick={presionar} value={valor}>{valor}</button>
    );
}

export default BotonDigito;
