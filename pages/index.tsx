import type { NextPage } from 'next'
import { Button, Stack, Flex, Container, Image, Text, Heading, Box, VStack } from '@chakra-ui/react'
import Navbar from '../components/NavBar'
import Card from "../components/Card/Card"

const Home: NextPage = () => {
  return (
    <Stack bgGradient={'linear-gradient(0deg, brand.100 51.22%, rgba(255, 182, 193, 0.5) 114.97%)'} display={'flex'} justifyContent="center" alignItems={'center'}>
      <Navbar />
      <Box width={'735px'} height={'534px'}>
        <Image position={'absolute'} left="-4.72%" right={'75.76%'} top="17.46%" bottom={'75.3%'} src='/images/line-1.png' w={'417px'} h={'402.84px'} alt='Line design' />
        <Image position={'absolute'} left="74.54%" right={'-5.54%'} top="15.32px" bottom={'65.83%'} src='/images/line-2.png' w={'446.48px'} h={'500.79px'} alt='Line design' />
        <Heading mt={'150px'} fontSize={'54px'} textAlign={'center'} color={'white'}>
          Up Heal DAO
        </Heading>
        <Text fontSize={'32px'} color={'white'} textAlign="center">We are funding Mental Health Organizations and community initiatives.</Text>
        <Flex justifyContent={'center'}>
          <Button mt={'150px'} color={'brand.100'} borderRadius={'24px'} bg={'white'}>
            Join the community
          </Button>
        </Flex>
      </Box>
      <Container maxWidth={'container.xl'} p={0}>
        <Flex py={20}>
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
          <VStack w="full" h="full" p={10} spacing={5} alignItems={'flex-start'}>
            <Text lineHeight={'39.01px'} fontSize={'32px'} color={'white'} fontWeight={800}>
              Up Heal is a DAO  on building DeFi tools for funding Mental Health organisations and initiatives.
            </Text>
            <Text color={'white'}>
              We are a social DAO leveraging Web3 to build DeFi tools such as staking pools,
              yield optimizers, and decentralized funding mechanisms to allocate a portion of the fees to Mental Health organizations and charities.
              #DeFi4good
            </Text>
            <Text color={'white'}>
              At the end of each season, the DAO’s members will vote to decide which organizations or initiatives we will support with a portion of the fees generated.
            </Text>
            <Button color={'white'} borderRadius={'24px'} bg={'transparent'} border='1px solid white'>
              Read more
            </Button>
          </VStack>
        </Flex>
      </Container>
      <Card />
      <Container maxWidth={'full'} h={'360px'}>
        <Text fontWeight={800} color="white" fontSize={'80px'} mt="72px" textAlign={'center'}>Be a Founder</Text>
        <Image src='/images/line-4.png' w={'154px'} alt='Line design' />
      </Container>
    </Stack >
  )
}

export default Home

