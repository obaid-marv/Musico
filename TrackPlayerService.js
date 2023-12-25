// TrackPlayerService.js

import TrackPlayer from 'react-native-track-player';

export default async function () {
  await TrackPlayer.setupPlayer({});
  
  // Add event listeners and other setup logic
  TrackPlayer.addEventListener('remote-play', () => TrackPlayer.play());
  TrackPlayer.addEventListener('remote-pause', () => TrackPlayer.pause());
  TrackPlayer.addEventListener('remote-stop', () => TrackPlayer.destroy());

  // Update options and capabilities
  await TrackPlayer.updateOptions({
    stopWithApp: true,
    capabilities: [
      TrackPlayer.CAPABILITY_PLAY,
      TrackPlayer.CAPABILITY_PAUSE,
      TrackPlayer.CAPABILITY_STOP,
      TrackPlayer.CAPABILITY_SEEK_TO,
    ],
  });
}
