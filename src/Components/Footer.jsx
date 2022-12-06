import { Box, Button, Center, Text } from "@chakra-ui/react";
import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaPhoneAlt,
  FaYoutube,
} from "react-icons/fa";
function Footer() {
  return (
    <>
      <Box
        bgColor="#1f2358"
        padding="2rem"
        mt="2rem"
        display="flex"
        justifyContent="space-between"
      >
        <Text color="white" fontSize="14px" fontWeight="400" w="40%">
          Copyright 2018 © UHFF United Health & Fitness Federation. All Rights
          Reserved. Site Designed & Developed by Pixellence Web Solutions.
        </Text>

        <Box display="flex" gap="0.5rem">
          <Box
            bgColor="white"
            color="black"
            borderRadius="50%"
            w="2rem"
            h="2rem"
          >
            <Center mt="8px">
              <FaYoutube />
            </Center>
          </Box>
          <Box
            bgColor="white"
            color="black"
            borderRadius="50%"
            w="2rem"
            h="2rem"
          >
            <Center mt="8px">
              <FaFacebookF />
            </Center>
          </Box>
          <Box
            bgColor="white"
            color="black"
            borderRadius="50%"
            w="2rem"
            h="2rem"
          >
            <Center mt="8px">
              {" "}
              <FaInstagram />
            </Center>
          </Box>
        </Box>
      </Box>

      <Box
    
        bgColor="#ff9c00"
        display="flex"
        padding="3px"
        alignItems="center"
        justifyContent={"center"}
       
      >
        <Text color="white" fontSize="14px">
          Call Us:+91-7263994455 |
        </Text>
        <Button bgColor="#1f2358" color="white" fontSize="14px" ml="0.5rem">
          Take The Pledge for Fitness
        </Button>
      </Box>
    </>
  );
}

export default Footer;
