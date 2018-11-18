import React, { Component } from 'react'
import classes from './Login.module.scss'
import { connect } from 'react-redux'
import * as actionCreators from '../../store/actions'

class Login extends Component {
  state = {
    token: null
  }

  onChangeHandler = event => {
    this.setState({ token: event.target.value })
  }

  onClickHandler = () => {
    this.props.setToken(this.state.token)
  }

  render() {
    return (
      <div className={classes.Login}>
        <h1>Please provide a Github token</h1>
        <input type="text" name="github_token" onChange={this.onChangeHandler}></input>
        <button onClick={this.onClickHandler}>Submit</button>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setToken: (token) => dispatch(actionCreators.setToken(token))
  }
}

export default connect(null, mapDispatchToProps)(Login)
