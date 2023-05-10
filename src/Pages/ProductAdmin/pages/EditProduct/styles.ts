import TabsList from "@mui/base/TabsList";
import TabPanel from "@mui/base/TabPanel";
import { buttonClasses } from "@mui/base/Button";
import Tab, { tabClasses } from "@mui/base/Tab";
import { styled } from "@mui/system";

export const green = {
  50: "#F2F5F3",
  100: "#E0E8DF",
  200: "#C2D2C1",
  300: "#A5BDA2",
  400: "#87A883",
  500: "#9daca2",
  600: "#5E7F5E",
  700: "#4A6649",
  800: "#364D34",
  900: "#22361F",
};

export const grey = {
  50: "#f7f7f7",
  100: "#ebebeb",
  200: "#d4d4d4",
  300: "#bcbcbc",
  400: "#8f8f8f",
  500: "#424251",
  600: "#747474",
  700: "#5f5f5f",
  800: "#4b4b4b",
  900: "#363636",
};

export const StyledTab = styled(Tab)`
  font-family: IBM Plex Sans, sans-serif;
  color: #fff;
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
    background-color: ${green[400]};
  }

  &:focus {
    color: #fff;
    outline: 3px solid ${green[200]};
  }

  &.${tabClasses.selected} {
    background-color: #fff;
    color: ${green[600]};
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
  background: ${theme.palette.mode === "dark" ? grey[900] : "#fff"};
  border: 1px solid ${theme.palette.mode === "dark" ? grey[700] : grey[200]};
  border-radius: 12px;
  opacity: 0.6;
  `
);

export const StyledTabsList = styled(TabsList)(
  ({ theme }) => `
  min-width: 400px;
  background-color: ${green[500]};
  border-radius: 12px;
  margin-bottom: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  align-content: space-between;
  box-shadow: 0px 4px 30px ${
    theme.palette.mode === "dark" ? grey[900] : grey[200]
  };
  `
);
