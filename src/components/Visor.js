import React, { useState, useEffect, useContext } from "react";
import { CalculadoraContext } from "../context/CalculadoraProvider";

function Visor() {


  const {visor} = useContext( CalculadoraContext );
  // const [valor, setValor] = useState(null);

/*
  useEffect(() => {

    if( ! pelicula ){
        fetch( `https://api.themoviedb.org/3/movie/${id}?api_key=${key}&language=es-ES`)
            
          .then( data  => {
            if (data.ok) {
              return data.json();
            }
            else {
               return data.json()
                 .then((data) => {
                  console.log( data.status_message );
                   throw(data.status_message);
          
                   // if the error is an object and you just want to display some elements:
                  // throw(JSON.parse(text));
                 });
            }
          })
          //.then(data => data.json())
          .then(json => setPelicula(json))
            //.then( console.log( pelicula ))
            .catch(err =>alert('Solicitud fallida --> ' + err));    
    } 
}, []);
*/


    return (
      <>
        <div className="col-md-12 col-centered">
          <label className="led">{visor}</label>
        </div>
      </>
    );
}

export default Visor;
