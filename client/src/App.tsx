import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/Login';
import SignUpPage from './pages/Signup';
import NavBar from './components/Navbar';
import HomePage from './pages/Home';
import PageNotFound from './components/Page Not Found';
import FullWidthTabs from './components/Tab';

function App() {
	return (
		<Router>
			<Routes>
				<Route
					path="/login"
					element={<LoginPage />}
				/>
				<Route
					path="/signup"
					element={<SignUpPage />}
				/>
				<Route element={<NavBar />}>
					<Route
						path="/home"
						element={<HomePage />}></Route>
				</Route>
				<Route
					path="*"
					element={<PageNotFound />}
				/>
			</Routes>
		</Router>
	);
}

export default App;
