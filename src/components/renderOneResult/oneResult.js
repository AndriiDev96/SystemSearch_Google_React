import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';

class OneResult extends Component{

  render(){
    const bodyText = <section className="body-text">{this.props.result.text}</section>
    const linkToTheSource = this.props.result.note;
    
    return (
      <div className="wrapper-result">
        <h3>
        <a href= {linkToTheSource}>
          {this.props.result.title}
        </a>
        </h3>
        <div className="body-result">
          <cite>
            <a href= {linkToTheSource}>
              {this.props.result.note}
            </a>
          </cite>
          {bodyText}
        </div>
      </div>
    )
  }
}

export default OneResult;