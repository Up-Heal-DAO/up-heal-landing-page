import type { NextPage } from 'next'
import { Stack, Container, Heading, Text, Image, Button, Link } from '@chakra-ui/react'


const Home: NextPage = () => {
  return (
    <Stack spacing={"34px"} alignItems={'center'} position={'fixed'} top="50%" left="50%" transform={'translate(-50%, -50%)'}>
      <Image boxSize='150px' src='/images/website-logo.png' alt='Up Heal Logo' />
      <Container w={{ base: '400px', md: 'full' }}>
        <Heading fontFamily={'rubik'} textAlign={'center'} fontSize={'36px'}>
          Up Heal DAO is Coming Soon.
        </Heading>
      </Container>
      <Container w={{ base: '400px', md: 'full' }}>
        <Text fontSize={'18px'} fontWeight={600} color="#b4b4b4" textAlign={'center'}>
          We are a social DAO leveraging Web3 to build DeFi tools and help funding Mental Health initiatives and organisations.
        </Text>
      </Container>
      <Link href='https://discord.gg/S6BZJTgt' isExternal>
        <Button background={'transparent'} border={'1px solid #ffb7c2'}>
          Join the community
        </Button>
      </Link>
    </Stack>
  )
}

export default Home

