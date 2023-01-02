import {
  AppBar,
  Box,
  Card,
  CardContent,
  Tab,
  Tabs,
  Toolbar,
  Typography,
} from "@mui/material";
import React, { SyntheticEvent, useState } from "react";
import { ITabPanelProps } from "../../../types";
import QuestionAnswerIcon from "@mui/icons-material/QuestionAnswer";
import DarkModeIcon from "@mui/icons-material/DarkMode";

const tabProps = (index: number) => {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
};

const TabPanel = ({ index, value, children, ...other }: ITabPanelProps) => {
  return (
    <div
      role="tabpanel"
      aria-labelledby={`simple-tab-${index}`}
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
};

const SettingTestUI = () => {
  const [value, setValue] = useState(0);

  const handleChange = (e: SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <>
      <Card className="setting_cards">
        <AppBar position="relative" color="secondary">
          <Toolbar variant="dense">
            <Box sx={{ width: "100%" }}>
              <Box>
                <Tabs
                  value={value}
                  onChange={handleChange}
                  aria-label="basic tabs"
                >
                  <Tab label={<QuestionAnswerIcon />} {...tabProps(0)} />
                  <Tab label={<DarkModeIcon />} {...tabProps(1)} />
                </Tabs>
              </Box>
            </Box>
          </Toolbar>
        </AppBar>
        <CardContent>
          <TabPanel value={value} index={0}>
            1
          </TabPanel>
          <TabPanel value={value} index={1}>
            2
          </TabPanel>
        </CardContent>
      </Card>
    </>
  );
};

export default SettingTestUI;
