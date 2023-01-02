import { Container, Grid } from "@mui/material";
import CardItem from "../components/card/Card";
import { targetCardItemData } from "../data";
import NavImage from "../layout/NavImage";

const Home = () => {
  return (
    <>
      <NavImage />
      <Container>
        <Grid container spacing={1}>
          {targetCardItemData.map((cardItem) => (
            <Grid item sm={6} key={cardItem.id}>
              <div className="f_flex" >
                <CardItem {...cardItem} />
              </div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
};

export default Home;
