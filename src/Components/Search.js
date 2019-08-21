import React, { Component } from 'react';
import EditUser from './EditUser';

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tempValue: '',
            userObj: {}
        }
    }
    getUserEditInfo = (info) => {
        this.setState({
            userObj: info
        });
        this.props.getUserEditInfoApp(info);
    } 
    isShowEditForm = () => {
        if(this.props.editUserStatus === true)
        {
            return <EditUser 
            getUserEditInfo = {(info)=>this.getUserEditInfo(info)}
            userEditObject={this.props.userEditObject} changeEditUserStatus={()=>this.props.changeEditUserStatus()}/>
        }
    }
    isChange = (event) => {
        //console.log(event.target.value);
        this.setState({
            tempValue: event.target.value
        });
        //this.props.checkConnectProps(this.state.tempValue);

    }
    render() {
        return (
            <div className="col-12">
                {this.isShowEditForm()}          
                <div className="form-group">
                    <div className="btn-group">
                        <input type="text" className="form-control" onChange={(event) => this.isChange(event)} placeholder="Nhập tên cần tìm " />
                        <div className="btn btn-info" onClick={(dl) => this.props.checkConnectProps(this.state.tempValue)}>Tìm</div>
                    </div>
                </div>
                <hr />
            </div>

        );
    }
}

export default Search;