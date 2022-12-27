import { createContext, useState } from "react";
import React from "react";

export const CalculadoraContext = createContext()

const CalculadoraProvider = (props)=>{

    const digitosMaximos = 12;

    const [visor, setVisor] = useState('0');

    const numberPress = (number) => { 

        if( visor.length < digitosMaximos ){
            setVisor( visor + number );
        }

    }


    const ingresarDigito = (digito) => { 

        if( visor.length < digitosMaximos ){

            if( digito == "." ){

                if( visor.indexOf(".") == -1 ){
                    setVisor( visor + digito );
                }
            }
            else{
                digito = parseInt( digito );
                if( ! isNaN( digito ) ){

                    if( visor == "0" ){
                        setVisor( digito.toString() )
                    }
                    else{
                        setVisor( visor + digito.toString() );
                    }

                }
            }
        }
    }

              
    const seleccionarAccion = (accion) => { 

        switch ( accion) {
            case 'ac':
                setVisor( "0" );
                
                break;
        
            default:
                break;
        }

    }


    return (
        <CalculadoraContext.Provider value={{visor, seleccionarAccion, ingresarDigito}}>
            {props.children}
        </CalculadoraContext.Provider>
    );
}

export default CalculadoraProvider;