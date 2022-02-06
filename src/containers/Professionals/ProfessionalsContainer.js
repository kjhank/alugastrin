import React, {
  useEffect, useRef, useState,
} from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';

import {
  Main, Modal,
} from '@components';
import { isBrowser } from '@utils';

import {
  Downloads, Header, WarningModal,
} from '@components/Professionals';

const WARNING_LS_KEY = 'warning-agreed';
const BODY = isBrowser ? document.body : null;

export const ProfessionalsContainer = ({
  files, modal, refs, title, ...props
}) => {
  const warningRef = useRef();
  const [
    isWarningModalOpen,
    setWarningModalOpen,
  ] = useState(false);

  useEffect(() => {
    const hasUserAgreed = localStorage.getItem(WARNING_LS_KEY);

    warningRef.current = !!hasUserAgreed;

    setWarningModalOpen(!hasUserAgreed);
  }, []);

  const handleModal = () => {
    const hasUserAgreed = localStorage.getItem(WARNING_LS_KEY);

    setWarningModalOpen(!hasUserAgreed);
  };

  const confirmWarning = () => {
    localStorage.setItem(WARNING_LS_KEY, true);
    setWarningModalOpen(false);
  };

  return (
    <Main
      refs={refs}
      {...props}
    >
      <Header title={title} />
      <Downloads files={files} />
      {isWarningModalOpen ?
        createPortal(
          <Modal
            close={handleModal}
            isClosable={false}
          >
            <WarningModal
              accept={modal.accept}
              confirmWarning={confirmWarning}
              copy={modal.copy}
              heading={modal.title}
              reject={modal.reject}
            />
          </Modal>, BODY
        ) :
        null }
    </Main>
  );
};
ProfessionalsContainer.propTypes = {
  files: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  modal: PropTypes.shape({
    accept: PropTypes.string,
    copy: PropTypes.string,
    reject: PropTypes.string,
    title: PropTypes.string,
  }).isRequired,
  refs: PropTypes.shape({}).isRequired,
  title: PropTypes.string.isRequired,
};
