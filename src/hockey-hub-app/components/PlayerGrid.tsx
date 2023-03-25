import {
  Box,
  Card,
  CardBody,
  HStack,
  Image,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import useRoster from "../hooks/useRoster";
import blankImg from "../assets/no-image-placeholder.webp";

const PlayerGrid = () => {
  const { playerDetails, error, isLoading } = useRoster();

  const getPlayerImgSrc = (id: number) => {
    return "https://cms.nhl.bamgrid.com/images/actionshots/" + id + ".jpg";
  };

  const activePlayers = playerDetails.filter(
    (player) => player.person.rosterStatus !== "I"
  );

  return (
    <SimpleGrid columns={{ sm: 1, md: 2, lg: 3 }} padding={2} spacing={5}>
      {activePlayers.map((player) => (
        <Card
          borderRadius={10}
          overflow="hidden"
          boxShadow="1px 1px 1px #383838"
          background="#213672"
          key={player.person.id}
        >
          <Image
            src={getPlayerImgSrc(player.person.id)}
            height="250px"
            objectFit="cover"
            fallbackSrc={blankImg}
          />
          <CardBody>
            <HStack
              justifyContent="space-between"
              fontSize={"xl"}
              fontWeight="bold"
            >
              <Box
                background="#2b482c"
                boxShadow="0.5px 0.5px 0.5px #232323"
                borderRadius="50%"
                display={"flex"}
                width={10}
                height={10}
                justifyContent="center"
                alignItems="center"
              >
                <Text textShadow={"0.5px 0.5px 0.5px #232323"}>
                  {player.person.primaryNumber}
                </Text>
              </Box>
              <Text textShadow={"0.5px 0.5px 0.5px #232323"}>
                {player.person.fullName}
              </Text>
              <Box
                background="#2b482c"
                boxShadow="0.5px 0.5px 0.5px #232323"
                borderRadius="50%"
                display={"flex"}
                width={10}
                height={10}
                justifyContent="center"
                alignItems="center"
              >
                <Text textShadow={"0.5px 0.5px 0.5px black"}>
                  {player.person.primaryPosition.abbreviation}
                </Text>
              </Box>
            </HStack>
          </CardBody>
        </Card>
      ))}
    </SimpleGrid>
  );
};

export default PlayerGrid;
