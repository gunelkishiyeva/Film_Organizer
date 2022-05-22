import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { api } from '../api';
import './SavedFavorites.css';
const SavedFavoritesPage = () => {
  const params = useParams();
  const [favs, setFavs] = useState({title:'', movies: []});

  useEffect(() => {
    const fetchData = async () => {
      const id = params.id;
      const response = await api.getFavs(id);
      console.log(response);
      setFavs(response);
    }

    fetchData();
   
  }, [])

  return (
    <div className='fav-list'>
     <div> <h1 className='title-list'>{favs.title}</h1></div>
      {favs.movies.map(m => (
      //  <Link to={`https://www.imdb.com/title/${m.imdbID}/`} >
       <div key={m.imdbID} className='list-item'>
          <p>{m.Title} {m.Year}</p>
        </div>
        // </Link>
      ))}
    </div>
  )
}

export default SavedFavoritesPage;