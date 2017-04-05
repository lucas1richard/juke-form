import React from 'react';
import axios from 'axios';
import NewPlaylist from '../components/NewPlaylist';

class NewPlaylistContainer extends React.Component {
  constructor(props) {
    super();
    console.log(props);
    this.state = { playlistname: 'cxxnxnx' };
    this.handleAddNewPlaylist = this.handleAddNewPlaylist.bind(this);
    this.handleInputValueChange = this.handleInputValueChange.bind(this);
  }

  handleAddNewPlaylist(ev) {
    ev.preventDefault();
    console.log(this.state.playlistname);
    this.props.addPlaylist(this.state.playlistname);
  }

  handleInputValueChange(ev) {
    this.setState({playlistname: ev.target.value});
  }

  render() {
    return (
      <div onSubmit={this.handleAddNewPlaylist}>
        <NewPlaylist
          handleAddNewPlaylist={this.handleAddNewPlaylist}
          playlistname={ this.state.playlistname }
          handleInputValueChange={ this.handleInputValueChange }
        />
      </div>
    );
  }
}

export default NewPlaylistContainer;
