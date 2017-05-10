import React from 'react';

const Blank = () => {
    return(
        <article className="article">
            <h2 className="article-title">Bootstrap Input Variants</h2>

            <section className="box box-default">
                <div className="box-body padding-lg">
                    <form className="form-horizontal">

                        <div className="row form-group">
                            <label htmlFor="" className="col-sm-2">Normal input</label>
                            <div className="col-sm-10">
                                <input type="text" className="form-control" />
                            </div>
                        </div>
                        <div className="divider divider-dashed divider-lg pull-in"></div>
                        <div className="row form-group">
                            <label htmlFor="" className="col-sm-2">Rounded input</label>
                            <div className="col-sm-10">
                                <input type="text" className="form-control input-round" />
                            </div>
                        </div>
                        <div className="divider divider-dashed divider-lg pull-in"></div>
                        <div className="row form-group">
                            <label htmlFor="label-focus" className="col-sm-2">Label focus</label>
                            <div className="col-sm-10">
                                <input type="text" className="form-control" id="label-focus" />
                            </div>
                        </div>
                        <div className="divider divider-dashed divider-lg pull-in"></div>
                        <div className="row form-group">
                            <label htmlFor="" className="col-sm-2">With help</label>
                            <div className="col-sm-10">
                                <input type="text" className="form-control" />
                                <span className="help-block">Some help text goes here.</span>
                            </div>
                        </div>
                        <div className="divider divider-dashed divider-lg pull-in"></div>
                        <div className="row form-group">
                            <label htmlFor="" className="col-sm-2">Password</label>
                            <div className="col-sm-10">
                                <input type="password" className="form-control" />
                            </div>
                        </div>
                        <div className="divider divider-dashed divider-lg pull-in"></div>
                        <div className="row form-group">
                            <label htmlFor="" className="col-sm-2">Placeholder</label>
                            <div className="col-sm-10">
                                <input type="text" className="form-control" placeholder="placeholder goes here" />
                            </div>
                        </div>
                        <div className="divider divider-dashed divider-lg pull-in"></div>
                        <div className="row form-group">
                            <label htmlFor="" className="col-sm-2">Disabled</label>
                            <div className="col-sm-10">
                                <input type="text" className="form-control" disabled defaultValue="disabled" />
                            </div>
                        </div>
                        <div className="divider divider-dashed divider-lg pull-in"></div>
                        <div className="row form-group">
                            <label htmlFor="" className="col-sm-2">Predefined value</label>
                            <div className="col-sm-10">
                                <input type="text" className="form-control" defaultValue="http://" />
                            </div>
                        </div>
                        <div className="divider divider-dashed divider-lg pull-in"></div>
                        <div className="row form-group">
                            <label htmlFor="" className="col-sm-2">Input with icons</label>
                            <div className="col-sm-10">
                                <input type="text" className="form-control" />
                                <span className="icon zmdi zmdi-star"></span>
                            </div>
                        </div>
                        <div className="divider divider-dashed divider-lg pull-in"></div>
                        <div className="row form-group">
                            <label htmlFor="" className="col-sm-2">Input primary</label>
                            <div className="col-sm-10">
                                <input type="text" className="form-control input-primary" />
                            </div>
                        </div>
                        <div className="row form-group">
                            <label htmlFor="" className="col-sm-2">Input info</label>
                            <div className="col-sm-10">
                                <input type="text" className="form-control input-info" />
                            </div>
                        </div>
                        <div className="row form-group">
                            <label htmlFor="" className="col-sm-2">Input success</label>
                            <div className="col-sm-10">
                                <input type="text" className="form-control input-success" />
                            </div>
                        </div>
                        <div className="row form-group">
                            <label htmlFor="" className="col-sm-2">Input warning</label>
                            <div className="col-sm-10">
                                <input type="text" className="form-control input-warning" />
                            </div>
                        </div>
                        <div className="row form-group">
                            <label htmlFor="" className="col-sm-2">Input error</label>
                            <div className="col-sm-10">
                                <input type="text" className="form-control input-danger" />
                            </div>
                        </div>
                        <div className="divider divider-dashed divider-lg pull-in"></div>
                        <div className="row form-group">
                            <label htmlFor="" className="col-sm-2">Control sizing</label>
                            <div className="col-sm-10">
                                <input type="text" className="form-control input-lg" />
                                <div className="divider"></div>
                                <input type="text" className="form-control" />
                                <div className="divider"></div>
                                <input type="text" className="form-control input-sm" />
                            </div>
                        </div>
                        <div className="divider divider-dashed divider-lg pull-in"></div>
                        <div className="row form-group">
                            <label htmlFor="" className="col-sm-2">Input Group</label>
                            <div className="col-sm-10">
                                <div className="input-group">
                                    <span className="input-group-addon">@</span>
                                    <input type="text" className="form-control" placeholder="Username" />
                                </div>
                                <div className="divider"></div>
                                <div className="input-group">
                                    <input type="text" className="form-control" />
                                    <span className="input-group-addon">.00</span>
                                </div>
                                <div className="divider"></div>
                                <div className="input-group">
                                    <span className="input-group-addon">$</span>
                                    <input type="text" className="form-control" />
                                    <span className="input-group-addon">.00</span>
                                </div>
                                <div className="divider"></div>
                                <div className="input-group">
                                    <span className="input-group-addon">
                                        <input type="checkbox" />
                                    </span>
                                    <input type="text" className="form-control" />
                                </div>
                                <div className="divider"></div>
                                <div className="input-group">
                                    <span className="input-group-addon">
                                        <input type="radio" />
                                    </span>
                                    <input type="text" className="form-control" />
                                </div>
                            </div>
                        </div>
                        <div className="divider divider-dashed divider-lg pull-in"></div>
                        <div className="row form-group">
                            <label htmlFor="" className="col-sm-2">Button addons</label>
                            <div className="col-sm-10">
                                <div className="row">
                                    <div className="col-lg-6">
                                        <div className="input-group">
                                            <span className="input-group-btn">
                                                <button className="btn btn-default" type="button">Go!</button>
                                            </span>
                                            <input type="text" className="form-control" />
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="input-group">
                                            <input type="text" className="form-control" />
                                            <span className="input-group-btn">
                                                <button className="btn btn-default" type="button">Go!</button>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="divider divider-dashed divider-lg pull-in"></div>
                        <div className="row form-group">
                            <label htmlFor="" className="col-sm-2">Textarea</label>
                            <div className="col-sm-10">
                                <textarea name="" id="" className="form-control" rows="4"></textarea>
                            </div>
                        </div>
                    </form>
                </div>
            </section>
        </article>
    )
}

module.exports = Blank;
