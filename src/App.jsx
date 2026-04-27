import './App.css'
import { HashRouter, Routes, Route } from 'react-router-dom'
import Home from './views/home'
import About from './views/about'
import SkillsPage from './views/skills'
import MouseFollower from './components/mouseFollower'
import ProjectsPage from './views/projects'
import CV from './views/cv'
import ContactPage from './views/contact'
import { LanguageProvider } from './context/LanguageContext'

function App() {
  return (
    <LanguageProvider>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<SkillsPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/cv" element={<CV />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
        <MouseFollower />
      </HashRouter>
    </LanguageProvider>
  )
}

export default App
