import React from 'react'
import MoviesListItem from './MoviesListItem'

const MoviesList = ({ movies }) => {
  return (
    <div>
      {movies?.length
        ? movies.map(m => <MoviesListItem movie={m} key={m.imdbID} />)
        : <h1>No movies.</h1> }
    </div>
  )
}

export default MoviesList