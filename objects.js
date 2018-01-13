var playlist = {'Sarah Mclachlan':'I Will Remember You',
'Madonna':'Vogue',
'Michael Jackson':'Thriller'
}

function updatePlaylist(myPlaylist, artistName, songName) {
  return Object.assign({}, myPlaylist, {artistName: songName});
}

updatePlaylist(playlist, "Guns N' Roses", "November Rain");