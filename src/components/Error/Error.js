import React from 'react'
import classes from './Error.module.css';

const error = (props) =>
  <div className={classes.Error}>
    We're very sorry, but something went wrong: {props.message}. Consider refreshing the page or logging out and in again.
  </div>

export default error
