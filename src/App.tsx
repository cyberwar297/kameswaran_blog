import { Navigate, Route, Routes, useLocation } from 'react-router-dom'
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Blog from './pages/Blog'
import BlogPostDetail from './pages/BlogPostDetail'
import Ideas from './pages/Ideas'
import Projects from './pages/Projects'
import Research from './pages/Research'
import ResearchPostDetail from './pages/ResearchPostDetail'
import About from './pages/About'
import PageTemplate from './pages/PageTemplate'
import { routePages } from './data/navigation'

function App() {
  const location = useLocation()
  const hideSidebar = location.pathname !== '/home'

  return (
    <div className={hideSidebar ? 'shell no-sidebar' : 'shell'}>
      <Header />

      <main>
        <Routes>
          <Route path="/" element={<Navigate to="/home" replace />} />
          <Route path="/home" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogPostDetail />} />
          <Route path="/ideas" element={<Ideas />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/research" element={<Research />} />
          <Route path="/research/projects/:slug" element={<ResearchPostDetail />} />
          <Route path="/about" element={<About />} />
          {routePages
            .filter(
              (page) =>
                page.path !== '/home' &&
                page.path !== '/blog' &&
                page.path !== '/ideas' &&
                page.path !== '/projects' &&
                page.path !== '/research' &&
                page.path !== '/about',
            )
            .map((page) => (
              <Route
                key={page.path}
                path={page.path}
                element={<PageTemplate title={page.title} path={page.path} />}
              />
            ))}
        </Routes>
      </main>

      {!hideSidebar && <Sidebar />}

      <Footer />
    </div>
  )
}

export default App
