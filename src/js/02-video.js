import Player from '@vimeo/player';

const localStr = 'videoplayer-current-time';

const THROTTLE = 1000;

const player = new Player('handstick', {
  id: 'vimeo-player',
  width: 640,
});

const onPlay = function (data) {
  // data is an object containing properties specific to that event
};


player.on('play', function () {
  console.log('played the video!');
});


// player
//   .setCurrentTime(30.456)
//   .then(function (seconds) {
//     // seconds = the actual time that the player seeked to
//   })
//   .catch(function (error) {
//     switch (error.name) {
//       case 'RangeError':
//         // the time was less than 0 or greater than the video’s duration
//         break;

//       default:
//         // some other error occurred
//         break;
//     }
//   });