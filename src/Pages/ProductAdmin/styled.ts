import { styled } from "styled-components";
import { SecondaryColor, primaryColor } from "../../styles/_colors";

export const Content = styled.div`
  margin-top: 24px;
`;

export const StyledButton = styled.button`
  padding: 16px;
  border-radius: 8px;
  background-color: ${SecondaryColor[800]};
  color: ${primaryColor[300]};
  cursor: pointer;

  &:hover {
    color: ${primaryColor[100]};
  }
`;

export const MinimalButton = styled(StyledButton)`
  padding: 8px;
  margin-right: 8px;
`;
