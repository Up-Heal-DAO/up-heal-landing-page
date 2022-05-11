import React from "react";
import { Box, Image, ChakraProps, OmitCommonProps } from "@chakra-ui/react";

export default function Logo(props: JSX.IntrinsicAttributes & OmitCommonProps<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, keyof ChakraProps> & ChakraProps & { as?: "div" | undefined; }) {
  return (
    <Box {...props}>
      <Image src='/images/up-heal-logo-website.png' w={'80px'} h={'80px'} alt='Up Heal Logo' />
    </Box>
  );
}