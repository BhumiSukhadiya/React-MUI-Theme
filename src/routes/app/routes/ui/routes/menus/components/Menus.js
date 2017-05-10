import React from 'react';
import Menu from './Menu';
import IconMenu from './IconMenu';
import DropdownMenu from './DropdownMenu';
import QueueAnim from 'rc-queue-anim';

const Menus = () => {
    return(
        <section className="container-fluid with-maxwidth chapter">
            <QueueAnim type="bottom" className="ui-animate">
                <div key="1"><Menu /></div>
                <div key="2"><IconMenu /></div>
                <div key="3"><DropdownMenu /></div>
            </QueueAnim>
        </section>
    )
}

module.exports = Menus;
