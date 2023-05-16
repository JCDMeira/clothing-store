import TabsList from "@mui/base/TabsList";
import TabPanel from "@mui/base/TabPanel";
import { buttonClasses } from "@mui/base/Button";
import Tab, { tabClasses } from "@mui/base/Tab";
import { styled } from "@mui/system";
import {
  primaryColor,
  SecondaryColor,
  neutralHight,
} from "../../../../styles/_colors.ts";

export const StyledTab = styled(Tab)`
  font-family: IBM Plex Sans, sans-serif;
  color: ${neutralHight[50]};
  cursor: pointer;
  font-size: 0.875rem;
  font-weight: 600;
  background-color: transparent;
  width: 100%;
  padding: 10px 12px;
  margin: 6px 6px;
  border: none;
  border-radius: 7px;
  display: flex;
  justify-content: center;

  &:hover {
    background-color: ${primaryColor[400]};
  }

  &:focus {
    color: ${neutralHight[50]};
    outline: 3px solid ${primaryColor[200]};
  }

  &.${tabClasses.selected} {
    background-color: ${neutralHight[50]};
    color: ${primaryColor[600]};
  }

  &.${buttonClasses.disabled} {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

export const StyledTabPanel = styled(TabPanel)(
  ({ theme }) => `
  width: 100%;
  font-family: IBM Plex Sans, sans-serif;
  font-size: 0.875rem;
  padding: 20px 12px;
  background: ${theme.palette.mode === "dark" ? SecondaryColor[900] : "#fff"};
  border: 1px solid ${
    theme.palette.mode === "dark" ? SecondaryColor[700] : SecondaryColor[200]
  };
  border-radius: 12px;
  opacity: 0.6;
  `
);

export const StyledTabsList = styled(TabsList)(
  ({ theme }) => `
  min-width: 400px;
  background-color: ${primaryColor[500]};
  border-radius: 12px;
  margin-bottom: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  align-content: space-between;
  box-shadow: 0px 4px 30px ${
    theme.palette.mode === "dark" ? SecondaryColor[900] : SecondaryColor[200]
  };
  `
);
