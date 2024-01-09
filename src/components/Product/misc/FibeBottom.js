import React from 'react';
import styled from 'styled-components';

import { Container as GenericContainer } from '@components';

const Container = styled(GenericContainer)``;

export const Heading = styled.h2`
  margin-block-start: ${({ $isGreen}) => $isGreen && 'min(115px, 6vw)'};
  margin-block-end: min(60px, 3.125vw);
  padding-inline: 15%;
  color: ${({
    $isGreen, theme,
  }) => ($isGreen ? theme.colors.fibe : theme.colors.accent)};
  font-weight: bold;
  font-size: 46px;
  text-align: center;
  text-transform: ${({ $isGreen }) => $isGreen && 'uppercase'};
`;

export const List = styled.ul`
  width: 70%;
  margin-block-end: min(115px, 6vw);
  margin-inline: auto;
  font-size: 24px;
  white-space: pre-wrap;

  > li {
    position: relative;
    list-style-type: none;
    margin-block-end: 1.625em;
    padding-inline-start: 2.8em;

    ::before {
      content: '';
      position: absolute;
      inset: -0.25em auto auto 0;
      display: inline-block;
      width: 1.625em;
      height: 1.625em;
      background-image: url('/images/fibe-bullet.png');
      background-size: contain;
      background-repeat: no-repeat;
    }
  }
`;

export const FibeBottom = () => (
  <Container>
    <section>
      <Heading>
        O ponad 60% większa produkcja kwasu masłowego
        <sup>1</sup>
      </Heading>
      <List>
        <li>
          Normalizacja motoryki jelit
          <sup>2</sup>
        </li>
        <li>
          Przywrócenie właściwego składu mikrobioty jelitowej
          <sup>2</sup>
        </li>
      </List>
    </section>
    <section>
      <Heading>
        Skuteczność udowodniona w licznych
        badaniach klinicznych
        <sup>5</sup>
      </Heading>
      <img
        alt="zaparcia: 14 badań klinicznych z udziałem 165 pacjentów; 7 badań klinicznych z udziałem 465 pacjentów; 8 badań klinicznych z udziałem 692 pacjentów"
        src="/images/fibe-table.png"
      />
    </section>
    <section>
      <Heading
        $isGreen
        className="comfy"
      >
        Wygodny w stosowaniu
      </Heading>
      <List>
        <li>
          <strong>Rozpuszcza się niezależnie od temperatury żywności –</strong>
          bez utraty swoich cennych właściwości
        </li>
        <li>
          <strong>Nie zmienia smaku</strong>
          {' '}
          i konsystencji potraw ani płynów
          {' '}
        </li>
      </List>
      <img
        alt="jedzenie; opakowanie fibegastrin; opis: Można dodać do różnej żywności i napojów zarówno ciepłych, jak i zimnych bez utraty cennych właściwości."
        src="/images/fibe-bottom.png"
      />
    </section>
    <section>
      <Heading $isGreen>
        ZALECANY DO CODZIENNEGO
        STOSOWANIA u OSÓB:
      </Heading>

      <img
        alt="zmagających się ze wzdęciami; mających trudności z wypróżnieniem; borykających się ze zbyt częstym wypróżnianiem; z niską aktywnością fizyczną; na diecie FODMAP; z dietą ubogą w błonnik"
        src="/images/fibe-list.png"
      />
    </section>
  </Container>
);
