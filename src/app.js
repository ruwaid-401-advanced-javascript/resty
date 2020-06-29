import React from 'react';
import './styles/style.scss';
import './styles/header.scss'
import './styles/footer.scss'
import './styles/form.scss'


const Header = () => {
    return (
        <header>
            <h1>RESTy</h1>
        </header>
    )
  };

const Footer = () => <footer>&copy;2020 Ruwaid</footer>

// Main 
class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            words: 'initial State',
            all: []
        };
        this.url = '';
        this.method = 'GET';
    }

    handleClick = e => {
        e.preventDefault();
        this.url = document.getElementById('url').value;
        let words = `${this.method} ${this.url}`;
        this.setState({ words });
        this.state.all.push(<div >{words}</div>);
    }

    get = e => {
        e.preventDefault();
        this.method = 'GET'
        document.getElementsByClassName('aqua')[0].removeAttribute('class');
        e.target.setAttribute('class', 'aqua');
    }

    post = e => {
        e.preventDefault();
        this.method = 'POST'
        document.getElementsByClassName('aqua')[0].removeAttribute('class');
        e.target.setAttribute('class', 'aqua');
    }

    put = e => {
        e.preventDefault();
        this.method = 'PUT'
        document.getElementsByClassName('aqua')[0].removeAttribute('class');
        e.target.setAttribute('class', 'aqua');
    }

    delete = e => {
        this.method = 'DELETE'
        document.getElementsByClassName('aqua')[0].removeAttribute('class');
        e.target.setAttribute('class', 'aqua');
    }

    render() {
        return (
            <main>
                <div id='main-header'>
                    <div id='url-div'>
                        <label for='url'>URL:</label>
                        <input id='url'></input>
                        <button onClick={this.handleClick}>GO!</button>
                    </div>

                    <div id='buttons'>
                        <button class='aqua' onClick={this.get}>GET</button>
                        <button onClick={this.post}>POST</button>
                        <button onClick={this.put}>UPDATE</button>
                        <button onClick={this.delete}>DELETE</button>
                    </div>
                </div>


                <div id='content'>
                    <div id='history'>
                        {this.state.all}
                    </div>
                    <span> {this.state.words}</span>
                    
                </div>
            </main>
        )
    }
}

//class App
class App extends React.Component {
    render() {
        return (
            // I will add Header, Main, Footer
            <React.Fragment>
                <Header />
                <Main />
                <Footer />
            </React.Fragment>
        )
    }
}

export default App;