import { Card, CardContent, Grid, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { ICreateTestItem } from "../../../types";

const TestCard = ({
  cardTitle,
  completed,
  id,
  isCorrect,
  question,
  dateNow,
}: ICreateTestItem) => {
  const dateKnow = () => {
    if (new Date(dateNow).getFullYear() - new Date().getFullYear() !== 0) {
      return `${
        new Date().getFullYear() - new Date(dateNow).getFullYear()
      } year ago`;
    }
    if (new Date(dateNow).getMonth() - new Date().getMonth() !== 0) {
      return `${
        new Date().getMonth() - new Date(dateNow).getMonth()
      } month ago`;
    }
    if (new Date(dateNow).getDate() - new Date().getDate() !== 0) {
      return `${new Date().getDate() - new Date(dateNow).getDate()} day ago`;
    }
    if (new Date(dateNow).getHours() - new Date().getHours() !== 0) {
      return `${new Date().getHours() - new Date(dateNow).getHours()} hour ago`;
    }
    if (new Date(dateNow).getMinutes() - new Date().getMinutes() !== 0) {
      return `${
        new Date().getMinutes() - new Date(dateNow).getMinutes()
      } minute ago`;
    }
    if (new Date(dateNow).getSeconds() - new Date().getSeconds() !== 0) {
      return `${
        new Date().getSeconds() - new Date(dateNow).getSeconds()
      } second ago`;
    }
    return "1 second ago";
  };

  return (
    <Link to={`/create-test/${id}`}>
      <Card>
        <CardContent>
          <Grid container>
            <Grid item xs={12}>
              <Typography component="div" variant="h5">
                {cardTitle.toUpperCase()}
              </Typography>
            </Grid>
            <Grid item xs={12}></Grid>
          </Grid>
        </CardContent>
        <Typography
          component="div"
          variant="body2"
          sx={{
            justifyContent: "flex-end",
            display: "flex",
            alignItems: "flex-end",
            padding: 1,
          }}
        >
          {dateKnow()}
        </Typography>
      </Card>
    </Link>
  );
};

export default TestCard;
