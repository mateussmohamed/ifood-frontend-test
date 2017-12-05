import React, { Component } from 'react';

import spotifood from '../config/spotifood';

import FilterList from './organisms/FilterList';
import FeaturedPlaylists from './organisms/FeaturedPlaylists';
import TrackList from './organisms/TrackList';

import './App.css';

const urlFilters = 'http://www.mocky.io/v2/5a2402212e0000470983bf2f';

class App extends Component {
  constructor() {
    super();
    this.state = {
      isLoading: true,
      apiFilters: {},
      playlists: {},
      tracks: {},
    };
  }

  async componentWillMount() {
    await this.getFilters();
  }

  getFilters = async () => {
    const apiFilters = await fetch(urlFilters).then(res => res.json());
    this.setState({ apiFilters, isLoading: false });
  }

  getFeaturedPlaylists = async (filter) => {
    const playlists = await spotifood.browser.featuredPlaylists(filter);
    this.setState({ playlists, isLoading: false, tracks: {} });
  }

  getTracksOfPlaylist = async (url) => {
    const tracks = await spotifood.request(url);
    this.setState({ tracks, isLoading: false });
  }

  showFeaturedPlaylists = value => () => this.getFeaturedPlaylists(value);

  showTracksOfPlaylist = value => () => this.getTracksOfPlaylist(value);

  render() {
    if (this.state.isLoading) {
      return <h1>Loading...</h1>;
    }

    const { apiFilters, playlists, tracks } = this.state;
    return (
      <div>
        <FilterList data={apiFilters.filters} action={this.showFeaturedPlaylists} />
        <FeaturedPlaylists data={playlists} action={this.showTracksOfPlaylist} />
        <TrackList data={tracks} />
      </div>
    );
  }
}

export default App;
