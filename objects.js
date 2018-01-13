var playlist = {'Sarah Mclachlan':'I Will Remember You',
'Madonna':'Vogue',
'Michael Jackson':'Thriller'
}

function updatePlaylist(myPlaylist, artistName, songName) {
 return Object.assign({}, myPlaylist, {[artistName]: songName});
}

function removeFromPlaylist(myPlaylist, artistName) {
  delete myPlaylist.artistName;
  return myPlaylist;
}

var newPlaylist = updatePlaylist(playlist, "Guns N'' Roses", "November Rain");
console.log(newPlaylist);