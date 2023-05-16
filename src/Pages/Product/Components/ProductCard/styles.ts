import styled from "styled-components";
import { neutralHight, SecondaryColor } from "../../../../styles/_colors";

export const CardWrapper = styled.div`
  width: 200px;
  height: 300px;
  margin: 10px;
  cursor: pointer;
  color: ${SecondaryColor[700]};

  border-radius: 8px;
  box-shadow: 0 2px 4px ${SecondaryColor[100]};
  padding: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: box-shadow 0.3s ease-in-out;
  background-color: ${neutralHight[300]};

  transition: 400ms ease-in-out;

  &:hover {
    box-shadow: 0 4px 24px ${SecondaryColor[400]};

    div {
      box-shadow: 0 4px 24px ${SecondaryColor[400]};
    }
  }
`;

export const Photo = styled.div`
  width: 200px;
  height: 200px;
  margin-bottom: 20px;
  background-color: ${neutralHight[100]};

  display: flex;
  align-items: center;
  justify-content: center;

  img {
    max-width: 150px;
  }
`;
