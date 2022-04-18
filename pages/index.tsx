import type { NextPage } from 'next'
import { Button, Stack, Flex, Container, Image, Text, Heading } from '@chakra-ui/react'


const Home: NextPage = () => {
  return (
    <Stack>
      <Flex justify={'space-between'} alignItems={'center'} width={'full'} height={{ base: '56px', md: '120px' }} background='white'>
        <Container display={'flex'} alignItems="center" justifyContent={'flex-start'}>
          <Image src='/images/logo-navbar.png' w={'56px'} h={'66px'} alt='Dan Abramov' />
        </Container>
        <Container display={'flex'} justifyContent={'flex-end'} alignItems="center">
          <Text color={'#FF8295'} mr={3}>Staking</Text>
          <Button colorScheme='white' color={'white'} borderRadius={'24px'} bg={'#FF8295'}>
            Connect Wallet
          </Button>
        </Container>
      </Flex>
      <Heading fontSize={'54px'} textAlign={'center'} color={'white'}>
        Up Heal DAO
      </Heading>
    </Stack >
  )
}

export default Home

