import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './screens/DragnDropScreen.tsx';
import SelectionUI from './screens/HomeScreen.tsx'
import APP_ROUTES from './constants/Routes';

function App() {
  return (
    <Router>
      <Routes>
      <Route path={APP_ROUTES.DRAGNDROP_PAGE} element={<Home domElements={[]} />} />
        <Route path={APP_ROUTES.HOME_PAGE} element={<SelectionUI/>} />
      </Routes>
    </Router>
  );
}
export default App;