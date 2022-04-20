import { Flex, Container, Text } from '@chakra-ui/react'


export const Card = () => {
  return (
    <Container bg={'white'} maxWidth={'full'} h={'360px'}>
      <Flex py={20}>
        <Container width={'371px'} borderRadius={'24px'} h={'184px'} border={'1px solid #FF8295'}>
          <Text fontSize={'32px'} fontWeight={600} margin={'0px 8px'} color={'#FF8295'}>Build</Text>
        </Container>
      </Flex>
    </Container>
  )
}

export default Card

