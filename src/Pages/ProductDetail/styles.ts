import { styled } from "styled-components";
import { primaryColor } from "../../styles/_colors";

export const ProductDetail = styled.div`
  margin-top: 3rem;
  background-color: ${primaryColor[200]};
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const ImageContainer = styled.div`
  img {
    max-width: 80vw;
    max-height: 20vw;
    border-radius: 8px;
  }
`;

export const Container = styled.div`
  width: 45vw;
  padding: 24px;
  margin-top: 24px;
  border-radius: 8px;
  background-color: ${primaryColor[500]};

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1 {
    margin: 16px 0;
  }

  h2 {
    margin: 8px 0;
  }
`;
