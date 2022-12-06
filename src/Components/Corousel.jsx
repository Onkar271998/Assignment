import { Box, Button, Flex, Icon, Image } from "@chakra-ui/react";
import React from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import { useState } from "react";
import SocialMedia from "./SocialMedia";
function Corousel() {
  let [count, setCount] = useState(0);
  let arr = [
    "https://uhff.fit/wp-content/themes/united-health-fitness-forum/images/banner-5-new.jpg",
    "https://uhff.fit/wp-content/themes/united-health-fitness-forum/images/banner-2.jpg",
    "https://uhff.fit/wp-content/themes/united-health-fitness-forum/images/banner-4.jpg",
    "https://uhff.fit/wp-content/themes/united-health-fitness-forum/images/banner-3.jpg",
    "https://uhff.fit/wp-content/themes/united-health-fitness-forum/images/banner-6.jpg",
  ];

//   setInterval(() => {
//     if(count > arr.length){
//     count=0

//     }

//     setCount(count+1)
//   }, 3000);

  return (
    <>
    
      <Flex gap={2} w={{ lg: "100%", md: "100%", sm: "100%" }} mt="4rem">
        <Button
          onClick={() => setCount(count - 1)}
          disabled={count === 0 ? true : false}
          bgColor="white"
          mt="5rem"
        >
          <Icon as={ChevronLeftIcon} w={10} h={10} />
        </Button>
        <Box>
          <Image src={arr[count]} />
        </Box>

        <Button
          onClick={() => setCount(count + 1)}
          bgColor="white"
          _hover={{ bg: "white" }}
          mt="5rem"
          disabled={count === 4 ? true : false}
        >
          <Icon as={ChevronRightIcon} w={10} h={10} />
        </Button>
      </Flex>
       
       <Box  marginLeft= {["94%" ,"94%","94%","96%"]} mt={["0" ,"0","0","-20rem"]} position="fixed">
      <SocialMedia />
      </Box>
    </>
  );
}

export default Corousel;
