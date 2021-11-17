import Dashboard from './components/Dashboard';
import './styles/style.css';
import Header from './components/Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import QuizHome from './components/QuizHome';
import Path from './components/Path';

function App()
{
    return (
        <>
            <Header />
            <BrowserRouter>
                <Path />
            </BrowserRouter>
        </>
    );
}

export default App;