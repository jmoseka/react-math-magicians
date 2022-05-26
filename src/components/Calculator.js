import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import React, { useState } from 'react';
import calculate from '../logic/calculate';
import '../css/Calculator.css';

function Calculator() {
  const [state, setState] = useState({});

  const btnClick = (e) => {
    setState(() => calculate(state, e.target.innerText));
  };
  const { next, total } = state;

  return (
    <div className="body">
      <div className="container col-10 col-md-4">
        <div className="row">
          <div className="col-12 screen-output">
            {next || total || 0}
          </div>
        </div>

        <div className="row">
          <button onClick={btnClick} type="button" className="col-3">AC</button>
          <button onClick={btnClick} type="button" className="col-3">/</button>
          <button onClick={btnClick} type="button" className="col-3">%</button>
          <button onClick={btnClick} type="button" className="col-3">+</button>
        </div>

        <div className="row">
          <button onClick={btnClick} type="button" className="col-3">7</button>
          <button onClick={btnClick} type="button" className="col-3">8</button>
          <button onClick={btnClick} type="button" className="col-3">9</button>
          <button onClick={btnClick} type="button" className="col-3">x</button>
        </div>

        <div className="row">
          <button onClick={btnClick} type="button" className="col-3">4</button>
          <button onClick={btnClick} type="button" className="col-3">5</button>
          <button onClick={btnClick} type="button" className="col-3">6</button>
          <button onClick={btnClick} type="button" className="col-3">-</button>
        </div>

        <div className="row">
          <button onClick={btnClick} type="button" className="col-3">1</button>
          <button onClick={btnClick} type="button" className="col-3">2</button>
          <button onClick={btnClick} type="button" className="col-3">3</button>
          <button onClick={btnClick} type="button" className="col-3">+</button>
        </div>

        <div className="row">
          <button onClick={btnClick} type="button" className="col-9">0</button>
          <button onClick={btnClick} type="button" className="col-3">=</button>
        </div>

      </div>
    </div>
  );
}

export default Calculator;
