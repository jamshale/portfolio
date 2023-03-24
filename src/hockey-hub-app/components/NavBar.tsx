import {
  Box,
  Flex,
  Heading,
  HStack,
  Image,
  Spacer,
  Text,
} from "@chakra-ui/react";
import logo from "../assets/canucks-icon-basic.png";

const NavBar = () => {
  return (
    <HStack paddingY={2} paddingX={10} background="#002d55">
      <Image src={logo} boxSize={10}></Image>
      <Text
        fontFamily={`"Sintony", Arial, sans-serif`}
        fontSize={25}
        paddingLeft={5}
        textShadow={"1px 1px 1px black"}
      >
        <Text as="span">VANCOUVER </Text>
        <Text as="span" fontWeight={"bold"}>
          CANUCKS
        </Text>
      </Text>
    </HStack>
  );
};

export default NavBar;
