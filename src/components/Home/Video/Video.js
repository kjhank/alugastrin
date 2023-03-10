import React, {
  useRef, useState,
} from 'react';
import PropTypes from 'prop-types';

import { PlaySymbol } from '@icons';
import { Container } from '@components';

import {
  PlayButton, Player, Section,
} from './Video.styled';

export const Video = ({ sources }) => {
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
    <Section>
      <Container>
        <Player
          onPause={handlePlaying}
          onPlaying={handlePlaying}
          poster={sources.poster.url}
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
      </Container>
    </Section>
  );
};

Video.propTypes = {
  sources: PropTypes.shape({}).isRequired,
};
