import React, { Component } from 'react';
import axios from 'axios';
import _ from 'lodash';

import Navbar from '../components/Navbar';
import Searchbar from '../components/Searchbar';
import Albums from '../components/Albums';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      albums: [],
      pagination: []
    };
  }

  albumSearch(term) {
    let searchUrl = `https://api.discogs.com/database/search?q=${term}`;

    axios
      .get(searchUrl, {
        headers: {
          Authorization: `Discogs token=${process.env.REACT_APP_DISCOGS_TOKEN}`
        },
        params: {
          per_page: 100
        }
      })
      .then(albums => {
        this.setState({
          albums: albums.data.results,
          pagination: albums.data.pagination
        });
      });
  }

  render() {
    const albumSearch = _.debounce(term => {
      this.albumSearch(term);
    }, 500);

    return (
      <React.Fragment>
        <Navbar />
        <div className="container">
          <Searchbar onSearchTermChange={albumSearch} />
        </div>
        <div className="albums">
          <Albums albums={this.state.albums} />
        </div>
      </React.Fragment>
    );
  }
}
