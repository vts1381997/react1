import React, { Component } from 'react';

class AddUser extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            id: "",
            name: "",
            tel: "",
            permission: "",
            trangThaiChinhSua: false
        }

    }
    isChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        console.log(name);
        console.log(value);
        this.setState({
            [name] : value
        });
        var item = {};
        item.id = this.state.id;
        item.name = this.state.name;
        item.tel = this.state.tel;
        item.permission = this.state.permission;
    }
    thayDoiTrangThai = () => {
        this.setState({
            trangThaiChinhSua: !this.state.trangThaiChinhSua
        });
    }
    hienThiNut = () => {
        if (this.state.trangThaiChinhSua === true) {
            return <div className="btn btn-block btn-outline-secondary" onClick={() => this.thayDoiTrangThai()}>Đóng lại</div>;
        }
        else {
            return <div className="btn btn-block btn-outline-info" onClick={() => this.thayDoiTrangThai()}>Thêm mới</div>;
        }
    }
    hienThiForm = () => {
        if (this.state.trangThaiChinhSua === true) {
            return (
                <div className="col-12">
                    <form method="post">
                <div className="card text-white bg-warning mb-3 mt-2">
                    <div className="card-header text-center">Thêm thông tin User</div>
                    <div className="card-body">
                        <div className="form-group">
                            <h5 className="card-title">Tên User</h5>
                            <input type="text" name="name" onChange={(event)=>this.isChange(event)} className="form-control" placeholder="Tên user" />
                        </div>
                        <div className="form-group">
                            <h5 className="card-title">Điện thoại</h5>
                            <input type="text" name="tel" onChange={(event)=>this.isChange(event)} className="form-control" placeholder="Số điện thoại" />
                        </div>
                        <div className="form-group">
                            <select className="custom-select" name="permission" onChange={(event)=>this.isChange(event)} required>
                                <option value>Chọn quyền mặc định</option>
                                <option value="1">Admin</option>
                                <option value="2">Moderator</option>
                                <option value="3">Normal</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <input type="reset" onClick={(name,tel,permission)=>this.props.add(this.state.name, this.state.tel, this.state.permission)} className="btn btn-block btn-info" value="Thêm mới"/>
                        </div>
                    </div>
                </div>
                </form>
                </div>
            )
        }
    }


    render() {
        console.log(this.state);
        
        return (
           
<div>
                {this.hienThiNut()}
                {this.hienThiForm()}
</div>
            

        );
    }
}

export default AddUser;