import React, {useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { api } from '../api';
import { removeFav, saveFavs, selectFavorites, selectSavedId } from '../features/favorites/favoriteSlice'
import './Favorites.css';
import Remove from '../img/remove.png';

const Favorites = () => {
  const [title, setTitle] = useState('');

  const favorites = useSelector(selectFavorites);
  const savedId = useSelector(selectSavedId);

  const dispatch = useDispatch();

  const handleSave = async () => {
    const response = await api.saveFavs({title, movies: favorites});
    console.log(response)
    dispatch(saveFavs(response.id));
  }
  return (
    <div className="favorites">
      <input className="favorites__name" placeholder='List Title' value={title} onChange={e => setTitle(e.target.value)}/>
      {favorites.map(f => {
        return (
        <div className='titleandbutton'>
         <div className="favorites__list" key={f.imdbID}>
            <span>{f.Title} ({f.Year})</span>
            
          </div>
          <div className='removeButton'> <button  className='rem' disabled={savedId} onClick={e => dispatch(removeFav(f.imdbID))}><img className='remove-img' src={Remove}/></button>
          </div> 
        </div>         
        )
      })}
      {!savedId
        ? <button disabled={!title} className="favorites__save" onClick={handleSave}>Save list</button>
        : <Link to={`/saved-favorite/${savedId}`}><button className='saved'>Go to Saved List</button></Link>}
    </div>
  )
}

export default Favorites;