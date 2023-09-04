import { Text, Box } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const ExistingUser = () => {
	return (
		<Box mt={'1rem'}>
			<Text>
				Already an user?
				<span style={{ marginLeft: '.5rem' }}>
					<Link
						to={'/login'}
						style={{ color: 'blue', textDecoration: 'underline' }}>
						Login
					</Link>
				</span>
			</Text>
		</Box>
	);
};

export default ExistingUser;
