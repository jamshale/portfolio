import {
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
  const { data, error, isLoading } = useRoster();

  const getPlayerImgSrc = (id: number) => {
    return "https://cms.nhl.bamgrid.com/images/actionshots/" + id + ".jpg";
  };

  return (
    <SimpleGrid
      columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
      padding={2}
      spacing={5}
    >
      {data.map((player) => (
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
          />
          <CardBody>
            <HStack>
              <Text>{player.jerseyNumber}</Text>
              <Text>{player.person.fullName}</Text>
              <Text>{player.position.abbreviation}</Text>
            </HStack>
          </CardBody>
        </Card>
      ))}
    </SimpleGrid>
  );
};

export default PlayerGrid;
