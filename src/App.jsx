import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Sobre from './pages/Sobre'
import Tarefas from './AppTarefas'
import { ThemeProvider } from './contexts/ThemeContext'
import ThemeToggleButton from './components/ThemeToggleButton'

function App() {


  return (
    <ThemeProvider>
      <BrowserRouter>
        <div>
          <nav>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/sobre">Sobre</Link></li>
              <li><Link to="/AppTarefas">Tarefas</Link></li>
            </ul>
          </nav>
          <ThemeToggleButton />
        </div>

        {/* Define as rotas */}
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sobre" element={<Sobre />} />
            <Route path="/AppTarefas" element={<Tarefas />} />
          </Routes>
        </div>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
