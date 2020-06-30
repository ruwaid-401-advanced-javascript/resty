import React from 'react';
import './styles/results.scss'

class Results extends React.Component {
  render() {
    return (
      <div id='content'>
        <div id='history'>
          {this.props.all}
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
    )
  }
}

export default Results;