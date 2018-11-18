import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'

import * as actionCreators from './store/actions'
import Login from './containers/Login/Login'
import Layout from './containers/Layout/Layout'

class App extends Component {
  componentDidMount() {
    this.props.restoreToken()
  }

  render() {
    return (
      <div>
        {this.props.isAuth ? <Layout /> : <Login />}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    isAuth: state.github.token !== null
  }
}

const mapDispatchToProps = dispatch => {
  return {
    restoreToken: () => dispatch(actionCreators.restoreToken())
  }
}

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(App)
)
