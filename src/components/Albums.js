import React from 'react';

const Albums = albums => {
  return albums.albums.map(
    records =>
      records.type === 'release' ? (
        <div key={records.id}>
          <img src={records.cover_image} alt={records.type} />
          <p>{records.type}</p>
          <p>{records.title}</p>
        </div>
      ) : null
  );
};

export default Albums;
