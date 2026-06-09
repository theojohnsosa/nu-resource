import './App.css';

import PageLayout from './components/layout/pagelayout.js'
import { Routes, Route } from 'react-router-dom'
import DevInfo from './pages/dev-info.jsx'

function App() {
  return (
    <Routes>
      <Route path="/" element={<PageLayout />}>
        <Route path="dev-info" element={<DevInfo />} />
      </Route>
    </Routes>
  )
}

export default App;
