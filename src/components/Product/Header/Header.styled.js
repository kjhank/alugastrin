import styled, { css } from 'styled-components';

import {
  Container as GenericContainer, SPImage,
} from '@components';

import { queries } from '@utils';

export const Name = styled.h1`
  color: ${({ theme }) => theme.getColor('accent')};
  font-weight: 600;
  font-size: 46px;

  @media ${queries.xs} {
    font-size: 32px;
  }

  @media ${queries.xxsplus} {
    font-size: 40px;
    text-align: center;
  }
`;

export const Wrapper = styled.div`
  width: 50%;

  @media ${queries.xxsplus} {
    width: 100%;
  }
`;

export const Description = styled.p`
  font-weight: 600;
  font-size: 25px;
  line-height: 1.8;

  @media ${queries.m} {
    font-size: 20px;
  }

  @media ${queries.xs} {
    font-size: 16px;
  }

  @media ${queries.xxsplus} {
    font-size: 24px;
    text-align: center;
  }
`;

export const LinksWrapper = styled.div`
  display: ${({ $isGrid }) => ($isGrid ? 'grid' : 'flex')};
  gap: 1.15vw;
  margin-top: 2.552vw;

  @media ${queries.xxsplus} {
    justify-content: space-between;
    gap: 1em;
  }
  ${({
    $isGrid, $columns = 3,
  }) => $isGrid && css`
    grid-template-columns: repeat(${$columns}, 1fr);
    justify-content: unset;
    gap: min(34px, 1.8vw) min(25px, 1.3vw);

    ::before {
      content: ${$columns % 2 === 0 ? 'none' : ''};
    }
  `}
`;

export const Scrollers = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.2vw;
  width: 37.34375vw;
  margin: auto;

  @media ${queries.xs} {
    width: 100%;
  }

  @media ${queries.xxsplus} {
    grid-template-columns: repeat(2, 1fr);
    gap: 1em;
    width: 100%;
    margin-top: 1em;
  }
`;

export const StyledHeader = styled.header`
  margin-top: 4.95vw;
  padding-top: 4vw;
  background-color: #fff;

  @media ${queries.xs} {
    margin-top: 10vw;
  }

  @media ${queries.xxsplus} {
    margin-bottom: 2em;
  }

  &.fibegastrin {
    background-image: url('/backgrounds/fibe-header.png');
    background-position: 35% 60%;
    background-size: 110%;

    ${LinksWrapper} {
      width: 75%;
      margin-block: min(150px, 7.8125vw) min(34px, 1.8vw);
    }
  }

  &.max-protect {
    ${LinksWrapper} {
      width: 42%;
      margin-block: min(100px, 5.21vw) min(34px, 1.8vw);
    }

    ${Wrapper} {
      ${Name} {
        padding-left: 55%;
        font-weight: 700;
        font-size: 46px;
        line-height: 1;

        @media ${queries.xhuge} {
          font-size: 40px;
        }

        @media ${queries.huge} {
          font-size: 36px;
        }

        @media ${queries.xxl} {
          font-size: 32px;
        }

        @media ${queries.xxsplus} {
          padding-left: unset;
          text-align: center;
        }
      }

      ${Description} {
        padding-left: 55%;
        font-weight: 700;
        font-size: 25px;

        @media ${queries.m} {
          font-size: 20px;
        }

        @media ${queries.xs} {
          font-size: 16px;
        }

        @media ${queries.xxsplus} {
          padding-left: unset;
          font-size: 24px;
          text-align: center;
        }
      }
    }
  }

  &.fibegastrin,
  &.max-protect {
    ${Wrapper} {
      position: relative;
      z-index: 1;
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      width: 100%;
      padding-inline-start: 5%;

      ${LinksWrapper} {
        justify-content: flex-end;
        margin-inline-end: min(34px, 1.8vw);

        > a:has(svg), > button:has(svg) {
          position: relative;
          justify-content: center;
          width: unset;
          text-align: center;
          padding-inline-end: 20%;

          > svg {
            position: absolute;
            inset: 50% 10% auto auto;
            translate: 0 -50%;
          }
        }

        @media ${queries.huge} {
          margin-block: min(132px, 6.875vw) min(34px, 1.8vw);
        }


        @media ${queries.xs} {
          width: 100%;

          > button,
          > a {
            font-size: 9px;
          }
        }
      }
    }

    ${Scrollers} {
      grid-template-columns: repeat(3, 1fr);
      margin-inline-end: min(34px, 1.8vw);
    }

    ${Name} {
      width: 100%;
      padding-left: 50%;
      font-size: 75px;
      text-align: left;

      @media ${queries.xxl} {
        font-size: 64px;
      }

      @media ${queries.xxsplus} {
        padding-left: unset;
        font-size: 48px;
        text-align: center;
      }
    }

    ${Description} {
      width: 100%;
      padding-left: 50%;
      font-weight: 700;
      font-size: 41px;
      text-align: left;

      @media ${queries.xxsplus} {
        padding-left: unset;
        font-size: 32px;
        text-align: center;
      }
    }
  }
