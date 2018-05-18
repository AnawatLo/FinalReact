import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './styles/AddEmp.css';

class AddEmp extends Component {

  render() {
    return (
      <div>
          <h1>Add</h1>
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
