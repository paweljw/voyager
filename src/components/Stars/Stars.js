import React from 'react'
import Star from './Star/Star'
import classes from './Stars.module.scss';

const stars = (props) =>
  <div className={classes.Stars}>
    {props.stars.map(item => {
      return <Star key={item.id} star={item} />
    })
    }
  </div>

export default stars
