import { Button, Flex, Container, Image, Link, Text } from '@chakra-ui/react'


export const Navbar = () => {
  return (
    <Flex justify={'space-between'} alignItems={'center'} width={'full'} h={'100px'} background='white'>
      <Container display={'flex'} alignItems="center" justifyContent={'flex-start'}>
        <Image src='/images/up-heal-logo-website.png' w={'80px'} h={'80px'} alt='Up Heal Logo' />
      </Container>

      <Container display={'flex'} justifyContent={'space-evenly'} alignItems="center">
        <Link href='https://forum.uphealdao.xyz/' isExternal>
          <Text fontSize={'16px'} fontWeight={500} lineHeight={'19.5px'} color={'brand.100'}>Community</Text>
        </Link>
        <Link href='https://snapshot.org/#/upheal.eth' isExternal>
          <Text fontSize={'16px'} fontWeight={500} lineHeight={'19.5px'} color={'brand.100'}>Governance</Text>
        </Link>
        <Link href='https://discord.gg/QkjdaQzrx3' isExternal>
          <Button size='lg' position={'relative'} zIndex={10} colorScheme='white' color={'white'} borderRadius={'24px'} bg={'brand.100'}>
            Discord
          </Button>
        </Link>
      </Container>
    </Flex>
  )
}

export default Navbar

