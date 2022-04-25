import { Flex, Image, Link } from '@chakra-ui/react'

export const Footer = () => {
  return (
    <Flex justify={'space-evenly'} alignItems={'center'} >
      <Link href='https://github.com/Up-Heal-DAO/' isExternal>
        <Image src='/images/github-icon.png' w={'36px'} h={'31px'} alt='Line design' />
      </Link>
      <Link href='https://twitter.com/UpHealDAO' isExternal>
        <Image src='/images/twitter-logo.png' w={'36px'} h={'31px'} alt='Line design' />
      </Link>
      <Link href='https://discord.gg/CHvPqtzF' isExternal>
        <Image src='/images/discord-icon.png' w={'36px'} h={'31px'} alt='Line design' />
      </Link>
    </Flex>
  )
}

export default Footer

