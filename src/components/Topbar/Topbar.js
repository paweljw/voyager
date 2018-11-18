import React from 'react'
import classes from './Topbar.module.scss'

const topbar = (props) => {
  return <nav className={classes.Topbar}>
    <button className={classes.Logout} onClick={props.logoutHandler}>Logout</button>
    <h1 className={classes.Brand}>Voyager</h1>
  </nav>
}

export default topbar
