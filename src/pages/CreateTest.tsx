import { Box, Container, Grid } from "@mui/material";
import CreateTestItem from "../components/createTest/create_test_item/CreateTestItem";
import TestCard from "../components/createTest/test_card/TestCard";
import { useAppSelector } from "../hook/react-redux";

const CreateTest = () => {
  const items = useAppSelector((state) => state.createTest.data);
  console.log(items);

  return (
    <>
      <Container>
        <Box sx={{ padding: "1rem" }}>
          <Grid container spacing={2}>
            {items?.items?.map((item) => (
              <Grid key={item.id} item xs={12} md={5} sm={12} >
                <TestCard {...item} />
              </Grid>
            ))}
          </Grid>
          <CreateTestItem />
        </Box>
      </Container>
    </>
  );
};

export default CreateTest;
