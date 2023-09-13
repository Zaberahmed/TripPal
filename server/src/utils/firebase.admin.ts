import admin from 'firebase-admin';

const serviceAccount = require('../trippal-c64a7-firebase-adminsdk.json');

admin.initializeApp({
	credential: admin.credential.cert(serviceAccount as any),
});

export const verifyFirebaseToken = async (idToken: string) => {
	try {
		const decodedToken = await admin.auth().verifyIdToken(idToken);
		return decodedToken;
	} catch (error) {
		return null;
	}
};
