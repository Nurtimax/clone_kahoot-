import {
  Grid,
  IconButton,
  Menu,
  MenuItem,
  Paper,
  styled,
  Toolbar,
  Typography,
} from "@mui/material";
import React, { MouseEvent, MouseEventHandler, useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import { useAppDispatch } from "../../../../hook/react-redux";
import { IAddSettingQuestionType } from "../../../../types";
import { createTestAction } from "../../../../store/slices/createTestSlice/createTestSlice";
import uuid from "react-uuid";
import { exampleData } from "../../../../data";
import QuizMenuItem from "./menu_items/QuizMenuItem";
import { IExampleDataType } from "../../../../types";

const Item = styled(Paper)(({ theme }) => ({
  background: theme.palette.mode === "dark" ? "#1a2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(0.5),
  textAlign: "center",
  color: theme.palette.text.secondary,
  "& img": {
    width: "30px",
    height: "30px",
  },
  "& .item": {
    display: "flex",
    alignItems: "center",
  },
  "&:hover": {
    background: theme.palette.mode === "dark" ? "#1a2027ea" : "#ede9e9",
  },
}));

const AddSettingQuestionMenu = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const dispatch = useAppDispatch();

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleMenu = (e: MouseEvent<HTMLElement>) => {
    setAnchorEl(e.currentTarget);
  };

  const handleOver = (data: IExampleDataType) => {
    return () => {
      dispatch(createTestAction.changeChooseOption(data));
    };
  };

  const addQuestionCard = () => {
    return () => {
      console.log(true);
      
    }    
  };

  return (
    <>
      <Toolbar variant="dense">
        <IconButton
          edge="start"
          color="inherit"
          aria-label="add"
          onClick={handleMenu}
        >
          <AddIcon />
        </IconButton>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleClose}
          anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
          keepMounted
        >
          <MenuItem>
            <Grid container spacing={1} sx={{ width: 600 }}>
              <Grid item xs={12}>
                <Typography>Test Knowledge</Typography>
              </Grid>
              <Grid item xs={6}>
                <Grid container spacing={2.2}>
                  {exampleData.map((data) => (
                    <Grid item xs={12} key={data.id} sx={{ width: 80 }}>
                      <Item
                        onMouseEnter={handleOver(data)}
                        onClick={addQuestionCard()}
                      >
                        <Grid container>
                          <Grid item xs={2} className="item">
                            <img src={data.img} alt="" />
                          </Grid>
                          <Grid item xs={8} className="item">
                            <Typography variant="body1" component="div">
                              {data.title}
                            </Typography>
                          </Grid>
                          <Grid item xs={2} className="item">
                            <Typography variant="body1" component="div">
                              {String(data.work)}
                            </Typography>
                          </Grid>
                        </Grid>
                      </Item>
                    </Grid>
                  ))}
                </Grid>
              </Grid>
              <Grid item xs={6}>
                <QuizMenuItem />
              </Grid>
            </Grid>
          </MenuItem>
        </Menu>
      </Toolbar>
    </>
  );
};

export default AddSettingQuestionMenu;
