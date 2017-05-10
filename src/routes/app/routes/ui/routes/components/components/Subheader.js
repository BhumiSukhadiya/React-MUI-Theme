import React from 'react';

const TmplSection = () => {
    return(
        <section className="row ui-section">
            <div className="col-lg-8 clearfix">
                <h2 className="section-header">Tmpl</h2>
            </div>
            <div className="col-md-12">

                <section className="panel panel-default">
                    <div className="panel-body padding-xl">
                        <div className="col-lg-8 col-lg-offset-2">
                            <h4>Basic</h4>
                            <div className="divider divider-md"></div>

                            <div className="divider divider-lg divider-dashed"></div>
                            <h4>Advanced</h4>
                            <div className="divider divider-md"></div>
                        </div>
                    </div>
                </section>

                <section className="panel panel-default">
                    <div className="panel-body padding-xl">
                        <div className="row">
                            <div className="col-md-6">

                            </div>
                            <div className="col-md-6">

                            </div>
                        </div>
                    </div>
                </section>

                <div className="row">
                    <div className="col-md-6"></div>
                    <div className="col-md-6"></div>
                </div>

            </div>
        </section>
    )
}

module.exports = TmplSection;
