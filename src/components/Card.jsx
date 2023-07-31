import React from 'react';
import { Link } from 'react-router-dom';
import '../style/card.css';

const Card = ({ img, overview, name, id, release_date = 'No Release Date', rating = 'N/A' }) => {
  const imageUrl = `https://image.tmdb.org/t/p/w780/${img}`;

  if (img === null || name === null) {
    return null;
  }

  return (
    <Link
      to={`/details/${id}/${encodeURIComponent(name)}/${img}/${encodeURIComponent(overview)}/${release_date}/${rating}`}
      className="card-link"
    >
      <div className="card">
        <img src={imageUrl} alt="" />
      </div>
    </Link>
  );
};

export default Card;
