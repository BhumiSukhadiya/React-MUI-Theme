import React from 'react';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';
import QueueAnim from 'rc-queue-anim';
import {RaisedButton, FloatingActionButton} from 'material-ui';
import DataForm from './FormDialog';
import {connect} from 'react-redux';
import {getUsers,deleteUser} from '../../../../../service/user.service';
import Alert from 'react-s-alert';

class CRUDPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            fixedHeader: false,
            fixedFooter: true,
            stripedRows: false,
            showRowHover: false,
            selectable: false,
            multiSelectable: false,
            enableSelectAll: false,
            deselectOnClickaway: true,
            showCheckboxes: false,
            height: '500px',
            open: false,
            users: null,
            selectedUser: {}
        };
    }

    componentWillMount() {
        this.props.dispatch(getUsers()).then(() => {
            this.setState({
                users: this.props.allusers.users
            })
        });

    }

    handleDialogOpen = () => {
        this.setState({open: true});
    };

    handleClose = () => {
        this.props.dispatch(getUsers()).then(() => {
            this.setState({
                users: this.props.allusers.users,
                open: false,
                selectedUser: {}
            })
        });
    };

    handleUpdate = (data) => {
        this.setState({
            selectedUser: data,
            open: true
        })
    };

    handleDelete=(id)=>{
        let ans=confirm('Delete selected user?');
        if(ans){
            this.props.dispatch(deleteUser(id)).then((res)=>{
                Alert.success(res, {
                    position: 'top-right',
                    effect: 'flip',
                    timeout:3000
                });
                this.props.dispatch(getUsers()).then(() => {
                    this.setState({
                        users: this.props.allusers.users
                    })
                });
            })
        }

    };

    render() {
        return (
            <div className='container-fluid with-maxwidth'>
                <QueueAnim type='top' className='ui-animate'>
                    <div key='1'>
                        <article className='article'>
                            <h2 className='article-title'>CRUD Example</h2>
                            <div className='row'>
                                <div className='col-xl-11'>
                                    <RaisedButton label='Insert New Record' secondary={true}
                                                  onTouchTap={this.handleDialogOpen} style={{margin: 12}}/>
                                    {this.state.open && <DataForm openDialog={this.state.open} closeDialog={this.handleClose}
                                              userData={this.state.selectedUser || {}}/>}
                                    <Table
                                        height={this.state.height}
                                        fixedHeader={this.state.fixedHeader}
                                        fixedFooter={this.state.fixedFooter}
                                        selectable={this.state.selectable}
                                        multiSelectable={this.state.multiSelectable}
                                    >
                                        <TableHeader
                                            displaySelectAll={this.state.showCheckboxes}
                                            adjustForCheckbox={this.state.showCheckboxes}
                                            enableSelectAll={this.state.enableSelectAll}
                                        >
                                            <TableRow>
                                                <TableHeaderColumn tooltip='ID'>ID</TableHeaderColumn>
                                                <TableHeaderColumn tooltip='Name'>Name</TableHeaderColumn>
                                                <TableHeaderColumn tooltip='Email Id'>Email</TableHeaderColumn>
                                                <TableHeaderColumn tooltip='Gender'>Gender</TableHeaderColumn>
                                                <TableHeaderColumn tooltip='Country'>Country</TableHeaderColumn>
                                                <TableHeaderColumn
                                                    tooltip='Interrested Technology'>Technology</TableHeaderColumn>
                                                <TableHeaderColumn tooltip='Profile'>Profile</TableHeaderColumn>
                                                <TableHeaderColumn tooltip='Status'>Status</TableHeaderColumn>
                                                <TableHeaderColumn tooltip='Action'>Action</TableHeaderColumn>
                                            </TableRow>
                                        </TableHeader>
                                        <TableBody
                                            displayRowCheckbox={this.state.showCheckboxes}
                                            deselectOnClickaway={this.state.deselectOnClickaway}
                                            showRowHover={this.state.showRowHover}
                                            stripedRows={this.state.stripedRows}
                                        >
                                            {this.state.users !== null && this.state.users.map((row, index) => (
                                                <TableRow key={index}>
                                                    <TableRowColumn>{index + 1}</TableRowColumn>
                                                    <TableRowColumn>{row.name}</TableRowColumn>
                                                    <TableRowColumn>{row.email}</TableRowColumn>
                                                    <TableRowColumn>{row.gender}</TableRowColumn>
                                                    <TableRowColumn>{row.country}</TableRowColumn>
                                                    <TableRowColumn>{row.technology.map((tech, i) => (
                                                        <div key={i}>{tech}</div>))}
                                                    </TableRowColumn>
                                                    <TableRowColumn><img src={'./assets/images/' + row.profile}
                                                                         height={100} width={100}/></TableRowColumn>
                                                    <TableRowColumn>{row.status ? 'Active' : 'Inactive'}</TableRowColumn>
                                                    <TableRowColumn>
                                                        <div>
                                                            <FloatingActionButton mini={true} secondary={true}
                                                                                  onTouchTap={() => this.handleUpdate(row)}>
                                                                <i className='material-icons'>mode_edit</i>
                                                            </FloatingActionButton>
                                                            <FloatingActionButton mini={true}  onTouchTap={() => this.handleDelete(row._id)}>
                                                                <i className='material-icons'>delete</i>
                                                            </FloatingActionButton>
                                                        </div>
                                                    </TableRowColumn>
                                                </TableRow>
                                            ))}
                                        </TableBody>
                                    </Table>
                                </div>
                            </div>
                        </article>
                    </div>
                </QueueAnim>
            </div>
        );
    }
}


const mapStateToProps = (state) => {
    return {
        allusers: state.user_data
    }
};

module.exports = connect(mapStateToProps)(CRUDPage);

