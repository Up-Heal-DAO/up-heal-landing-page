import type { NextPage } from 'next'
import { Button, Stack, Flex, Container, Image, Text, Heading, Box } from '@chakra-ui/react'


const Home: NextPage = () => {
  return (
    <Stack display={'flex'} justifyContent="center" alignItems={'center'}>
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
      <Box width={'35%'}>
        <Image position={'absolute'} left="-4.72%" right={'75.76%'} top="17.46%" bottom={'75.3%'} src='/images/line-1.png' w={'417px'} h={'402.84px'} alt='Dan Abramov' />
        <Heading mt={'300px'} fontSize={'54px'} textAlign={'center'} color={'white'}>
          Up Heal DAO
        </Heading>
        <Text fontSize={'32px'} color={'white'} textAlign="center">It never fell so good be a founder. For mental health, for people.</Text>
      </Box>
    </Stack >
  )
}

export default Home

