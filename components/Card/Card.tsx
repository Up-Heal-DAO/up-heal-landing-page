import { Container, Text } from '@chakra-ui/react'

interface CardInterface {
  title: string;
  description: string
}

export const Card = ({ title, description }: CardInterface) => {
  return (
    <Container width={'371px'} borderRadius={'24px'} h={'184px'} border={'1px solid #FF8295'}>
      <Text fontSize={'32px'} fontWeight={600} margin={'0px 8px'} color={'#FF8295'}>{title}</Text>
      <Text fontSize={'16px'} fontWeight={400} margin={'0px 8px'} color={'#FF8295'}>{description}</Text>
    </Container>


  )
}

export default Card

