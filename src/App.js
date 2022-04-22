import React, {useEffect, useState} from 'react';
import Tmdb from './Tmdb';
import MovieRow from './components/MovieRow';
import FeatureMovie from './components/FeatureMovie';
import Header from './components/Header';
import Footer from './components/Footer';
import loader from './../src/loeader.gif'
import './App.css';

export default()=>{

  const [moveList, SetMovieList] = useState([]);

  const [featuredData, setFeaturedData] = useState(null);

  const [blackHeader, setBlackHeader] = useState(false);

  useEffect(()=>{
    const loadAll = async ()=>{
      let list = await Tmdb.getHomeList();
      SetMovieList(list);

      let originals = list.filter(i=>i.slug === 'originals');
      let randomChosen = Math.floor(Math.random()*(originals[0].items.results.length - 1));
      let chosen = originals[0].items.results[randomChosen];
      // console.log(chosen);

      let chosenInfo = await Tmdb.getMovieInfo(chosen.id, 'tv')
      // console.log(chosenInfo);
      setFeaturedData(chosenInfo);
      
    }

    loadAll();
  }, []);


  useEffect(()=>{
      const scrollListner = () => {
        if(window.scrollY > 10){
          setBlackHeader(true);
        } else{
          setBlackHeader(false);
        }
      }

  window.addEventListener('scroll', scrollListner);

  return () => {
    window.removeEventListener('scroll', scrollListner);
  }
  }, []);

  return(
    <div className="page">
      <Header black={blackHeader}/>
      {featuredData && 
        <FeatureMovie item={featuredData}/>
      }
      <section className="lists">
        {moveList.map((item, key)=>(
          <MovieRow key={key} title={item.title} items={item.items}/>
        ))}
      </section>
      <Footer/>
      {moveList.length <= 0 && 
      <div className="loader">
        <img src={loader}/>
      </div>
      }
    </div>
  );
}