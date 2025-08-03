import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Blog from './pages/Blog'

export default function App() {
  return (
    <Router basename="/my-blog">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog/:blogId" element={<Blog />} />
      </Routes>
    </Router>
  )
}
