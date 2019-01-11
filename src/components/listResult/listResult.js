import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import VideoResult from '../videoResult/videoResult';
import ResponseGoogle from '../responseGoogle';
import OneResult from '../renderOneResult/oneResult';

class ListResult extends Component {

  render() {
    let resultSearch = ResponseGoogle.map((result) =>
      <li key={result.id} className="mb-4">
        <OneResult result={result} />
      </li>
    )

    return (
      <div className="container">
        <h6 className="numberOfResult">
          Приблизна кількість результатів: 26 800 000 (0,35 сек.)
          </h6>
        <div className="section-result">

          <VideoResult />

          <ul className="list-result">
            {resultSearch}
          </ul>
        </div>
      </div>
    )
  }
}

export default ListResult;