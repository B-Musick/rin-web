import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import HeaderNavbar from './components/HeaderNavbar';
import HomePage from './pages/HomePage';

function App() {
  return (
    <>
      <Router>
        <HeaderNavbar />
        
        <Routes>
          <Route path='/'>
            <Route index={true} path="" element={<HomePage />} />
          </Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
