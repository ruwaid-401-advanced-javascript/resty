import React from 'react';
import './styles/results.scss'

import { Link } from "react-router-dom";

class History extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      results: {},
      headers: {},

    }
  }

  uu = e => {
    let id = e.target.id;
    this.props.fill(id);
  }

  getFormLocalStorage = e => {
    let idx = e.target.id;

    let headersFromLocal = JSON.parse(localStorage.getItem('headers-state'))[idx];
    // let methodFromLocal = JSON.parse(localStorage.getItem('method-state'))[idx];
    let bodyFromLocal = JSON.parse(localStorage.getItem('body-state'))[idx];
    // let URLFromLocal = JSON.parse(localStorage.getItem('URL-state'))[idx];
    // let metodeUrlObjFromLocal = JSON.parse(localStorage.getItem('Method-URL-state'));
    this.setState({ results: bodyFromLocal, headers: headersFromLocal })
  }



  render() {
    return (
      <div id='content'>
        <div id='history'>
          {this.props.all.map((e, indx) => {
            return (
              <div>
                <button
                  id={indx}
                  key={indx}
                  onClick={this.getFormLocalStorage}
                >
                  {e.words}
                </button>
                {<Link to="/" id={indx} onClick={this.uu} >run</Link>}
              </div>
            )
          })}
        </div>
        <div>
          "Headers":
          <pre>
            {JSON.stringify(this.state.headers, null, 2)}
          </pre>

          "Response":
          <pre>
            {JSON.stringify(this.state.results, null, 2)}
          </pre>
        </div>
      </div >
    )
  }
}

export default History;