import TabsList from "@mui/base/TabsList";
import TabPanel from "@mui/base/TabPanel";
import Tab, { tabClasses } from "@mui/base/Tab";
import { styled } from "@mui/system";
import {
  primaryColor,
  SecondaryColor,
  neutralHight,
} from "../../../../styles/_colors.ts";

export const StyledTab = styled(Tab)`
  color: ${neutralHight[50]};
  cursor: pointer;
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
    background-color: ${SecondaryColor[800]};
    color: ${primaryColor[200]};
  }
`;

export const StyledTabPanel = styled(TabPanel)(
  () => `
  padding: 20px 12px;
  background: transparent;
  ;
  border: 1px solid ${SecondaryColor[200]};
  border-radius: 12px;
  `
);

export const StyledTabsList = styled(TabsList)(
  () => `
  min-width: 400px;
  background-color: ${primaryColor[500]};
  border-radius: 12px;
  margin-bottom: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  align-content: space-between;
  box-shadow: 0px 4px 30px ${SecondaryColor[200]};
  `
);
