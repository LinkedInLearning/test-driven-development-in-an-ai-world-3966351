import { Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import Contact from './pages/Contact'
import Error404 from './pages/Error404'
import './App.css'
import HeaderBar from './components/HeaderBar'
import 'bootstrap-icons/font/bootstrap-icons.css';

function App() {
  return (
    <div className="App container vh-100 d-flex flex-column">
      
      <HeaderBar /> 
      <main className='p-4 bg-light flex-grow-1'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </main>
    </div>
  )
}

export default App