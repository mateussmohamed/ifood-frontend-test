import React, { Component } from 'react';
import spotifood from '../config/spotifood';
import CardPlaylist from './organisms/CardPlaylist';

class App extends Component {
  constructor() {
    super();
    this.state = {
      isLoading: false,
      playlists: null
    };
  }

  componentWillMount() {
    this.getFeaturedPlaylists();
  }

  getFeaturedPlaylists = async () => {
    const filters = {
      locale: 'pt_BR',
      country: 'BR'
    };
    const playlists = await spotifood.browser.featuredPlaylists(filters);
    this.setState({ playlists, isLoading: true });
  };

  renderPlaylists = () => {
    const { playlists } = this.state.playlists;
    return <CardPlaylist data={playlists.items} />;
  };
  render() {
    if (!this.state.isLoading) {
      return <h1>Loading...</h1>;
    }

    return <div>{this.state.playlists && this.renderPlaylists()}</div>;
  }
}

export default App;
