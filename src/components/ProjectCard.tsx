import { Card, Heading, Image, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

interface Props {
  heading: string;
  description: string;
  img: string;
  to: string;
}

const ProjectCard = ({ heading, description, img, to }: Props) => {
  return (
    <Link to={to}>
      <Card padding={2}>
        <Image src={img} height="200px" objectFit="scale-down" />
        <Heading fontSize="2xl" textAlign="center" paddingTop={2}>
          {heading}
        </Heading>
        <Text fontSize={12} padding={5} textAlign="center">
          {description}
        </Text>
      </Card>
    </Link>
  );
};

export default ProjectCard;
