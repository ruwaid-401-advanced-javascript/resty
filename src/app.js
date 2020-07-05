import React from 'react';
import './styles/style.scss';
import Header from './header';
import Footer from './footer';
import Form from './form';

//class App
class App extends React.Component {
    render() {
        return (
            // I will add Header, Main, Footer
            <React.Fragment>
                <Header />
                <Form />
                <Footer />
            </React.Fragment>
        )
    }
}

export default App;