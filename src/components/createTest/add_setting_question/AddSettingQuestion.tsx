import {
  AppBar,
  Box,
  Card,
  CardContent,
  Divider,
  Grid,
  IconButton,
  Paper,
  Typography,
} from "@mui/material";
import { IAddSettingQuestionType } from "../../../types";
import AddSettingQuestionMenu from "./question-menu/AddSettingQuestionMenu";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";

const AddSettingQuestion = ({ id }: IAddSettingQuestionType) => {
  return (
    <>
      <Card className="setting_cards">
        <AppBar position="relative" color="secondary">
          <AddSettingQuestionMenu />
        </AppBar>
        <Divider />
        <CardContent>
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
                  height: 130,
                },
              }}
            >
              <Paper>
                <Box sx={{ display: "flex", justifyContent: "center" }}>
                  <Typography variant="subtitle1" component="h1" color="gray">
                    Question{" "}
                  </Typography>
                </Box>
                <Box>
                  <Grid container>
                    <Grid
                      item
                      xs={5}
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "flex-end",
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
                        <Typography
                          variant="body1"
                          component="div"
                          color="gray"
                        >
                          20
                        </Typography>
                      </Box>
                    </Grid>
                  </Grid>
                </Box>
              </Paper>
            </Box>
          </Box>
        </CardContent>
      </Card>
    </>
  );
};

export default AddSettingQuestion;
