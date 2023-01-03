import {
  Box,
  Grid,
  IconButton,
  Paper,
  styled,
  Typography,
} from "@mui/material";
import React, { FC } from "react";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import QuestionCardImage from "./QuestionCardImage";
import { IExampleDataType } from "../../../../types";

const Item = styled(Paper)(({ theme }) => ({
  background: theme.palette.mode === "dark" ? "#1a2027" : "#f9f8f8",
  ...theme.typography.body2,
  padding: theme.spacing(0.8),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const QuestionCard: FC<IExampleDataType> = ({
  description,
  id,
  img,
  options,
  title,
  work,
}) => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          alignItems: "flex-end",
          justifyContent: "center",
        }}
      >
        <Grid container>
          <Grid item>
            <IconButton size="small">
              <DeleteOutlineIcon />
            </IconButton>
          </Grid>
          <Grid item>
            <IconButton size="small">
              <ContentCopyIcon />
            </IconButton>
          </Grid>
        </Grid>
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            "& > :not(style)": {
              width: 175,
            },
          }}
        >
          <Paper>
            <Box sx={{ display: "flex", justifyContent: "center" }}>
              <Typography variant="subtitle2" component="h1" color="gray">
                Question{" "}
              </Typography>
            </Box>
            <Box sx={{ height: 70 }}>
              <Grid container>
                <Grid
                  item
                  xs={5}
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Box
                    sx={{
                      width: 25,
                      height: 25,
                      borderRadius: "50%",
                      border: "1.5px solid gray",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Typography variant="body2" component="div" color="gray">
                      20
                    </Typography>
                  </Box>
                </Grid>
                <Grid
                  item
                  xs={5}
                  sx={{
                    display: "flex",
                    justifyContent: "flex-start",
                    alignItems: "center",
                  }}
                >
                  <Box
                    sx={{
                      height: 45,
                      width: 200,
                      border: "1px dashed gray",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <QuestionCardImage />
                  </Box>
                </Grid>
              </Grid>
            </Box>
            <Box sx={{ p: 1 }}>
              <Grid container spacing={1}>
                {options.map((option) => (
                  <Grid item xs={6}>
                    <Item></Item>
                  </Grid>
                ))}
              </Grid>
            </Box>
          </Paper>
        </Box>
      </Box>
    </>
  );
};

export default QuestionCard;
