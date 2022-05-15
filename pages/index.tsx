import type { NextPage } from 'next';
import {
  Button,
  Flex,
  Container,
  Image,
  Text,
  Heading,
  Box,
  VStack,
  Link,
  useMediaQuery,
} from '@chakra-ui/react';
import Navbar from '../components/Navbar/NavBar';
import Card from '../components/Card/Card';
import Footer from '../components/Footer/Footer';
import Head from 'next/head';

const cardContent = [
  {
    title: 'Community First',
    description:
      'You can hang in the DAO discord and contribute to the DAO with like-minded people interested in web3, personal development, and improving mental health worldwide.',
  },
  {
    title: 'Get Funded',
    description:
      'As a community, our primary goal is to fund community Mental Health initiatives and organizations; you can make a governance proposal to the DAO and get your project or initiative funded if the DAO approves it.',
  },
  {
    title: 'Make an impact',
    description:
      'By being involved in the Up Heal DAO community as a contributor, you are helping us impact the world and improve mental health awareness across the globe 🌎.',
  },
];

const Home: NextPage = () => {
  const [isMobile] = useMediaQuery('(max-width: 768px)');

  return (
    <Box
      bgGradient={
        'linear-gradient(0deg, brand.100 51.22%, rgba(255, 182, 193, 0.5) 114.97%)'
      }
    >
      <Head>
        <title>Up Heal DAO</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        />
      </Head>
      <Navbar />
      <Box
        position="relative"
        overflow="hidden"
        pt={{ base: '58px', md: 40 }}
        pb={{ base: '98px', md: '137px' }}
      >
        <Image
          src="/images/line-1.svg"
          alt=""
          position="absolute"
          w={{ base: '48%', md: '29%' }}
          h="auto"
          left="0"
          top={{ base: '185px', md: '44px' }}
          transform="auto"
          translateX="-43%"
        />
        {isMobile ? (
          <Image
            src="images/line-2-mobile.svg"
            alt=""
            position="absolute"
            w={{ base: '10%' }}
            h="auto"
            right="0"
            top="0"
            transform="auto"
            translateY="-22%"
          />
        ) : (
          <Image
            src="/images/line-2.svg"
            alt=""
            position="absolute"
            w="auto"
            h="100%"
            right="0"
            top="-87px"
            transform="auto"
            translateX="18%"
          />
        )}
        <Box maxWidth="735px" mx="auto">
          <Heading
            fontSize={{ base: '40px', md: '54px' }}
            textAlign={'center'}
            color={'white'}
          >
            Up Heal DAO
          </Heading>
          <Text
            fontSize={{ base: '16px', md: '32px' }}
            color={'white'}
            textAlign="center"
            mt={4}
            maxWidth={{ base: '296px', md: '735px' }}
            mx="auto"
          >
            We are funding Mental Health Organizations and community
            initiatives.
          </Text>
          <Flex justifyContent={'center'}>
            <Link
              display="block"
              px={{ base: 2.5, md: 6 }}
              py={{ base: 2, md: 4 }}
              fontSize={{ base: 'xs', md: 'lg' }}
              mt={{ base: 10, md: 14 }}
              color={'brand.100'}
              borderRadius="full"
              bg={'white'}
              href="https://foul-color-34f.notion.site/Up-Heal-DAO-8c250e000a874920ad60bd23105155e0"
              isExternal
            >
              Get Started
            </Link>
          </Flex>
        </Box>
      </Box>
      <Box
        display={{ md: 'flex' }}
        maxWidth={'container.xl'}
        mx="auto"
        justifyContent="center"
        pb={20}
      >
        <Flex justifyContent="center" pl={10}>
          <Text
            lineHeight="shorter"
            fontSize={{ base: '40px', md: '80px' }}
            color={'white'}
            fontWeight={700}
            textTransform="uppercase"
            width="min-content"
          >
            Who We are
          </Text>
          <Image
            src="/images/line-3.png"
            alt=""
            display={{ md: 'none', xl: 'block' }}
            maxHeight={{ base: '148px', md: '258px' }}
            mt={{ base: -2.5, md: 0 }}
          />
        </Flex>
        <VStack
          maxWidth="496px"
          h="full"
          mx={{ base: 'auto', md: 0 }}
          px={{ base: 10 }}
          pr={{ md: 0 }}
          my={{ base: 10, md: 0 }}
          spacing={5}
          alignItems={'flex-start'}
        >
          <Heading color={'white'} as="h2" size="xl" fontWeight={800}>
            We are on a mission to bring mental health awareness
            through #Web3.
          </Heading>
          <Text
            fontSize={{ base: '16px', md: '18px' }}
            color={'white'}
          >
            Up Heal DAO is a decentralized community focused on
            helping Mental Health improvement initiatives from the
            community.
          </Text>
          <Text
            fontSize={{ base: '16px', md: '18px' }}
            color={'white'}
          >
            At the end of each season, the DAO’s members will vote to
            decide which organizations or initiatives we will support
            with a portion of the fees generated.
          </Text>
          <Link
            href="https://foul-color-34f.notion.site/Getting-Started-2f06bb4b2cbb45bbb0f7c6d5c7e0148d"
            isExternal
          >
            <Button
              size="lg"
              color={'white'}
              borderRadius={'24px'}
              bg={'transparent'}
              border="1px solid white"
            >
              Read more
            </Button>
          </Link>
        </VStack>
      </Box>
      <Container
        display={'flex'}
        alignItems={'center'}
        justifyContent={{ base: 'space-evenly', md: 'space-around' }}
        flexDirection={{ base: 'column', md: 'row' }}
        bg={'white'}
        maxWidth={'full'}
        h={{ base: '700px', md: '360px' }}
      >
        {cardContent.map((content) => (
          <Card
            key={content.title}
            title={content.title}
            description={content.description}
          />
        ))}
      </Container>
      <Container
        display={'flex'}
        justifyContent={'center'}
        alignItems={'center'}
        flexDirection={'column'}
        maxWidth={'full'}
        h={'360px'}
      >
        <Text
          fontWeight={800}
          color="white"
          fontSize={'80px'}
          mt="72px"
          textAlign={'center'}
        >
          Join The DAO
        </Text>
        <Image
          src="/images/line-4.png"
          w={'154px'}
          alt="Line design"
        />
      </Container>
      <Container h={'60px'}>
        <Footer />
      </Container>
    </Box>
  );
};

export default Home;
