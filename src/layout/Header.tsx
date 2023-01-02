import React from "react";
import {
  AppBar,
  Avatar,
  Box,
  Container,
  Toolbar,
  Typography,
} from "@mui/material";
import { Link, Outlet } from "react-router-dom";
import { HeaderStyled } from "../styles";
import TabsItem from "../components/tabs/Tabs";

const Header = () => {
  return (
    <>
      <HeaderStyled>
        <AppBar position="relative" className="appbar">
          <Container>
            <Toolbar disableGutters>
              <Typography variant="h5" component="h5" className="logo">
                <Link to="/">Kahoot</Link>
              </Typography>
              <Box className="tabs_navigate">
                <TabsItem />
              </Box>
              <Box>
                <Avatar>S</Avatar>
              </Box>
            </Toolbar>
          </Container>
        </AppBar>
      </HeaderStyled>
      <Outlet />
    </>
  );
};

export default Header;
