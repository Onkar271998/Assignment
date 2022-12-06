import { Box, Center, Image, SimpleGrid, Text } from "@chakra-ui/react";
import React from "react";

function IconBox() {
  return (
    <>
      <Box alignItems="center" border="0.5px solid gray" width="77%" padding="2rem" borderLeftColor="#ff9c00" borderLeftWidth="5px"   margin="auto" mt="4rem" mb="2rem" >
        <Text  >
          <span>
         
            <Text as="b"> Welcome to the UHFF</Text>
          </span>
          (United Health & Fitness Forum). UHFF is a forum of fitness & sports
          organisations founded in 2016. The UHFF is a
          <span>
            <Text as="b"> non-profit CSR initiative.</Text>
          </span>
          This is perhaps the first of its kind venture in the country. Our
          vision is to be the
          <Text as="b">
            top motivator & catalyst for fitness, wellness and good health.
          </Text>
          The vision of this organisation is simple. Be the #1 active forum for
          fitness, wellness and good health by empowering, educating, connecting
          and involving citizens, gyms, fitness enthusiasts and members. We
          propose to achieve our vision by:
        </Text>
      </Box>

      <Box
        w={["100%", "100%", "100%", "70%"]}
        bgColor="#fff0d9"
        padding="30px"
        display="flex"
        margin="auto"
      >
        <Box margin="auto">
          <Image
            src="https://uhff.fit/wp-content/themes/united-health-fitness-forum/images/comma-1.png"
            w="110px"
          ></Image>
        </Box>
        <Text
          fontSize="18px"
          fontWeight="600"
          padding="20px"
          alignItems="center"
          margin="auto"
        >
          It is our desire to make our country of India the HEALTHIEST & FITTEST
          COUNTRY in the world It is not only our belief, it is a statement of
          TRUTH – “Fitness is not a GOAL, it is a LIFESTYLE”.
        </Text>
        <Box margin="auto">
          <Image
            src="https://uhff.fit/wp-content/themes/united-health-fitness-forum/images/comma-2.png"
            w="110px"
          ></Image>
        </Box>
      </Box>

      <SimpleGrid
        // display="flex"
        alignItems={"flex-start"}
        justifyContent={"space-between"}
        w={["100%","100%","100%","70%"]}
        gap="2rem"
        margin="auto"
        mt="2rem"
        fontSize="15px"
        fontWeight="400"
        columns={[2,2,3,4]}
      >
        <Box>
          <Box maxWidth={"max-content"} margin={"auto"}>
            <Image
              src="https://uhff.fit/wp-content/themes/united-health-fitness-forum/images/operation.png"
              mb="1rem"
            ></Image>
          </Box>

          <Text textAlign={"center"} w="15rem">
            Help set standards of operations, ethics and quality in programming
            and processes that bring value to members, citizens and communities.
          </Text>
        </Box>

        <Box>
          <Box maxWidth={"max-content"} margin={"auto"}>
            <Image
              src="https://uhff.fit/wp-content/themes/united-health-fitness-forum/images/health.png"
              
              mb="1rem"
            ></Image>
          </Box>

          <Text textAlign={"center"} w="15rem">
            Be the architects of the health & fitness industry
          </Text>
        </Box>

        <Box>
          <Box maxWidth={"max-content"} margin={"auto"}>
            <Image
              src="https://uhff.fit/wp-content/themes/united-health-fitness-forum/images/education.png"
              mb="1rem"
            ></Image>
          </Box>

          <Text textAlign={"center"} w="15rem">
            Provide connectivity, education, information, knowledge and
            motivation to citizens and members to enable them to be on the same
            platform as the world
          </Text>
        </Box>

        <Box>
          <Box maxWidth={"max-content"} margin={"auto"}>
            <Image
              src="https://uhff.fit/wp-content/themes/united-health-fitness-forum/images/voice.png"
              mb="1rem"
            ></Image>
          </Box>

          <Text textAlign={"center"} w="15rem">
            Be the voice of the health and fitness conscious citizens
          </Text>
        </Box>
      </SimpleGrid>

      <Center>
        <Text
          mt="2rem"
          fontWeight="540"
          fontSize="22px"
          fontFamily="sans-serif"
          fontStyle="italic"
          color="#1f2358"

        
          







        >
          Read More About Why We Need This
        </Text>

      </Center>
      <Image src="https://uhff.fit/wp-content/themes/united-health-fitness-forum/images/down-arrow.png" margin="auto" mt="0.5rem" ></Image>
    </>
  );
}

export default IconBox;
