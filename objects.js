var playlist = {'Sarah Mclachlan':'I Will Remember You',
'Madonna':'Vogue',
'Michael Jackson':'Thriller'
}

function updatePlaylist(myPlaylist, artistName, songName) {
  return Object.assignt({}, myPlaylist, {artistName: sogName});
}

updatePlaylist(playlist, "Guns N' Roses", "November Rain");