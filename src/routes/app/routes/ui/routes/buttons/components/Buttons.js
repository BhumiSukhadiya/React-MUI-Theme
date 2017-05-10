import React from 'react';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import IconButton from 'material-ui/IconButton';
import QueueAnim from 'rc-queue-anim';


const mWidthStyle = {
    minWidth: '135px'
};

const FAB = () => {
    return (
        <div className="row">
            <div className="col-xl-5">

                <div className="box box-default">
                    <div className="box-header">FAB</div>
                    <div className="box-body text-center">

                        <FloatingActionButton>
                            <ContentAdd />
                        </FloatingActionButton>
                        <span className="space"></span>

                        <FloatingActionButton mini={true}>
                            <ContentAdd />
                        </FloatingActionButton>
                        <span className="space space-md"></span>

                        <FloatingActionButton secondary={true}>
                            <ContentAdd />
                        </FloatingActionButton>
                        <span className="space"></span>

                        <FloatingActionButton mini={true} secondary={true}>
                            <ContentAdd />
                        </FloatingActionButton>
                        <span className="space space-md"></span>

                        <FloatingActionButton disabled={true}>
                            <ContentAdd />
                        </FloatingActionButton>
                        <span className="space"></span>

                        <FloatingActionButton mini={true} disabled={true}>
                            <ContentAdd />
                        </FloatingActionButton>

                    </div>
                </div>

            </div>
            <div className="col-xl-5">

                <div className="box box-default">
                    <div className="box-header">Icon Button</div>
                    <div className="box-body text-center">

                        <IconButton> <ContentAdd /> </IconButton>
                        <span className="space"></span>

                        <IconButton> <ContentAdd /> </IconButton>
                        <span className="space"></span>

                        <IconButton disabled={true}> <ContentAdd /> </IconButton>

                    </div>
                </div>

            </div>
        </div>
    )
}

const Raised = () => {
    return (
        <div className="row">
            <div className="col-xl-5">

                <div className="box box-default">
                    <div className="box-header">Raised</div>
                    <div className="box-body text-center">
                        <RaisedButton style={mWidthStyle} label="Default" /><div className="divider"></div>
                        <RaisedButton style={mWidthStyle} label="Primary" primary={true} /><div className="divider"></div>
                        <RaisedButton style={mWidthStyle} label="Secondary" secondary={true} /><div className="divider"></div>
                        <RaisedButton style={mWidthStyle} label="Disabled" disabled={true} /><div className="divider"></div>
                    </div>
                </div>

            </div>
            <div className="col-xl-5">

                <div className="box box-default">
                    <div className="box-header">Flat</div>
                    <div className="box-body text-center">
                        <FlatButton style={mWidthStyle} label="Default" /><div className="divider"></div>
                        <FlatButton style={mWidthStyle} label="Primary" primary={true} /><div className="divider"></div>
                        <FlatButton style={mWidthStyle} label="Secondary" secondary={true} /><div className="divider"></div>
                        <FlatButton style={mWidthStyle} label="Disabled" disabled={true} /><div className="divider"></div>
                    </div>
                </div>

            </div>
        </div>
    )
}

const Raised2 = () => {
    return (
        <div className="row">
            <div className="col-xl-5">

                <div className="box box-default">
                    <div className="box-header">Raised</div>
                    <div className="box-body text-center">
                        <RaisedButton style={mWidthStyle} label="Left Icon" labelPosition="after" primary={true} icon={<ContentAdd />} /><div className="divider"></div>
                        <RaisedButton style={mWidthStyle} label="Right Icon" labelPosition="before" secondary={true} icon={<ContentAdd />} /><div className="divider"></div>
                        <RaisedButton style={mWidthStyle} label="Link Button" href="https://github.com/" target="_blank" secondary={true} /><div className="divider"></div>
                    </div>
                </div>

            </div>
            <div className="col-xl-5">

                <div className="box box-default">
                    <div className="box-header">Flat</div>
                    <div className="box-body text-center">
                        <FlatButton style={mWidthStyle} label="Left Icon" labelPosition="after" primary={true} icon={<ContentAdd />} /><div className="divider"></div>
                        <FlatButton style={mWidthStyle} label="Right Icon" labelPosition="before" secondary={true} icon={<ContentAdd />} /><div className="divider"></div>
                        <FlatButton style={mWidthStyle} label="Link Button" href="https://github.com/" target="_blank" secondary={true} /><div className="divider"></div>
                    </div>
                </div>

            </div>
        </div>
    )
}

const Page = () => {
    return(
        <section className="container-fluid with-maxwidth chapter">
            <article className="article">
                <h2 className="article-title">Material Buttons</h2>

                    <QueueAnim type="bottom" className="ui-animate">
                        <div key="1"><FAB /></div>
                        <div key="2"><Raised /></div>
                        <div key="3"><Raised2 /></div>
                    </QueueAnim>

            </article>
        </section>
    )
}

module.exports = Page;
