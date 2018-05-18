import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './styles/SearchEmp.css';

class SearchEmp extends Component {

  render() {
    return (
      <div>
          <h1>Search</h1>
      </div>
    );
  }
}

SearchEmp.propTypes = {
  lnt: PropTypes.oneOf(['en', 'th']),
};

SearchEmp.defaultProps = {
  lnt: 'en',
};

export default SearchEmp;
