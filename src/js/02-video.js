import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const VIDEOPLAYER_CURRENT_TIME = 'videoplayer-current-time';

const onPlay = function (data) {
  const time = Math.floor(data.seconds);
  localStorage.setItem(VIDEOPLAYER_CURRENT_TIME, time);
};

player.on('timeupdate', throttle(onPlay, 1000));
