import React, {
  useEffect, useState,
} from 'react';
import PropTypes from 'prop-types';

import { Container } from '@components';
import { DashUp } from '@icons';

import { SingleSlide } from './SingleSlide';
import {
  NavigationButton, SlidesList, SlidesNavigation,
} from './Carousel.styled';

const DELAY = 5000; // 5s;

export const Carousel = ({ slides }) => {
  const [
    selectedIndex,
    setSelectedIndex,
  ] = useState(0);

  const [
    intervalId,
    setIntervalId,
  ] = useState(0);

  const handleAutoPlay = () => {
    setIntervalId(setInterval(() => {
      setSelectedIndex(current => (current === 0 ? slides.length - 1 : current - 1));
    }, DELAY));
  };

  const handleNavigation = direction => {
    if (direction === 'previous') {
      setSelectedIndex(current => (current === 0 ? slides.length - 1 : current - 1));
    } else {
      setSelectedIndex(current => (current === slides.length - 1 ? 0 : current + 1));
    }

    clearInterval(intervalId);
    handleAutoPlay();
  };

  useEffect(() => {
    handleAutoPlay();

    return () => clearInterval(intervalId);
  }, []);

  return (
    <Container>
      <SlidesList>
        {slides.map((slide, index) => (
          <SingleSlide
            isActive={index === selectedIndex}
            key={slide.heading}
            slide={slide}
          />
        ))}
      </SlidesList>
      <SlidesNavigation>
        <NavigationButton
          $rotation="-90deg"
          onClick={() => handleNavigation('previous', true)}
        >
          <DashUp />
        </NavigationButton>
        <NavigationButton
          $rotation="90deg"
          onClick={() => handleNavigation('next', true)}
        >
          <DashUp />
        </NavigationButton>
      </SlidesNavigation>
    </Container>
  );
};

Carousel.propTypes = {
  slides: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

