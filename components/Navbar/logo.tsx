import React from "react";
import { Box, Text, Image} from "@chakra-ui/react";

export default function Logo(props) {
  return (
    <Box {...props}>
    <Image src='/images/up-heal-logo-website.png' w={'80px'} h={'80px'} alt='Up Heal Logo' />
    </Box>
  );
}