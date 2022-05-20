import React, {useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { api } from '../api';
import { removeFav, saveFavs, selectFavorites, selectSavedId } from '../features/favorites/favoriteSlice'
import './Favorites.css';
const Favorites = () => {
  const [title, setTitle] = useState('');

  const favorites = useSelector(selectFavorites);
  const savedId = useSelector(selectSavedId);

  const dispatch = useDispatch();

  const handleSave = async () => {
    const response = await api.saveFavs({title, movies: favorites});
    dispatch(saveFavs(response.id));
  }
  return (
//     <div className="favorites">
//     <input value="Новый список" className="favorites__name" />
//     <ul className="favorites__list">
//         {this.state.movies.map((item) => {
//             return <li key={item.id}>{item.title} ({item.year})</li>;
//         })}
//     </ul>
//     <button type="button" className="favorites__save">Сохранить список</button>
// </div>
    <div className="favorites">
      <input className="favorites__name" placeholder='Title' value={title} onChange={e => setTitle(e.target.value)}/>
      {favorites.map(f => {
        return (
        <>
         <div className="favorites__list" key={f.imdbID}>
            <span>{f.Title} - ({f.Year})</span>
            
          </div>
          <div> <button  disabled={savedId} onClick={e => dispatch(removeFav(f.imdbID))}>X</button></div>
         
        </>
         
        )
      })}
      {!savedId
        ? <button disabled={!title} className="favorites__save" onClick={handleSave}>Сохранить список</button>
        : <Link to={`/saved-favorite/${savedId}`}>Go to Saved</Link>}


    </div>
  )
}

export default Favorites;