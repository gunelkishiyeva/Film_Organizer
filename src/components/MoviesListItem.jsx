import React from 'react';
import { useDispatch, useSelector } from 'react-redux'
import {addFav, selectSavedId} from '../features/favorites/favoriteSlice'
import './MoviesListItem.css';
const MoviesListItem = ({movie}) => {
  const dispatch = useDispatch();
  const savedId = useSelector(selectSavedId);

  const handleClick = () => {
    dispatch(addFav(movie));
  }
  return (
    
  <>
<article className="movie-item">
      <img className="movie-item__poster" src={movie.Poster} alt={movie.Title} />
      <div className="movie-item__info">
      <h3 className="movie-item__title">{movie.Title} ({movie.Year})</h3>
      <button className="movie-item__add-button" onClick={handleClick} disabled={savedId}>Add to Favourites</button>
    </div>
    </article>
    </>
  )
}

export default MoviesListItem;