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
import React, { MouseEvent } from "react";
import AddIcon from "@mui/icons-material/Add";
import { useAppDispatch, useAppSelector } from "../../../../hook/react-redux";
import { IAddQuestionItemPayloadType } from "../../../../types";
import { createTestAction } from "../../../../store/slices/createTestSlice/createTestSlice";
import { exampleData } from "../../../../data";
import QuizMenuItem from "./menu_items/QuizMenuItem";
import { IExampleDataType } from "../../../../types";
import { useParams } from "react-router-dom";
import { usePutCreateDataMutation } from "../../../../store/slices/createTestSlice/createTestSlice.api";
import uuid from "react-uuid";

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
  const [putData] = usePutCreateDataMutation();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const dispatch = useAppDispatch();
  const { id } = useParams();

  const items = useAppSelector((state) => state.createTest.data?.items);
  const findedData = items?.find((item) => item.id === id);

  if (!findedData) {
    return <h1>Loading...</h1>;
  }

  const handleClose = (e: MouseEvent<HTMLElement>) => {
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

  const addQuestionCard = (data: IExampleDataType) => {
    return () => {
      console.log(findedData);
      if (findedData?.question) {
        const newQuestion = [...findedData?.question, { ...data, id: uuid() }];
        console.log(newQuestion, "first question");
        putData({
          id,
          newData: { ...findedData, question: newQuestion },
        });
      } else {
        const newQuestion = findedData?.question?.push(data);
        console.log(newQuestion, "second question");
        console.log({
          id,
          newData: { ...findedData, question: newQuestion },
        });
      }

      if (id) {
        const questionCard: IAddQuestionItemPayloadType = {
          id,
          newQuestionItem: data,
        };
        dispatch(createTestAction.addQuestionItem(questionCard));
      }
    };
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
                        onClick={addQuestionCard(data)}
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
