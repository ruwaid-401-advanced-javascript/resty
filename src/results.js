import React from 'react';
import './styles/results.scss'

class Results extends React.Component {

  getFormLocalStorage = e => {
    let idx = e.target.id;
    // console.log(e.target.textContent);

    let headersFromLocal = JSON.parse(localStorage.getItem('headers-state'))[idx];
    let methodFromLocal = JSON.parse(localStorage.getItem('method-state'))[idx];
    let bodyFromLocal = JSON.parse(localStorage.getItem('body-state'))[idx];
    let URLFromLocal = JSON.parse(localStorage.getItem('URL-state'))[idx];
    // let metodeUrlObjFromLocal = JSON.parse(localStorage.getItem('Method-URL-state'));

    document.getElementById('url').value = URLFromLocal;
    document.getElementById(`${methodFromLocal}`).click();

    // let lowerCaseMethod = methodFromLocal.toLowerCase();
    // this[`${lowerCaseMethod}`]();

    this.props.handler(bodyFromLocal, this.props.all, headersFromLocal);
  }

  render() {
    return (
      <>
        <div className={`loading-${this.props.loading}`}>
          <h1>
            <span>L</span>
            <span>O</span>
            <span>A</span>
            <span>D</span>
            <span>I</span>
            <span>N</span>
            <span>G</span>

            <span>.</span>
            <span>.</span>
            <span>.</span>
          </h1>

        </div>
        <div id='content'>
          <div id='history'>
            {this.props.all.map((e, indx) => {
              return (
                <button
                  id={indx} key={indx} onClick={this.getFormLocalStorage}
                >
                  {e.words}
                </button>
              )
            })}
          </div>
          <div>
            "Headers":
          <pre>
              {JSON.stringify(this.props.headers, null, 2)}
            </pre>

          "Response":
          <pre>
              {JSON.stringify(this.props.results, null, 2)}
            </pre>
          </div>
        </div >
      </>
    )
  }
}

export default Results;