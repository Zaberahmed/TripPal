import { Box, Center, Text, Image } from '@chakra-ui/react';
import logo from './logo.svg';

const Welcome = ({ showSplash }: { showSplash: boolean }) => {
  if (showSplash) {
    return (
      <Center height='100vh' bg='white' color='#0E1420' flexDirection='column'>
        <Box marginBottom='4'>
          {' '}
          <Image src={logo} alt='logo' width='90' height='90' />
        </Box>
        <Text>Welcome to Our App</Text>
        <Text fontSize='lg'>Loading...</Text>
      </Center>
    );
  }

  return null;
};

export default Welcome;
