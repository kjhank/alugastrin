import React from 'react';
import PropTypes from 'prop-types';
import sanitize from 'sanitize-html';

import {
  Container,
  Video,
} from '@components';
import { InnerContainer } from '@components/styled';
import { DoubleDashDown } from '@icons';

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

const sanitizeConfig = {
  allowedTags: [
    'strong',
    'em',
    'i',
    'b',
    'br',
  ],
};

export const Downloads = ({ files }) => (
  <Section>
    <Container>
      <InnerContainer>
        <FilesList>
          {files.map(file => {
            if (file.isVideo) {
              const videoSources = {
                [file.file.subtype]: file.file,
                [file.videoAlt.subtype]: file.videoAlt,
              };

              const videoProps = {
                poster: file.videoPoster.url,
                sources: videoSources,
              };

              return (
                <SingleFile
                  $isFullWidth
                  key={file.name}
                >
                  <Video {...videoProps} />
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
);

Downloads.propTypes = {
  files: PropTypes.arrayOf(PropTypes.shape({

  })).isRequired,
};
