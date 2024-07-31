import react from react;
import { renderHook } from '@testing-library/react-hooks';
import { useFetchGifs } from '../../hooks/useFetchGifs';
import { MemoryRouter } from 'react-router-dom';
import PropTypes from 'prop-types'
import React, { Component } from 'react'
import { connect } from 'react-redux'

export class EmployeeSpotlight extends Component {
<<<<<<< HEAD
     const emp = [];
     const emp2 = [];
=======
>>>>>>> main
  static propTypes = {
    second: third
  }

<<<<<<< HEAD

=======
  
>>>>>>> main
  render() {
    return (
      <div>EmployeeSpotlight</div>
    )
  }
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(EmployeeSpotlight)
