import React from "react";
import { Box, Card, CardContent, Grid, TextField } from "@mui/material";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import LockOpenIcon from "@mui/icons-material/LockOpen";
import AccountBoxOutlinedIcon from "@mui/icons-material/AccountBoxOutlined";
import Button from "@mui/material/Button";
import "./auth-form.css";
import { Container } from "@mui/system";
import { SpanStyled } from "../../styles";
const AuthForm = () => {
  return (
    <>
      <Container>
        <Box sx={{ width: "80%", m: "auto", p: 5 }}>
          <Card>
            <CardContent>
              <Grid container spacing={3}>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label={
                      <div>
                        <AccountBoxOutlinedIcon />
                        <SpanStyled>First Name</SpanStyled>
                      </div>
                    }
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label={
                      <div>
                        <AccountBoxOutlinedIcon />
                        <SpanStyled>Last Name</SpanStyled>
                      </div>
                    }
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label={
                      <div>
                        <MailOutlineIcon />
                        <SpanStyled>Email</SpanStyled>
                      </div>
                    }
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label={
                      <div>
                        <LockOpenIcon />
                        <SpanStyled>Password</SpanStyled>
                      </div>
                    }
                  />
                </Grid>
                <Grid item xs={12}>
                  <Button fullWidth variant="contained">
                    Sign up
                  </Button>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Box>
      </Container>
    </>
  );
};

export default AuthForm;
