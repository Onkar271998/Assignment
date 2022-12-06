import {
  AddIcon,
  ChevronDownIcon,
  EditIcon,
  ExternalLinkIcon,
  HamburgerIcon,
  RepeatIcon,
} from "@chakra-ui/icons";

import {
  Box,
  IconButton,
  Image,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { BsBorderLeft } from "react-icons/bs";

function Navbar() {
  return (
    <>
      <Box
        display="flex"
        justifyContent="space-between"
        w="100%"
        margin="auto"
        bgColor="white"
        position="fixed"
        mt="-4rem"
        borderBottom="0.9px"
        borderBottomColor="rgba(0, 0, 0, 0.24)"
      >
        <Box w="210px">
          <Image src="https://uhff.fit/wp-content/themes/united-health-fitness-forum/images/new-logo.png"></Image>
        </Box>

        <Box
          w="60%"
          display={["none", "none", "none", "flex"]}
          justifyContent="space-between"
          alignItems="center"
          fontSize="17px"
          fontWeight="500"
          fontFamily="sans-serif"
          fontStyle="italic"
          margin={"auto"}
        >
          <Menu>
            <MenuButton
           _hover={{
            backgroundColor: "transparent",
            transition: "all 0.4s ease 0s",
            color: "#fff",
            fontWeight: "600",
            backgroundColor: "rgb(31, 35, 88)",
            clipPath: "polygon(0% 100%, 24% 0%, 100% 0%, 78% 100%)",
            padding: "20px",
          
          }}
          _before={{
            background: "#ff9c00"
          }}
          fontStyle="italic"
        
            >
              About <ChevronDownIcon />
            </MenuButton>

            <MenuList color="#ff9c00">
              <MenuItem>About UHFF</MenuItem>
              <MenuItem>FAQs</MenuItem>
            </MenuList>
          </Menu>

          <Menu>
            <MenuButton
             _hover={{
              backgroundColor: "transparent",
              transition: "all 0.4s ease 0s",
              color: "#fff",
              fontWeight: "600",
              backgroundColor: "rgb(31, 35, 88)",
              clipPath: "polygon(0% 100%, 24% 0%, 100% 0%, 78% 100%)",
              padding: "20px",
            }}
            _before={{
              background: "#ff9c00"
            }}
            fontStyle="italic"
            >
              Our director
            </MenuButton>
          </Menu>

          <Menu>
            <MenuButton
             _hover={{
              backgroundColor: "transparent",
              transition: "all 0.4s ease 0s",
              color: "#fff",
              fontWeight: "600",
              backgroundColor: "rgb(31, 35, 88)",
              clipPath: "polygon(0% 100%, 24% 0%, 100% 0%, 78% 100%)",
              padding: "20px",
            }}
            _before={{
              background: "#ff9c00"
            }}
            fontStyle="italic"
            >
              Members <ChevronDownIcon />
            </MenuButton>

            <MenuList color="#ff9c00" fontStyle="italic">
              <MenuItem>Our Members</MenuItem>
              <MenuItem>Be A Members</MenuItem>
              <MenuItem>Star Ratings</MenuItem>
              <MenuItem>Benefits</MenuItem>
            </MenuList>
          </Menu>

          <Menu>
            <MenuButton
              _hover={{
                backgroundColor: "transparent",
                transition: "all 0.4s ease 0s",
                color: "#fff",
                fontWeight: "600",
                backgroundColor: "rgb(31, 35, 88)",
                clipPath: "polygon(0% 100%, 24% 0%, 100% 0%, 78% 100%)",
                padding: "20px",
              }}
              _before={{
                background: "#ff9c00"
              }}
              fontStyle="italic"
            >
              Fitness Ambassedor
            </MenuButton>
          </Menu>

          <Menu>
            <MenuButton
             _hover={{
              backgroundColor: "transparent",
              transition: "all 0.4s ease 0s",
              color: "#fff",
              fontWeight: "600",
              backgroundColor: "rgb(31, 35, 88)",
              clipPath: "polygon(0% 100%, 24% 0%, 100% 0%, 78% 100%)",
              padding: "15px",
            }}
            _before={{
              background: "#ff9c00"
            }}
            fontStyle="italic"
            >
              Media presence <ChevronDownIcon />
            </MenuButton>

            <MenuList color="#ff9c00">
              <MenuItem>UHFF In Media</MenuItem>
              <MenuItem>Fitness Trends & Articles</MenuItem>
            </MenuList>
          </Menu>

          <Menu
          >
            <MenuButton
              _hover={{
                backgroundColor: "transparent",
                transition: "all 0.4s ease 0s",
                color: "#fff",
                fontWeight: "600",
                backgroundColor: "rgb(31, 35, 88)",
                clipPath: "polygon(0% 100%, 24% 0%, 100% 0%, 78% 100%)",
                padding: "15px",
              }}
              _before={{
                background: "#ff9c00"
              }}
              fontStyle="italic"
            >
              Events
            </MenuButton>
          </Menu>

          <Menu>
            <MenuButton
             _hover={{
              backgroundColor: "transparent",
              transition: "all 0.4s ease 0s",
              color: "#fff",
              fontWeight: "600",
              backgroundColor: "rgb(31, 35, 88)",
              clipPath: "polygon(0% 100%, 24% 0%, 100% 0%, 78% 100%)",
              padding: "15px",
            }}
            _before={{
              background: "#ff9c00"
            }}
            fontStyle="italic"
            >
              Contact Us
            </MenuButton>
          </Menu>
        </Box>
      </Box>

      {/* // Mobile Navbar */}

      <Box
        marginLeft="90%"
        display={["block", "block", "block", "none"]}
        position="fixed"
      >
        <Menu>
          <MenuButton
            as={IconButton}
            aria-label="Options"
            icon={<HamburgerIcon />}
            variant="outline"
            mt="-5rem"
          />
          <MenuList color="#ff9c00">
            <MenuItem>About</MenuItem>
            <MenuItem>Our Directors</MenuItem>
            <MenuItem>Members</MenuItem>
            <MenuItem>Fitnesss Ambassadors</MenuItem>
            <MenuItem>Media Presence</MenuItem>

            <MenuItem>Events</MenuItem>

            <MenuItem>Contact Us</MenuItem>
          </MenuList>
        </Menu>
      </Box>
    </>
  );
}

export default Navbar;
