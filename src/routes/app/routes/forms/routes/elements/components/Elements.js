import React from 'react';
import AutoComplete from './AutoComplete';
import Checkbox from './Checkbox';
import Chip from './Chip';
import Datepicker from './Datepicker';
import Dialog from './Dialog';
import RadioButton from './RadioButton';
import SelectField from './SelectField';
import Slider from './Slider';
import TextField from './TextField';
import TimePicker from './TimePicker';
import Toggle from './Toggle';
import InputVariants from './InputVariants';
import QueueAnim from 'rc-queue-anim';

const Elements = () => {
    return(
        <div className="container-fluid with-maxwidth chapter">

            <QueueAnim type="bottom" className="ui-animate">
                <div key="1"><RadioButton /></div>
                <div key="2"><Checkbox /></div>
                <div key="3"><Toggle /></div>
                <div key="4"><TextField /></div>
                <div key="5"><SelectField /></div>
                <div key="6"><AutoComplete /></div>
                <div key="7"><Slider /></div>
                <div key="8"><TimePicker /></div>
                <div key="9"><Datepicker /></div>
                <div key="10"><Dialog /></div>
                <div key="11"><Chip /></div>
                <div key="12"><InputVariants /></div>
            </QueueAnim>

        </div>
    )
}

module.exports = Elements;
