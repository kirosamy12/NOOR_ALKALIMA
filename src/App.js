import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Bible from './pages/Bible';
import Prayers from './pages/Prayers';
import Synaxarium from './pages/Synaxarium';
import Quizzes from './pages/Quizzes';
import Maps from './pages/Maps';
import StudyMethods from './pages/StudyMethods';
import Login from './pages/Login';
import Register from './pages/Register';
import Profile from './pages/Profile';
import Footer from './components/Footer';

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="min-h-screen bg-gray-50 flex flex-col justify-between">
          <Navbar />
          <main className="container mx-auto px-4 py-8 flex-1">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/bible" element={<Bible />} />
              <Route path="/prayers" element={<Prayers />} />
              <Route path="/synaxarium" element={<Synaxarium />} />
              <Route path="/quizzes" element={<Quizzes />} />
              <Route path="/maps" element={<Maps />} />
              <Route path="/study-methods" element={<StudyMethods />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/profile" element={<Profile />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App; 