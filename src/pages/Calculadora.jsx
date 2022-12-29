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
                        <button className="tecla">(</button>
                        <button className="tecla">sin</button>
                        <BotonDigito valor="1" />
                        <BotonDigito valor="4" />
                        <BotonDigito valor="7" />
                        <BotonDigito valor="." />
                    </div>
                    <div className="col-md-2  col-centered teclas">
                        <button className="tecla">)</button>
                        <button className="tecla">cos</button>
                        <BotonDigito valor="2" />
                        <BotonDigito valor="5" />
                        <BotonDigito valor="8" />
                        <BotonDigito valor="0" />
                        
                    </div>
                    <div className="col-md-2  col-centered teclas">
                        <button className="tecla">x!</button>
                        <button className="tecla">tg</button>
                        <BotonDigito valor="3" />
                        <BotonDigito valor="6" />
                        <BotonDigito valor="9" />
                        <button className="tecla">&pi;</button>
                    </div>
                    <div className="col-md-2  col-centered teclas">
                        <button className="tecla">x<sup>2</sup></button>
                        <button className="tecla">x<sup>3</sup></button>
                        <BotonAccion css="tecla" valor="/" label="/" />
                        <BotonAccion css="tecla" valor="*" label="*" />
                        <BotonAccion css="tecla" valor="-" label="-" />
                        <BotonAccion css="tecla" valor="+" label="+" />
                    </div>
                    <div className="col-md-2  col-centered teclas">
                        <button className="tecla">&radic;</button>
                        <button className="tecla"><sup>3</sup>&radic;</button>
                        <button className="tecla">%</button>
                        <button className="tecla">log</button>
                        <BotonAccion css="tecla" valor="ac" label="AC" />
                        <button className="tecla">MR</button>
                    </div>
                    <div className="col-md-2  col-centered teclas">
                        <button className="tecla"><sup>n</sup>&radic;</button>
                        <button className="tecla">x<sup>n</sup></button>
                        <button className="tecla">ln</button>
                        <button className="tecla">e</button>
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