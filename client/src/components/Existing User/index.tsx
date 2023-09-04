import { Text, Box } from '@chakra-ui/react';

const ExistingUser = () => {
	return (
		<Box
			mt={'1rem'}
			fontWeight={'500'}>
			<Text>
				Already an user?
				<span style={{ marginLeft: '.5rem' }}>
					<a
						href="/login"
						style={{ color: 'actionPrimary', textDecoration: 'underline' }}>
						Login
					</a>
				</span>
			</Text>
		</Box>
	);
};

export default ExistingUser;
