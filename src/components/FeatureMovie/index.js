import React from "react";
import "./style.css";

const FeatureMovie = ({ item }) => {

  let firstDate = new Date(item.first_air_date);
  let genres = [];
  for(let i in item.genres){
    genres.push(item.genres[i].name)
  }

  let description = item.overview;
  if(description.length > 200){
    description = description.substring(0,200) + '...'
  }

  return (
    <section
      className="featured"
      style={{
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundImage: `url(https://image.tmdb.org/t/p/original/${item.backdrop_path})`,
      }}
    >
      <div className="featured--vertical">
        <div className="featured--horizontal">
          <h1 className="featured--name">{item.original_name}</h1>
          <div className="featured--info">
            <div className="featured--points">{item.vote_average} pontos</div>
            <div className="featured--year">{firstDate.getFullYear()}</div>
            <div className="featured--seasons">{item.number_of_seasons} temporada{item.number_of_seasons !== 1 ? 's' : '' }</div>
          </div>
          <div className="featured--description">
            {description}
          </div>
          <div className="featured--buttons">
          <a className="featured--watch" href={`/watch/${item.id}`}>► Assistir</a>
          <a className="featured--myList" href={`/list/add/${item.id}`}>+ Minha Lista</a>
          </div>
          <div className="featured--genres"><strong>Gêneros:</strong>{genres.join(', ')}</div>
        </div>
      </div>
    </section>
  );
};

export default FeatureMovie;
