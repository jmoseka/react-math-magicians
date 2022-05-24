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
        <div className="col col-3">
          AC
        </div>
        <div className="col col-3">
          /
        </div>
        <div className="col col-3">
          %
        </div>
        <div className="col col-3">
          +
        </div>
      </div>

      <div className="row">
        <div className="col col-3">
          7
        </div>
        <div className="col col-3">
          8
        </div>
        <div className="col col-3">
          9
        </div>
        <div className="col col-3">
          x
        </div>
      </div>

      <div className="row">
        <div className="col col-3">
          4
        </div>
        <div className="col col-3">
          5
        </div>
        <div className="col col-3">
          6
        </div>
        <div className="col col-3">
          -
        </div>
      </div>

      <div className="row">
        <div className="col col-3">
          1
        </div>
        <div className="col col-3">
          2
        </div>
        <div className="col col-3">
          3
        </div>
        <div className="col col-3">
          +
        </div>
      </div>

      <div className="row">
        <div className="col col-9">
          0
        </div>
        <div className="col col-3">
          =
        </div>
      </div>

    </div>
  </div>
);
export default Calculator;
