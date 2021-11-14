import React from 'react';
import PropTypes from 'prop-types';

import { LineHeading } from '@components/styled';

import { ArrowRight } from '@icons';

import {
  Container, Image, Item, Link, Links, Online, Section, WidgetButton, Wrapper,
} from './WhereToBuy.styled';

export const WhereToBuy = ({
  data: {
    heading, links, offline, online,
  },
}) => {
  const toggleWidget = () => {};

  return (
    <Section>
      <Container>
        <LineHeading>{heading}</LineHeading>
        <Wrapper>
          <WidgetButton
            as="button"
            onClick={toggleWidget}
          >
            {offline}
            <ArrowRight />
          </WidgetButton>
          <Online>
            {online}
            <ArrowRight />
          </Online>
          <Links>
            {links.map(link => (
              <Item key={link.link}>
                <Link href={link.link}>
                  <Image image={link.image} />
                </Link>
              </Item>
            ))}
          </Links>
        </Wrapper>
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
};

