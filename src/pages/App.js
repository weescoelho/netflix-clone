import React, { useEffect, useState } from "react";
import Tmdb from "../services/Tmdb.js";
import MovieRow from "../components/MovieRow/index";
import "./App.css";
import FeatureMovie from "../components/FeatureMovie/index.js";
import Header from "../components/Header/index.js";

function App() {
  const [movieList, setMovieList] = useState([]);
  const [featureData, setFeatureData] = useState(null);
  const [blackHeader, setBlackHeader] = useState(false);

  useEffect(() => {
    const loadAll = async () => {
      //Pegar a lista total de filmes
      let list = await Tmdb.getHomeList();
      setMovieList(list);

      // Pegando o filme em destaque
      let originals = list.filter((i) => i.slug === "originals");
      let randomChosen = Math.floor(
        Math.random() * (originals[0].items.results.length - 1),
      );
      let chosen = originals[0].items.results[randomChosen];
      let chosenInfo = await Tmdb.getMovieInfo(chosen.id, "tv");
      setFeatureData(chosenInfo);
    };

    loadAll();
  }, []);

  useEffect(() => {
    const scrollListener = () => {
      if (window.scrollY > 10) {
        setBlackHeader(true);
      } else {
        setBlackHeader(false);
      }
    };
    window.addEventListener("scroll", scrollListener);
    return () => {
      window.removeEventListener("scroll", scrollListener);
    };
  }, []);

  return (
    <div className="page">
      <Header scroll={blackHeader} />
      {featureData && <FeatureMovie item={featureData} />}
      <section className="lists">
        {movieList.map((item, key) => (
          <MovieRow key={key} title={item.title} items={item.items} />
        ))}
      </section>
      <footer>
        <p>
          Feito por Weslley Coelho{" "}
          <span role="img" aria-label="heart">
            ❤
          </span>
        </p>
        <p>Direitos de imagem para Netflix.</p>
        <p>
          {" "}
          API <a href="https://www.themoviedb.org/">TheMovieDB</a>
        </p>
      </footer>
      {movieList.length <= 0 && (
        <div className="loading">
          <img
            src="https://www.houseguides.org/wp-content/uploads/Using-Netflix-with-a-vpn.gif"
            alt="Carregando"
          />
        </div>
      )}
    </div>
  );
}

export default App;
