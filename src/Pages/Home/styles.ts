import styled, { css } from "styled-components";
import {
  primaryColor,
  SecondaryColor,
  neutralHight,
} from "../../styles/_colors";

export const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: ${primaryColor[500]};

  display: flex;
  flex-direction: row;
`;

export const Content = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-image: radial-gradient(
    circle at 64.56% 50%,
    #666485 0,
    #424251 50%,
    #222221 100%
  );
`;

export const Cloud = styled.div`
  width: 556px;
  height: 290px;
  clip-path: path(
    "M175.625 87.3551C135.266 75.1465 121.672 85.1617 109.125 124.855C2.43546 104.81 -10.0302 203.746 7.62445 215.086C8.00905 236.489 89.6173 275.174 136.625 241.355C166.065 288.787 189.323 297.439 249.625 262.855C279.038 278.858 299.738 274.036 339.124 257.355C407.019 307.489 439.455 295.668 492.624 241.355C531.701 242.015 547.984 233.844 555.125 190.355C544.116 155.15 529.443 141.209 485.624 145.355C469.125 124.937 455.685 116.744 421.124 110.355C370.978 -10.3759 232.553 -49.1993 175.625 87.3551Z"
  );
  background-image: radial-gradient(
    circle at 25.82% -16.45%,
    #afb5ae 0,
    #aab2aa 16.67%,
    #a4afa6 33.33%,
    #9daca2 50%,
    #96a99e 66.67%,
    #8fa69b 83.33%,
    #89a499 100%
  );
  color: ${SecondaryColor[500]};

  div {
    margin-top: 65px;
    width: 420px;
    height: 100px;
    text-align: center;
  }
  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 2.6rem;
`;

export const ContrastWhite = styled.h1`
  margin-top: 3rem;
  text-align: center;
  font-size: 1.6rem;
  line-height: 150%;
  color: ${neutralHight[50]};
  max-width: 500px;
`;

export const Separate = styled.div`
  background: radial-gradient(
    circle at center,
    #cfa8ce,
    #c092bd,
    #b57eac,
    #a16b9c,
    #8d578b
  );
  width: 17.5%;
  height: 100vh;
`;

export const CtaWrapper = styled.div<{ img: string }>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  position: relative;
  overflow: hidden;

  ${({ img }) => css`
    div {
      position: absolute;
      width: 120%;
      height: 100%;
      background-image: url(${img});
      transform: rotate(3deg);
      opacity: 0.2;
    }
  `}

  button {
    z-index: 10;
    background-color: ${SecondaryColor[500]};
    border: none;
    padding: 24px;
    border-radius: 12px;
    font-size: 1.6rem;
    color: ${primaryColor[500]};
    text-shadow: rgba(196 196 196 / 51%) 2px 2px 4px;
    cursor: pointer;

    &:hover {
      color: ${neutralHight[50]};
    }
  }
`;
