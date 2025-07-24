import { Routes, Route } from 'react-router-dom'
import './app.css'

import NotFound from './pages/NotFound'
import Header from './components/Header'
import Home from './pages/home'
import About from './pages/about'
import Contact from './pages/contact'
import Header from './components/header'

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact/:id' element={<Contact />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </>
  )
}

export default App
