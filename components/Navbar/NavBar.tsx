import { Button, Flex, Container, Image, Link } from '@chakra-ui/react'


export const Navbar = () => {
  return (
    <Flex justify={'space-between'} alignItems={'center'} width={'full'} h={'100px'} background='white'>
      <Container display={'flex'} alignItems="center" justifyContent={'flex-start'}>
        <Image src='/images/up-heal-logo-website.png' w={'80px'} h={'80px'} alt='Up Heal Logo' />
      </Container>
      <Container display={'flex'} justifyContent={'flex-end'} alignItems="center">
        <Link href='https://discord.gg/CHvPqtzF' isExternal>
          <Button size='lg' position={'relative'} zIndex={10} colorScheme='white' color={'white'} borderRadius={'24px'} bg={'brand.100'}>
            Join us
          </Button>
        </Link>
      </Container>
    </Flex>
  )
}

export default Navbar

