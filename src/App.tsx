import { Box, Grid, GridItem, SimpleGrid, Heading } from "@chakra-ui/react";
import gameHubImg from "./assests/game-hub.webp";
import jamifyImg from "./assests/jamify.webp";
import geospatialImg from "./assests/geospatial.webp";
import frequencyImg from "./assests/frequency.jpg";
import ProjectCard from "./components/ProjectCard";
import "./index.css";

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
            marginY={20}
            textShadow="1px 1px 1px gray"
          >
            Jamie Hale - Full Stack Developer
          </Heading>
        </Box>
      </GridItem>
      <GridItem area="main">
        <SimpleGrid columns={{ sm: 1, md: 2, xl: 4 }} padding={2} spacing={5}>
          <ProjectCard
            to="/game-hub"
            heading="Game Hub"
            description="Created in react and typescript this is a replication of the popular
          website rawg.io using chakra UI. This is my prefrerred front end
          stack."
            img={gameHubImg}
          />
          <ProjectCard
            to="/jamify"
            heading="Jamify - HTML/CSS"
            description="Simulating a static website for a fictional cloud hosing company called Jamify. This project is almost pure html/css with only a tiny bit of js."
            img={jamifyImg}
          />
          <ProjectCard
            to="/geospatial"
            heading="Geospatial"
            description="One of my favorite assignments in university. Done with another student we created a lidar imaging sharing/torrent application. Used docker swarm to drastically increase browser rendering speeds."
            img={geospatialImg}
          />
          <ProjectCard
            to="/geospatial"
            heading="Bee Listener"
            description="This is a personal project that accurately records sound and converts a certain frequency. Was used to detect bees and differentiate between species using a machine learning model."
            img={frequencyImg}
          />
        </SimpleGrid>
      </GridItem>
    </Grid>
  );
};

export default App;
