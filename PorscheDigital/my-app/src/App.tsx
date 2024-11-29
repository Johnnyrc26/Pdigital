import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../src/Page/Home/home'; // Tu componente Demo
import ProfilePage from '../src/Page/ProfilePage/ProfilePage'; // Tu componente ProfilePage

export const App = (): JSX.Element => (
  <Router>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/ProfilePage" element={<ProfilePage />} />
    </Routes>
  </Router>
);

export default App;