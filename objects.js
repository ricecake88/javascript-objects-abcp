var playlist = {"Sarah Mclachlan":"I Will Remember You"}

function updatePlaylist(myPlaylist, artistName, songName) {
 Object.assign(myPlaylist, {[artistName]: songName});
 console.log(myPlaylist);
 return myPlaylist;
}

function removeFromPlaylist(myPlaylist, artistName) {
  delete myPlaylist[artistName];
  return myPlaylist;
}
