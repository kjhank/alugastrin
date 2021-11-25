import styled from 'styled-components';

import {
  Container as GenericContainer, SPImage,
} from '@components';

import { queries } from '@utils';

export const Section = styled.section``;

export const Container = styled(GenericContainer)`
  padding: 0 6%;
`;

export const Image = styled(SPImage)`
  width: 100%;
  margin: auto;

  > img {
    width: 100%;
  }
`;

export const ListWrapper = styled.div`
  padding-left: 7.135417vw;
  font-size: 24px;
  line-height: 1.25;

  > ul {
    margin: 1.85vw 0 3.125vw;
    list-style-type: none;

    > li {
      position: relative;
      padding-left: 1em;

      ::before {
        content: '▶';
        position: absolute;
        top: 0.5em;
        left: 0.25em;
        font-size: 0.5em;
      }
    }
  }

  strong {
    font-weight: 600;
  }

  .highlight {
    color: ${({ theme }) => theme.getColor('accent')};
    font-weight: 600;
  }

  @media ${queries.huge} {
    font-size: 22px;
  }

  @media ${queries.xxl} {
    font-size: 20px;
  }

  @media ${queries.xs} {
    font-size: 18px;
  }

  @media ${queries.xxsplus} {
      font-size: 16px;
    }
`;

export const TextWrapper = styled.div`
  margin-bottom: 4.166667vw;

  h3,
  > p {
    color: ${({ theme }) => theme.getColor('accent')};
    font-weight: 600;
    font-size: 24px;
    line-height: 1.21;

    @media ${queries.huge} {
      font-size: 22px;
    }

    @media ${queries.xxl} {
      font-size: 20px;
    }

    @media ${queries.xs} {
      font-size: 18px;
    }

    @media ${queries.xxsplus} {
      font-size: 16px;
    }
  }
`;

export const SmallHeading = styled.h3``;

export const IconsWrapper = styled.div`
  margin-top: 3.03vw;
  padding-left: 7.14vw;

  @media ${queries.xxsplus} {
    padding-left: 0;
  }
`;

export const Icon = styled(SPImage)`
  flex-grow: 0;
  flex-shrink: 0;
  height: ${({ size }) => `${size / 19.2}vw`};
  max-height: ${({ variant }) => variant === 'sideBySide' && '120px'};
  margin: ${({ margin }) => (margin === 'right' ? '0 0.5em 0 0' : '0 0 0.5em 0')};

  > img {
    width: auto;
    height: 100%;
  }

  @media ${queries.xxsplus} {
    height: ${({ size }) => `${size / 10}vw`}
  }
`;

export const IconBackground = styled(SPImage)`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 2;
  width: auto;
  height: 100%;

  > img {
    width: auto;
    height: 100%;
  }
`;

export const IconsList = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2vw;
  font-size: 24px;

  @media ${queries.huge} {
    font-size: 22px;
  }

  @media ${queries.xxl} {
    font-size: 20px;
  }

  @media ${queries.xs} {
    font-size: 18px;
  }

  @media ${queries.xxsplus} {
    font-size: 14px;
  }
`;

export const IconItem = styled.li`
  position: relative;
  display: flex;
  flex-direction: ${({ direction }) => direction};
  align-items: center;
  padding: ${({ padding }) => (padding === 'right' ? '0 2em 0 0' : '0 2em')};
  font-weight: 600;
  text-align: ${({ align }) => align};
`;

export const FramedText = styled.h3`
  margin: 4.17vw 2em 3.33vw;
  border: 4px solid ${({ theme }) => theme.getColor('accent')};
  border-radius: ${({ theme }) => theme.getRadius('medium')};
  padding: 0.83vw;
  color: ${({ theme }) => theme.getColor('accent')};
  font-weight: 600;
  font-size: 24px;
  text-align: center;
  text-transform: uppercase;

  @media ${queries.huge} {
    font-size: 22px;
  }

  @media ${queries.xxl} {
    font-size: 20px;
  }

  @media ${queries.xs} {
    font-size: 18px;
  }

  @media ${queries.xxsplus} {
    font-size: 16px;
  }
`;

export const StepsList = styled(IconsList)`
  grid-template-columns: repeat(3, 1fr);

  > ${IconItem} {
    padding: 1vw;
    text-align: center;
  }
`;
