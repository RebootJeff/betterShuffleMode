// TODO: Refactor playlist into a class with attributes and public/private methods?

var examplePlaylist = {
  songs: [song1, song2, /* and more songs... */],
  largestPlayCount: 123
};

var exampleSong = {
  title: 'Operators',
  artist: 'Jetta',
  playCount: 10,
  bias: null
};

var initializeWeights = function(playlist) {
  for(var i = 0; i < playlist.songs.length; i++) {
    var song = playlist.songs[i];

    song.bias = calculateBias(song, playlist);
  }
};

var calculateBias = function(song, playlist) {
  // calculate percentage chance of being approved for play
  if(song.playCount === 0) {
    return 100;
  } else {
    var x = playlist.largestPlayCount - song.playCount;
    
  }

};

var playSong = function(playlist, index) {
  // [code for playing song goes here]
  // Playing a song also updates a few parameters...
  var song = playlist.songs[index];
  song.playCount++;
  playlist.largestPlayCount = Math.max(playlist.largestPlayCount, song.playCount);
};

var betterShuffle = function(playlist) {
  var choosing = true;
  while(choosing) {
    // Select random song (simple shuffle)
    index = makeRandomInt(0, playlist.songs.length);
    // Apply bias to selection process
    choosing = approveSelection(playlist, index);
  }
  playSong(playlist, index);
};

var approveSelection = function(playlist, index) {
  var song = playlist.songs[index];
  var roulette = makeRandomInt(0, 100);
  return (roulette >= song.bias);
};

// helpers
var makeRandomInt = function(min, max) {
  // Range of random int is from min (inclusive) to max (exclusive)
  return Math.floor(Math.random() * (max - min)) + min;
};
