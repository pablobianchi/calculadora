import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  return (
    <>
    <header className="d-flex justify-content-center">
    </header>
    <section>
        <div className="row justify-content-center">
            <div className="col-md-4 col-lg-4 col-xl-4 col-centered calculadora">
                <div className="row resultado">
                    <div className="col-md-12 col-centered">
                        <label className="led">0</label>
                    </div>

                </div>
                <div className="row teclado">

                    <div className="col-md-2  col-centered teclas">
                        <button className="tecla">(</button>
                        <button className="tecla">sin</button>
                        <button className="tecla">1</button>
                        <button className="tecla">4</button>
                        <button className="tecla">7</button>
                        <button className="tecla">.</button>
                    </div>
                    <div className="col-md-2  col-centered teclas">
                        <button className="tecla">)</button>
                        <button className="tecla">cos</button>
                        <button className="tecla">2</button>
                        <button className="tecla">5</button>
                        <button className="tecla">8</button>
                        <button className="tecla">0</button>
                        
                    </div>
                    <div className="col-md-2  col-centered teclas">
                        <button className="tecla">x!</button>
                        <button className="tecla">tg</button>
                        <button className="tecla">3</button>
                        <button className="tecla">6</button>
                        <button className="tecla">9</button>
                        <button className="tecla">&pi;</button>
                    </div>
                    <div className="col-md-2  col-centered teclas">
                        <button className="tecla">x<sup>2</sup></button>
                        <button className="tecla">x<sup>3</sup></button>
                        <button className="tecla">/</button>
                        <button className="tecla">*</button>
                        <button className="tecla">-</button>
                        <button className="tecla">+</button>
                    </div>
                    <div className="col-md-2  col-centered teclas">
                        <button className="tecla">&radic;</button>
                        <button className="tecla"><sup>3</sup>&radic;</button>
                        <button className="tecla">%</button>
                        <button className="tecla">log</button>
                        <button className="tecla">AC</button>
                        <button className="tecla">MR</button>
                    </div>
                    <div className="col-md-2  col-centered teclas">
                        <button className="tecla"><sup>n</sup>&radic;</button>
                        <button className="tecla">x<sup>n</sup></button>
                        <button className="tecla">ln</button>
                        <button className="tecla">e</button>
                        <button className="tecla-igual">=</button>
                        
                    </div>
                </div>
            </div>

        </div>
    </section>
    </>
  );
}

export default App;
