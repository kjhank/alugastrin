import React from 'react';
import PropTypes from 'prop-types';
import sanitize from 'sanitize-html';

import {
  DashUp, ManufacturerLogo,
} from '@icons';
import {
  ExternalLink, Container as GlobalContainer,
} from '@components';
import {
  ContactData,
  Container,
  Copyright,
  GlobalFooterText,
  LeafletLegal,
  LeftPart, Links,
  LogoWrapper,
  RightPart,
  ScrollButton,
  SIL,
  Wrapper,
} from './GlobalFooter.styled';

const sanitizeConfig = {
  allowedTags: [
    'a',
    'br',
    'strong',
  ],
};

export const GlobalFooter = ({
  contactRef,
  data,
  globalFootnote,
  hasLegal,
}) => {
  const handleScrollUp = () => window.scrollTo({
    behavior: 'smooth',
    top: 0,
  });

  return (
    <Wrapper ref={contactRef}>
      <Container>
        <LeftPart>
          <LogoWrapper>
            <ManufacturerLogo />
          </LogoWrapper>
          <Links>
            {data?.links.map(({ link }) => (
              <ExternalLink
                href={link.url}
                key={link.title}
              >
                {link.title}

              </ExternalLink>
            ))}
          </Links>
          <ContactData dangerouslySetInnerHTML={{ __html: sanitize(data?.address) }} />
        </LeftPart>
        <RightPart dangerouslySetInnerHTML={{
          __html: sanitize(data?.contact, {
            allowedTags: [
              'a',
              'br',
              'p',
              'strong',
            ],
          }),
        }}
        />
      </Container>
      <GlobalContainer>
        {globalFootnote && (
        <GlobalFooterText dangerouslySetInnerHTML={{
          __html: sanitize(globalFootnote, {
            allowedTags: [
              'br',
              'i',
              'strong',
              'em',
              'b',
            ],
          }),
        }}
        />
        )}
        {hasLegal && (
        <>
          <SIL dangerouslySetInnerHTML={{ __html: sanitize(data?.sil, sanitizeConfig) }} />
          <LeafletLegal
            dangerouslySetInnerHTML={{ __html: sanitize(data?.leafletLegal, sanitizeConfig) }}
          />
        </>
        )}
        <Copyright>
          {data?.copyright}
        </Copyright>
        <ScrollButton onClick={handleScrollUp}>
          <DashUp />
          Do góry
        </ScrollButton>
      </GlobalContainer>
    </Wrapper>
  );
};

GlobalFooter.propTypes = {
  contactRef: PropTypes.shape({}).isRequired,
  data: PropTypes.shape({
    address: PropTypes.string,
    contact: PropTypes.string,
    copyright: PropTypes.string,
    leafletLegal: PropTypes.string,
    links: PropTypes.arrayOf(PropTypes.shape({})),
    sil: PropTypes.string,
  }).isRequired,
  hasLegal: PropTypes.bool,
};

GlobalFooter.defaultProps = {
  hasLegal: true,
};
