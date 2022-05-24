import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

const Calculator = () => (
  <div>
    <div className="container col-7">
      <div className="row">
        <div className="col-8 screen-output">
          Output
        </div>
      </div>

      <div className="row">
        <div className="col col-2">
          AC
        </div>
        <div className="col col-2">
          /
        </div>
        <div className="col col-2">
          %
        </div>
        <div className="col col-2">
          +
        </div>
      </div>

      <div className="row">
        <div className="col col-2">
          7
        </div>
        <div className="col col-2">
          8
        </div>
        <div className="col col-2">
          9
        </div>
        <div className="col col-2">
          x
        </div>
      </div>

      <div className="row">
        <div className="col col-2">
          4
        </div>
        <div className="col col-2">
          5
        </div>
        <div className="col col-2">
          6
        </div>
        <div className="col col-2">
          -
        </div>
      </div>

      <div className="row">
        <div className="col col-2">
          1
        </div>
        <div className="col col-2">
          2
        </div>
        <div className="col col-2">
          3
        </div>
        <div className="col col-2">
          +
        </div>
      </div>

      <div className="row">
        <div className="col col-6">
          0
        </div>
        <div className="col col-2">
          =
        </div>
      </div>

    </div>
  </div>
);
export default Calculator;
