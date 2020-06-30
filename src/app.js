import React from 'react';
import './styles/style.scss';
import Header from './header';
import Footer from './footer';
import Form from './form';
import Results from './results';

//class App
class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            results: {},
            all: [],
            headers: ''
        };
    }
    handleForm = (results, all,headers) => {
        this.setState({ results, all,headers });
    }

    render() {
        return (
            <React.Fragment>
                <Header />
                <Form handler={this.handleForm} />
                <Results results={this.state.results} all={this.state.all} headers={this.state.headers}/>
                <Footer />
            </React.Fragment>
        )
    }
}

export default App;