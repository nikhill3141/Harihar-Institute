import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import Home from '@/pages/Home'
import Courses from '@/pages/Courses'
import About from '@/pages/About'
import Contact from '@/pages/Contact'
import Faculty from '@/pages/Faculty'
import Results from '@/pages/Results'
import Gallery from '@/pages/Gallery'
import { Toaster } from './components/ui/toaster'

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/faculty" element={<Faculty />} />
            <Route path="/results" element={<Results />} />
            <Route path="/gallery" element={<Gallery />} />
          </Routes>
        </main>
        <Footer />
        <Toaster />
      </div>
    </Router>
  )
}

export default App