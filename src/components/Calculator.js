import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import '../css/Calculator.css';

const Calculator = () => (
  <div className="body">
    <div className="container col-10 col-md-4">
      <div className="row">
        <div className="col-12 screen-output">
          0
        </div>
      </div>

      <div className="row">
        <button type="button" className="col-3">AC</button>
        <button type="button" className="col-3">/</button>
        <button type="button" className="col-3">%</button>
        <button type="button" className="col-3">+</button>
      </div>

      <div className="row">
        <button type="button" className="col-3">7</button>
        <button type="button" className="col-3">8</button>
        <button type="button" className="col-3">9</button>
        <button type="button" className="col-3">x</button>
      </div>

      <div className="row">
        <button type="button" className="col-3">4</button>
        <button type="button" className="col-3">5</button>
        <button type="button" className="col-3">6</button>
        <button type="button" className="col-3">-</button>
      </div>

      <div className="row">
        <button type="button" className="col-3">1</button>
        <button type="button" className="col-3">2</button>
        <button type="button" className="col-3">3</button>
        <button type="button" className="col-3">+</button>
      </div>

      <div className="row">
        <button type="button" className="col-9">0</button>
        <button type="button" className="col-3">=</button>
      </div>

    </div>
  </div>
);
export default Calculator;
