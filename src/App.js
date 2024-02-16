// import logo from './logo.svg';
// import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Container } from 'react-bootstrap';
import Header from './components/Header';
import Footer from './components/Footer';
import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import PromptRecordsPage from './screens/PromptScreen';

// import Loader from './components/Loader';


function App() {
  return (
    <Router>
        <Header />
        <main className='py-3'>
          <Container>
            <Routes>
              <Route path='/' element={<HomeScreen />} exact />
              <Route path='/login' element={<LoginScreen />} />
              <Route path='/register' element={<RegisterScreen />}  />
              <Route path='/records' element={<PromptRecordsPage />}  />
            </Routes>
          </Container>
        </main>
        <Footer />
    </Router>
  );
}

export default App;
