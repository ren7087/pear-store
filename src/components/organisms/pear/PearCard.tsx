import { Box, Image, Text, Stack } from "@chakra-ui/react";
import { memo, VFC } from "react";
import { Button } from '@chakra-ui/react'

type Props = {
  id: number;
  name: string;
  url: string;
  description: string;
  season: string;
  onClick: (id: number) => void;
};

export const PearCard: VFC<Props> = memo((props) => {
  const { id, name, url, description, season, onClick } = props;
  return (
    <Box
      w="260px"
      h="400px"
      bg="white"
      borderRadius="10px"
      shadow="md"
      p={4}
    //   _hover={{ cursor: "pointer", opacity: 0.8 }}
      onClick={() => onClick(id)}
    >
      <Stack textAlign="center" spacing={4}>
        <Image
		  w="280px"
		  h="180px"
          src={url}
          alt={name}
        //   m="auto"
        />
        <Text fontSize="lg" fontWeight="bold">
          {name}
        </Text>
        <Text fontSize="md" fontWeight="bold">
          {season}
        </Text>
        <Text fontSize="sm" color="gray">
          {description}
        </Text>
      </Stack>
    </Box>
  );
});
