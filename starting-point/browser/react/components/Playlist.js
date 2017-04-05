import React from 'react';
import Songs from './Songs';

class Playlist extends React.Component {
  constructor(props) {
    super();
    this.state = { selectedSong: '' };
    this.handleSongChange = this.handleSongChange.bind(this);
    this.handleAddSong = this.handleAddSong.bind(this);
  }

  componentDidMount () {
    const playlistId = this.props.routeParams.playlistId;
    const selectPlaylist = this.props.selectPlaylist;
    selectPlaylist(playlistId);
  }

  componentWillReceiveProps(nextProps) {
    const nextPlaylistId = nextProps.routeParams.playlistId;
    const currentPlaylistId = this.props.routeParams.playlistId;
    const selectPlaylist = this.props.selectPlaylist;
    if (nextPlaylistId !== currentPlaylistId) selectPlaylist(nextPlaylistId);
  }

  handleSongChange(ev) {
    const selectedSong = ev.target.value;
    this.setState({ selectedSong });
  }

  handleAddSong(ev) {
    ev.preventDefault();
    this.props.handleAddSong(this.state.selectedSong);
  }

  render() {
    const { selectedPlaylist, songs } = this.props;
    if (!selectedPlaylist) return null;
    const playlist = selectedPlaylist;
    return (
      <div>
        <h3>{ playlist.name }</h3>
        <Songs
          songs={playlist.songs}
          currentSong={this.props.currentSong}
          isPlaying={this.props.isPlaying}
          toggleOne={this.props.toggleOne}
        />
        { playlist.songs && !playlist.songs.length && <small>No songs.</small> }
        <hr />
        <div className="well">
          <form className="form-horizontal" noValidate name="songSelect">
            <fieldset>
              <legend>Add to Playlist</legend>
              <div className="form-group">
                <label htmlFor="song" className="col-xs-2 control-label">Song</label>
                <div className="col-xs-10">
                  <select className="form-control" name="song" value={this.state.selectedSong} onChange={this.handleSongChange}>
                    <option value=''>Select Song:</option>
                  { songs.map(song => <option key={song.id} value={song.id}>{song.name}</option>) }
                  </select>
                </div>
              </div>
              <div className="form-group">
                <div className="col-xs-10 col-xs-offset-2">
                  <button type="submit" className="btn btn-success" onClick={this.handleAddSong}>Add Song</button>
                </div>
              </div>
            </fieldset>
          </form>
        </div>
      </div>
    );
  }
}

export default Playlist;
