import { Box, Grid, GridItem, Heading } from "@chakra-ui/react";
import "./index.css";
import ProjectGrid from "./components/ProjectGrid";

const App = () => {
  return (
    <Grid
      templateAreas={{
        base: `"heading" "main"`,
      }}
      templateColumns={{
        base: "1fr",
      }}
    >
      <GridItem area="heading">
        <Box>
          <Heading
            as="h1"
            textAlign="center"
            marginY={10}
            textShadow="1px 1px 1px gray"
          >
            Jamie Hale - Full Stack Developer
          </Heading>
        </Box>
      </GridItem>
      <GridItem area="main">
        <ProjectGrid />
      </GridItem>
    </Grid>
  );
};

export default App;
