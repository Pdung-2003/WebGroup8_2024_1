import React from "react";
import { useNavigate } from 'react-router-dom';
import { BsFillStarFill } from "react-icons/bs";
import "./MovieCard.css";

const MovieCard = (data) => {
  const genres = Array.isArray(data?.genres) ? data.genres.join(", ") : "No genres available";
  const navigate = useNavigate();
  const { title, imageUrl, _id, rating, genre } = data;

  return (
    <div
      className="movie-card"
      onClick={() => {
        navigate(`/movies/${_id}`);
      }}
    >
      <div
        className="movie-img"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      >
        <p className="rating">
          <BsFillStarFill className="star" />
          &nbsp;&nbsp;
          {rating}/5
        </p>
      </div>
      <div className="details">
        <p className="title">{title}</p>
        <p className="genre">{genres}</p>
      </div>
    </div>
  );
};

export default MovieCard;
