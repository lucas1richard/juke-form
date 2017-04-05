import React from 'react';

const NewPlaylist = ({ handleAddNewPlaylist, playlistname, handleInputValueChange }) => (

  <div className="well">
    <form className="form-horizontal">
      <fieldset>
        <legend>New Playlist</legend>
        <div className="form-group">
          <label className="col-xs-2 control-label">Name</label>
          <div className="col-xs-10">
            <input className="form-control" type="text" value={ playlistname } onChange={ handleInputValueChange } />
            { playlistname.length <= 16 && <p style={ 16 - playlistname.length > 5 ? {color: 'green'} : { color: 'yellow' } }>Characters left: {16 - playlistname.length}</p>}
            { playlistname.length > 16 && <p style={{ color: 'red' }}>The name is too long</p>}
          </div>
        </div>
        <div className="form-group">
          <div className="col-xs-10 col-xs-offset-2">
            <button type="submit" className="btn btn-success" onClick={ handleAddNewPlaylist } disabled={!playlistname.length || playlistname.length > 16} >Create Playlist</button>
          </div>
        </div>
      </fieldset>
    </form>
  </div>

);

export default NewPlaylist;
