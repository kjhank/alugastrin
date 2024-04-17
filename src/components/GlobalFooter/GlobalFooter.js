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
  LeftPart,
  Links,
  LogoWrapper,
  RightPart,
  ScrollButton,
  Warning,
  Wrapper,
} from './GlobalFooter.styled';

export const GlobalFooter = ({
  contactRef,
  data,
  footnotes,
  legal,
  hasLegal,
}) => {
  const handleScrollUp = () => window.scrollTo({
    behavior: 'smooth',
    top: 0,
  });

  const sanitizedFootnotes = sanitize(footnotes, {
    allowedTags: [
      'br',
      'i',
      'b',
      'i',
      'strong',
      'em',
      'ul',
      'li',
      'ol',
    ],
  });

  const sanitizedContact = sanitize(data?.contact, {
    allowedTags: [
      'a',
      'br',
      'p',
      'strong',
    ],
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
          <ContactData
            dangerouslySetInnerHTML={{ __html: sanitize(data?.address) }}
          />
        </LeftPart>
        <RightPart
          dangerouslySetInnerHTML={{
            __html: sanitizedContact,
          }}
        />
      </Container>
      <GlobalContainer>
        {hasLegal && (
          <GlobalFooterText
            as="aside"
            dangerouslySetInnerHTML={{ __html: sanitizedFootnotes }}
          />
        )}
      </GlobalContainer>
      {hasLegal && (
        <Warning>
          <p>{legal}</p>
        </Warning>
      )}
      <GlobalContainer>
        <Copyright>{data?.copyright}</Copyright>
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
  footnotes: PropTypes.string,
  hasLegal: PropTypes.bool,
  legal: PropTypes.string,
};

GlobalFooter.defaultProps = {
  footnotes: null,
  hasLegal: true,
  legal: null,
};
