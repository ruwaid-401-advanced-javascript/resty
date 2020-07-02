import React from 'react';
import '../styles/results.scss'

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
    let content = e.target.textContent;
    let methodFromButton = content.split('!')[0];
    let urlFromButton = content.split('!')[1];

    let metodeUrlObjFromLocal = JSON.parse(localStorage.getItem('Method-URL-state'));
    let metodeUrlObjIDFromLocal = JSON.parse(localStorage.getItem('Method-URL-ID-state'));

    let x = metodeUrlObjFromLocal[methodFromButton].indexOf(urlFromButton)
    let idx = metodeUrlObjIDFromLocal[methodFromButton][x]

    let headersFromLocal = JSON.parse(localStorage.getItem('headers-state'))[idx];
    let bodyFromLocal = JSON.parse(localStorage.getItem('body-state'))[idx];
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
                {<Link to="/" id={indx} onClick={this.uu} key={indx-indx}>RE-Run</Link>}
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