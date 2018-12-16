var playlist= {
  artistName: "songTitle",
  artistName: "songTitle"
};

function updatePlaylist(playlist, artistName, songTitle){
  return object.assign({}, playlist, { [artistName]: songTitle})
}
