import React, {
  useRef, useState,
} from 'react';
import PropTypes from 'prop-types';

import { PlaySymbol } from '@icons';

import {
  PlayButton, Player,
} from './Video.styled';

export const Video = ({
  poster, sources,
}) => {
  const playerRef = useRef();

  const [
    isPlayButtonVisible,
    setPlayButtonVisible,
  ] = useState(true);

  const handlePlayback = () => {
    const { current: playerElement } = playerRef;

    if (playerElement.paused) {
      playerElement.play();
    } else {
      playerElement.pause();
    }
  };

  const handlePlaying = ({ type }) => {
    setPlayButtonVisible(type === 'pause');
  };

  return (
    <>
      <Player
        onPause={handlePlaying}
        onPlaying={handlePlaying}
        poster={poster}
        ref={playerRef}
      >
        {Object.keys(sources).map(source => (
          <source
            key={sources[source].filename}
            src={sources[source].url}
            type={`${sources[source].type}/${sources[source].subtype}`}
          />
        ))}
        Your browser does not support HTML5 video.
      </Player>
      <PlayButton
        isVisible={isPlayButtonVisible}
        onClick={handlePlayback}
      >
        <PlaySymbol />
      </PlayButton>
    </>
  );
};

Video.propTypes = {
  poster: PropTypes.string,
  sources: PropTypes.shape({}).isRequired,
};

Video.defaultProps = {
  poster: undefined,
};
