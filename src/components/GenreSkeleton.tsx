import { HStack, ListItem, Skeleton, SkeletonText } from "@chakra-ui/react";
import React from "react";

const GenreSkeleton = () => {
  return (
    <ListItem>
      <HStack>
        <Skeleton height="32px" width="32px" />
        <SkeletonText />
      </HStack>
    </ListItem>
  );
};

export default GenreSkeleton;
