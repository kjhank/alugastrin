import React, {
  createRef, useEffect,
} from 'react';
import PropTypes from 'prop-types';
import {
  animate, timeline,
} from 'motion';

import { X } from '@icons';

import {
  Backdrop, CloseButton, Wrapper,
} from './Modal.styled';

export const Modal = ({
  children,
  close,
  isBlurred,
  isClosable,
  isOnBottom,
  ...props
}) => {
  const backdropRef = createRef();
  const modalRef = createRef();

  const handleClosing = async () => {
    if (isClosable) {
      const { current: backdropElement } = backdropRef;

      try {
        const [status] = await animate(backdropElement, { opacity: 0 }, { duration: 0.5 }).finished;

        if (status) {
          close();
        }
      } catch (error) {
        console.error(error);
      }
    }
  };

  const handleBackdropClick = ({
    currentTarget, target,
  }) => {
    if (currentTarget === target) {
      handleClosing();
    }
  };

  useEffect(() => {
    const { current: backdropElement } = backdropRef;
    const { current: modalElement } = modalRef;

    const inSequence = [
      [
        backdropElement,
        { opacity: 1 },
        { duration: 0.25 },
      ],
      [
        modalElement,
        {
          transform: 'translateY(0)',
        },
        {
          duration: 0.25,
        },
      ],
    ];

    timeline(inSequence);
  }, []);

  useEffect(() => {
    const handleKeyDown = ({ keyCode }) => {
      if (keyCode === 27) {
        handleClosing();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <Backdrop
      alignment={isOnBottom ? 'bottom' : 'top'}
      isBlurred={isBlurred}
      onClick={handleBackdropClick}
      ref={backdropRef}
      {...props}
    >
      <Wrapper
        open
        ref={modalRef}
      >
        {isClosable && (
        <CloseButton onClick={close}>
          <X />
        </CloseButton>
        )}
        {children}
      </Wrapper>
    </Backdrop>
  );
};

Modal.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]).isRequired,
  close: PropTypes.func.isRequired,
  isBlurred: PropTypes.bool,
  isClosable: PropTypes.bool,
  isOnBottom: PropTypes.bool,
};

Modal.defaultProps = {
  isBlurred: true,
  isClosable: true,
  isOnBottom: false,
};

