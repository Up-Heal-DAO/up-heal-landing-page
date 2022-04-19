import type { NextPage } from 'next'
import { Button, Stack, Flex, Container, Image, Text, Heading, Box, VStack } from '@chakra-ui/react'


const Home: NextPage = () => {
  return (
    <Stack bgGradient={'linear-gradient(0deg, #FF8295 51.22%, rgba(255, 182, 193, 0.5) 114.97%)'} display={'flex'} justifyContent="center" alignItems={'center'}>
      <Flex justify={'space-between'} alignItems={'center'} width={'full'} height={{ base: '56px', md: '120px' }} background='white'>
        <Container display={'flex'} alignItems="center" justifyContent={'flex-start'}>
          <Image src='/images/logo-navbar.png' w={'56px'} h={'66px'} alt='Dan Abramov' />
        </Container>
        <Container display={'flex'} justifyContent={'flex-end'} alignItems="center">
          <Text color={'#FF8295'} mr={3}>Staking</Text>
          <Button position={'relative'} zIndex={10} colorScheme='white' color={'white'} borderRadius={'24px'} bg={'#FF8295'}>
            Join the community
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
            See Projects
          </Button>
        </Flex>
      </Box>

      <Container maxWidth={'container.xl'} p={0}>
        <Flex h={'100vh'} py={20}>
          <VStack w="full" h="full" p={10} spacing={10} alignItems={'flex-start'} flexDirection={'row'}>
            <Container w={'45%'}>
              <Text lineHeight={'97.52px'} fontSize={'80px'} color={'white'} fontWeight={700}>
                Who We are
              </Text>
            </Container>
            <Container w={'45%'}>
              <Image src='/images/line-3.png' w={'284.34px'} h={'190.34px'} alt='Line design' />
            </Container>
          </VStack>
          <VStack w="full" h="full" p={10} spacing={10} alignItems={'flex-start'}>
            <Text lineHeight={'39.01px'} fontSize={'32px'} color={'white'} fontWeight={800}>
              Up Heal is a DAO  on building DeFi tools for funding Mental Health organisations and initiatives.
            </Text>
            <Text color={'white'}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Non arcu risus quis varius quam quisque id diam vel.
              Tincidunt vitae semper quis lectus nulla at volutpat.
              Nulla at volutpat diam ut venenatis. Dictum varius duis at consectetur lorem. Sagittis vitae et leo duis ut diam quam.
              Pharetra vel turpis nunc eget lorem dolor.
            </Text>
          </VStack>
        </Flex>
      </Container>
    </Stack>
  )
}

export default Home

