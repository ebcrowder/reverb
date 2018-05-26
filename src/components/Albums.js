import React, { Component } from 'react';

export default class Albums extends Component {
  render() {
    return this.props.albums.map(
      records =>
        records.type === 'release' ? (
          <div className="album" key={records.id}>
            <img
              className="album__artwork"
              src={records.cover_image}
              alt={records.type}
            />
            <div className="album__details">
              <h2 className="album__title">{records.title}</h2>
              <p className="album__year">{records.year}</p>
            </div>
          </div>
        ) : records.type === 'master' ? (
          <div className="album" key={records.id}>
            <img
              className="album__artwork"
              src={records.cover_image}
              alt={records.type}
            />
            <div className="album__details">
              <h2 className="album__title">{records.title}</h2>
              <p className="album__year">{records.year}</p>
            </div>
          </div>
        ) : null
    );
  }
}
