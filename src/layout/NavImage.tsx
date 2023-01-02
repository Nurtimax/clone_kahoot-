import { Container, Typography } from "@mui/material";
import React from "react";
import { NavImageStyled } from "../styles";

const NavImage = () => {
  return (
    <>
      <NavImageStyled>
        <Container>
          <Typography variant="h4" component="div">
            Image
          </Typography>
        </Container>
      </NavImageStyled>
    </>
  );
};

export default NavImage;
