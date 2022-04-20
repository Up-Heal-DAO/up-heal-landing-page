import { Button, Flex, Container, Image, Text, Heading, Box } from '@chakra-ui/react'


export const Navbar = () => {
  return (
    <Flex justify={'space-between'} alignItems={'center'} width={'full'} height={{ base: '56px', md: '120px' }} background='white'>
      <Container display={'flex'} alignItems="center" justifyContent={'flex-start'}>
        <Image src='/images/logo-navbar.png' w={'56px'} h={'66px'} alt='Dan Abramov' />
      </Container>
      <Container display={'flex'} justifyContent={'flex-end'} alignItems="center">
        <Button position={'relative'} zIndex={10} colorScheme='white' color={'white'} borderRadius={'24px'} bg={'brand.100'}>
          Connect Wallet
        </Button>
      </Container>
    </Flex>
  )
}

export default Navbar

