import { Box, Image, Flex, Text } from "@chakra-ui/react";
import { getmovies } from "../../API/movies";
import { Key } from "react";

async function MovieCard() {
  const { data } = await getmovies();
  return (
    <Flex
      m={3}
      direction="row"
      gap={3}
      // overflowX="scroll"
      w="100%"
      whiteSpace="nowrap"
    >
      {data?.map((movieitem: { id: Key | null | undefined; banner_image: string; title: string; year: string; genre: string; }) => (
        <InfoCard
          key={movieitem?.id}
          ImgUrl={movieitem?.banner_image}
          Title={movieitem?.title}
          year={movieitem?.year}
          genre={movieitem?.genre}
        />
      ))}
    </Flex>
  );
}

function InfoCard({
  ImgUrl,
  Title,
  year,
  genre,
}: {
  ImgUrl: string;
  Title: string;
  year: string;
  genre: string;
}) {
  return (
    <>
      <Box
        borderWidth={1}
        borderRadius="lg"
        w="20%"
        maxW="20%"
        h="auto"
        overflow="hidden"
        position="relative"
        flexShrink={0}
      >
        <Flex direction="column" h="100%">
          <Image src={ImgUrl} h="250px" objectFit="cover" />
          <Flex direction="column" justify="center" flexGrow={1} p={3}>
            <Text fontSize="sm" fontWeight="bold" width={"full"} noOfLines={1}>
              {Title}
            </Text>
          </Flex>
          <Text fontSize="sm" fontWeight="bold" width={"full"} noOfLines={1}>
            {year}
          </Text>
          <Text fontSize="sm" fontWeight="bold" width={"full"} noOfLines={1}>
            {genre}
          </Text>
        </Flex>
      </Box>
    </>
  );
}

export default MovieCard;
