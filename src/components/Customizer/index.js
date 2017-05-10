import React from 'react';
import APPCONFIG from 'constants/Config';
import LayoutOptions from './LayoutOptions'
import ColorOptions from './ColorOptions';
import ThemeOptions from './ThemeOptions';
import 'jquery-slimscroll/jquery.slimscroll.min';

class Customizer extends React.Component {
    constructor() {
        super();
    }

    componentDidMount() {
        const { quickviewInner } = this.refs;
        $(quickviewInner).slimscroll({
            height: '100%'
        })
    }

    toggleCustomizer = () => {
        const $body = $('#body');
        $body.toggleClass('quickview-open-customizer')
    }

    closeCustomizer = () => {
        const $body = $('#body');
        $body.removeClass('quickview-open-customizer')
    }


    render() {
        return (
            <section 
                className="quickview-wrapper customizer hidden-lg-down theme-light" 
                id="quickview-customizer"
            >
                <a className="customizer-close" href="javascript:;" onClick={this.closeCustomizer}>
                    <span className="material-icons">close</span>
                </a>
                <a className="customizer-toggle" href="javascript:;" onClick={this.toggleCustomizer}>
                    <span className="material-icons">settings</span>
                </a>

                <div className="quickview-inner" ref="quickviewInner">
                    <p className="customizer-header">Customizer</p>
                    <p className="small no-margin">Customize and preview in real time.</p>

                    <div className="divider divider-lg divider-solid"></div>
                    <LayoutOptions />

                    <div className="divider divider-lg divider-solid"></div>
                    <ColorOptions />

                    <div className="divider divider-lg divider-solid"></div>
                    <ThemeOptions />

                    <div className="divider divider-lg divider-solid"></div>
                    <div className="text-right">
                        <a target="_blank" href={APPCONFIG.productLink}>Download it Now</a>
                    </div>
                </div>
            </section>
        )
    }
}

module.exports = Customizer;
