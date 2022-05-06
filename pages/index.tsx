/* eslint-disable @next/next/inline-script-id */
import type { NextPage } from 'next'
import { Button, Stack, Flex, Container, Image, Text, Heading, Box, VStack, useMediaQuery, Link } from '@chakra-ui/react'
import Navbar from '../components/Navbar/NavBar'
import Card from "../components/Card/Card"
import Footer from "../components/Footer/Footer"
import Script from 'next/script'


const cardContent = [
  {
    title: 'Community First',
    description:
      'You can hang in the DAO discord and contribute to the DAO with like-minded people interested in web3, personal development, and improving mental health worldwide.'
  },
  {
    title: 'Get Funded',
    description:
      'As a community, our primary goal is to fund community Mental Health initiatives and organizations; you can make a governance proposal to the DAO and get your project or initiative funded if the DAO approves it.'
  },
  {
    title: 'Make an impact',
    description:
      'By being involved in the Up Heal DAO community as a contributor, you are helping us impact the world and improve mental health awareness across the globe 🌎.'
  },
]

const Home: NextPage = () => {
  const [isMobile] = useMediaQuery("(max-width: 768px)")

  return (
    <Stack bgGradient={'linear-gradient(0deg, brand.100 51.22%, rgba(255, 182, 193, 0.5) 114.97%)'} display={'flex'} justifyContent="center" alignItems={'center'}>
      <Script strategy="lazyOnload" src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`} />
      <Script strategy="lazyOnload">
        {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
        page_path: window.location.pathname,
        });
    `}
      </Script>
      <Navbar />
      <Box width={'735px'} height={'534px'}>
        {
          !isMobile ?
            <>
              <Image position={'absolute'} left="-4.72%" right={'75.76%'} top="17.46%" bottom={'75.3%'} src='/images/line-1.png' w={'417px'} h={'402.84px'} alt='Line design' />
              <Image position={'absolute'} left="74.54%" right={'-5.54%'} top="15.32px" bottom={'65.83%'} src='/images/line-2.png' w={'446.48px'} h={'500.79px'} alt='Line design' />
            </>
            : null}
        <Heading mt={{ base: '80px', md: '150px' }} fontSize={{ base: '100px', md: '54px' }} textAlign={'center'} color={'white'}>
          Up Heal DAO
        </Heading>
        <Text fontSize={{ base: '50px', md: '32px' }} color={'white'} textAlign="center">We are funding Mental Health Organizations and community initiatives.</Text>
        <Flex justifyContent={'center'}>
          <Link href='https://foul-color-34f.notion.site/Up-Heal-DAO-8c250e000a874920ad60bd23105155e0' isExternal>
            <Button size='lg' mt={{ base: '80px', md: '150px' }} color={'brand.100'} borderRadius={'24px'} bg={'white'}>
              Get Started
            </Button>
          </Link>
        </Flex>
      </Box>
      <Container maxWidth={'container.xl'} p={0}>
        <Flex flexDirection={{ base: 'column', md: 'row' }} py={20}>
          <VStack w="full" h="full" p={10} spacing={10} alignItems={'flex-start'} flexDirection={'row'}>
            <Container w={'45%'}>
              <Text lineHeight={'97.52px'} fontSize={{ base: '100px', md: '80px' }} color={'white'} fontWeight={700}>
                Who We are
              </Text>
            </Container>
            <Image src='/images/line-3.png' w={'200px'} h={'190.34px'} alt='Line design' />
          </VStack>
          <VStack w="full" h="full" p={10} spacing={5} alignItems={'flex-start'}>
            <Text lineHeight={{ base: '56px', md: '39px' }} fontSize={{ base: '32px', md: '32px' }} color={'white'} fontWeight={800}>
              We are a collective working on improving Well-being and Mental Health around the globe. 🧘🌎
            </Text>
            <Text fontSize={'18px'} color={'white'}>
              We are a social DAO leveraging Web3 to build DeFi tools such as staking pools,
              yield optimizers, and decentralized funding mechanisms to allocate a portion of the fees to Mental Health organizations and charities.
              #DeFi4good
            </Text>
            <Text fontSize={'18px'} color={'white'}>
              At the end of each season, the DAO’s members will vote to decide which organizations or initiatives we will support with a portion of the fees generated.
            </Text>
            <Link href='https://foul-color-34f.notion.site/Getting-Started-2f06bb4b2cbb45bbb0f7c6d5c7e0148d' isExternal>
              <Button size='lg' color={'white'} borderRadius={'24px'} bg={'transparent'} border='1px solid white'>
                Read more
              </Button>
            </Link>
          </VStack>
        </Flex>
      </Container>
      <Container display={'flex'} alignItems={'center'} justifyContent={{ base: 'space-evenly', md: 'space-around' }} flexDirection={{ base: 'column', md: 'row' }} bg={'white'} maxWidth={'full'} h={{ base: '700px', md: '360px' }}>
        {cardContent.map(content =>
          <Card key={content.title} title={content.title} description={content.description} />
        )}
      </Container>
      <Container display={'flex'} justifyContent={'center'} alignItems={'center'} flexDirection={'column'} maxWidth={'full'} h={'360px'}>
        <Text fontWeight={800} color="white" fontSize={'80px'} mt="72px" textAlign={'center'}>Join The DAO</Text>
        <Image src='/images/line-4.png' w={'154px'} alt='Line design' />
      </Container>
      <Container h={'60px'}>
        <Footer />
      </Container>
    </Stack >
  )
}

export default Home

