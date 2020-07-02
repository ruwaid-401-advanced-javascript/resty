import React from 'react';


import Header from './components/header';
import Routes from './components/routes';
import Footer from './components/footer';
import './styles/results.scss'
import './styles/style.scss';


//class App
class App extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Header />
                <Routes />
                <Footer />
            </React.Fragment>
        )
    }
}

export default App;