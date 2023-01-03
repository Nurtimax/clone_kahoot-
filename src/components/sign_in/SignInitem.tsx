import TextField from "@mui/material/TextField";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import LockOpenIcon from "@mui/icons-material/LockOpen";
import Button from "@mui/material/Button";
import {
 
  SpanStyled,
} from "../../styles";
import { Box, Card, CardContent, Container, Grid } from "@mui/material";
const SignInitem = () => {
  return (
    <>
      <Container>
        <Box sx={{width: '80%', m: 'auto', p: 5}}>
          <Card>
            <CardContent>
              <Grid container spacing={3}>
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
                    Sign in
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

export default SignInitem;
