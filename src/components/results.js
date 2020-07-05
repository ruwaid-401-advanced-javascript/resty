import React from 'react';
import '../styles/results.scss'

class Results extends React.Component {

  getFormLocalStorage = e => {
    let content = e.target.textContent;
    let methodFromButton = content.split('!')[0];
    let urlFromButton = content.split('!')[1];

    let metodeUrlObjFromLocal = JSON.parse(localStorage.getItem('Method-URL-state'));
    let metodeUrlObjIDFromLocal = JSON.parse(localStorage.getItem('Method-URL-ID-state'));

    let x = metodeUrlObjFromLocal[methodFromButton].indexOf(urlFromButton)
    if (x === -1) {
      this.props.handler({
        msg1: 'Error Error Error',
        msg2: 'maybe you do not have access',
        msg3: 'maybe your request is wrooong',
      }, this.props.all, null);
    } else {

      let idx = metodeUrlObjIDFromLocal[methodFromButton][x]


      let headersFromLocal = JSON.parse(localStorage.getItem('headers-state'))[idx];
      let methodFromLocal = JSON.parse(localStorage.getItem('method-state'))[idx];
      let bodyFromLocal = JSON.parse(localStorage.getItem('body-state'))[idx];
      let URLFromLocal = JSON.parse(localStorage.getItem('URL-state'))[idx];

      document.getElementById('url').value = URLFromLocal;
      document.getElementById(`${methodFromLocal}`).click();

      // let lowerCaseMethod = methodFromLocal.toLowerCase();
      // this[`${lowerCaseMethod}`]();

      this.props.handler(bodyFromLocal, this.props.all, headersFromLocal);

    }
  }

  getData = e =>{
    if (this.props.id !== '') {
      const rr = setInterval(() => {
        let x = document.getElementById(`${this.props.id}`);
        x.click();
        this.props.fill('')
        clearInterval(rr);
      }, 500);


    }
  }

  componentDidMount(){
    this.getData();
  }

  render() {

    return (
      <>
      <span>{this.props.id}</span>
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