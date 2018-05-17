import React from 'react';
import '../styles/Albums.css';

const Albums = albums => {
  return albums.albums.map(
    records =>
      records.type === 'release' ? (
        <div className="container" key={records.id}>
          <img src={records.cover_image} alt={records.type} />
          <p>{records.type}</p>
          <p>{records.title}</p>
        </div>
      ) : records.type === 'master' ? (
        <div className="container" key={records.id}>
          <img src={records.cover_image} alt={records.type} />
          <p>{records.type}</p>
          <p>{records.title}</p>
        </div>
      ) : null
  );
};

export default Albums;
