// Complete the Index page component for Tunza Motors - an ecommerce site for car parts
import { Box, Container, Flex, Grid, GridItem, Heading, Image, Text, Button } from "@chakra-ui/react";
import { FaShoppingCart, FaCar, FaTools, FaSearch } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl">
      <Flex justifyContent="space-between" alignItems="center" py={4}>
        <Heading as="h1" size="xl" letterSpacing="tighter">
          Tunza Motors
        </Heading>
        <Button leftIcon={<FaShoppingCart />} colorScheme="teal" variant="solid">
          Cart
        </Button>
      </Flex>

      <Grid templateColumns="repeat(3, 1fr)" gap={6} my={8}>
        <GridItem w="100%">
          <Box boxShadow="md" p={4} rounded="md" bg="gray.100">
            <Flex alignItems="center" gap={2}>
              <FaCar />
              <Text fontWeight="bold">Engines</Text>
            </Flex>
            <Image src="https://images.unsplash.com/photo-1615906655593-ad0386982a0f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxjYXIlMjBlbmdpbmV8ZW58MHx8fHwxNzEzMzQ5MTg5fDA&ixlib=rb-4.0.3&q=80&w=1080" borderRadius="md" mt={2} />
            <Button mt={4} colorScheme="teal" w="full">
              Shop Now
            </Button>
          </Box>
        </GridItem>
        <GridItem w="100%">
          <Box boxShadow="md" p={4} rounded="md" bg="gray.100">
            <Flex alignItems="center" gap={2}>
              <FaTools />
              <Text fontWeight="bold">Tools</Text>
            </Flex>
            <Image src="https://images.unsplash.com/photo-1597423498026-b22efab3b009?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxjYXIlMjByZXBhaXIlMjB0b29sc3xlbnwwfHx8fDE3MTMzNDkxODl8MA&ixlib=rb-4.0.3&q=80&w=1080" borderRadius="md" mt={2} />
            <Button mt={4} colorScheme="teal" w="full">
              Shop Now
            </Button>
          </Box>
        </GridItem>
        <GridItem w="100%">
          <Box boxShadow="md" p={4} rounded="md" bg="gray.100">
            <Flex alignItems="center" gap={2}>
              <FaSearch />
              <Text fontWeight="bold">Accessories</Text>
            </Flex>
            <Image src="https://images.unsplash.com/photo-1627913434632-b4717be3485a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxjYXIlMjBhY2Nlc3Nvcmllc3xlbnwwfHx8fDE3MTMzNDkxODl8MA&ixlib=rb-4.0.3&q=80&w=1080" borderRadius="md" mt={2} />
            <Button mt={4} colorScheme="teal" w="full">
              Shop Now
            </Button>
          </Box>
        </GridItem>
      </Grid>
    </Container>
  );
};

export default Index;
