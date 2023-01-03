import { Card, CardContent, Container, Grid } from "@mui/material";
import { useParams } from "react-router-dom";
import { useAppSelector } from "../hook/react-redux";
import { SettingTestStyled } from "../styles";
import SettingTestUI from "../components/createTest/setting_test_UI/SettingTestUI";
import AddSettingQuestion from "../components/createTest/add_setting_question/AddSettingQuestion";

const SettingTest = () => {
  const { id } = useParams();
  const items = useAppSelector((state) => state.createTest.data?.items);
  const findedData = items?.find((item) => item.id === id);

  if (!findedData) {
    return <h1>Loading...</h1>;
  }

  return (
    <SettingTestStyled>
      <Container>
        <Grid container>
          <Grid item xs={2.5}>
            <AddSettingQuestion findedData={findedData} />
          </Grid>
          <Grid item xs={7}>
            <Card className="setting_cards">
              <CardContent>2</CardContent>
            </Card>
          </Grid>
          <Grid item xs={2.5}>
            <SettingTestUI />
          </Grid>
        </Grid>
      </Container>
    </SettingTestStyled>
  );
};

export default SettingTest;
