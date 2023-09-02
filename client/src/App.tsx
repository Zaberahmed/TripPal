import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/Login';
import SignUpPage from './pages/Signup';

function App() {
	return (
		<Router>
			<Routes>
				<Route
					path="/login"
					element={<LoginPage />}></Route>
				<Route
					path="/signup"
					element={<SignUpPage />}></Route>
			</Routes>
		</Router>
	);
}

export default App;
