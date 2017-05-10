import React from 'react';
import Header from 'components/Header';
import Sidenav from 'components/Sidenav';
import Footer from 'components/Footer';
import Customizer from 'components/Customizer';
import 'react-s-alert/dist/s-alert-default.css';
import 'react-s-alert/dist/s-alert-css-effects/flip.css';
import Alert from 'react-s-alert';

class MainApp extends React.Component {
    render() {
        const { children, location } = this.props;

        return (
            <div className="main-app-container">
                <Sidenav />

                <section id="page-container" className="app-page-container">
                    <Header />

                    <div className="app-content-wrapper">
                        <div className="app-content">
                            <div className="full-height">
                                {children}
                            </div>
                        </div>

                        <Footer />
                    </div>
                </section>

                <Customizer />
                <Alert stack={{limit: 3}} />
            </div>
        )
    }
}

module.exports = MainApp;
