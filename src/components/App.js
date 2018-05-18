import React, { Component } from 'react';
import axios from 'axios';
import _ from 'lodash';

import Navbar from '../components/Navbar';
import Searchbar from '../components/Searchbar';
import Albums from '../components/Albums';

import DISCOGS_TOKEN from '../config/keys';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      albums: [],
      pagination: []
    };

    this.albumSearch('father john misty');
  }

  albumSearch(term) {
    const results = [];

    axios
      .get(`https://api.discogs.com/database/search?q=${term}`, {
        headers: {
          Authorization: `Discogs token=${DISCOGS_TOKEN}`
        },
        params: {
          per_page: 100
        }
      })
      .then(albums => results.push(albums))
      .then(albums => {
        while (albums.data.pagination.urls.next) {
          axios
            .get(albums.data.pagination.urls.next, {
              headers: {
                Authorization: `Discogs token=${DISCOGS_TOKEN}`
              },
              params: {
                per_page: 100
              }
            })
            .then(albums =>
              this.setState({
                albums: albums.data.results,
                pagination: albums.data.pagination
              })
            );
        }
      });

    console.log(results);
  }

  render() {
    const albumSearch = _.debounce(term => {
      this.albumSearch(term);
    }, 300);

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
