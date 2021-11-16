import styled from 'styled-components';

import {
  Container as GenericContainer, SPImage,
} from '@components';

export const Section = styled.section``;

export const Container = styled(GenericContainer)`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 0 3%;
`;

export const PaddedContainer = styled(GenericContainer)`
  padding: 0 6%;
`;

export const Package = styled(SPImage)``;

export const HowTo = styled(SPImage)``;
