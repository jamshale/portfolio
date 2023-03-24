import { Grid, GridItem, HStack, Spacer, Text, Image } from "@chakra-ui/react";
import { useEffect } from "react";
import NavBar from "./components/NavBar";
import PlayerGrid from "./components/PlayerGrid";

const HockeyHubApp = () => {
  useEffect(() => {
    document.title = `Vancouver Canucks`;
  }, []);

  return (
    <Grid
      templateAreas={{ base: `"nav" "main"` }}
      templateColumns={{ base: "1fr" }}
    >
      <GridItem area={"nav"}>
        <NavBar />
      </GridItem>
      <GridItem area={"main"}>
        <PlayerGrid />
      </GridItem>
    </Grid>
  );
};

export default HockeyHubApp;
