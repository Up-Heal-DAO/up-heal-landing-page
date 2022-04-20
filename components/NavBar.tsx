import { Button, Flex, Container, Image, Text, Heading, Box } from '@chakra-ui/react'


export const Navbar = () => {
  return (
    <>
      <Flex justify={'space-between'} alignItems={'center'} width={'full'} height={{ base: '56px', md: '120px' }} background='white'>
        <Container display={'flex'} alignItems="center" justifyContent={'flex-start'}>
          <Image src='/images/logo-navbar.png' w={'56px'} h={'66px'} alt='Dan Abramov' />
        </Container>
        <Container display={'flex'} justifyContent={'flex-end'} alignItems="center">
          <Button position={'relative'} zIndex={10} colorScheme='white' color={'white'} borderRadius={'24px'} bg={'#FF8295'}>
            Connect Wallet
          </Button>
        </Container>
      </Flex>
      <Box width={'735px'} height={'534px'}>
        <Image position={'absolute'} left="-4.72%" right={'75.76%'} top="17.46%" bottom={'75.3%'} src='/images/line-1.png' w={'417px'} h={'402.84px'} alt='Line design' />
        <Image position={'absolute'} left="74.54%" right={'-5.54%'} top="15.32px" bottom={'65.83%'} src='/images/line-2.png' w={'446.48px'} h={'500.79px'} alt='Line design' />
        <Heading mt={'150px'} fontSize={'54px'} textAlign={'center'} color={'white'}>
          Up Heal DAO
        </Heading>
        <Text fontSize={'32px'} color={'white'} textAlign="center">We are funding Mental Health Organizations and community initiatives.</Text>
        <Flex justifyContent={'center'}>
          <Button mt={'150px'} color={'#FF8295'} borderRadius={'24px'} bg={'white'}>
            Join the community
          </Button>
        </Flex>
      </Box>
    </>
  )
}

export default Navbar

