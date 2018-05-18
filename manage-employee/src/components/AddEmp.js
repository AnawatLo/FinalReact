import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './styles/AddEmp.css';
import { database } from '../configs/firebase';

class AddEmp extends Component {

  constructor(props) {
    super(props);
    this.state = {
      EmpNo: '',
      EmpName: '',
      EmpSureName: '',
      Salary: '',
      Department: '',
    };
    this.handleChangeEmpNo = this.handleChangeEmpNo.bind(this);
    this.handleChangeEmpName = this.handleChangeEmpName.bind(this);
    this.handleChangeEmpSureName = this.handleChangeEmpSureName.bind(this);
    this.handleChangeSalary = this.handleChangeSalary.bind(this);
    this.handleChangeSelect = this.handleChangeSelect.bind(this);
    this.onClickClear = this.onClickClear.bind(this);
    this.onClickup = this.onClickup.bind(this);
  }

  onClickClear() {
    this.setState({
      EmpNo: '',
      EmpName: '',
      EmpSureName: '',
      Salary: '',
      Department: 'AllDepartment',
    })
  }
  handleChangeEmpNo(event) {
    this.setState({ EmpNo: event.target.value });
  }
  handleChangeEmpName(event) {
    this.setState({ EmpName: event.target.value });
  }
  handleChangeEmpSureName(event) {
    this.setState({ EmpSureName: event.target.value });
  }
  handleChangeSalary(event) {
    this.setState({ Salary: event.target.value });
  }
  handleChangeSelect(event) {
    this.setState({ Department: event.target.value });
  }

  onClickup() {
    let { EmpNo, EmpName, EmpSureName, Salary, Department } = this.state;
    if (EmpNo !== '' && EmpName !== '' && EmpSureName !== '' && Salary !== '' && Department !== '') {
      if (!isNaN(parseInt(Salary))) {
        let dbCon = database.ref('employee');
        dbCon.push({
          EmpNo: EmpNo,
          EmpName: EmpName,
          EmpSureName: EmpSureName,
          Salary: Salary,
          Department: Department,
        });
        this.onClickClear();
      } else {
        alert('ข้อผิดพลาด กรุณาระบุข้อมูลให้ถูกต้อง :( ');
      }
    } else {
      alert('ข้อผิดพลาด กรุณาระบุข้อมูลให้ครบถ้วน :( ');
    }
  }

  render() {
    return (
      <div>
        <div style={{
          alignItems: 'center',
        }}>
          <div className='bodyAP'>
            <div className='EmpNoName'>
              <input className='EmpNo'
                value={this.state.EmpNo}
                onChange={this.handleChangeEmpNo}
                placeholder='Employee No.*'
              />
              <input className='EmpName'
                value={this.state.EmpName}
                onChange={this.handleChangeEmpName}
                placeholder='Employee Name*'
              />
              <div>
                <select value={this.state.Department ? this.state.Department : ''} name="department" aria-invalid="false" aria-required="false" id="form-department" onChange={this.handleChangeSelect}>
                  <option value="AllDepartment">All Department</option>
                  <option value="IT">IT</option>
                  <option value="HR">HR</option>
                  <option value="Marketing">Marketing</option>
                </select>
                {/* <svg class="jss33 jss32" focusable="false" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M7 10l5 5 5-5z"></path></svg> */}
              </div>
              <button className='btnAdd' onClick={() => this.onClickup()}>
                ADD
            </button>
            </div>
            <div className='SerSalary'>
              <input className='EmpSureName'
                value={this.state.EmpSureName}
                onChange={this.handleChangeEmpSureName}
                placeholder='Employee Surename*'
              />
              <input className='Salary'
                value={this.state.Salary}
                onChange={this.handleChangeSalary}
                placeholder='Salary*'
              />
              <button className='btnClear' onClick={() => this.onClickClear()}>
                CLEAR
            </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

AddEmp.propTypes = {
  lnt: PropTypes.oneOf(['en', 'th']),
};

AddEmp.defaultProps = {
  lnt: 'en',
};

export default AddEmp;
