import React, { Component } from 'react';

export default class Searchbar extends Component {
  constructor(props) {
    super(props);

    this.state = { term: '' };
  }

  onInputChange(term) {
    this.setState({ term });
    this.props.onSearchTermChange(term);
  } 

  render() {
    return (
      <div className="search-bar">
        <div className="row">
          <div className="col-6 col-md-4" />
          <div className="col-6 col-md-4">
            <div className="input-group mb-3">
              <input
                value={this.state.term}
                onChange={event => this.onInputChange(event.target.value)}
              />
              <div className="input-group-append">
                <button className="btn btn-outline-secondary" type="button">
                  Search
                </button>
              </div>
            </div>
          </div>
          <div className="col-6 col-md-4" />
        </div>
      </div>
    );
  }
}
