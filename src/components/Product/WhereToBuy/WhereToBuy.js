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
    heading, links, offline, online,
  },
  innerRef,
}) => {
  const [
    openSection,
    setOpenSection,
  ] = useState(null);

  const toggleSection = section => {
    setOpenSection(openSection === section ? null : section);
  };

  return (
    <Section ref={innerRef}>
      <Container>
        <InnerContainer>
          <LineHeading>{heading}</LineHeading>
          <Wrapper>
            <WidgetButton
              as="a"
              href="https://ktomalek.pl"
              isActive={openSection === 'offline'}
              // onClick={() => toggleSection('offline')}
              rel="noreferrer, noopener"
              target="_blank"
            >
              {offline}
              <ArrowRight />
            </WidgetButton>
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
              {links.map(link => (
                <Item key={link.link}>
                  <Link href={link.link}>
                    <Image image={link.image} />
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
    online: PropTypes.string,
  }).isRequired,
  innerRef: PropTypes.shape({}).isRequired,
};

