import { BrowserRouter, Routes, Route} from 'react-router-dom';

import Home from './pages/homepage';
import Dashboard from './pages/dashboard'
import Student from "./pages/studentpage"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div className="pages">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/studentpage" element={<Student />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;