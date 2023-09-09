import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/Login';
import SignUpPage from './pages/Signup';
import NavBar from './components/Navbar';
import HomePage from './pages/Home';
import PageNotFound from './components/Page Not Found';
import FlightPage from './pages/Flight';
import PaymentInfo from './pages/Payment';
import { Success } from './pages/success';
import GetStarted from './components/landingPages/GetStarted.page';
import Fail from './pages/fail';

function App() {
	return (
		<Router>
			<Routes>
				<Route
					path="/"
					element={<GetStarted />}
				/>
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
					<Route
						path="/flight"
						element={<FlightPage />}></Route>
					<Route
						path="/payment"
						element={<PaymentInfo />}></Route>
					<Route
						path="/success"
						element={<Success />}></Route>
					<Route
						path="/fail"
						element={<Fail />}></Route>
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
