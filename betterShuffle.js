// ============================================================================
// Example data
// ============================================================================

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

// ============================================================================
// Functions for a better shuffle mode (the good stuff!)
// ============================================================================

// TODO: Refactor playlist into a class with attributes and public/private methods?


var initializeWeights = function(playlist) {
  for(var i = 0; i < playlist.songs.length; i++) {
    var song = playlist.songs[i];
    song.bias = calculateBias(song, playlist);
  }
};

// Calculate percentage chance of being *approved* for play
var calculateBias = function(song, playlist) {
  var playCountDiff = playlist.largestPlayCount - song.playCount;
  var playCountPercentDiff = playCountDiff / playlist.largestPlayCount;
  return 100 * playCountPercentDiff;
};

var playSong = function(playlist, index) {
  // [code for playing song goes here]
  // Playing a song also updates a few parameters...
  var song = playlist.songs[index];
  song.playCount++;
  playlist.largestPlayCount = Math.max(playlist.largestPlayCount, song.playCount);
  initializeWeights(playlist); // calculate new biases
};

// To play next song, music player app should invoke betterShuffle() to pick
// a song and then invoke playSong()
var betterShuffle = function(playlist) {
  var index;
  var choosing = true;

  while(choosing) {
    // Select random song (simple shuffle)
    index = makeRandomInt(0, playlist.songs.length);

    // Apply bias to selection process
    choosing = rejectSelection(playlist, index);
  }

  return index;
};

var rejectSelection = function(playlist, index) {
  var song = playlist.songs[index];
  var roulette = makeRandomInt(0, 99);
  return (roulette >= song.bias);
};

// ============================================================================
// Helpers
// ============================================================================

var makeRandomInt = function(min, max) {
  // Range of random int is from min (inclusive) to max (exclusive)
  return Math.floor(Math.random() * (max - min)) + min;
};
