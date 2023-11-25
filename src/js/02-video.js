import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const VIDEOPLAYER_CURRENT_TIME = 'videoplayer-current-time';

const player = new Player('vimeo-player');

const onPlay = function (data) {
  const time = Math.floor(data.seconds);
  localStorage.setItem(VIDEOPLAYER_CURRENT_TIME, time);
};

const timePaused = localStorage.getItem(VIDEOPLAYER_CURRENT_TIME);

player.on('timeupdate', throttle(onPlay, 1000));

if (timePaused) {
  player.setCurrentTime(timePaused || 0)
}