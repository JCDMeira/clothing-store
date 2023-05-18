import { styled } from "styled-components";
import { SecondaryColor, primaryColor } from "./_colors";

export const S_Wrapper = styled.div`
  padding: 20px;
  background-color: ${primaryColor[200]};
  width: 100vw;
  min-height: 100vh;
  box-sizing: border-box;
`;

export const S_Header = styled.div`
  display: flex;
  align-items: center;
  gap: 80px;

  .breadcrumb {
    text-decoration: none;
    color: ${primaryColor[900]};
  }

  h1 {
    color: ${SecondaryColor[900]};
  }
`;
