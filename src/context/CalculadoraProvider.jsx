import { createContext, useState } from "react";
import React from "react";

export const CalculadoraContext = createContext()

const CalculadoraProvider = (props)=>{

    const digitosMaximos = 12;

    const [visor, setVisor] = useState('0');
    const [buffer, setBuffer] = useState( [] );
    const [limpiarVisor, setLimpiarVisor] = useState(false);


    const ingresarDigito = (digito) => { 

            if( limpiarVisor ){

                setLimpiarVisor( false );
                if( isNaN( digito ) ){
                    setVisor( visor + digito );
                }
                else{
                    setVisor( digito.toString() );
                }
            }
            else{

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
        
    }


    //OPERACIONES
    const sumar = ( a, b ) => {

        return( a + b );

    }

    const restar = ( a, b ) => {

        return( a - b );

    }

    const multiplicar = ( a, b ) => {

        return( a * b );

    }

    const dividir = ( a, b ) => {

        return( a / b );

    }
    //FIN OPERACIONES          

    const procesoBuffer = () => {

        let resultado = 0;
        switch ( buffer[1] ) {
            case '+':
                resultado = sumar( buffer[0], buffer[2] );
                break;
            
            case '-':
                resultado = restar( buffer[0], buffer[2] );
                break;

            case '*':
                resultado = multiplicar( buffer[0], buffer[2] );
                break;

            case '/':
                resultado = dividir( buffer[0], buffer[2] );
                break;
        
            default:
                break;
        }

        buffer.length = 0;

        if( resultado.toString().length > digitosMaximos ){

            setVisor( "--ERROR--" );
            setLimpiarVisor( true );

        }
        else{
            buffer.push( resultado ) ;
            setVisor( resultado.toString() );
        }


       

    }

    const seleccionarAccion = (accion) => { 

        if( accion == 'ac' ){
            setVisor( "0" );
            buffer.length = 0;
           
        }
        else if( accion == "="){
            buffer.push( parseFloat( visor ) );
            procesoBuffer();  
            buffer.length = 0;
            setLimpiarVisor(true);
        }
        else{
            
            if( buffer.length == 2 ){
                buffer.push( parseFloat( visor ) );
                procesoBuffer();            

            }
            else{
                buffer.push( parseFloat( visor ) ) ;
                
            }
          
            buffer.push( accion ) ;
            setLimpiarVisor(true);
        }

    }


    return (
        <CalculadoraContext.Provider value={{visor, seleccionarAccion, ingresarDigito}}>
            {props.children}
        </CalculadoraContext.Provider>
    );
}

export default CalculadoraProvider;