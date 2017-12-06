import React, { Component } from 'react';
import { equals } from 'ramda';

import { spotifood, URL_FILTERS, REFRESH_TIME } from '../config';

import FilterList from './organisms/FilterList';
import FeaturedPlaylists from './organisms/FeaturedPlaylists';
import TrackList from './organisms/TrackList';

import './App.css';

class App extends Component {

  static audio;

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

  componentDidMount() {
    this.refreshPlaylists(REFRESH_TIME, this.checkIfUpdatePlaylists);
  }

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
    this.setState({ isLoading: true });
    const apiFilters = await fetch(URL_FILTERS).then(res => res.json());
    this.setState({ apiFilters, isLoading: false });
  }

  getFeaturedPlaylists = async (filter) => {
    this.setState({ isLoading: true });
    const activeFilters = Object.assign({}, this.state.activeFilters, filter);
    const apiPlaylists = await spotifood.browse.featuredPlaylists(activeFilters);
    this.setState({ apiPlaylists, activeFilters, isLoading: false, apiTracks: {} });
  }

  getTracksOfPlaylist = async (url) => {
    this.setState({ isLoading: true });
    const apiTracks = await spotifood.request(url);
    this.setState({ apiTracks, isLoading: false });
  }

  playTrack = (track) => {
    if (this.audio === undefined) {
      this.audio = new Audio(track);
      this.audio.play();
    } else {
      this.audio.pause();
      this.audio = new Audio(track);
      this.audio.play();
    }
  }

  showFeaturedPlaylists = value => () => this.getFeaturedPlaylists(value);

  showTracksOfPlaylist = value => () => this.getTracksOfPlaylist(value);

  previewTrack = value => () => this.playTrack(value);

  render() {

    if (this.state.isLoading) {
      return (
        <div className="spinner">
          <div className="double-bounce1"></div>
          <div className="double-bounce2"></div>
          <div className="spinner-text">Loading</div>
        </div>
      );
    }

    const { apiFilters, apiPlaylists, apiTracks, activeFilters } = this.state;

    return (
      <div className="container-app">
        <FilterList
          data={apiFilters.filters}
          actives={activeFilters}
          action={this.showFeaturedPlaylists}
        />
        <FeaturedPlaylists
          data={apiPlaylists}
          action={this.showTracksOfPlaylist}
        />
        <TrackList
          data={apiTracks}
          action={this.previewTrack}
        />
      </div>
    );
  }
}

export default App;
