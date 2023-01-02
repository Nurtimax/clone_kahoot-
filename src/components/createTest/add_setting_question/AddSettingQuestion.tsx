import { AppBar, Card, CardContent, Divider } from "@mui/material";
import { FC } from "react";
import { useParams } from "react-router-dom";
import { IAddSettingQuestionType, ICreateTestItem } from "../../../types";
import AddSettingQuestionMenu from "./question-menu/AddSettingQuestionMenu";
import QuestionCard from "./question_card/QuestionCard";

interface AddSettingQuestionProps {
  findedData: ICreateTestItem;
}

const AddSettingQuestion: FC<AddSettingQuestionProps> = ({ findedData }: AddSettingQuestionProps) => {
  const { id } = useParams();

  const { chooseOption } = findedData;
  console.log(chooseOption);

  if (!id) {
    return;
  }

  return (
    <>
      <Card className="setting_cards">
        <AppBar position="relative" color="secondary">
          <AddSettingQuestionMenu id={id} />
        </AppBar>
        <Divider />
        <CardContent>
          <QuestionCard />
        </CardContent>
      </Card>
    </>
  );
};

export default AddSettingQuestion;
