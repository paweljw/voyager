import React from 'react'
import classes from './Loading.module.css';

const loading = (props) =>
  <div className={classes.Spinner}>
    <div className={classes.DoubleBounce1}></div>
    <div className={classes.DoubleBounce2}></div>
  </div>

export default loading
