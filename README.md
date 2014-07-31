# I demand a better shuffle mode for music players!

Shuffle mode is random. Fine. But what I really want is a shuffle mode that has a bias for songs that have been played fewer times.

## Requirements

- Algorithm will assign weights to songs based on their play count. Songs with lower play counts will have a higher chance of getting chosen.
- The same song CAN be played twice before all songs have been played once.
- Over time, the play count for all songs will be very nearly equal, and it will take much less time to reach this "equilibrium point" using the betterShuffleMode algorithm versus using typical shuffle mode.