`;

export const Container = styled(GenericContainer)`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;

  &.alugastrin3forte--20,
  &.alugastrin--250 {
    justify-content: flex-end;
  }

  &.fibegastrin,
  &.max-protect {
    position: relative;
    align-items: stretch;

    @media ${queries.m} {
      margin-block-start: 8em;
    }

    @media ${queries.xs} {
      margin-block-start: 2em;
    }
  }

  @media ${queries.xxsplus} {
    flex-direction: column;
    justify-content: flex-start;
    margin-top: 2em;
  }
`;

export const Image = styled(SPImage)`
  max-width: 50%;

  &.fibegastrin {
    max-width: 47%;
    margin-inline-start: -3%;
  }

  &.max-protect {
    max-width: 43.4375vw;
    margin-block-start: -4vw;
    margin-inline-start: -5%;

    @media ${queries.xxsplus} {
      max-width: 100%;
      margin: 0;
    }
  }

  &.fibegastrin,
  &.max-protect {
    position: absolute;
    inset: 0 auto 0 0;

    @media ${queries.xxsplus} {
      position: static;
      margin-inline: auto;
    }
  }

  &.alugastrin3forte--20 {
    width: 35%;
    margin-right: 5%;

    @media ${queries.xxsplus} {
      width: 80%;
      max-width: unset;
      margin: 0 auto;
    }
  }

  &.alugastrin--250 {
    width: 7.4vw;
    margin-right: 10%;

    @media ${queries.xxsplus} {
      width: 25%;
      margin: auto;
    }
  }

  @media ${queries.xxsplus} {
    width: 80%;
    max-width: unset;
    margin: 0 auto;
  }
`;

const linkStyle = css`
  display: inline-flex;
  justify-content: space-between;
  align-items: center;
  width: 10.21vw;
  height: 3.23vw;
  border-radius: ${({ theme }) => theme.getRadius('tiny')};
  padding: 0.2em 1.042vw;
  background: ${({ theme }) => theme.getGradient('radial')};
  color: #fff;
  font-size: 20px;
  text-transform: uppercase;
  transition: ${({ theme }) => theme.getTransitions(['filter'])};

  > svg {
    width: auto;
    height: 1.25em;
  }

  :hover {
    filter: brightness(1.2);
  }

  @media ${queries.huge} {
    width: 12vw;
  }

  @media ${queries.xxl} {
    font-size: 16px;

    /* > svg {
      height: 2em;
    } */
  }

  @media ${queries.xl} {
    width: 13vw;
  }

  @media ${queries.l} {
    width: auto;
    height: auto;
    padding: 1em;
    font-size: 14px;
  }

  @media ${queries.m} {
    font-size: 12px;
  }

  @media ${queries.xxsplus} {
    width: calc(50% - 0.5em);
    font-size: 18px;
    text-align: center;
  }
`;

export const Link = styled.a`
  ${linkStyle}
`;

export const ScrollToBuyButton = styled.button`
  ${linkStyle}
  cursor: pointer;
`;

export const ScrollButton = styled.button.attrs({ type: 'button' })`
  border-radius: ${({ theme }) => theme.getRadius('tiny')};
  padding: 0.9375vw;
  background: radial-gradient(circle closest-side, #f2f2f2 50%, #d5d5d5 200%);
  color: ${({ theme }) => theme.getColor('accent')};
  font-size: 16px;
  text-transform: uppercase;
  transition: ${({ theme }) => theme.getTransitions(['filter'])};
  cursor: pointer;

  :hover {
    filter: brightness(1.05);
  }

  @media ${queries.xxsplus} {
    font-size: 18px;
  }
`;
