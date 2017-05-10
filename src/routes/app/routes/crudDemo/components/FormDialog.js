import React from "react";
import RaisedButton from "material-ui/RaisedButton";
import {
    Dialog,
    TextField,
    Divider,
    RadioButton,
    RadioButtonGroup,
    SelectField,
    MenuItem,
    Toggle,
    Checkbox,
    Chip
} from "material-ui";
import {connect} from "react-redux";
import {addNewUser, updateUser} from "../../../../../service/user.service";
//noinspection JSUnresolvedVariable
import _ from "lodash";
import Alert from "react-s-alert";
class DataForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            Country_value: props.userData.country || 'India',
            defaultStatus: !_.isEmpty(props.userData) ? props.userData.status : true,
            dialogType: !_.isEmpty(props.userData) ? 'update' : 'insert',
            imagePreviewUrl: './assets/images/' + props.userData.profile || '',
            errors: {}
        }
    }

    onSubmitForm = (e) => {
        e.preventDefault();
        let fd = new FormData();

        let checkboxes = ['tech1', 'tech2', 'tech3'];
        let technologyArr = [];
        for (let i = 0; i < checkboxes.length; i++) {
            if (this.refs[checkboxes[i]].state.switched) {
                technologyArr.push(this.refs[checkboxes[i]].props.value)
            }
        }
        let err = {};
        let formValid = true;
        if (_.isEmpty(this.refs.name.input.value)) {
            err['name'] = "Name can't be empty!";
            formValid = false;
        }
        if (_.isEmpty(this.refs.email.input.value)) {
            err['email'] = "Email can't be empty!";
            formValid = false;
        }
        if (_.isEmpty(technologyArr)) {
            err['technology'] = "Select at least one technology!";
            formValid = false;
        }
        if (this.state.dialogType == 'insert' && _.isEmpty(this.refs.fileUpload.files)) {
            err['profile'] = "Select Profile Image!";
            formValid = false;
        }
        if (!formValid) {
            this.setState({
                errors: err
            });
            return;
        }

        fd.append('name', this.refs.name.input.value);
        fd.append('email', this.refs.email.input.value);
        fd.append('gender', this.refs.gender.state.selected);
        fd.append('country', this.refs.country.props.value);
        // fd.append('status',document.getElementById('status').value);
        for (let i = 0; i < technologyArr.length; i++) {
            fd.append('technology[]', technologyArr[i])
        }
        fd.append('status', this.refs.status.state.switched);
        if (!_.isEmpty(this.refs.fileUpload.files)) {
            fd.append('file', this.refs.fileUpload.files[0]);
        }
        if (this.state.dialogType == 'insert') {
            this.props.dispatch(addNewUser(fd)).then((res) => {
                this.props.closeDialog();
                Alert.success(res, {
                    position: 'top-right',
                    effect: 'flip',
                    timeout: 3000
                });
            });
        } else {
            this.props.dispatch(updateUser(fd, this.props.userData._id)).then((res) => {
                this.props.closeDialog();
                Alert.success(res, {
                    position: 'top-right',
                    effect: 'flip',
                    timeout: 3000
                });
            });
        }
    };

    handleChange = (event, index, value) => this.setState({Country_value: value});
    handleToggle = (event, isInputChecked) => {
        this.setState(() => ({defaultStatus: !isInputChecked}));
    };
    handleImageChange = (e) => {
        e.preventDefault();
        let reader = new FileReader();
        let file = e.target.files[0];
        reader.onloadend = () => {
            this.setState({
                file: file,
                imagePreviewUrl: reader.result
            });
        };
        reader.readAsDataURL(file);
    };

    render() {
        //console.log(this.props.userData)
        let {userData}=this.props;
        //noinspection JSUnresolvedVariable
        const actions = [
            <RaisedButton
                label='Cancel'
                primary={true}
                onTouchTap={this.props.closeDialog}
                style={{marginRight: 10}}
            />
        ];

        //noinspection JSUnresolvedVariable
        return (
            <div>
                <Dialog
                    title='Insert Data'
                    actions={actions}
                    modal={true}
                    open={this.props.openDialog}
                    autoScrollBodyContent={true}
                >
                    <div>
                        <Divider/>
                        <form onSubmit={this.onSubmitForm} name='UserForm'>
                            <table>
                                <tbody>
                                <tr>
                                    <td><label style={{paddingRight: 10}}>Name:</label></td>
                                    <td><TextField hintText='Enter Your Name' type='text' ref='name'
                                                   defaultValue={userData.name || '' }
                                                   errorText={this.state.errors.name || ''}/></td>
                                </tr>
                                <tr>
                                    <td><label style={{paddingRight: 10}}>Email:</label></td>
                                    <td><TextField hintText='Enter Your Email Id' type='email' ref='email'
                                                   defaultValue={userData.email || ''}
                                                   errorText={this.state.errors.email || ''}/>
                                    </td>
                                </tr>
                                <tr>
                                    <td><label style={{paddingRight: 10}}>Gender:</label></td>
                                    <td>
                                        <div style={{display: 'inline-flex'}}>
                                            <RadioButtonGroup name='gender' ref='gender'
                                                              defaultSelected={userData.gender || 'Male'}>
                                                <RadioButton
                                                    value='Male'
                                                    label='Male'
                                                    labelPosition='left'
                                                />
                                                <RadioButton
                                                    value='Female'
                                                    label='Female'
                                                    labelPosition='right'
                                                />
                                            </RadioButtonGroup>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td><label style={{paddingRight: 10}}>Country:</label></td>
                                    <td><SelectField
                                        value={this.state.Country_value}
                                        onChange={this.handleChange}
                                        autoWidth={true}
                                        ref='country'
                                    >
                                        <MenuItem value='India' primaryText='India'/>
                                        <MenuItem value='USA' primaryText='USA'/>
                                        <MenuItem value='China' primaryText='China'/>
                                        <MenuItem value='Algeria' primaryText='Algeria'/>
                                        <MenuItem value='Australia' primaryText='Australia'/>
                                    </SelectField></td>
                                </tr>
                                <tr>
                                    <td><label style={{paddingRight: 10}}>Technology:</label></td>
                                    <td>
                                        <Checkbox ref='tech1' value='React Js'
                                                  defaultChecked={(!_.isEmpty(userData) && userData.technology.indexOf('React Js') >= 0)}
                                                  label='React JS'/>
                                        <Checkbox ref='tech2' value='Angular JS'
                                                  defaultChecked={(!_.isEmpty(userData) && userData.technology.indexOf('Angular JS') >= 0)}
                                                  label='Angular JS'/>
                                        <Checkbox ref='tech3' value='PHP'
                                                  defaultChecked={(!_.isEmpty(userData) && userData.technology.indexOf('PHP') >= 0)}
                                                  label='PHP'/>
                                        <span className="color-danger" style={{
                                            fontSize: 12,
                                            borderTop: '2px solid red',
                                            paddingTop: 2
                                        }}>{this.state.errors.technology || ''}</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td><label style={{paddingRight: 10}}>Profile:</label></td>
                                    <td>{!_.isEmpty(userData) &&
                                    <div><img src={this.state.imagePreviewUrl} width={150}
                                              height={150}/><br/></div>}
                                        <input type='file' ref='fileUpload' onChange={this.handleImageChange}
                                               style={{marginBottom: 2}}/><br/>
                                        <span className="color-danger" style={{
                                            fontSize: 12,
                                            borderTop: '2px solid red',
                                            paddingTop: 2
                                        }}> {this.state.dialogType == 'insert' && this.state.errors.profile || ''}</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td><label style={{paddingRight: 10}}>Status:</label></td>
                                    <td>
                                        <div style={{display: 'inline-flex'}}>
                                            <Toggle ref='status' defaultToggled={this.state.defaultStatus}
                                                    onToggle={this.handleToggle}/>
                                            {this.state.defaultStatus ?
                                                <Chip backgroundColor='#5cb85c' labelColor='white'>Active</Chip> :
                                                <Chip backgroundColor='#f86c6b' labelColor='white'>Inactive</Chip>}
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td colSpan={2} style={{paddingLeft:50}}>
                                            <RaisedButton label="Submit" primary={true} type="submit" style={{marginTop:5}} />
                                    </td>
                                </tr>
                                </tbody>
                            </table>
                        </form>
                    </div>
                </Dialog>
            </div>
        );
    }
}

export default connect()(DataForm);