import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { api } from '../api';


const SavedFavoritesPage = () => {
  const params = useParams();
  const [favs, setFavs] = useState([]);

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
      <h1>asefeujhdfe{favs.title}</h1>
      {favs.movies.map(m => (
        <div key={m.imdbId}>
          <p>{m.Title} - {m.Year}</p>
        </div>
      ))}
    </>
  )
}

export default SavedFavoritesPage;