import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { Container } from '@components';
import {
  InnerContainer, LineHeading,
} from '@components/styled';
import { ArrowRight } from '@icons';

import {
  Image, Item, Link, Links, Section, WidgetButton, Wrapper,
} from './WhereToBuy.styled';

export const WhereToBuy = ({
  data: {
    heading, links, offline, offlineLink, online,
  },
  innerRef,
  ...props
}) => {
  const [
    openSection,
    setOpenSection,
  ] = useState(null);

  const toggleSection = section => {
    setOpenSection(openSection === section ? null : section);
  };

  const link = offlineLink ?? 'https://ktomalek.pl';

  return (
    <Section
      ref={innerRef}
      {...props}
    >
      <Container>
        <InnerContainer>
          <LineHeading>{heading}</LineHeading>
          <Wrapper $flex={offline && online && offlineLink}>
            {(offline && offlineLink) ?
              (
                <WidgetButton
                  as="a"
                  href={link}
                  isActive={openSection === 'offline'}
                  rel="noreferrer, noopener"
                  target="_blank"
                >
                  {offline}
                  <ArrowRight />
                </WidgetButton>
              ) :
              null}
            <WidgetButton
              as="button"
              isActive={openSection === 'online'}
              onClick={() => toggleSection('online')}
            >
              {online}
              <ArrowRight />
            </WidgetButton>
            {openSection === 'online' && links.length > 0 && (
              <Links>
                {links.map(item => (
                  <Item key={item.link}>
                    <Link href={item.link}>
                      <Image image={item.image} />
                    </Link>
                  </Item>
                ))}
              </Links>
            )}
            {openSection === 'offline' && 'tu będzie ktomalek'}
          </Wrapper>
        </InnerContainer>
      </Container>
    </Section>
  );
};

WhereToBuy.propTypes = {
  data: PropTypes.shape({
    heading: PropTypes.string,
    links: PropTypes.arrayOf(PropTypes.shape({})),
    offline: PropTypes.string,
    offlineLink: PropTypes.string,
    online: PropTypes.string,
  }),
  innerRef: PropTypes.shape({}).isRequired,
};

WhereToBuy.defaultProps = {
  data: {
    offlineLink: 'https://ktomalek.pl',
  },
};
