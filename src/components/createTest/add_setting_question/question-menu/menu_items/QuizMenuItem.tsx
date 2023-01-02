import {
  Box,
  Button,
  Card,
  CardContent,
  Grid,
  IconButton,
  Paper,
  Typography,
} from "@mui/material";
import React from "react";
import ImageSkelet from "../../../../../assets/icons/ImageSkelet";
import { useAppSelector } from "../../../../../hook/react-redux";

const QuizMenuItem = () => {
  const chooseOption = useAppSelector(
    (state) => state.createTest.data?.chooseOption
  );

  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          "& > :not(style)": {
            width: 300,
            height: 372,
          },
        }}
      >
        <Paper>
          <Card>
            <CardContent>
              <Typography variant="subtitle1" component="div">
                Mount Everest is located in:
              </Typography>
              <IconButton
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "100%",
                }}
              >
                <ImageSkelet />
              </IconButton>
              <Grid container spacing={0.5}>
                {chooseOption?.options.map((option) => (
                  <Grid item xs={6} key={option.id}>
                    <Button
                      fullWidth
                      variant="contained"
                      sx={{ background: option.bg }}
                    >
                      <Typography variant="subtitle2" component="span">
                        {option.title}
                      </Typography>
                    </Button>
                  </Grid>
                ))}
              </Grid>
            </CardContent>
          </Card>
          <Box sx={{ width: "90%", p: 1 }}>
            <Typography variant="h6" component="div">
              {chooseOption?.title}
            </Typography>
            <Typography variant="body2" component="p">
              Give players several answer alternatives <br /> to choose from.
            </Typography>
          </Box>
        </Paper>
      </Box>
    </>
  );
};

export default QuizMenuItem;
