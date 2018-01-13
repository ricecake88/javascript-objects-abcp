var playlist = {"Sarah Mclachlan":"I Will Remember You"}

function updatePlaylist(myPlaylist, artistName, songName) {
 Object.assign(myPlaylist, {[artistName]: songName});
 console.log(myPlaylist);
 return myPlaylist;
}

function removeFromPlaylist(myPlaylist, artistName) {
  console.log(myPlaylist.artistName);
  console.log(myPlaylist.Slowdive);
  delete myPlaylist.artistName;
  return myPlaylist;
}
