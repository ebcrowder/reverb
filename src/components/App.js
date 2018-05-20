import React, { Component } from 'react';
import axios from 'axios';
import _ from 'lodash';

import Navbar from '../components/Navbar';
import Searchbar from '../components/Searchbar';
import Albums from '../components/Albums';

import keys from '../config/keys';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      albums: [],
      pagination: []
    };

    this.allResults = [];
    this.albumSearch('');
  }

  albumSearch(term, nextUrl) {
    let searchUrl =
      nextUrl || `https://api.discogs.com/database/search?q=${term}`;

    axios
      .get(searchUrl, {
        headers: {
          Authorization: `Discogs token=${keys}`
        },
        params: {
          per_page: 100
        }
      })
      .then(albums => {
        this.allResults = this.allResults.concat(albums.data.results);

        if (albums.data.pagination.urls.next) {
          this.albumSearch(term, albums.data.pagination.urls.next);
        } else {
          this.setState({
            albums: this.allResults,
            pagination: albums.data.pagination
          });
        }
      });
  }

  render() {
    const albumSearch = _.debounce(term => {
      this.albumSearch(term);
    }, 5000);

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
