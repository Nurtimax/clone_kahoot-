import React, { FC } from "react";
import {
  Box,
  Button,
  Card,
  CardContent,
  Grid,
  Typography,
} from "@mui/material";
import { CardItemStyled } from "../../styles";
import { ITargetCardItemData } from "../../types";

interface CardItemProps extends ITargetCardItemData {}

const CardItem: FC<CardItemProps> = ({
  id,
  image,
  buttonTitle,
  category,
  description,
  title,
}) => {
  return (
    <CardItemStyled imageForCard={image}>
      <Card>
        <Grid container>
          <Grid item xs={7}>
            <CardContent>
              <Box>
                <Typography
                  variant="body1"
                  component="div"
                  className="cardItem_category"
                >
                  {category}
                </Typography>
                <Typography variant="h5" component="div" className="title">
                  {title}
                </Typography>
                <Typography
                  variant="body1"
                  component="div"
                  className="description"
                >
                  {description}
                </Typography>
                <Box>
                  <Button>Learn more </Button>
                </Box>
                <Button variant="contained" color="success">
                  {buttonTitle}
                </Button>
              </Box>
            </CardContent>
          </Grid>
          <Grid item xs={5}>
            <div className="cardImage"></div>
          </Grid>
        </Grid>
      </Card>
    </CardItemStyled>
  );
};

export default CardItem;
