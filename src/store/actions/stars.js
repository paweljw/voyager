import * as actionTypes from './actionTypes'
import apollo from '../../apollo'
import gql from 'graphql-tag'

const STARS_QUERY = gql`
query Stars($after: String) {
  viewer {
    starredRepositories(after: $after, first: 100) {
      totalCount,
      pageInfo {
        endCursor,
        hasNextPage
      },
      nodes {
        id,
        url,
        stargazers {
          totalCount
        },
        url,
        nameWithOwner,
        primaryLanguage {
          color,
          name
        },
        description,
        repositoryTopics(first: 100) {
          nodes {
            topic {
              name
            }
          }
        }

      }
    }
  }
}`

export const startStarsPull = () => {
  return {
    type: actionTypes.STARS_PULL_STARTED
  }
}

export const starsError = error => {
  return {
    type: actionTypes.STARS_PULL_ERROR,
    error
  }
}

export const finishStarsPull = () => {
  return {
    type: actionTypes.STARS_PULL_FINISHED
  }
}

export const appendStars = (stars) => {
  return {
    type: actionTypes.APPEND_STARS,
    stars
  }
}

export const pullStars = (after = null) => {
  return dispatch => {
    if (after === null) {
      dispatch(startStarsPull())
    }

    apollo.query({
      query: STARS_QUERY,
      variables: {
        after
      }
    }).then(response => {
      const data = response.data
      const pageInfo = data.viewer.starredRepositories.pageInfo

      dispatch(appendStars(data.viewer.starredRepositories.nodes))

      if (pageInfo.hasNextPage) {
        dispatch(pullStars(pageInfo.endCursor))
      } else {
        dispatch(finishStarsPull())
      }
    }).catch(error => {
      dispatch(starsError(error))
    })
  }
}
