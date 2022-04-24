import { Flex, Image } from '@chakra-ui/react'


export const Footer = () => {
  return (
    <Flex justify={'space-evenly'} alignItems={'center'} >
      <Image src='/images/github-icon.png' w={'36px'} h={'31px'} alt='Line design' />
      <Image src='/images/twitter-logo.png' w={'36px'} h={'31px'} alt='Line design' />
      <Image src='/images/discord-icon.png' w={'36px'} h={'31px'} alt='Line design' />
    </Flex>
  )
}

export default Footer

