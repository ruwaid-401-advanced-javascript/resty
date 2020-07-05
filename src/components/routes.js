import React from 'react';
import { Route } from 'react-router-dom';

import Form from './form';
import Results from './results';
import History from './history';

import { IfRenderer, Then, Else } from './if';

class Routes extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      results: {},
      all: [],
      headers: '',
      open: false,
      loading: false,
      id: '',
    };
  }
  handleForm = (results, all, headers) => {
    this.setState({ results, all, headers });
  }

  toggleModal = (open) => {
    this.setState({ open });
  }

  toggleLoading = () => {
    this.setState({ loading: !this.state.loading })
  }

  fill = (id) => {
    this.setState({ id })
  }
  render() {
    return (
      <>
      <Route path="/" exact>
        <Form url={this.state.url} all={this.state.all} show={this.toggleModal} handler={this.handleForm} toggleLoading={this.toggleLoading} />
        <IfRenderer condition={this.state.open} >
          <Then>
            <Results fill={this.fill} id={this.state.id} handler={this.handleForm} results={this.state.results} all={this.state.all} headers={this.state.headers} loading={this.state.loading} />
          </Then>
          <Else>
            <div id='content'></div>
          </Else>
        </IfRenderer>

      </Route>
      <Route path="/history" exact>
        <History fill={this.fill} all={this.state.all} />
      </Route>
      </>
      )
  }
}

export default Routes;