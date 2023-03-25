import { SimpleGrid } from "@chakra-ui/react";
import ProjectCard from "./ProjectCard";
import gameHubImg from "../assests/game-hub.webp";
import jamifyImg from "../assests/jamify.webp";
import geospatialImg from "../assests/geospatial.webp";
import frequencyImg from "../assests/frequency.jpg";
import hockeyHubImg from "../assests/hockey-hub.jpg";

const ProjectGrid = () => {
  return (
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
        description="Simulating a static website for a fictional cloud hosting company called Jamify. This project is almost pure html/css with only a tiny bit of js."
        img={jamifyImg}
      />
      <ProjectCard
        to="/geospatial"
        heading="Geospatial"
        description="One of my favorite assignments in university. Done with another student we created a lidar imaging sharing/torrent application. Used docker swarm to drastically increase browser rendering speeds."
        img={geospatialImg}
      />
      <ProjectCard
        to="/bee-listener"
        heading="Bee Listener"
        description="This is a personal project that accurately records sound and converts a certain frequency. It was used to detect bees and differentiate between species using a machine learning model."
        img={frequencyImg}
      />
      <ProjectCard
        to="/bee-listener"
        heading="Bee Listener"
        description="This is a personal project that accurately records sound and converts a certain frequency. It was used to detect bees and differentiate between species using a machine learning model."
        img={frequencyImg}
      />
      <ProjectCard
        to="/hockey-hub"
        heading="Canucks Fan Page"
        description="Work in progress and just for fun fan page of the Vancouver Canucks using the free but poorly documented statsapi"
        img={hockeyHubImg}
      />
    </SimpleGrid>
  );
};

export default ProjectGrid;
