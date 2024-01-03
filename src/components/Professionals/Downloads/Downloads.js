import React, {
  useMemo, useState,
} from 'react';
import PropTypes from 'prop-types';
import sanitize from 'sanitize-html';

import {
  Container, Modal,
  Video,
} from '@components';
import { InnerContainer } from '@components/styled';
import { DoubleDashDown } from '@icons';
import { isBrowser } from '@utils';

import { createPortal } from 'react-dom';
import {
  Author,
  AuthorsList,
  Description,
  DownloadLink,
  FilesList,
  Placeholder,
  Section,
  SingleFile,
  Thumbnail,
  Title,
} from './Downloads.styled';

const BODY = isBrowser ? document.body : null;

const sanitizeConfig = {
  allowedTags: [
    'strong',
    'em',
    'i',
    'b',
    'br',
  ],
};

export const Downloads = ({ files }) => {
  const [
    isVideoModalOpen,
    setVideoModalOpen,
  ] = useState((false));

  const [
    videoFile,
    setVideoFile,
  ] = useState(null);

  const handleVideoModal = ({
    file, videoAlt,
  }) => {
    const videoSources = {
      [file.subtype]: file,
      [videoAlt.subtype]: videoAlt,
    };

    setVideoModalOpen(true);
    setVideoFile({
      poster: file.poster,
      sources: videoSources,
    });
  };

  const VideoPlayer = () => useMemo(() => <Video {...videoFile} />, [videoFile]);

  const handleModalClose = () => {
    setVideoModalOpen(false);
    setVideoFile(null);
  };

  return (
    <>
      <Section>
        <Container>
          <InnerContainer>
            <FilesList>
              {files.map(file => {
                if (file.isVideo) {
                  return (
                    <SingleFile key={file.name}>
                      {file.thumbnail ? <Thumbnail image={file.thumbnail} /> : <Placeholder />}
                      <DownloadLink
                        as="button"
                        onClick={() => handleVideoModal(file)}
                      >
                        {file.linkText}
                        <DoubleDashDown />
                      </DownloadLink>
                    </SingleFile>
                  );
                }

                return (
                  <SingleFile key={file.name}>
                    {file.thumbnail ? <Thumbnail image={file.thumbnail} /> : <Placeholder />}
                    {file.name && <Title>{file.name}</Title>}
                    {file.description && (
                      <Description
                        dangerouslySetInnerHTML={{ __html: sanitize(file.description, sanitizeConfig).replace(/^\s+|\s+$/g, '') }}
                      />
                    )}
                    {file.authors?.length > 0 && (
                      <AuthorsList>
                        {file.authors.map(({ author }) => <Author key={author}>{author}</Author>)}
                      </AuthorsList>
                    )}
                    <DownloadLink
                      download
                      href={file.file.url}
                    >
                      {file.linkText}
                      {' '}
                      {file.file.subtype.toUpperCase()}
                      <DoubleDashDown />
                    </DownloadLink>
                  </SingleFile>
                );
              })}
            </FilesList>
          </InnerContainer>
        </Container>
      </Section>
      {isVideoModalOpen ?
        createPortal(<Modal close={handleModalClose}><VideoPlayer /></Modal>, BODY) :
        null}
    </>
  );
};

Downloads.propTypes = {
  files: PropTypes.arrayOf(PropTypes.shape({

  })).isRequired,
};
