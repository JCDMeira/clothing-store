import { styled } from "styled-components";
import { SecondaryColor, primaryColor } from "../../styles/_colors";

export const Wrapper = styled.div`
  padding: 20px;
  background-color: ${primaryColor[200]};
`;

export const Header = styled.div`
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

export const ContentWrapper = styled.div`
  padding: 4rem;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;
