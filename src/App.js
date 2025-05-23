import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import CourseCategories from './pages/CourseCategories';
import CourseDetails from './pages/CourseDetails';
import EnrollForm from './pages/EnrollForm';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app-container">
        <nav className="navbar">
          <Link to="/">Home</Link>
          <Link to="/categories">Courses</Link>
          <Link to="/enroll">Enroll</Link>
        </nav>
        <div className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/categories" element={<CourseCategories />} />
            <Route path="/course/:id" element={<CourseDetails />} />
            <Route path="/enroll" element={<EnrollForm />} />
          </Routes>
        </div>
        <footer className="footer">
          <p>&copy; {new Date().getFullYear()} CourseHub. All rights reserved.</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
