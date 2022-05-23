import React from 'react'
import Favorites from '../components/Favorites'
import Movies from '../components/Movies';
import Header from '../components/Header';
import '../components/Header.css'
import './MainPage.css'
const MainPage = () => {
  return (
    <div className="main-page">
    <Header />
    <main className="main-page__content">
        <section className="main-page__main-section">
            
            <div className="main-page__movies">
                <Movies />
            </div>
        </section>
        <aside className="main-page__favorites">
            <Favorites />
        </aside>
       
    </main>
</div>
  )
}

export default MainPage