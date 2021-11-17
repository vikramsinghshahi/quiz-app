import Dashboard from './Dashboard';
import { Route, Routes } from 'react-router-dom';
import QuizHome from './QuizHome';
import { useLocation } from 'react-router';

function Path()
{
    let location = useLocation();
    console.log(location);
    return (
        <>
            <Routes>
                <Route path="/" exact element={<Dashboard />} />
                <Route
                    path="/quiz/:category/:level"
                    element={<QuizHome location={location} />}
                />
            </Routes>
        </>
    );
}

export default Path;