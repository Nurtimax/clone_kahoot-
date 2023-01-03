import { AppBar, Card, CardContent, Divider } from "@mui/material";
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
  const { chooseOption = [] } = findedData;
  console.log(chooseOption);

  return (
    <>
      <Card className="setting_cards">
        <AppBar position="relative" color="secondary">
          <AddSettingQuestionMenu />
        </AppBar>
        <Divider />
        <CardContent>
          {chooseOption.map((option) => (
            <QuestionCard key={option.id} {...option} />
          ))}
        </CardContent>
      </Card>
    </>
  );
};

export default AddSettingQuestion;
