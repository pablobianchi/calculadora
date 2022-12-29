import BotonAccion from "../components/BotonAccion";
import BotonDigito from "../components/BotonDigito";
import Visor from "../components/Visor";
import CalculadoraProvider from "../context/CalculadoraProvider";

const Calculadora = () => {

    return(

        <>
        <header className="d-flex justify-content-center">
    </header>
    <CalculadoraProvider>
    <section>
        <div className="row justify-content-center">
            <div className="col-md-4 col-lg-4 col-xl-4 col-centered calculadora">
                <div className="row resultado">
                   <Visor/>

                </div>
                <div className="row teclado">

                    <div className="col-md-2  col-centered teclas">
                        <BotonAccion css="tecla" valor="" label="(" />
                        <BotonAccion css="tecla" valor="" label="Sin" />
                        <BotonDigito valor="1" />
                        <BotonDigito valor="4" />
                        <BotonDigito valor="7" />
                        <BotonDigito valor="." />
                    </div>
                    <div className="col-md-2  col-centered teclas">
                        <BotonAccion css="tecla" valor="" label=")" />
                        <BotonAccion css="tecla" valor="" label="cos" />
                        <BotonDigito valor="2" />
                        <BotonDigito valor="5" />
                        <BotonDigito valor="8" />
                        <BotonDigito valor="0" />
                        
                    </div>
                    <div className="col-md-2  col-centered teclas">
                        <BotonAccion css="tecla" valor="" label="x!" />
                        <BotonAccion css="tecla" valor="" label="tg" />
                        <BotonDigito valor="3" />
                        <BotonDigito valor="6" />
                        <BotonDigito valor="9" />
                        <BotonAccion css="tecla" valor="" label="&pi;" />
                    </div>
                    <div className="col-md-2  col-centered teclas">
                        <BotonAccion css="tecla" valor="" label="x2" />
                        <BotonAccion css="tecla" valor="" label="x3" />
                        <BotonAccion css="tecla" valor="/" label="/" />
                        <BotonAccion css="tecla" valor="*" label="*" />
                        <BotonAccion css="tecla" valor="-" label="-" />
                        <BotonAccion css="tecla" valor="+" label="+" />
                    </div>
                    <div className="col-md-2  col-centered teclas">
                        <BotonAccion css="tecla" valor="" label="&radic;" />
                        <BotonAccion css="tecla" valor="" label="3&radic;" />
                        <BotonAccion css="tecla" valor="" label="%" />
                        <BotonAccion css="tecla" valor="" label="log" />
                        <BotonAccion css="tecla" valor="ac" label="AC" />
                        <BotonAccion css="tecla" valor="" label="MR" />
                    </div>
                    <div className="col-md-2  col-centered teclas">
                        <BotonAccion css="tecla" valor="" label="n&radic;" />
                        <BotonAccion css="tecla" valor="" label="xn" />
                        <BotonAccion css="tecla" valor="" label="ln" />
                        <BotonAccion css="tecla" valor="" label="e" />
                        <BotonAccion css="tecla-igual" valor="=" label="=" />
                    </div>
                </div>
            </div>

        </div>
    </section>
    </CalculadoraProvider>
        </>

    )


}

export default Calculadora;