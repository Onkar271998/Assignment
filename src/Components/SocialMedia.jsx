import { Box } from "@chakra-ui/react";
import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaPhoneAlt,
  FaYoutube,
} from "react-icons/fa";
import { BsEnvelopeFill } from "react-icons/bs";
function SocialMedia() {
  return (
    <Box fontSize="20px" alignItems="center" color="white" w="2.5rem">
      <Box
        padding="0.5rem"
        bgColor="#98cb4a"
      >
        <FaPhoneAlt />
      </Box>
      <Box padding="0.5rem" bgColor="#f77040">
        <BsEnvelopeFill />
      </Box>
      <Box padding="0.5rem" bgColor="#3c5a96">
        <FaFacebookF />
      </Box>
      <Box padding="0.5rem" bgColor="#d40000">
        <FaYoutube />
      </Box>
      <Box padding="0.5rem" bgColor="#6b45bc">
        <FaInstagram />
      </Box>
    </Box>
  );
}

export default SocialMedia;
