import { Container, VStack, Heading, Text, Button, HStack, Box, Image, IconButton } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Index = () => {
  const navigate = useNavigate();

  return (
    <Container centerContent maxW="container.lg" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center" p={4}>
      <VStack spacing={8} textAlign="center">
        <Heading as="h1" size="2xl">
          The Rocking Band
        </Heading>
        <Text fontSize="xl">Join us on our epic tour across the country!</Text>
        <Image src="https://images.unsplash.com/photo-1477704080907-b04e4e2d3282?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxyb2NrJTIwYmFuZCUyMHBlcmZvcm1pbmclMjBsaXZlfGVufDB8fHx8MTcxNjczNjIzMXww&ixlib=rb-4.0.3&q=80&w=1080" alt="Rock Band Performing Live" borderRadius="md" />
        <HStack spacing={4}>
          <Button colorScheme="teal" size="lg">
            Get Tickets
          </Button>
          <Button colorScheme="teal" variant="outline" size="lg" onClick={() => navigate("/tour-dates")}>
            Tour Dates
          </Button>
        </HStack>
        <Box>
          <Text fontSize="lg" mb={2}>
            Follow us on social media:
          </Text>
          <HStack spacing={4}>
            <IconButton aria-label="Facebook" icon={<FaFacebook />} size="lg" />
            <IconButton aria-label="Twitter" icon={<FaTwitter />} size="lg" />
            <IconButton aria-label="Instagram" icon={<FaInstagram />} size="lg" />
          </HStack>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;
