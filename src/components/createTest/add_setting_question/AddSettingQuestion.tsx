import { AppBar, Card, CardContent, Divider } from "@mui/material";
import { IAddSettingQuestionType } from "../../../types";
import AddSettingQuestionMenu from "./question-menu/AddSettingQuestionMenu";
import QuestionCard from "./question_card/QuestionCard";

const AddSettingQuestion = ({ id, findedData }: IAddSettingQuestionType) => {
  const { chooseOption } = findedData;
  console.log(chooseOption);

  return (
    <>
      <Card className="setting_cards">
        <AppBar position="relative" color="secondary">
          <AddSettingQuestionMenu />
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
