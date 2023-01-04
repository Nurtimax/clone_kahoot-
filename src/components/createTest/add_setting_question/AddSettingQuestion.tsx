import { AppBar, Card, CardContent, Divider, Grid } from "@mui/material";
import { FC } from "react";
import { ICreateTestItem } from "../../../types";
import AddSettingQuestionMenu from "./question-menu/AddSettingQuestionMenu";
import QuestionCard from "./question_card/QuestionCard";

interface AddSettingQuestionProps {
  findedData: ICreateTestItem;
}

const AddSettingQuestion: FC<AddSettingQuestionProps> = ({
  findedData,
}: AddSettingQuestionProps) => {
  const {  question = [] } = findedData;
  console.log(question);

  return (
    <>
      <Card className="setting_cards">
        <AppBar position="relative" color="secondary">
          <AddSettingQuestionMenu  />
        </AppBar>
        <Divider />
        <CardContent>
          <Grid container spacing={2}>
            {question.map((option) => (
              <Grid item key={option.id}>
                <QuestionCard {...option} />
              </Grid>
            ))}
          </Grid>
        </CardContent>
      </Card>
    </>
  );
};

export default AddSettingQuestion;
