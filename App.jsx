import Header from './src/components/Header.jsx'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Tour from './src/pages/worldTour.jsx'
import Main from './src/pages/Index.jsx'



function App() {
  return (
    <Router>
     <div className='class="h-screen bg-[#1B1B1D] text-amber-50'>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/worldTour" element={<Tour />} />
        </Routes>
      </div>
    </Router>
    
  );
}

export default App
