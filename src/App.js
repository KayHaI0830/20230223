import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SplashScreen from './components/js/SplashScreen';
import Login from './components/js/Login';
import Signup from './components/js/Signup';
import Map from './components/js/Map';
import Myroom from './components/js/Myroom';
import Qrcode from './components/js/Qrcode';
import Footer from './components/js/Footer';

function App() {
    return (
        <div className='App'>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<SplashScreen />} />
                    <Route path='/login' element={<Login />} />
                    <Route path='/signup' element={<Signup />} />
                    <Route path='/map' element={<Map />} />
                    <Route path='/myroom' element={<Myroom />} />
                    <Route path='/qrcode' element={<Qrcode />} />
                </Routes>
                <Footer />
            </BrowserRouter>
        </div>
    );
}

export default App;