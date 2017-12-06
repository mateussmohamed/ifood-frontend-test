import React, { Component } from 'react';
import { equals } from 'ramda';

import spotifood from '../config/spotifood';

import FilterList from './organisms/FilterList';
import FeaturedPlaylists from './organisms/FeaturedPlaylists';
import TrackList from './organisms/TrackList';

import './App.css';

const urlFilters = 'https://www.mocky.io/v2/5a25fade2e0000213aa90776';
const REFRESH_TIME = 30000;

class App extends Component {
  constructor() {
    super();
    this.state = {
      activeFilters: {},
      apiFilters: {},
      apiPlaylists: {},
      apiTracks: {},
      isLoading: true,
    };
  }

  async componentWillMount() {
    await this.getFilters();
  }

  // componentDidMount() {
  //   refreshPlaylists(REFRESH_TIME, this.checkIfUpdatePlaylists);
  // }

  refreshPlaylists(ms, callback) {
    return setTimeout(() => {
      callback();
      this.refreshPlaylists(ms, callback);
    }, ms);
  }

  checkIfUpdatePlaylists = async () => {
    const apiPlaylists = await spotifood.browse.featuredPlaylists(this.state.activeFilters);
    if (equals(apiPlaylists, this.state.apiPlaylists)) {
      this.setState({ apiPlaylists, isLoading: false });
    }
  }

  getFilters = async () => {
    const apiFilters = await fetch(urlFilters).then(res => res.json());
    this.setState({ apiFilters, isLoading: false });
  }

  getFeaturedPlaylists = async (filter) => {
    const activeFilters = Object.assign({}, this.state.activeFilters, filter);
    const apiPlaylists = await spotifood.browse.featuredPlaylists(activeFilters);
    this.setState({ apiPlaylists, activeFilters, isLoading: false, apiTracks: {} });
  }

  getTracksOfPlaylist = async (url) => {
    const apiTracks = await spotifood.request(url);
    this.setState({ apiTracks, isLoading: false });
  }

  showFeaturedPlaylists = value => () => this.getFeaturedPlaylists(value);

  showTracksOfPlaylist = value => () => this.getTracksOfPlaylist(value);

  render() {

    if (this.state.isLoading) {
      return <h1>Loading...</h1>;
    }

    const { apiFilters, apiPlaylists, apiTracks, activeFilters } = this.state;
    return (
      <div>
        <FilterList
          data={apiFilters.filters}
          actives={activeFilters}
          action={this.showFeaturedPlaylists}
        />
        <FeaturedPlaylists
          data={apiPlaylists}
          action={this.showTracksOfPlaylist}
        />
        <TrackList data={apiTracks} />
      </div>
    );
  }
}

export default App;
