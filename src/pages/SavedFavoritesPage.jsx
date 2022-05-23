import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { api } from '../api';
import './SavedFavorites.css';
import Header from '../components/Header';
import '../components/Header.css';
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
  <>
    <Header/>
    
    <div className='fav-list'>

     <div>  <h1 className='title-list'>{favs.title}</h1></div>
      {favs.movies.map(m => (
       <div key={m.imdbID} className='list-item'>
          <a href={'https://www.imdb.com/title/' +m.imdbID}>{m.Title} {m.Year}</a>
        </div>
      ))}
    </div>
    </>
  )
}

export default SavedFavoritesPage;