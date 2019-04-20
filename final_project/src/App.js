import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
  return (
    <div>
      <h1>Ja<span className="highlight">mmmmmmmmmmmm</span>ing</h1>
      <div className="App">
        <SearchBar onSearch={this.search} />
        <div className="App-playlist">
          <SearchResults
            searchResults={this.state.searchResults}
            onAdd={this.addTrack}
            onRemove={this.removeTrack}
          />
          <Playlist
            playlistTracks={this.state.playlistTracks}
            name={this.state.playlistName}
            onNameChange={this.updatePlaylistName}
            onSave={this.savePlaylist}
            onAdd={this.addTrack}
            onRemove={this.removeTrack}
          />
        </div>
      </div>
    </div>
  );
}
};
export default App;
