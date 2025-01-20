import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../src/Page/Home/home'; // Tu componente Demo
import ProfilePage from '../src/Page/ProfilePage/ProfilePage'; // Tu componente ProfilePage
import MyCarHistory from './Page/MyCarHistory/MyCarHistory';
import General from "./Page/General/general";

export const App = (): JSX.Element => (
  <Router>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/ProfilePage" element={<ProfilePage />} />
      <Route path="/MyCarHistory" element={<MyCarHistory />} />
      <Route path="/General" element={<General />} />
    </Routes>
  </Router>
);

export default App;