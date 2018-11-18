import React from 'react'
import classes from './Star.module.scss';

const star = (props) =>
  <div className={classes.Star}>
    <span className={classes.Stargazers}>
      &#x2606; {props.star.stargazers.totalCount}
    </span>
    <a href={props.star.url} className={classes.Link}>
      {props.star.nameWithOwner}
    </a>
    <hr className={classes.Hr} />
    <p className={classes.Ellipsis}>{props.star.description}</p>
    {props.star.primaryLanguage ? <p className={classes.Language}>
      <hr className={classes.Hr} />
      <span
        role="img"
        aria-label="language"
        style={{
          color: props.star.primaryLanguage.color,
        }}
      >
        &#x2022;
      </span>
      {props.star.primaryLanguage.name}
    </p> : null}
  </div>

export default star
