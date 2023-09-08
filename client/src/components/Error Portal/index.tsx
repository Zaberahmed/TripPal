import { Portal } from '@chakra-ui/react';

const ErrorPortal = ({ children }: { children: any }) => {
	return <Portal>{children}</Portal>;
};

export default ErrorPortal;
