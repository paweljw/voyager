import React, { Component } from 'react'
import { connect } from 'react-redux'
import Topbar from '../../components/Topbar/Topbar'
import Loading from '../../components/Loading/Loading'
import Stars from '../../components/Stars/Stars'
import Error from '../../components/Error/Error'
import * as actionCreators from '../../store/actions'

class Layout extends Component {
  logoutHandler = () => {
    this.props.logout()
  }

  componentDidMount() {
    if (this.props.allStars.length === 0) {
      this.props.pull()
    }
  }

  render() {
    return (
      <>
        <Topbar logoutHandler={this.logoutHandler} />
        {this.props.loading ? <Loading /> : null}
        {this.props.error ? <Error message={this.props.error} /> : null}
        {!this.props.loading && !this.props.error && this.props.allStars.length > 0
          ? <Stars stars={this.props.allStars} />
          : null}
      </>
    )
  }
}

const mapStateToProps = state => {
  return {
    token: state.github.token,
    allStars: state.stars.stars,
    loading: state.stars.loading,
    error: state.stars.error
  }
}

const mapDispatchToProps = dispatch => {
  return {
    logout: () => { dispatch(actionCreators.clearToken()) },
    pull: () => { dispatch(actionCreators.pullStars()) }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Layout)
